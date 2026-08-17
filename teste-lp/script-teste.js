// Configuração central para personalização por cidade na versão teste.
const CITY_DATA = {
  default: {
    eyebrow: "Internet fibra da Pulse Telecom na sua cidade",
    title: "Escolha sua cidade e veja a melhor oferta disponível para o seu endereço.",
    subtitle:
      "Instalação grátis, suporte local e planos de 700 Mega, 800 Mega, 1 Giga e 1 Giga com 1 Mesh. O Chip Pulse pode ser adicionado a partir de R$ 29,90.",
    note: "Selecione sua cidade para personalizar a oferta e acelerar o atendimento comercial.",
    offerLabel: "Planos atualizados",
    offerPrice: "A partir de R$ 89,90",
    offerDescription:
      "A Pulse confirma cobertura e disponibilidade dos planos conforme a cidade escolhida.",
    plansIntro:
      "A grade abaixo organiza os planos atualizados por perfil de uso. Disponibilidade pode variar por cidade."
  },
  "Cachoeira Paulista": {
    eyebrow: "Oferta local para Cachoeira Paulista",
    title: "Fibra da Pulse em Cachoeira Paulista com novos planos e instalação grátis.",
    subtitle:
      "Planos atualizados para 700 Mega, 800 Mega, 1 Giga e 1 Giga com 1 Mesh. Consulte cobertura e siga direto para o atendimento.",
    note: "Consulte cobertura e condição final para o seu endereço.",
    offerLabel: "Planos atualizados",
    offerPrice: "Internet a partir de R$ 89,90",
    offerDescription:
      "Planos de internet atualizados para Cachoeira Paulista, com Via Livros incluso."
  },
  Vassouras: {
    eyebrow: "Oferta local para Vassouras",
    title: "Pulse Telecom em Vassouras com fibra, suporte regional e novos planos.",
    subtitle:
      "Use o WhatsApp para validar cobertura e receber a opção mais adequada entre os planos atualizados.",
    note: "Consulte cobertura e condição final para o seu endereço.",
    offerLabel: "Planos atualizados",
    offerPrice: "Internet a partir de R$ 89,90",
    offerDescription:
      "Planos de internet atualizados para Vassouras, com Via Livros incluso."
  },
  Valença: {
    eyebrow: "Oferta local para Valença",
    title: "Pulse Telecom em Valença com fibra, suporte regional e novos planos.",
    subtitle:
      "Use o WhatsApp para validar cobertura e receber a opção mais adequada entre os planos atualizados.",
    note: "Consulte cobertura e condição final para o seu endereço.",
    offerLabel: "Planos atualizados",
    offerPrice: "Internet a partir de R$ 89,90",
    offerDescription:
      "Planos de internet atualizados para Valença, com Via Livros incluso."
  },
  "Barão de Juparanã": {
    eyebrow: "Atendimento Pulse em Barão de Juparanã",
    title: "Consulte cobertura e a melhor oferta da Pulse para Barão de Juparanã.",
    subtitle:
      "A nova versão destaca a consulta comercial antes do formulário longo para acelerar o contato com a equipe.",
    note: "Ofertas e disponibilidade podem variar por praça. O atendimento comercial confirma a condição vigente.",
    offerLabel: "Condição por cidade",
    offerPrice: "Oferta sob consulta",
    offerDescription: "Selecione o plano desejado e fale com o comercial para validar disponibilidade no seu endereço."
  },
  Resende: {
    eyebrow: "Atendimento Pulse em Resende",
    title: "Internet fibra com atendimento local e novos planos em Resende.",
    subtitle:
      "Selecione sua cidade, confirme cobertura por WhatsApp e avance com os dados mínimos para o atendimento.",
    note: "Consulte cobertura e condição final para o seu endereço.",
    offerLabel: "Planos atualizados",
    offerPrice: "Internet a partir de R$ 89,90",
    offerDescription: "Planos de internet atualizados para Resende, com Via Livros incluso."
  },
  Bananal: {
    eyebrow: "Atendimento Pulse em Bananal",
    title: "Pulse Telecom em Bananal com fibra, instalação grátis e suporte local.",
    subtitle:
      "A proposta desta versão teste é reduzir ruído, deixar a cidade explícita e facilitar o próximo passo comercial.",
    note: "Ofertas e disponibilidade podem variar por praça. O atendimento comercial confirma a condição vigente.",
    offerLabel: "Condição por cidade",
    offerPrice: "Oferta sob consulta",
    offerDescription: "Consulte a disponibilidade do plano ideal para o seu endereço em Bananal."
  },
  "São José do Barreiro": {
    eyebrow: "Atendimento Pulse em São José do Barreiro",
    title: "Consulte cobertura da Pulse em São José do Barreiro com um fluxo mais direto.",
    subtitle:
      "A cidade no topo orienta headline, formulário e WhatsApp para deixar a intenção do lead mais clara para o comercial.",
    note: "Ofertas e disponibilidade podem variar por praça. O atendimento comercial confirma a condição vigente.",
    offerLabel: "Condição por cidade",
    offerPrice: "Oferta sob consulta",
    offerDescription: "Selecione o plano desejado e valide cobertura pelo WhatsApp comercial."
  },
  Arapeí: {
    eyebrow: "Atendimento Pulse em Arapeí",
    title: "Internet fibra da Pulse em Arapeí com contato mais rápido e menos fricção.",
    subtitle:
      "Nesta versão teste, a prioridade é fazer o usuário entender a oferta e agir com clareza nos primeiros segundos.",
    note: "Ofertas e disponibilidade podem variar por praça. O atendimento comercial confirma a condição vigente.",
    offerLabel: "Condição por cidade",
    offerPrice: "Oferta sob consulta",
    offerDescription: "Cobertura e condição comercial são confirmadas com a equipe local da Pulse."
  },
  "Visconde de Mauá / Maromba / Maringá": {
    eyebrow: "Atendimento Pulse em Visconde de Mauá, Maromba e Maringá",
    title: "Consulte cobertura e novos planos da Pulse para Visconde de Mauá, Maromba e Maringá.",
    subtitle:
      "A nova estrutura encurta o caminho entre interesse, cidade e contato comercial sem depender de uma navegação longa.",
    note: "Consulte cobertura e condição final para o seu endereço.",
    offerLabel: "Planos atualizados",
    offerPrice: "Internet a partir de R$ 89,90",
    offerDescription: "Planos de internet atualizados para a região, com Via Livros incluso."
  }
};

