(() => {
  const page = document.body;
  const partner = page.dataset.partner ?? "Parceiro";
  const sourcePrefix = page.dataset.sourcePrefix ?? `pelo ${partner}`;
  const city = page.dataset.city ?? "Cachoeira Paulista";
  const phone = page.dataset.whatsapp ?? "5512988930891";

  const buildWhatsappUrl = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const campaignMessage = `Olá! Vim ${sourcePrefix} e gostaria de conhecer os planos Pulse Telecom em ${city}!`;

  document.querySelectorAll("[data-plan-message]").forEach((link) => {
    link.href = buildWhatsappUrl(campaignMessage);
    link.setAttribute("aria-label", `Conhecer os planos Pulse Telecom indicados por ${partner}`);
  });

  document.querySelectorAll("[data-consult-message]").forEach((link) => {
    link.href = buildWhatsappUrl(campaignMessage);
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

  document.querySelectorAll(".partner-hero-banner, .partner-cover-banner, .plan-card, .faq-list details").forEach((element) => {
    element.classList.add("scroll-reveal");
    observer.observe(element);
  });
})();
