"use strict";
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver=null;
let mapIsVisible=!('IntersectionObserver' in window);
function revealElements(elements,stagger=0){
  if(motionPreference.matches||!('IntersectionObserver' in window))return;
  if(!revealObserver)revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}
  }),{threshold:.06,rootMargin:'0px 0px -20px 0px'});
  elements.forEach((element,index)=>{
    if(element.getBoundingClientRect().top<window.innerHeight*.95)return;
    element.style.setProperty('--reveal-delay',`${Math.min(index*stagger,140)}ms`);
    element.classList.add('motion-reveal');revealObserver.observe(element);
  });
}
motionPreference.addEventListener('change',event=>{
  if(event.matches){revealObserver?.disconnect();document.querySelectorAll('.motion-reveal').forEach(element=>element.classList.add('is-visible'));}
});
// Contato direto no WhatsApp com mensagem padronizada por cidade.
const cities = [
  { name: "Bananal", state: "SP", phone: "5512981076667" },
  { name: "Arapeí", state: "SP", phone: "5512920008253" },
  { name: "São José do Barreiro", state: "SP", phone: "5512982195577" },
  { name: "Cachoeira Paulista", state: "SP", phone: "5512988930891" },
  { name: "Vassouras", state: "RJ", phone: "5524992029033" },
  { name: "Valença", state: "RJ", phone: "5524992029033" },
  { name: "Resende", state: "RJ", phone: "5524999137249" },
  { name: "Visconde de Mauá", state: "RJ", phone: "5524981152704" },
  { name: "Maringá", state: "RJ", phone: "5524981152704" },
  { name: "Maromba", state: "RJ", phone: "5524981152704" },
];
// Endereços do site oficial pulsetelecom.net.br, consultados em 13/10/2026.
// A lista oficial associa Valença à unidade de Vassouras; não criamos outra loja.
const stores = [
  {
    id: "bananal",
    city: "Bananal",
    name: "Bananal",
    state: "São Paulo",
    address: "Rua Manoel de Aguiar, 151, Centro, Bananal - SP, 12850-000",
    cid: "0x4550333400baaad1",
    mapsUrl: "https://www.google.com/maps?cid=4994548285197429457",
  },
  {
    id: "arapei",
    city: "Arapeí",
    name: "Arapeí",
    state: "São Paulo",
    address: "Rua Senador Rodrigues Leite, 198, Arapeí - SP, 12870-000",
    note: "Próximo ao cartório.",
    cid: "0x5eb1997b6a4f3c50",
    mapsUrl: "https://maps.app.goo.gl/63rnw3zSxpn9ChYB6",
  },
  {
    id: "barreiro",
    city: "São José do Barreiro",
    name: "São José do Barreiro",
    state: "São Paulo",
    address:
      "Rua Doutor Olimpio Alves Magalhães, 7, Centro, São José do Barreiro - SP, 12830-000",
    cid: "0xfb5b3906e3eac16a",
    mapsUrl: "https://maps.app.goo.gl/FhiJd6X9TXCuTXHW7",
  },
  {
    id: "cachoeira",
    city: "Cachoeira Paulista",
    name: "Cachoeira Paulista",
    state: "São Paulo",
    address: "Av. Sarah Kubitschek, 37, Cachoeira Paulista - SP, 12630-000",
    cid: "0xfc11b617b88e2089",
    mapsUrl: "https://share.google/k8CPgRPAK1ePJvwmu",
  },
  {
    id: "resende",
    city: "Resende",
    name: "Resende",
    state: "Rio de Janeiro",
    address:
      "Avenida Perimetral Norte, 1012, Nova Alegria, Resende - RJ, 27525-032",
    cid: "0x16c5cff190357536",
    mapsUrl: "https://maps.app.goo.gl/vJukS2cdX16Di6Nh8",
  },
  {
    id: "vassouras",
    city: "Vassouras",
    name: "Vassouras",
    state: "Rio de Janeiro",
    address:
      "Praça Martinho Nóbrega, 10, loja 7, Centro, Vassouras - RJ, 27700-000",
    serves: ["Valença"],
    cid: "0xd0bd69cb5b91119b",
    mapsUrl: "https://maps.app.goo.gl/etTXyubMGT68muJm6",
  },
  {
    id: "maua",
    city: "Visconde de Mauá",
    name: "Maringá / Visconde de Mauá",
    state: "Rio de Janeiro",
    address: "Rua Sem Denominação, Maringá, Itatiaia - RJ, 27580-000",
    note: "Em frente ao bar do Ted.",
    serves: ["Maringá", "Maromba"],
    cid: "0xf6a37f2f2198c6a6",
    mapsUrl: "https://share.google/QHvU3ky3DqNSHWtjm",
  },
];
let displayedStoreId = null;
function updateStore(city) {
  const store =
    stores.find((item) => item.city === city || item.serves?.includes(city)) ||
    stores[0];
  if (displayedStoreId === store.id) return;
  displayedStoreId = store.id;
  document.getElementById("storeName").textContent = `Loja ${store.name}`;
  document.getElementById("storeState").textContent = store.state;
  document.getElementById("storeAddress").textContent =
    store.address + (store.note ? ` — ${store.note}` : "");
  const phone = cities.find((item) => item.name === store.city).phone;
  document.getElementById("storePhone").textContent = phone.replace(
    /^55(\d{2})(\d{5})(\d{4})$/,
    "($1) $2-$3",
  );
  const query = store.mapQuery || `Pulse Telecom, ${store.address}`;
  const link =
    store.mapsUrl ||
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}`;
  document.getElementById("storeDirections").href = link;
  document.getElementById("storeMapLink").href = link;
  const map = document.getElementById("storeMap");
  map.title = `Localização da loja Pulse Telecom em ${store.name}`;
  const mapUrl = store.cid
    ? `https://www.google.com/maps?cid=${BigInt(store.cid).toString()}&z=17&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=17&output=embed`;
  map.dataset.src=mapUrl;
  if(mapIsVisible)map.src=mapUrl;
  document.getElementById("storeSelector").value = store.id;
  document.querySelectorAll("[data-store]").forEach((button) => {
    const active = button.dataset.store === store.id;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}
const plans = [
  {
    speed: "700",
    unit: "Mega",
    price: "89,90",
    name: "Pulse Essencial",
    artwork: "plan-700",
    mesh: false,
  },
  {
    speed: "800",
    unit: "Mega",
    price: "99,90",
    name: "Pulse Conecta",
    artwork: "plan-800",
    mesh: false,
    featured: true,
  },
  {
    speed: "1",
    unit: "Giga",
    price: "129,90",
    name: "Pulse Performance",
    artwork: "plan-giga",
    mesh: false,
  },
  { speed: "1", unit: "Giga", price: "139,90", name: "Pulse Mesh", artwork: "plan-mesh", mesh: true },
];
let selectedCity = "";
try {
  const saved = localStorage.getItem("pulse_preview_city");
  if (cities.some((city) => city.name === saved)) selectedCity = saved;
} catch {}
const selectors = [...document.querySelectorAll("[data-city]")];
const dialog = document.getElementById("cityDialog");
const createWhatsappUrl = (name) => {
  const city = cities.find((item) => item.name === name);
  if (!city) return "#contato";
  const message = `Olá! Estou com dúvida referente aos planos na cidade ${city.name} e gostaria de falar com um consultor.`;
  return `https://wa.me/${city.phone}?text=${encodeURIComponent(message)}`;
};
function syncCity(name) {
  selectedCity = cities.some((city) => city.name === name) ? name : "";
  selectors.forEach((select) => {
    select.value = selectedCity;
  });
  updateStore(selectedCity);
  try {
    localStorage.setItem("pulse_preview_city", selectedCity);
  } catch {}
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = createWhatsappUrl(selectedCity);
    if (selectedCity) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.removeAttribute("target");
      link.removeAttribute("rel");
    }
  });
}
selectors.forEach((select) => {
  cities.forEach((city) => {
    const option = new Option(`${city.name} - ${city.state}`, city.name);
    select.add(option);
  });
  select.addEventListener("change", () => syncCity(select.value));
});
stores.forEach((store) => {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.store = store.id;
  button.textContent = store.name;
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => syncCity(store.city));
  document.getElementById("storeTabs").append(button);
  document
    .getElementById("storeSelector")
    .add(new Option(store.name, store.id));
});
document.getElementById("storeSelector").addEventListener("change", (event) => {
  const store = stores.find((item) => item.id === event.target.value);
  if (store) syncCity(store.city);
});
function showCityDialog() {
  dialog.showModal();
}
function openWhatsapp() {
  if (!selectedCity) {
    showCityDialog();
    return;
  }
  window.open(createWhatsappUrl(selectedCity), "_blank", "noopener,noreferrer");
}
document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-whatsapp]");
  if (link && !selectedCity) {
    event.preventDefault();
    showCityDialog();
  }
});
document.getElementById("openContact").addEventListener("click", openWhatsapp);
document.getElementById("dialogContact").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!selectedCity) return;
  dialog.close();
  openWhatsapp();
});
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  openWhatsapp();
});
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  }
});

