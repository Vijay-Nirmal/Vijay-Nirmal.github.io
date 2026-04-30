const panelLinks = Array.from(document.querySelectorAll("[data-panel-link]"));
const panels = Array.from(document.querySelectorAll("[data-panel]"));
const nav = document.querySelector(".panel-nav");
const defaultTitle = "Vijay Nirmal | AI Architect & Software Architect";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let revealAnimationFrame = null;
const revealSelector = [
  ".panel-heading",
  ".metric-card",
  ".developer-card",
  ".capability-column",
  ".principle-card",
  ".timeline-card",
  ".stack-card",
  ".proof-card",
  ".showcase-card",
  ".certification-card",
  ".badge-card",
  ".profile-card",
  ".media-card"
].join(", ");

const getPanelIdFromHash = () => window.location.hash.replace("#", "").trim().toLowerCase();
const getPanelById = (panelId) => panels.find((panel) => panel.id === panelId) || panels[0];

const registerRevealTargets = () => {
  if (prefersReducedMotion) {
    return;
  }

  panels.forEach((panel) => {
    const revealTargets = Array.from(panel.querySelectorAll(revealSelector));

    revealTargets.forEach((target, index) => {
      target.classList.add("reveal-target");
      target.style.setProperty("--reveal-delay", `${Math.min(index, 7) * 55}ms`);
    });
  });

  document.body.dataset.motionReady = "true";
};

const animatePanel = (activePanel) => {
  if (prefersReducedMotion) {
    return;
  }

  if (revealAnimationFrame) {
    cancelAnimationFrame(revealAnimationFrame);
    revealAnimationFrame = null;
  }

  panels.forEach((panel) => {
    panel.querySelectorAll(".reveal-target").forEach((target) => {
      target.classList.remove("is-visible");
    });
  });

  const activeTargets = Array.from(activePanel.querySelectorAll(".reveal-target"));

  activeTargets.forEach((target) => {
    void target.offsetWidth;
  });

  revealAnimationFrame = requestAnimationFrame(() => {
    revealAnimationFrame = requestAnimationFrame(() => {
      activeTargets.forEach((target) => {
        target.classList.add("is-visible");
      });

      revealAnimationFrame = null;
    });
  });
};

const activatePanel = (panelId) => {
  const activePanel = getPanelById(panelId);

  panels.forEach((panel) => {
    const isActive = panel === activePanel;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
    panel.setAttribute("aria-hidden", String(!isActive));
  });

  panelLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activePanel.id}`;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const panelTitle = activePanel.dataset.title;
  document.title = panelTitle ? `Vijay Nirmal | ${panelTitle}` : defaultTitle;
  animatePanel(activePanel);
};

registerRevealTargets();
document.body.dataset.panelsReady = "true";
activatePanel(getPanelIdFromHash());

window.addEventListener("hashchange", () => {
  activatePanel(getPanelIdFromHash());
});

window.addEventListener("pageshow", () => {
  activatePanel(getPanelIdFromHash());
});

panelLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const panelId = link.getAttribute("href").slice(1);

    if (getPanelIdFromHash() === panelId) {
      activatePanel(panelId);
    }
  });
});

nav?.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
    return;
  }

  const currentIndex = panelLinks.findIndex((link) => link.classList.contains("is-active"));
  let nextIndex = currentIndex;

  if (event.key === "ArrowRight") {
    nextIndex = (currentIndex + 1) % panelLinks.length;
  }

  if (event.key === "ArrowLeft") {
    nextIndex = (currentIndex - 1 + panelLinks.length) % panelLinks.length;
  }

  if (event.key === "Home") {
    nextIndex = 0;
  }

  if (event.key === "End") {
    nextIndex = panelLinks.length - 1;
  }

  event.preventDefault();
  const nextLink = panelLinks[nextIndex];
  nextLink.focus();

  const nextPanelId = nextLink.getAttribute("href").slice(1);
  if (window.location.hash === `#${nextPanelId}`) {
    activatePanel(nextPanelId);
    return;
  }

  window.location.hash = nextPanelId;
});
