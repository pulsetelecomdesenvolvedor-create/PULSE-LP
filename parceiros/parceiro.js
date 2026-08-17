(() => {
  const page = document.body;
  const partner = page.dataset.partner ?? "Parceiro";
  const sourcePrefix = page.dataset.sourcePrefix ?? `pelo ${partner}`;
  const city = page.dataset.city ?? "Cachoeira Paulista";
  const phone = page.dataset.whatsapp ?? "5512988930891";

  const buildWhatsappUrl = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  document.querySelectorAll("[data-plan-message]").forEach((link) => {
    const plan = link.getAttribute("data-plan-message") ?? "plano";
    const message = `Olá! Vim ${sourcePrefix} e quero contratar o plano de ${plan} em ${city}.`;
    link.href = buildWhatsappUrl(message);
    link.setAttribute("aria-label", `Contratar plano ${plan} indicado por ${partner}`);
  });

  document.querySelectorAll("[data-consult-message]").forEach((link) => {
    const message = `Olá! Vim ${sourcePrefix} e quero conhecer os planos da Pulse em ${city}.`;
    link.href = buildWhatsappUrl(message);
  });

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

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  document.querySelectorAll(".partner-hero-banner, .plan-card, .faq-list details").forEach((element) => {
    element.classList.add("scroll-reveal");
    observer.observe(element);
  });
})();