const grid = document.getElementById("planGrid");
let activeFilter = "all";
function renderPlans(animate=false) {
  const filtered = plans.filter(
    (plan) =>
      (activeFilter !== "mesh" || plan.mesh) &&
      (activeFilter !== "fiber" || !plan.mesh),
  );
  grid.innerHTML = filtered
    .map(
      (plan) => `<article class="plan-card${plan.featured ? " featured" : ""}">
    <div class="plan-cover plan-cover-art"><img src="./lp-v2/assets/${plan.artwork}.webp" srcset="./lp-v2/assets/${plan.artwork}-small.webp 480w, ./lp-v2/assets/${plan.artwork}.webp 960w" sizes="(max-width:480px) 92vw, (max-width:1000px) 46vw, 260px" width="960" height="600" loading="lazy" decoding="async" alt="${plan.speed} ${plan.unit}${plan.mesh ? ' + 1 Mesh' : ''} + Streaming PulseTV"><h3 class="visually-hidden">${plan.speed} ${plan.unit}${plan.mesh ? ' + 1 Mesh' : ''} com PulseTV incluso</h3></div>
    <div class="plan-body"><ul class="plan-features"><li>Instalação grátis</li><li>100% fibra óptica</li><li>Suporte especializado</li></ul><p class="plan-caption">VANTAGENS INCLUSAS</p><div class="plan-perks"><span>Wi-Fi 6</span><span>Via Livros</span>${plan.mesh ? "<span>1 Pulse Mesh</span>" : ""}</div><div class="plan-tv"><div class="plan-tv-title"><img class="plan-tv-logo" src="./lp-v2/assets/pulsetv-logo.webp" width="900" height="259" loading="lazy" decoding="async" alt="PulseTV"><small>GRÁTIS</small></div><p>+160 canais · Filmes e séries<br>Até 5 telas simultâneas</p></div></div>
    <div class="plan-bottom"><div class="plan-price"><span>R$</span><strong>${plan.price}</strong><small>/mês</small></div><a class="btn btn-green" data-whatsapp href="#contato">Quero esse plano <span aria-hidden="true">↗</span></a><small>Consulte cobertura e condições.</small></div>
  </article>`,
    )
    .join("");
  document.getElementById("emptyResults").hidden = filtered.length > 0;
  syncCity(selectedCity);
  const cards=[...grid.children];
  if(animate&&!motionPreference.matches)cards.forEach((card,index)=>card.animate?.([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,delay:index*35,fill:'backwards',easing:'cubic-bezier(.22,1,.36,1)'}));
  else revealElements(cards,45);
}
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderPlans(true);
  }),
);
renderPlans();
if(!mapIsVisible){
  const map=document.getElementById('storeMap');
  const mapObserver=new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.isIntersecting)){mapIsVisible=true;if(map.dataset.src)map.src=map.dataset.src;mapObserver.disconnect();}
  },{rootMargin:'250px 0px'});
  mapObserver.observe(map);
}