const AVAILABLE_CITIES = [
  "Bananal - SP",
  "Arape\u00ed - SP",
  "S\u00e3o Jos\u00e9 do Barreiro - SP",
  "Cachoeira Paulista - SP",
  "Vassouras - RJ",
  "Valen\u00e7a - RJ",
  "Resende - RJ",
  "Visconde de Mau\u00e1 - RJ",
  "Maring\u00e1 - RJ",
  "Maromba - RJ"
];
const LEAD_CITY_CANONICAL_MAP = {
  "Bananal - SP": "Bananal",
  "Arape\u00ed - SP": "Arape\u00ed",
  "S\u00e3o Jos\u00e9 do Barreiro - SP": "S\u00e3o Jos\u00e9 do Barreiro",
  "Cachoeira Paulista - SP": "Cachoeira Paulista",
  "Vassouras - RJ": "Vassouras",
  "Valen\u00e7a - RJ": "Valen\u00e7a",
  "Resende - RJ": "Resende",
  "Visconde de Mau\u00e1 - RJ": "Visconde de Mau\u00e1 / Maromba / Maring\u00e1",
  "Maring\u00e1 - RJ": "Visconde de Mau\u00e1 / Maromba / Maring\u00e1",
  "Maromba - RJ": "Visconde de Mau\u00e1 / Maromba / Maring\u00e1"
};
const STANDARD_PLAN_PRICING = {
  "700 Mega": {
    price: "89,90"
  },
  "800 Mega": {
    price: "99,90"
  },
  "1 Giga": {
    price: "129,90"
  },
  "1 Giga + 1 Mesh": {
    price: "139,90"
  }
};
const CITY_PLAN_PRICING = {
  "Bananal - SP": STANDARD_PLAN_PRICING,
  "Arape\u00ed - SP": STANDARD_PLAN_PRICING,
  "S\u00e3o Jos\u00e9 do Barreiro - SP": STANDARD_PLAN_PRICING,
  "Cachoeira Paulista - SP": STANDARD_PLAN_PRICING,
  "Vassouras - RJ": STANDARD_PLAN_PRICING,
  "Valen\u00e7a - RJ": STANDARD_PLAN_PRICING,
  "Resende - RJ": STANDARD_PLAN_PRICING,
  "Visconde de Mau\u00e1 - RJ": STANDARD_PLAN_PRICING,
  "Maring\u00e1 - RJ": STANDARD_PLAN_PRICING,
  "Maromba - RJ": STANDARD_PLAN_PRICING
};
const DEFAULT_WHATSAPP_NUMBER = "551231165043";
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx--iHDVECfmyCX1Gf43jtmDJWg0VHDsFPF_11UIAgUha0MWV5zTnKJvnRkHCxgcuMR/exec";
const CONECTAI_LEAD_PROXY_URL = "https://lp.pulsetelecom.net.br/api/conectai-webhook";
const CITY_WHATSAPP_NUMBERS = {
  "Cachoeira Paulista - SP": "5512988930891",
  "Cachoeira Paulista": "5512988930891",
  "Vassouras - RJ": "5524992029033",
  Vassouras: "5524992029033",
  "Valen\u00e7a - RJ": "5524992029033",
  "Valen\u00e7a": "5524992029033",
  "Bar\u00e3o de Juparan\u00e3 - RJ": "5524992029033",
  "Bar\u00e3o de Juparan\u00e3": "5524992029033",
  "Resende - RJ": "5524999137249",
  Resende: "5524999137249",
  "Bananal - SP": "5512981076667",
  Bananal: "5512981076667",
  "S\u00e3o Jos\u00e9 do Barreiro - SP": "5512982195577",
  "S\u00e3o Jos\u00e9 do Barreiro": "5512982195577",
  "Arape\u00ed - SP": "5512920008253",
  "Arape\u00ed": "5512920008253",
  "Visconde de Mau\u00e1 - RJ": "5524981152704",
  "Visconde de Mau\u00e1": "5524981152704",
  "Maring\u00e1 - RJ": "5524981152704",
  "Maring\u00e1": "5524981152704",
  "Maromba - RJ": "5524981152704",
  Maromba: "5524981152704"
};
const CITY_GATE_ANIMATION_MS = 280;
const CONSULT_WIDGET_DELAY_MS = 15000;

const PLAN_BUILDER_ADDONS = {
  fixed: {
    label: "Telefone Fixo Ilimitado",
    display: "Telefone Fixo"
  },
  mobile: {
    label: "Chip Pulse",
    display: "Chip Pulse"
  },
  pulsewatch: {
    label: "TV",
    display: "TV Pulse Watch"
  }
};
const MOBILE_PLAN_OPTIONS = [
  {
    name: "Chip Pulse",
    price: "29,90",
    priceLabel: "R$ 29,90",
    meta: "Planos móveis disponíveis a partir de R$ 29,90.",
    apps: "O atendente apresenta as opções e tira suas dúvidas no atendimento.",
    badge: "A partir de"
  }
];
const state = {
  city: "",
  selectedPlan: "",
  selectedAddons: {
    fixed: false,
    mobile: false,
    pulsewatch: false
  },
  selectedMobilePlan: "",
  selectedMobilePrice: ""
};
const TOUR_STORAGE_KEY = "pulse_lp_tour_seen_v6";
const TOUR_STEPS = [
  {
    selector: ".plans-section",
    title: "Escolha seu plano",
    description: "Compare os planos de internet e clique no que fizer mais sentido para você."
  },
  {
    selector: "#etapa-combo",
    title: "Complete com comunicação e entretenimento",
    description: "Depois de escolher a internet, adicione Telefone Fixo, Chip Pulse ou TV Pulse Watch para montar sua solicitação."
  },
  {
    selector: "#planBuilderWhatsappCta",
    title: "Finalize no WhatsApp",
    description: "Quando terminar, clique aqui para enviar sua solicitação pronta para o atendimento."
  }
];
const tourState = {
  active: false,
  stepIndex: 0,
  delayElapsed: false,
  hasStarted: false
};
let cityFeedbackTimeout = null;
let cityGateTimer = null;
let cityGateHideTimer = null;
let consultWidgetTimer = null;
let tourPositionTimer = null;
let tourPositionFrame = null;
let lastInlineTourActionAt = 0;

function getWhatsappNumber(city = state.city) {
  const normalizedCity = (city ?? "").replace(/\s*-\s*[A-Z]{2}$/, "");
  return CITY_WHATSAPP_NUMBERS[city] ?? CITY_WHATSAPP_NUMBERS[normalizedCity] ?? DEFAULT_WHATSAPP_NUMBER;
}

function buildFallbackEmail(phone, city) {
  const digits = (phone ?? "").replace(/\D/g, "") || Date.now().toString();
  const citySlug = (city ?? "")
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "cidade";

  return `lead-${citySlug}-${digits}@pulsetelecom.local`;
}

function normalizeLeadCity(city) {
  const normalizedCity = (city ?? "").toString().trim();

  if (!normalizedCity) {
    return "";
  }

  return LEAD_CITY_CANONICAL_MAP[normalizedCity] ?? normalizedCity.replace(/\s*-\s*[A-Z]{2}$/, "");
}

function isConectAiRuntime() {
  return /conect/i.test(window.location.hostname);
}

function submitLeadViaHiddenForm(actionUrl, payload) {
  return new Promise((resolve, reject) => {
    try {
      const iframeName = `pulseLeadSink${Date.now()}`;
      const iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.hidden = true;

      const form = document.createElement("form");
      form.method = "POST";
      form.action = actionUrl;
      form.target = iframeName;
      form.hidden = true;

      Object.entries(payload).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      let settled = false;
      const cleanup = () => {
        iframe.remove();
        form.remove();
      };

      const finalize = () => {
        if (settled) {
          return;
        }

        settled = true;
        cleanup();
        resolve();
      };

      iframe.addEventListener(
        "load",
        () => {
          window.setTimeout(finalize, 120);
        },
        { once: true }
      );

      document.body.appendChild(iframe);
      document.body.appendChild(form);
      form.submit();

      window.setTimeout(finalize, 1500);
    } catch (error) {
      reject(error);
    }
  });
}

