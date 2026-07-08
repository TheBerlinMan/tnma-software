const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

cards.forEach((card) => observer.observe(card));

let lastHue = null;
function nextHue() {
  let hue = Math.floor(Math.random() * 360);
  if (lastHue !== null) {
    while (hue === lastHue) {
      hue = Math.floor(Math.random() * 360);
    }
  }
  lastHue = hue;
  return hue;
}

const hoverColorTargets = [...cards, themeToggle];
hoverColorTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.style.setProperty("--hover-accent", `hsl(${nextHue()}, 70%, 60%)`);
  });
});
