const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx--iHDVECfmyCX1Gf43jtmDJWg0VHDsFPF_11UIAgUha0MWV5zTnKJvnRkHCxgcuMR/exec';

function normalizeField(value) {
  return (value ?? '').toString().trim();
}

async function readRequestBody(req) {
  if (req.body) {
    if (typeof req.body === 'string') {
      try {
        return JSON.parse(req.body);
      } catch {
        return Object.fromEntries(new URLSearchParams(req.body));
      }
    }

    if (typeof req.body === 'object') {
      return req.body;
    }
  }

  let rawBody = '';
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

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const body = await readRequestBody(req);
    const lead = {
      nomeCompleto: normalizeField(body.nomeCompleto),
      email: normalizeField(body.email),
      telefone: normalizeField(body.telefone),
      cidade: normalizeField(body.cidade),
      origem: normalizeField(body.origem) || 'LP Pulse'
    };

    if (!lead.nomeCompleto || !lead.email || !lead.telefone || !lead.cidade) {
      res.status(400).json({ ok: false, error: 'Missing required lead fields', lead });
      return;
    }

    const upstreamPayload = new URLSearchParams();
    upstreamPayload.set('nomeCompleto', lead.nomeCompleto);
    upstreamPayload.set('email', lead.email);
    upstreamPayload.set('telefone', lead.telefone);
    upstreamPayload.set('cidade', lead.cidade);
    upstreamPayload.set('origem', lead.origem);

    const upstreamResponse = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: upstreamPayload.toString(),
      redirect: 'follow'
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
        error: 'Apps Script rejected submission',
        upstreamStatus: upstreamResponse.status,
        upstream: upstreamJson
      });
      return;
    }

    res.status(200).json({
      ok: true,
      lead,
      upstream: upstreamJson
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