async function submitLeadDirectToAppsScript(payload) {
  const directPayload = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    directPayload.set(key, value);
  });

  if (navigator.sendBeacon) {
    const beaconBody = new Blob([directPayload.toString()], {
      type: "application/x-www-form-urlencoded;charset=UTF-8"
    });

    if (navigator.sendBeacon(APPS_SCRIPT_URL, beaconBody)) {
      return;
    }
  }

  await submitLeadViaHiddenForm(APPS_SCRIPT_URL, payload);
}

async function submitLeadViaConectAiProxy(payload) {
  return new Promise((resolve, reject) => {
    try {
      const beaconUrl = new URL(CONECTAI_LEAD_PROXY_URL);

      Object.entries(payload).forEach(([key, value]) => {
        beaconUrl.searchParams.set(key, value);
      });

      beaconUrl.searchParams.set("ts", Date.now().toString());

      const img = new Image();
      let settled = false;

      const finalize = () => {
        if (settled) {
          return;
        }

        settled = true;
        resolve();
      };

      img.onload = finalize;
      img.onerror = finalize;
      img.src = beaconUrl.toString();

      window.setTimeout(finalize, 1500);
    } catch (error) {
      reject(error);
    }
  });
}

function buildWhatsappLink(message, city = state.city) {
  return `https://wa.me/${getWhatsappNumber(city)}?text=${encodeURIComponent(message)}`;
}

function getCityContent(city) {
  const normalizedCity = (city ?? "").replace(/\s*-\s*[A-Z]{2}$/, "");
  return CITY_DATA[city] ?? CITY_DATA[normalizedCity] ?? CITY_DATA.default;
}

function getPlanPricing(city) {
  return CITY_PLAN_PRICING[city] ?? STANDARD_PLAN_PRICING;
}

function applyPlanPricing(city) {
  const pricing = getPlanPricing(city);

  document.querySelectorAll("[data-plan-card]").forEach((card) => {
    const plan = card.getAttribute("data-plan-card");
    const priceValue = card.querySelector(".plan-price-value");
    const planPricing = pricing[plan] ?? STANDARD_PLAN_PRICING[plan];

    if (priceValue && planPricing?.price) {
      priceValue.textContent = planPricing.price;
    }
  });
}

function buildCoverageMessage(city) {
  if (city) {
    return `Olá! Quero consultar cobertura da Pulse Telecom para ${city}.`;
  }

  return "Olá! Quero consultar cobertura da Pulse Telecom.";
}

function buildPlanMessage(city, plan) {
  const cityText = city ? ` para ${city}` : "";
  return `Olá! Quero verificar disponibilidade do plano ${plan}${cityText}.`;
}

function formatNaturalList(values) {
  if (values.length === 0) {
    return "";
  }

  if (values.length === 1) {
    return values[0];
  }

  if (values.length === 2) {
    return `${values[0]} e ${values[1]}`;
  }

  return `${values.slice(0, -1).join(", ")} e ${values[values.length - 1]}`;
}

function getSelectedAddonKeys() {
  return Object.entries(state.selectedAddons)
    .filter(([, isSelected]) => isSelected === true)
    .map(([key]) => key);
}

function getAddonDisplay(key) {
  if (key === "mobile") {
    return state.selectedAddons.mobile ? "Chip Pulse a partir de R$ 29,90" : PLAN_BUILDER_ADDONS.mobile.display;
  }

  if (key === "pulsewatch") {
    return PLAN_BUILDER_ADDONS.pulsewatch.display;
  }

  return PLAN_BUILDER_ADDONS[key]?.display ?? key;
}

function getMobilePlanOptionByName(planName) {
  return MOBILE_PLAN_OPTIONS.find((option) => option.name === planName) ?? null;
}

function getDefaultMobilePlanOption() {
  return MOBILE_PLAN_OPTIONS[0];
}

function getCurrentMobilePlanOption() {
  return getMobilePlanOptionByName(state.selectedMobilePlan) ?? getDefaultMobilePlanOption();
}

function buildPlanBuilderMessage() {
  const cityText = state.city ? ` para ${state.city}` : "";
  const selectedAddons = getSelectedAddonKeys()
    .filter((key) => key !== "pulsewatch" || Boolean(state.selectedPlan))
    .map((key) => getAddonDisplay(key));

  if (!state.selectedPlan) {
    if (selectedAddons.length === 0) {
      return `Olá! Quero conhecer os planos da Pulse Telecom${cityText}.`;
    }

    return `Olá! Quero conhecer os planos da Pulse Telecom${cityText}. Também tenho interesse em ${formatNaturalList(selectedAddons)}.`;
  }

  const base = `Olá! Quero contratar o plano ${state.selectedPlan}${cityText}.`;

  if (selectedAddons.length === 0) {
    return `${base} Quero seguir só com internet por enquanto.`;
  }

  return `${base} Também quero incluir ${formatNaturalList(selectedAddons)}.`;
}

function buildInternetOnlyMessage() {
  const cityText = state.city ? ` para ${state.city}` : "";

  if (!state.selectedPlan) {
    return `Olá! Quero conhecer os planos de internet${cityText}. Quero seguir só com internet por enquanto.`;
  }

  return `Olá! Quero contratar o plano ${state.selectedPlan}${cityText}. Quero seguir só com internet por enquanto.`;
}

function selectPlan(planName, sourceCard) {
  state.selectedPlan = planName;

  document.querySelectorAll(".plan-card").forEach((card) => card.classList.remove("plan-card-selected"));
  sourceCard?.classList.add("plan-card-selected");

  updatePlanBuilder();
}

