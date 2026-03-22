(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const ICONS = {
    rocket:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 16.5c2.5 0 4-1 5-2s2-2.5 2-5c0-2.5 1-4 2-5s3-2 5-2c0 2-.5 4-2 5s-2.5 2-5 2c-2.5 0-4 1-5 2s-2 2.5-2 5Z"/><path d="M6.5 13.5 4 16l4 1 1 4 2.5-2.5"/><path d="M14.5 9.5l0 0"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>',
    download:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
    user:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0"/><path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/></svg>',
    target:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22a10 10 0 1 1 10-10"/><path d="M12 18a6 6 0 1 1 6-6"/><path d="M12 14a2 2 0 1 1 2-2"/><path d="m22 2-7 7"/><path d="M16 2h6v6"/></svg>',
    spark:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.4 4.7L18 8l-4.6 1.3L12 14l-1.4-4.7L6 8l4.6-1.3Z"/><path d="M5 14l.8 2.6L8 17l-2.2.6L5 20l-.8-2.4L2 17l2.2-.4Z"/><path d="M19 13l.9 2.9 3.1.6-3.1.7L19 20l-.9-2.8-3.1-.7 3.1-.6Z"/></svg>',
    code:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/><path d="m14 4-4 16"/></svg>',
    layout:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
    cloud:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.7 1.6A4 4 0 0 0 6 19z"/></svg>',
    cpu:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 9h6v6H9z"/><path d="M4 7V4h3"/><path d="M17 4h3v3"/><path d="M20 17v3h-3"/><path d="M7 20H4v-3"/><path d="M9 4v3"/><path d="M15 4v3"/><path d="M9 17v3"/><path d="M15 17v3"/><path d="M4 9h3"/><path d="M4 15h3"/><path d="M17 9h3"/><path d="M17 15h3"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3"/><path d="M15 22v-3.3c0-1 .1-1.4-.6-2 2.8-.3 5.6-1.4 5.6-6.2 0-1.4-.5-2.6-1.3-3.5.1-.3.6-1.6-.1-3.3 0 0-1-.3-3.3 1.3a11.2 11.2 0 0 0-6 0C7.1 2.7 6.1 3 6.1 3c-.7 1.7-.2 3-.1 3.3a5 5 0 0 0-1.3 3.5c0 4.8 2.9 5.9 5.7 6.2-.5.4-.9 1.2-.9 2.4V22"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2"/><path d="M2 9h4v12H2z"/><path d="M4 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"/><path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path d="M17.5 6.5h.01"/></svg>',
    send:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4Z"/></svg>',
    share:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/><path d="M16 6l-4-4-4 4"/><path d="M12 2v14"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>',
    info:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    graduation:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m22 10-10 5L2 10l10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="M2 10v6"/></svg>',
    map:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 9 3 3 5v16l6-2 6 2 6-2V3z"/><path d="M9 3v16"/><path d="M15 5v16"/></svg>',
    grid:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h7v7H3z"/><path d="M14 3h7v7h-7z"/><path d="M14 14h7v7h-7z"/><path d="M3 14h7v7H3z"/></svg>',
    link:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1"/><path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"/></svg>',
    bolt:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 3 14h7l-1 8 10-12h-7Z"/></svg>',
    trophy:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v3a4 4 0 0 1-8 0Z"/><path d="M6 7H4a2 2 0 0 0 2 2"/><path d="M18 7h2a2 2 0 0 1-2 2"/><path d="M12 11v4"/><path d="M8 21h8"/><path d="M10 15h4"/><path d="M9 21v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>',
    up:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>',
    theme_sun:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.9 19.1 1.4-1.4"/><path d="m17.7 6.3 1.4-1.4"/></svg>',
    theme_moon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z"/></svg>',
  };

  function setIcon(el, name) {
    if (!el) return;
    const svg = ICONS[name] || ICONS.info;
    el.innerHTML = svg;
  }

  function toast(message) {
    const t = $("#toast");
    if (!t) return;
    t.textContent = message;
    t.classList.add("show");
    window.clearTimeout(toast._id);
    toast._id = window.setTimeout(() => t.classList.remove("show"), 2200);
  }

  function applyTheme(theme) {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);

    const toggle = $("#themeToggle");
    if (toggle) {
      const isDark = theme === "dark";
      toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      const iconHolder = toggle.querySelector('[data-icon="theme"]');
      setIcon(iconHolder, isDark ? "theme_sun" : "theme_moon");
    }
  }

  function initTheme() {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      applyTheme(stored);
      return;
    }
    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
    applyTheme(prefersLight ? "light" : "dark");
  }

  function initIcons() {
    $$("[data-icon]").forEach((el) => {
      const name = el.getAttribute("data-icon");
      if (name === "theme") return;
      setIcon(el, name);
    });
  }

  function initNav() {
    const toggle = $(".nav-toggle");
    const links = $("#navLinks");
    if (!toggle || !links) return;

    const setOpen = (open) => {
      links.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", () => setOpen(!links.classList.contains("open")));
    links.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) setOpen(false);
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }

  function assignRevealStaggers() {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    $$("section").forEach((section) => {
      section.querySelectorAll(".reveal").forEach((el, i) => {
        const ms = reduce ? 0 : Math.min(i, 12) * 48;
        el.style.setProperty("--reveal-delay", `${ms}ms`);
      });
    });
  }

  function initReveal() {
    const targets = $$(".reveal");
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => io.observe(el));
  }

  function initHeaderScroll() {
    const header = $(".site-header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initSkillBars() {
    const bars = $$(".bar[data-level]");
    if (!bars.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const bar = entry.target;
          bar.classList.add("bar-visible");
          const level = Math.max(0, Math.min(100, Number(bar.getAttribute("data-level") || 0)));
          const fill = bar.querySelector(".bar-fill");
          if (fill) fill.style.width = `${level}%`;
          io.unobserve(bar);
        });
      },
      { threshold: 0.25 },
    );

    bars.forEach((b) => io.observe(b));
  }

  function initContactForm() {
    const form = $("#contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#name")?.value?.trim() || "";
      const email = $("#email")?.value?.trim() || "";
      const message = $("#message")?.value?.trim() || "";

      const to = "harishragavendra@example.com";
      const subject = `Portfolio Contact — ${name || "Visitor"}`;
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
        "",
        "--",
        "Sent from the portfolio contact form",
      ].join("\n");

      const href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = href;
      toast("Opening your email app…");
      form.reset();
    });
  }

  function initThemeToggle() {
    const toggle = $("#themeToggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyTheme(next);
      toast(next === "dark" ? "Dark mode enabled" : "Light mode enabled");
    });
  }

  function initYear() {
    const y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function boot() {
    initTheme();
    initIcons();
    initThemeToggle();
    initNav();
    assignRevealStaggers();
    initReveal();
    initSkillBars();
    initHeaderScroll();
    initContactForm();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
