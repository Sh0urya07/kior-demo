/* ======================================================================
   KIOR — shared layout: nav, footer, page-transition curtain, progress
   Injected on every page so markup lives in one place.
   ====================================================================== */
(function () {
  "use strict";
  const path = location.pathname.split("/").pop() || "index.html";
  const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

  const LINKS = [
    ["index.html", "Home"],
    ["story.html", "Story"],
    ["menu.html", "Menu"],
    ["gallery.html", "Gallery"],
    ["visit.html", "Visit"],
  ];

  /* ---------- curtain (two-panel wipe) ---------- */
  const curtain = document.createElement("div");
  curtain.id = "curtain";
  curtain.innerHTML = `<div class="curt-panel cl"></div><div class="curt-panel cr"></div><span class="curt-word">KIOR</span>`;
  document.body.appendChild(curtain);

  /* ---------- scroll progress ---------- */
  const bar = document.createElement("div");
  bar.id = "scroll-progress";
  document.body.appendChild(bar);
  const onProg = () => {
    const h = document.documentElement;
    const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    bar.style.transform = `scaleX(${p})`;
  };
  window.addEventListener("scroll", onProg, { passive: true });

  /* ---------- nav ---------- */
  const nav = document.createElement("header");
  nav.className = "nav"; nav.id = "nav";
  nav.innerHTML = `
    <a href="index.html" class="nav-brand">KIOR<span>· The Door Cafe</span></a>
    <nav class="nav-links" id="nav-links">
      ${LINKS.map(([h, t]) => `<a href="${h}"${h === path ? ' class="active"' : ""}>${t}</a>`).join("")}
      <a href="../digital-menu/index.html" class="nav-cta">Digital Menu</a>
    </nav>
    <button class="nav-toggle" id="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>`;
  document.body.insertBefore(nav, document.body.firstChild);

  /* ---------- footer ---------- */
  const foot = document.createElement("footer");
  foot.className = "footer";
  foot.innerHTML = `
    <div class="footer-word">KIOR</div>
    <nav class="footer-nav">
      ${LINKS.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}
      <a href="../digital-menu/index.html">Digital Menu</a>
    </nav>
    <div class="footer-row">
      <span>The Door Cafe · Jagatpura, Jaipur</span>
      <span>Open 11 AM – 12 AM daily</span>
      <a href="https://www.instagram.com/kiorjaipur/" target="_blank" rel="noopener">Instagram</a>
      <a href="tel:+917610992945">+91 76109 92945</a>
    </div>
    <p class="footer-fine">© <span id="year"></span> KIOR — The Door Cafe. Crafted by <a href="#">webro.studio</a>.</p>`;
  document.body.appendChild(foot);
  const yr = document.getElementById("year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- nav behaviour ---------- */
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  toggle.addEventListener("click", () => { links.classList.toggle("open"); toggle.classList.toggle("active"); });

  /* ---------- page transitions ---------- */
  // lift curtain on entry
  requestAnimationFrame(() => curtain.classList.add("lift"));

  function isInternal(a) {
    const href = a.getAttribute("href") || "";
    if (a.target === "_blank" || href.startsWith("#") || href.startsWith("http") ||
        href.startsWith("tel:") || href.startsWith("mailto:") || href.includes("digital-menu")) return false;
    return href.endsWith(".html");
  }
  if (!reduce) {
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a || !isInternal(a)) return;
      const href = a.getAttribute("href");
      if (href === path) return;
      e.preventDefault();
      curtain.classList.remove("lift");
      curtain.classList.add("drop");
      setTimeout(() => (location.href = href), 620);
    });
    // handle back/forward cache
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) { curtain.classList.remove("drop"); curtain.classList.add("lift"); }
    });
  }
})();