function updatePlanBuilder() {
  const section = document.getElementById("etapa-combo");

  if (!section) {
    return;
  }

  const selectedPlanText = document.getElementById("planBuilderSelectedPlan");
  const summaryTitle = document.getElementById("planBuilderSummaryTitle");
  const summaryCopy = document.getElementById("planBuilderSummaryCopy");
  const whatsappCta = document.getElementById("planBuilderWhatsappCta");
  const internetOnlyCta = document.getElementById("planBuilderInternetOnly");

  if (!state.selectedPlan && state.selectedAddons.pulsewatch) {
    state.selectedAddons.pulsewatch = false;
  }

  if (selectedPlanText) {
    selectedPlanText.textContent = `Você selecionou o plano ${state.selectedPlan}${state.city ? ` para ${state.city}` : ""}. Agora você pode completar com telefonia e TV antes de seguir para o WhatsApp.`;
  }

  const selectedAddonKeys = getSelectedAddonKeys();
  const selectedAddonDisplays = selectedAddonKeys.map((key) => getAddonDisplay(key));

  if (!state.selectedPlan) {
    if (selectedPlanText) {
      selectedPlanText.textContent = "Escolha um plano de internet acima. Depois, você poderá adicionar Telefone Fixo, Chip Pulse e TV Pulse Watch.";
    }

    if (summaryTitle) {
      summaryTitle.textContent =
        selectedAddonDisplays.length === 0
          ? "Monte sua solicitação"
          : `Interesse em ${selectedAddonDisplays.join(" + ")}`;
    }

    if (summaryCopy) {
      summaryCopy.textContent =
        selectedAddonDisplays.length === 0
          ? `Escolha um plano de internet acima para liberar a TV Pulse Watch ou fale com a Pulse para receber a melhor opção${state.city ? ` para ${state.city}` : ""}.`
          : `Sua mensagem para o WhatsApp vai incluir ${formatNaturalList(selectedAddonDisplays)}${state.city ? ` para ${state.city}` : ""}.`;
    }
  } else {
    if (summaryTitle) {
      summaryTitle.textContent =
        selectedAddonDisplays.length === 0
          ? `Plano ${state.selectedPlan} sem adicionais`
          : `Plano ${state.selectedPlan} + ${selectedAddonDisplays.join(" + ")}`;
    }

    if (summaryCopy) {
      summaryCopy.textContent =
        selectedAddonDisplays.length === 0
          ? "Se preferir, você pode seguir só com internet ou adicionar Telefone Fixo, Chip Pulse e TV Pulse Watch antes do atendimento."
          : `Sua mensagem para o WhatsApp vai incluir ${formatNaturalList(selectedAddonDisplays)}${state.city ? ` para ${state.city}` : ""}.`;
    }
  }

  if (whatsappCta) {
    whatsappCta.href = buildWhatsappLink(buildPlanBuilderMessage());
  }

  if (internetOnlyCta) {
    internetOnlyCta.href = buildWhatsappLink(buildInternetOnlyMessage());
  }

  document.querySelectorAll(".plan-builder-option").forEach((option) => {
    const addonKey = option.getAttribute("data-addon");
    const isSelected = addonKey ? state.selectedAddons[addonKey] === true : false;
    option.classList.toggle("is-selected", isSelected);
    option.setAttribute("aria-pressed", isSelected ? "true" : "false");
  });

  const featuredMobilePlan = getCurrentMobilePlanOption();
  const mobilePlanFeatured = document.getElementById("mobilePlanFeatured");
  const mobilePlanBadge = document.getElementById("mobilePlanBadge");
  const mobilePlanName = document.getElementById("mobilePlanName");
  const mobilePlanPrice = document.getElementById("mobilePlanPrice");
  const mobilePlanMeta = document.getElementById("mobilePlanMeta");
  const mobilePlanApps = document.getElementById("mobilePlanApps");

  if (mobilePlanName) {
    mobilePlanName.textContent = featuredMobilePlan.name;
  }

  if (mobilePlanPrice) {
    mobilePlanPrice.textContent = featuredMobilePlan.priceLabel ?? `R$ ${featuredMobilePlan.price}`;
  }

  if (mobilePlanMeta) {
    mobilePlanMeta.textContent = featuredMobilePlan.meta;
  }

  if (mobilePlanApps) {
    mobilePlanApps.textContent = featuredMobilePlan.apps;
  }

  if (mobilePlanBadge) {
    mobilePlanBadge.textContent =
      state.selectedAddons.mobile && state.selectedMobilePlan === featuredMobilePlan.name
        ? "Selecionado"
        : featuredMobilePlan.badge ?? "Plano móvel";
  }

  if (mobilePlanFeatured) {
    const isFeaturedSelected = state.selectedAddons.mobile && state.selectedMobilePlan === featuredMobilePlan.name;
    mobilePlanFeatured.classList.toggle("is-selected", isFeaturedSelected);
    mobilePlanFeatured.setAttribute("aria-pressed", isFeaturedSelected ? "true" : "false");
  }

  const pulsewatchFeatured = document.getElementById("pulsewatchFeatured");
  const pulsewatchFeaturedBadge = document.getElementById("pulsewatchFeaturedBadge");
  const pulsewatchCard = document.querySelector('.plan-builder-option[data-addon="pulsewatch"]');
  const pulsewatchRequirement = document.getElementById("pulsewatchRequirement");
  const pulsewatchRequirementCta = document.getElementById("pulsewatchRequirementCta");
  const hasInternetPlan = Boolean(state.selectedPlan);

  if (pulsewatchCard) {
    pulsewatchCard.classList.toggle("is-locked", !hasInternetPlan);
    pulsewatchCard.setAttribute("aria-disabled", hasInternetPlan ? "false" : "true");
  }

  if (pulsewatchRequirement) {
    pulsewatchRequirement.textContent = hasInternetPlan
      ? `Disponível como adicional do plano ${state.selectedPlan}.`
      : "Disponível exclusivamente junto com um plano de internet Pulse.";
  }

  if (pulsewatchRequirementCta) {
    pulsewatchRequirementCta.hidden = hasInternetPlan;
  }

  if (pulsewatchFeatured) {
    const isSelected = state.selectedAddons.pulsewatch;
    pulsewatchFeatured.disabled = !hasInternetPlan;
    pulsewatchFeatured.classList.toggle("is-selected", isSelected);
    pulsewatchFeatured.setAttribute("aria-pressed", isSelected ? "true" : "false");
  }

  if (pulsewatchFeaturedBadge) {
    pulsewatchFeaturedBadge.textContent = state.selectedAddons.pulsewatch ? "Selecionado" : "Única opção";
  }
}

function selectMobilePlan(planName, planPrice) {
  const mobilePlan = getMobilePlanOptionByName(planName);

  if (!mobilePlan) {
    return;
  }

  if (state.selectedMobilePlan === planName && state.selectedAddons.mobile) {
    state.selectedAddons.mobile = false;
    state.selectedMobilePlan = "";
    state.selectedMobilePrice = "";
  } else {
    state.selectedAddons.mobile = true;
    state.selectedMobilePlan = mobilePlan.name;
    state.selectedMobilePrice = planPrice || mobilePlan.price;
  }

  updatePlanBuilder();
  advanceTourTo(2);
}

function togglePulsewatchPlan() {
  if (!state.selectedPlan) {
    return;
  }

  state.selectedAddons.pulsewatch = !state.selectedAddons.pulsewatch;
  updatePlanBuilder();
  advanceTourTo(2);
}

function getTourElements() {
  return {
    overlay: document.getElementById("tourOverlay"),
    popover: document.getElementById("tourPopover"),
    stepLabel: document.getElementById("tourStepLabel"),
    title: document.getElementById("tourTitle"),
    description: document.getElementById("tourDescription"),
    next: document.getElementById("tourNext"),
    skip: document.getElementById("tourSkip")
  };
}

function getMobileTourElements() {
  return {
    sheet: document.getElementById("tourMobileSheet"),
    stepLabel: document.getElementById("tourMobileStepLabel"),
    title: document.getElementById("tourMobileTitle"),
    description: document.getElementById("tourMobileDescription"),
    next: document.getElementById("tourMobileNext"),
    skip: document.getElementById("tourMobileSkip")
  };
}

