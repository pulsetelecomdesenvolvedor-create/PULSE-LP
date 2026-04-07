const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx--iHDVECfmyCX1Gf43jtmDJWg0VHDsFPF_11UIAgUha0MWV5zTnKJvnRkHCxgcuMR/exec";

function normalizeField(value) {
  return (value ?? "").toString().trim();
}

async function readRequestBody(req) {
  if (req.body) {
    if (typeof req.body === "string") {
      try {
        return JSON.parse(req.body);
      } catch {
        return Object.fromEntries(new URLSearchParams(req.body));
      }
    }

    if (typeof req.body === "object") {
      return req.body;
    }
  }

  let rawBody = "";
  for await (const chunk of req) {
    rawBody += chunk;
  }

  if (!rawBody) {
    return {};
  }

  try {
    return JSON.parse(rawBody);
  } catch {
    return Object.fromEntries(new URLSearchParams(rawBody));
  }
}

// Endpoint isolado da versão teste para aceitar email opcional sem tocar na produção.
function buildFallbackEmail(phone, city) {
  const digits = normalizeField(phone).replace(/\D/g, "") || Date.now().toString();
  const citySlug = normalizeField(city)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "cidade";

  return `lead-${citySlug}-${digits}@pulsetelecom.local`;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  try {
    const body = await readRequestBody(req);
    const nomeCompleto = normalizeField(body.nomeCompleto);
    const telefone = normalizeField(body.telefone);
    const cidade = normalizeField(body.cidade);
    const emailInformado = normalizeField(body.email);
    const email = emailInformado || buildFallbackEmail(telefone, cidade);
    const origem = normalizeField(body.origem) || "LP Pulse Teste";

    if (!nomeCompleto || !telefone || !cidade) {
      res.status(400).json({
        ok: false,
        error: "Missing required lead fields",
        lead: { nomeCompleto, telefone, cidade, origem }
      });
      return;
    }

    const upstreamPayload = new URLSearchParams();
    upstreamPayload.set("nomeCompleto", nomeCompleto);
    upstreamPayload.set("email", email);
    upstreamPayload.set("telefone", telefone);
    upstreamPayload.set("cidade", cidade);
    upstreamPayload.set("origem", origem);

    const upstreamResponse = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: upstreamPayload.toString(),
      redirect: "follow"
    });

    const upstreamText = await upstreamResponse.text();
    let upstreamJson = null;

    try {
      upstreamJson = JSON.parse(upstreamText);
    } catch {
      upstreamJson = { ok: false, raw: upstreamText };
    }

    if (!upstreamResponse.ok || upstreamJson.ok !== true) {
      res.status(502).json({
        ok: false,
        error: "Apps Script rejected submission",
        upstreamStatus: upstreamResponse.status,
        upstream: upstreamJson
      });
      return;
    }

    res.status(200).json({
      ok: true,
      lead: {
        nomeCompleto,
        telefone,
        cidade,
        email,
        emailInformado: Boolean(emailInformado),
        origem
      },
      upstream: upstreamJson
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
}