const track = document.getElementById("campaignTrack");
// Clones laterais mantêm a campanha anterior visível também no primeiro banner.
track.prepend(track.lastElementChild.cloneNode(true));
track.append(track.children[1].cloneNode(true));
const slides = [...track.children];
const dots = [...document.querySelectorAll("[data-slide]")];
let currentSlide = 0;
function setSlide(index) {
  currentSlide = (index + dots.length) % dots.length;
  const distance =
    slides[0].getBoundingClientRect().width +
    parseFloat(getComputedStyle(track).gap);
  track.style.transform = `translateX(-${(currentSlide + 1) * distance}px)`;
  slides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === currentSlide + 1);
    slide.inert = i !== currentSlide + 1;
    slide.setAttribute("aria-hidden", String(i !== currentSlide + 1));
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
    dot.setAttribute("aria-pressed", String(i === currentSlide));
  });
}
document.querySelector('.campaign-dots').addEventListener('keydown',event=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  event.preventDefault();
  setSlide(event.key==='Home'?0:event.key==='End'?dots.length-1:currentSlide+(event.key==='ArrowRight'?1:-1));
  dots[currentSlide].focus();
});
dots.forEach((dot) =>
  dot.addEventListener("click", () => setSlide(Number(dot.dataset.slide))),
);
new ResizeObserver(() => setSlide(currentSlide)).observe(
  document.querySelector(".campaign-viewport"),
);
let touchStart;
track.addEventListener(
  "touchstart",
  (event) => {
    touchStart = {x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY};
  },
  { passive: true },
);
track.addEventListener(
  "touchend",
  (event) => {
    if(!touchStart)return;
    const distance = event.changedTouches[0].clientX - touchStart.x;
    const vertical=event.changedTouches[0].clientY-touchStart.y;
    if (Math.abs(distance) > 55&&Math.abs(distance)>Math.abs(vertical)*1.2)
      setSlide(currentSlide + (distance < 0 ? 1 : -1));
    touchStart=null;
  },
  { passive: true },
);
setSlide(0);

// Fade-in de entrada, uma única vez e sem bibliotecas de animação.
revealElements([...document.querySelectorAll('.section-heading,.contact-copy,.contact-form,.about-top,.entertainment-top,.entertainment-posters,.tv-benefits,.store-layout,.faq-grid')]);
for(const selector of ['.about-features article','.extras-grid article','.review-grid figure'])revealElements([...document.querySelectorAll(selector)],45);