function getConsultWidgetElements() {
  return {
    widget: document.getElementById("consultWidget"),
    panel: document.getElementById("consultWidgetPanel"),
    toggle: document.getElementById("consultWidgetToggle"),
    close: document.getElementById("consultWidgetClose"),
    badge: document.getElementById("consultWidgetBadge")
  };
}

function hideConectAiNativeListing() {
  if (!isConectAiRuntime()) {
    return;
  }

  const titles = [...document.querySelectorAll("h1, h2, h3, h4, p, span, div")]
    .filter((element) => {
      const text = element.textContent?.trim() ?? "";
      return /^Escolha seu Plano$/i.test(text) || /^Escolha seu plano$/i.test(text);
    })
    .filter((element) => !element.closest(".tour-popover, .plans-section, .plan-builder-section"));

  titles.forEach((title) => {
    const block = title.closest("section, article, div");
    if (!block || block.matches("body, main, .site-footer")) {
      return;
    }

    block.style.display = "none";
  });
}

function openConsultWidgetPanel() {
  const { panel, toggle, badge } = getConsultWidgetElements();

  if (!panel || !toggle) {
    return;
  }

  panel.hidden = false;
  toggle.setAttribute("aria-expanded", "true");

  if (badge) {
    badge.hidden = true;
  }
}

function closeConsultWidgetPanel() {
  const { panel, toggle } = getConsultWidgetElements();

  if (!panel || !toggle) {
    return;
  }

  panel.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
}

function toggleConsultWidgetPanel() {
  const { panel } = getConsultWidgetElements();

  if (!panel) {
    return;
  }

  if (panel.hidden) {
    openConsultWidgetPanel();
    return;
  }

  closeConsultWidgetPanel();
}

function scheduleConsultWidget() {
  if (consultWidgetTimer !== null) {
    window.clearTimeout(consultWidgetTimer);
  }

  consultWidgetTimer = window.setTimeout(() => {
    const { widget } = getConsultWidgetElements();

    if (!widget) {
      return;
    }

    widget.hidden = false;
  }, CONSULT_WIDGET_DELAY_MS);
}

function clearTourHighlight() {
  document.querySelectorAll(".tour-highlight").forEach((element) => element.classList.remove("tour-highlight"));
}

function isMobileViewport() {
  return window.innerWidth <= 820;
}

function bindTourTap(element, handler) {
  if (!element || typeof handler !== "function") {
    return;
  }

  let lastTouchActivationAt = 0;
  const activateTouch = (event) => {
    const now = Date.now();

    if (now - lastTouchActivationAt < 500) {
      event.preventDefault();
      return;
    }

    lastTouchActivationAt = now;
    event.preventDefault();
    handler(event);
  };

  element.addEventListener("pointerup", (event) => {
    if (event.pointerType !== "touch") {
      return;
    }

    activateTouch(event);
  });

  element.addEventListener("touchend", (event) => {
    activateTouch(event);
  }, {
    passive: false
  });

  element.addEventListener("click", (event) => {
    if (Date.now() - lastTouchActivationAt < 700) {
      event.preventDefault();
      return;
    }

    handler(event);
  });
}

function clearScheduledTourPosition() {
  if (tourPositionTimer !== null) {
    window.clearTimeout(tourPositionTimer);
    tourPositionTimer = null;
  }

  if (tourPositionFrame !== null) {
    window.cancelAnimationFrame(tourPositionFrame);
    tourPositionFrame = null;
  }
}

function scheduleTourPopoverPosition(delay = 0) {
  const runPositioning = () => {
    tourPositionTimer = null;

    if (tourPositionFrame !== null) {
      window.cancelAnimationFrame(tourPositionFrame);
    }

    tourPositionFrame = window.requestAnimationFrame(() => {
      tourPositionFrame = null;

      if (!tourState.active) {
        return;
      }

      const step = TOUR_STEPS[tourState.stepIndex];
      const target = step ? document.querySelector(step.selector) : null;

      if (!target) {
        return;
      }

      positionTourPopover(target);
    });
  };

  clearScheduledTourPosition();

  if (delay <= 0) {
    runPositioning();
    return;
  }

  tourPositionTimer = window.setTimeout(runPositioning, delay);
}

function scrollTourTarget(target, block = "center") {
  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block
  });
}

function ensureTourStepReady(stepIndex) {
  if (stepIndex === 0) {
    return;
  }

  if (!state.selectedPlan) {
    const featuredPlanLink =
      document.querySelector(".plan-card-featured .js-plan-whatsapp") ?? document.querySelector(".js-plan-whatsapp");

    if (featuredPlanLink) {
      selectPlan(featuredPlanLink.getAttribute("data-plan") ?? "Plano", featuredPlanLink.closest(".plan-card"));
    }
  }
}

function positionTourPopover(target) {
  const { popover } = getTourElements();

  if (!popover || !target) {
    return;
  }

  if (window.innerWidth <= 820) {
    const viewportPadding = 12;
    const rect = target.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();
    const spaceAbove = rect.top - viewportPadding;
    const spaceBelow = window.innerHeight - rect.bottom - viewportPadding;
    const preferredTop =
      spaceBelow >= popoverRect.height + viewportPadding
        ? rect.bottom + viewportPadding
        : rect.top - popoverRect.height - viewportPadding;
    const maxTop = Math.max(viewportPadding, window.innerHeight - popoverRect.height - viewportPadding);
    const top = Math.min(Math.max(viewportPadding, preferredTop), maxTop);

    popover.style.left = "12px";
    popover.style.right = "12px";
    popover.style.bottom = "auto";
    popover.style.top = `${Math.round(top)}px`;
    return;
  }

  const rect = target.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  const left = Math.min(
    Math.max(16, rect.left),
    window.innerWidth - popoverRect.width - 16
  );
  const canFitBelow = rect.bottom + popoverRect.height + 20 <= window.innerHeight;
  const top = canFitBelow
    ? rect.bottom + 14
    : Math.max(16, rect.top - popoverRect.height - 14);

  popover.style.left = `${left}px`;
  popover.style.right = "";
  popover.style.bottom = "auto";
  popover.style.top = `${top}px`;
}

function renderTourStep() {
  const { overlay, popover, stepLabel, title, description, next } = getTourElements();
  const step = TOUR_STEPS[tourState.stepIndex];

  if (!overlay || !popover || !stepLabel || !title || !description || !next || !step) {
    return;
  }

  ensureTourStepReady(tourState.stepIndex);

  const target = document.querySelector(step.selector);
  if (!target) {
    closeTour(true);
    return;
  }

  tourState.active = true;
  overlay.hidden = false;
  popover.hidden = false;
  stepLabel.textContent = `Passo ${tourState.stepIndex + 1} de ${TOUR_STEPS.length}`;
  title.textContent = step.title;
  description.textContent = step.description;
  next.textContent = tourState.stepIndex === TOUR_STEPS.length - 1 ? "Concluir" : "Próximo";

  clearTourHighlight();
  target.classList.add("tour-highlight");

  positionTourPopover(target);

  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "center"
  });

  scheduleTourPopoverPosition(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 260);
}

