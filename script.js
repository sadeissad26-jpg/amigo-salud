gsap.registerPlugin(ScrollTrigger);

// 1. Animación suave para la entrada de las tarjetas del despiece
gsap.from(".layer", {
  duration: 1,
  y: 60,
  opacity: 0,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#desglose",
    start: "top 75%",
    toggleActions: "play none none reverse"
  }
});

// 2. Animación para tarjetas de información
gsap.from(".info-card", {
  duration: 0.8,
  y: 40,
  opacity: 0,
  stagger: 0.15,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#problema",
    start: "top 80%"
  }
});

// 3. Animación de Contadores Numéricos
const statNumbers = document.querySelectorAll(".stat-number");

statNumbers.forEach((num) => {
  const target = +num.getAttribute("data-target");
  
  gsap.to(num, {
    innerText: target,
    duration: 2,
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: ".stats-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});