function closeTour(markSeen) {
  const { overlay, popover } = getTourElements();

  tourState.active = false;
  clearScheduledTourPosition();
  clearTourHighlight();

  if (overlay) {
    overlay.hidden = true;
  }

  if (popover) {
    popover.hidden = true;
    popover.style.left = "";
    popover.style.right = "";
    popover.style.top = "";
    popover.style.bottom = "";
  }

  void markSeen;
}

function renderDesktopTourStep(step) {
  const { overlay, popover, stepLabel, title, description, next } = getTourElements();
  const { sheet } = getMobileTourElements();

  if (!overlay || !popover || !stepLabel || !title || !description || !next || !step) {
    return;
  }

  ensureTourStepReady(tourState.stepIndex);

  const target = document.querySelector(step.selector);
  if (!target) {
    closeTour(true);
    return;
  }

  tourState.active = true;
  overlay.hidden = false;
  popover.hidden = false;
  if (sheet) {
    sheet.hidden = true;
  }
  document.body.classList.remove("tour-mobile-open");
  stepLabel.textContent = `Passo ${tourState.stepIndex + 1} de ${TOUR_STEPS.length}`;
  title.textContent = step.title;
  description.textContent = step.description;
  next.textContent = tourState.stepIndex === TOUR_STEPS.length - 1 ? "Concluir" : "Proximo";

  clearTourHighlight();
  target.classList.add("tour-highlight");

  positionTourPopover(target);
  scrollTourTarget(target);
  scheduleTourPopoverPosition(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 260);
}

function renderMobileTourStep(step) {
  const { overlay, popover } = getTourElements();
  const { sheet, stepLabel, title, description, next } = getMobileTourElements();

  if (!overlay || !sheet || !stepLabel || !title || !description || !next || !step) {
    return;
  }

  ensureTourStepReady(tourState.stepIndex);

  const target = document.querySelector(step.selector);
  if (!target) {
    closeTour(true);
    return;
  }

  tourState.active = true;
  overlay.hidden = false;
  if (popover) {
    popover.hidden = true;
    popover.style.left = "";
    popover.style.right = "";
    popover.style.top = "";
    popover.style.bottom = "";
  }
  sheet.hidden = false;
  document.body.classList.add("tour-mobile-open");
  stepLabel.textContent = `Passo ${tourState.stepIndex + 1} de ${TOUR_STEPS.length}`;
  title.textContent = step.title;
  description.textContent = step.description;
  next.textContent = tourState.stepIndex === TOUR_STEPS.length - 1 ? "Concluir" : "Proximo";

  clearTourHighlight();
  scrollTourTarget(target, tourState.stepIndex === 0 ? "start" : "center");
}

function renderTourStep() {
  const step = TOUR_STEPS[tourState.stepIndex];

  if (!step) {
    return;
  }

  if (isMobileViewport()) {
    renderMobileTourStep(step);
    return;
  }

  renderDesktopTourStep(step);
}

function closeTour(markSeen) {
  const { overlay, popover } = getTourElements();
  const { sheet } = getMobileTourElements();

  tourState.active = false;
  clearScheduledTourPosition();
  clearTourHighlight();
  document.body.classList.remove("tour-mobile-open");

  if (overlay) {
    overlay.hidden = true;
  }

  if (popover) {
    popover.hidden = true;
    popover.style.left = "";
    popover.style.right = "";
    popover.style.top = "";
    popover.style.bottom = "";
  }

  if (sheet) {
    sheet.hidden = true;
  }

  void markSeen;
}

function handleInlineTourAction(event, actionName) {
  const now = Date.now();

  event?.preventDefault?.();
  event?.stopPropagation?.();
  event?.stopImmediatePropagation?.();

  if (now - lastInlineTourActionAt < 450) {
    return false;
  }

  lastInlineTourActionAt = now;

  if (actionName === "dismiss") {
    closeTour(true);
    return false;
  }

  nextTourStep();
  return false;
}

window.__pulseTourInlineAction = handleInlineTourAction;

function nextTourStep() {
  if (tourState.stepIndex >= TOUR_STEPS.length - 1) {
    closeTour(true);
    return;
  }

  tourState.stepIndex += 1;
  renderTourStep();
}

function advanceTourTo(stepIndex) {
  if (!tourState.active) {
    return;
  }

  if (tourState.stepIndex >= stepIndex) {
    return;
  }

  tourState.stepIndex = stepIndex;
  renderTourStep();
}

function requestTourStartIfEligible() {
  if (tourState.active || tourState.hasStarted) {
    return;
  }

  if (!state.city || !tourState.delayElapsed || isCityGateOpen()) {
    return;
  }

  startTour();
}

function startTour() {
  if (tourState.hasStarted) {
    return;
  }

  tourState.hasStarted = true;
  tourState.stepIndex = 0;
  renderTourStep();
}

function getCityGateElements() {
  return {
    gate: document.getElementById("cityGate"),
    gateCard: document.querySelector(".city-gate-card"),
    select: document.getElementById("citySelectorGate"),
    pill: document.getElementById("selectedCityPill"),
    name: document.getElementById("selectedCityName")
  };
}

function populateCitySelector(select) {
  if (!select) {
    return;
  }

  const currentValue = select.value;
  select.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Selecione sua cidade";
  select.appendChild(placeholder);

  AVAILABLE_CITIES.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    select.appendChild(option);
  });

  select.value = AVAILABLE_CITIES.includes(currentValue) ? currentValue : "";
}

function populateCitySelectors() {
  populateCitySelector(document.getElementById("citySelectorTop"));
  populateCitySelector(document.getElementById("citySelectorForm"));
  populateCitySelector(document.getElementById("citySelectorGate"));
}

function simplifyCityGate() {
  const { gateCard } = getCityGateElements();
  const gateTitle = document.getElementById("cityGateTitle");

  document.querySelector(".city-gate-kicker")?.remove();
  document.querySelector(".city-gate-copy")?.remove();
  document.querySelector(".city-gate-note")?.remove();
  document.getElementById("cityGateContinue")?.remove();

  if (gateCard) {
    gateCard.removeAttribute("aria-describedby");
  }

  if (gateTitle) {
    gateTitle.textContent = "Selecione sua cidade";
  }
}

function updateSelectedCityPill(city) {
  const { pill, name } = getCityGateElements();

  if (!pill || !name) {
    return;
  }

  if (!city) {
    pill.hidden = true;
    name.textContent = "";
    return;
  }

  name.textContent = city;
  pill.hidden = false;
}

function openCityGate(prefillValue = state.city) {
  const { gate, select } = getCityGateElements();

  if (!gate || !select) {
    return;
  }

  if (cityGateTimer !== null) {
    window.clearTimeout(cityGateTimer);
    cityGateTimer = null;
  }

  if (cityGateHideTimer !== null) {
    window.clearTimeout(cityGateHideTimer);
    cityGateHideTimer = null;
  }

  gate.hidden = false;
  gate.classList.remove("is-visible");
  document.body.classList.add("city-gate-open");
  select.value = prefillValue || "";

  window.requestAnimationFrame(() => {
    gate.classList.add("is-visible");
    select.focus();
  });
}

function closeCityGate(options = {}) {
  const { gate } = getCityGateElements();

  if (!gate) {
    return;
  }

  if (cityGateHideTimer !== null) {
    window.clearTimeout(cityGateHideTimer);
  }

  gate.classList.remove("is-visible");
  cityGateHideTimer = window.setTimeout(() => {
    gate.hidden = true;
    document.body.classList.remove("city-gate-open");
    cityGateHideTimer = null;

    if (options.startTour === true) {
      startTour();
      return;
    }

    requestTourStartIfEligible();
  }, CITY_GATE_ANIMATION_MS);
}

function isCityGateOpen() {
  const { gate } = getCityGateElements();
  return Boolean(gate && gate.hidden === false);
}

function scheduleTourStartDelay() {
  tourState.delayElapsed = false;

  if (!state.city) {
    return;
  }

  if (tourState.hasStarted) {
    return;
  }

  tourState.delayElapsed = true;
  requestTourStartIfEligible();
}

function confirmCityGateSelection(cityValue) {
  const { select } = getCityGateElements();
  const city = (cityValue ?? select?.value ?? "").trim();

  if (!city) {
    pulseCityFeedback();
    return;
  }

  syncCitySelectors(city, { closeGate: true });
}

function pulseCityFeedback() {
  const { gate, gateCard, pill } = getCityGateElements();
  const cityTarget = gate && gate.hidden === false ? gateCard : pill;
  const targets = [document.querySelector(".plans-section"), cityTarget].filter(Boolean);

  targets.forEach((target) => target.classList.add("pulse-highlight"));
  clearTimeout(cityFeedbackTimeout);
  cityFeedbackTimeout = setTimeout(() => {
    targets.forEach((target) => target.classList.remove("pulse-highlight"));
  }, 850);
}

function applyPhoneMask(input) {
  input.addEventListener("input", () => {
    const digits = input.value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 2) {
      input.value = digits;
      return;
    }

    if (digits.length <= 7) {
      input.value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      return;
    }

    if (digits.length <= 10) {
      input.value = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
      return;
    }

    input.value = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  });
}

// Atualiza card de oferta, CTAs e estado do formulário quando a cidade muda.
function applyCity(city) {
  state.city = city;
  updateSelectedCityPill(city);
  applyPlanPricing(city);

  const coverageLink = buildWhatsappLink(buildCoverageMessage(city), city);
  document.getElementById("headerWhatsappCta").href = coverageLink;
  const heroPrimaryCta = document.getElementById("heroPrimaryCta");
  if (heroPrimaryCta) {
    heroPrimaryCta.href = coverageLink;
  }
  const mobileStickyCta = document.getElementById("mobileStickyCta");
  if (mobileStickyCta) {
    mobileStickyCta.href = coverageLink;
  }
  const footerWhatsappCta = document.getElementById("footerWhatsappCta");
  if (footerWhatsappCta) {
    footerWhatsappCta.href = coverageLink;
  }

  document.querySelectorAll(".js-plan-whatsapp").forEach((link) => {
    const plan = link.getAttribute("data-plan") ?? "plano";
    link.href = buildWhatsappLink(buildPlanMessage(city, plan), city);
  });

  updatePlanBuilder();
  requestTourStartIfEligible();
}

async function submitLead(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const status = document.getElementById("formStatus");
  const submitButton = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);
  const nomeCompleto = (formData.get("nomeCompleto") ?? "").toString().trim();
  const telefone = (formData.get("telefone") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const cidadeSelecionada = (formData.get("cidade") ?? "").toString().trim();
  const cidade = normalizeLeadCity(cidadeSelecionada);
  const phoneDigits = telefone.replace(/\D/g, "");

  if (!nomeCompleto || !cidade || phoneDigits.length < 10) {
    status.textContent = "Preencha nome, telefone válido e cidade para continuar.";
    return;
  }

  status.textContent = "Enviando...";
  submitButton.disabled = true;

  try {
    const leadPayload = {
      nomeCompleto,
      telefone,
      email,
      cidade,
      origem: `LP Pulse Teste${cidade ? ` - ${cidade}` : ""}`
    };

    if (isConectAiRuntime()) {
      await submitLeadViaConectAiProxy({
        nomeCompleto,
        email: email || buildFallbackEmail(telefone, cidade),
        telefone,
        cidade,
        origem: leadPayload.origem
      });
    } else {
      const endpoint = email ? "/api/lead" : "/api/lead-teste";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(leadPayload)
      });

      const payload = await response.json();

      if (!response.ok || payload.ok !== true) {
        throw new Error(payload.error || "Falha ao enviar lead.");
      }
    }

    status.textContent = "Enviado com sucesso. A equipe da Pulse deve retornar em breve.";
    form.reset();
    document.getElementById("citySelectorForm").value = state.city;
  } catch (error) {
    status.textContent = "Não foi possível enviar agora. Tente pelo WhatsApp.";
    console.error(error);
  } finally {
    submitButton.disabled = false;
  }
}

function syncCitySelectors(sourceValue, options = {}) {
  const normalizedCity = (sourceValue ?? "").trim();
  const top = document.getElementById("citySelectorTop");
  const form = document.getElementById("citySelectorForm");
  const { select } = getCityGateElements();

  if (!normalizedCity) {
    if (top && state.city) {
      top.value = state.city;
    }

    if (form && state.city) {
      form.value = state.city;
    }

    if (select && state.city) {
      select.value = state.city;
    }

    openCityGate(state.city);
    pulseCityFeedback();
    return;
  }

  if (top && top.value !== normalizedCity) {
    top.value = normalizedCity;
  }

  if (form && form.value !== normalizedCity) {
    form.value = normalizedCity;
  }

  if (select && select.value !== normalizedCity) {
    select.value = normalizedCity;
  }

  applyCity(normalizedCity);
  scheduleTourStartDelay();

  if (options.closeGate === true) {
    closeCityGate({ startTour: true });
  }

  pulseCityFeedback();
}

function setupPremiumMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  document.body.classList.add("motion-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target;
        element.classList.add("is-visible");
        observer.unobserve(element);

        const cleanupMotionClasses = () => {
          element.classList.remove(
            "scroll-reveal",
            "scroll-reveal-fade",
            "scroll-reveal-rise",
            "scroll-reveal-left",
            "scroll-reveal-right",
            "is-visible"
          );
          element.style.removeProperty("--reveal-delay");
        };

        element.addEventListener(
          "transitionend",
          (event) => {
            if (event.propertyName === "opacity") {
              cleanupMotionClasses();
            }
          },
          { once: true }
        );

        window.setTimeout(cleanupMotionClasses, 1200);
      });
    },
    {
      threshold: window.innerWidth <= 620 ? 0.08 : 0.14,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  const revealGroups = [
    { selector: ".proof-copy", mode: "left" },
    { selector: ".proof-card", mode: "fade", stagger: 70 },
    { selector: ".reviews-heading", mode: "rise" },
    { selector: ".reviews-carousel", mode: "rise", delay: 90 },
    { selector: ".trust-strip-grid > div", mode: "fade", stagger: 55 },
    { selector: ".plan-card", mode: "fade", stagger: 60 },
    { selector: ".plan-builder-heading", mode: "rise" },
    { selector: ".plan-builder-option", mode: "fade", stagger: 70 },
    { selector: ".plan-builder-summary", mode: "rise", delay: 110 },
    { selector: ".lead-copy", mode: "left" },
    { selector: ".lead-form", mode: "right", delay: 80 },
    { selector: ".faq-section .section-heading", mode: "rise" },
    { selector: ".faq-list details", mode: "fade", stagger: 45 },
    { selector: ".site-footer", mode: "rise" }
  ];

  revealGroups.forEach(({ selector, mode, delay = 0, stagger = 0 }) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      const revealDelay = Math.min(delay + index * stagger, 300);
      element.classList.add("scroll-reveal", `scroll-reveal-${mode}`);
      element.style.setProperty("--reveal-delay", `${revealDelay}ms`);
      observer.observe(element);
    });
  });
}

function setupMobileStickyCta() {
  if (document.querySelector(".mobile-sticky-cta")) {
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "mobile-sticky-cta";

  const link = document.createElement("a");
  link.id = "mobileStickyCta";
  link.className = "button button-primary";
  link.href = buildWhatsappLink(buildCoverageMessage(state.city));
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Consultar cobertura";

  wrapper.appendChild(link);
  document.body.appendChild(wrapper);
}

function setupPlanBuilder() {
  const section = document.getElementById("etapa-combo");

  document.querySelectorAll(".js-plan-whatsapp").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      selectPlan(link.getAttribute("data-plan") ?? "Plano", link.closest(".plan-card"));
      advanceTourTo(1);

      if (section) {
        section.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start"
        });
      }
    });
  });

  document.querySelectorAll('.plan-builder-option[data-addon="fixed"]').forEach((option) => {
    option.addEventListener("click", () => {
      const addonKey = option.getAttribute("data-addon");

      if (!addonKey || !(addonKey in state.selectedAddons)) {
        return;
      }

      state.selectedAddons[addonKey] = !state.selectedAddons[addonKey];
      updatePlanBuilder();

      if (getSelectedAddonKeys().length > 0) {
        advanceTourTo(2);
      }
    });
  });

  const mobilePlanFeatured = document.getElementById("mobilePlanFeatured");

  mobilePlanFeatured?.addEventListener("click", () => {
    const featuredPlan = getDefaultMobilePlanOption();
    selectMobilePlan(featuredPlan.name, featuredPlan.price);
  });

  const pulsewatchFeatured = document.getElementById("pulsewatchFeatured");

  pulsewatchFeatured?.addEventListener("click", () => {
    togglePulsewatchPlan();
  });

  const internetOnlyButton = document.getElementById("planBuilderInternetOnly");
  if (internetOnlyButton) {
    internetOnlyButton.addEventListener("click", () => {
      state.selectedAddons = {
        fixed: false,
        mobile: false,
        pulsewatch: false
      };
      state.selectedMobilePlan = "";
      state.selectedMobilePrice = "";
      updatePlanBuilder();
      advanceTourTo(2);
    });
  }
}

function setupTour() {
  const { overlay, next, skip } = getTourElements();

  bindTourTap(overlay, () => closeTour(true));
  bindTourTap(next, nextTourStep);
  bindTourTap(skip, () => closeTour(true));

  window.addEventListener("resize", () => {
    if (!tourState.active) {
      return;
    }

    renderTourStep();
  });

  window.addEventListener(
    "scroll",
    () => {
      if (!tourState.active) {
        requestTourStartIfEligible();
      }

      if (!tourState.active) {
        return;
      }

      if (isMobileViewport()) {
        return;
      }

      scheduleTourPopoverPosition();
    },
    {
      passive: true
    }
  );

  window.visualViewport?.addEventListener("resize", () => {
    if (!tourState.active) {
      return;
    }

    renderTourStep();
  });

  window.visualViewport?.addEventListener("scroll", () => {
    if (!tourState.active) {
      return;
    }

    if (isMobileViewport()) {
      return;
    }

    scheduleTourPopoverPosition();
  });

  document.addEventListener("keydown", (event) => {
    if (!tourState.active) {
      return;
    }

    if (event.key === "Escape") {
      closeTour(true);
    }
  });
}

function init() {
  const citySelectorTop = document.getElementById("citySelectorTop");
  const citySelectorForm = document.getElementById("citySelectorForm");
  const citySelectorGate = document.getElementById("citySelectorGate");
  const changeCityButton = document.getElementById("changeCityButton");
  const cityGateBackdrop = document.querySelector(".city-gate-backdrop");
  const consultWidgetToggle = document.getElementById("consultWidgetToggle");
  const consultWidgetClose = document.getElementById("consultWidgetClose");
  const leadForm = document.getElementById("leadForm");
  const phoneInput = document.getElementById("leadPhone");

  populateCitySelectors();
  simplifyCityGate();
  setupMobileStickyCta();
  applyPhoneMask(phoneInput);
  applyCity("");
  setupPlanBuilder();
  setupTour();

  citySelectorTop.addEventListener("change", () => {
    syncCitySelectors(citySelectorTop.value);
  });

  citySelectorForm.addEventListener("change", () => {
    syncCitySelectors(citySelectorForm.value);
  });

  const handleCityGateSelection = () => {
    const selectedCity = citySelectorGate.value.trim();

    if (!selectedCity) {
      return;
    }

    window.setTimeout(() => {
      confirmCityGateSelection(selectedCity);
    }, 0);
  };

  citySelectorGate.addEventListener("input", handleCityGateSelection);
  citySelectorGate.addEventListener("change", handleCityGateSelection);

  changeCityButton.addEventListener("click", () => {
    openCityGate("");
  });
  cityGateBackdrop?.addEventListener("click", () => {
    if (state.city) {
      closeCityGate();
    }
  });
  document.addEventListener("keydown", (event) => {
    const { gate } = getCityGateElements();
    if (event.key === "Escape" && state.city && gate && gate.hidden === false) {
      closeCityGate();
    }
  });

  consultWidgetToggle?.addEventListener("click", () => {
    toggleConsultWidgetPanel();
  });

  consultWidgetClose?.addEventListener("click", () => {
    closeConsultWidgetPanel();
  });

  document.addEventListener("click", (event) => {
    const { widget, panel, toggle } = getConsultWidgetElements();

    if (!widget || widget.hidden || !panel || panel.hidden || !toggle) {
      return;
    }

    if (panel.contains(event.target) || toggle.contains(event.target)) {
      return;
    }

    closeConsultWidgetPanel();
  });

  leadForm.addEventListener("submit", submitLead);
  setupPremiumMotion();
  openCityGate();
  scheduleConsultWidget();
  hideConectAiNativeListing();
  window.setTimeout(hideConectAiNativeListing, 600);
  window.setTimeout(hideConectAiNativeListing, 1800);
}

document.addEventListener("DOMContentLoaded", init);
