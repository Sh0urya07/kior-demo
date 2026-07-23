/* ======================================================================
   KIOR — page animations + on-site menu render
   ====================================================================== */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

  /* ---------- door intro (home only) ---------- */
  const intro = $("#door-intro");
  if (intro) {
    const enterBtn = $("#enter-btn");
    const seen = sessionStorage.getItem("kior_entered");
    const open = () => {
      intro.classList.add("opening");
      document.body.classList.remove("locked");
      sessionStorage.setItem("kior_entered", "1");
      setTimeout(() => intro.classList.add("done"), 1600);
    };
    if (seen || reduce) { intro.classList.add("done"); document.body.classList.remove("locked"); }
    else {
      document.body.classList.add("locked");
      enterBtn && enterBtn.addEventListener("click", open);
      setTimeout(() => { if (!intro.classList.contains("opening")) open(); }, 3000);
    }
  }

  /* ---------- render full menu on menu.html ---------- */
  const menuList = $("#menu-list");
  const menuNav = $("#menu-jump");
  if (menuList && window.KIOR_MENU) {
    const cur = window.KIOR_MENU.currency || "₹";
    window.KIOR_MENU.categories.forEach((cat) => {
      if (menuNav) {
        const chip = document.createElement("a");
        chip.href = "#m-" + cat.id; chip.textContent = cat.name;
        menuNav.appendChild(chip);
      }
      const block = document.createElement("section");
      block.className = "m-block reveal"; block.id = "m-" + cat.id;
      block.innerHTML =
        `<div class="m-block-head"><h3>${cat.name}</h3><span>${cat.kicker || ""}</span></div>` +
        `<ul class="m-items">` +
        cat.items.map((it) =>
          `<li><span class="m-veg"></span><span class="m-name">${it.n}${it.tag ? `<em class="m-tag">${it.tag}</em>` : ""}</span><span class="m-lead"></span><span class="m-price">${cur}${it.p}</span></li>`
        ).join("") +
        `</ul>`;
      menuList.appendChild(block);
    });
  }

  /* ---------- animations ---------- */
  function run() {
    // split hero heading into rising words
    $$(".split").forEach((el) => {
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map((w) => `<span class="word"><span>${w}</span></span>`).join(" ");
    });

    if (reduce) { $$(".reveal,.reveal-card,.reveal-img").forEach((e) => e.classList.add("in")); return; }

    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      // hero split words
      const w = $$(".split .word span");
      if (w.length) gsap.fromTo(w, { yPercent: 115 }, { yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.08, delay: intro ? 0 : 0.2 });

      // generic reveals per section
      $$("section, .page-hero, .menu-wrap").forEach((sec) => {
        const items = $$(".reveal,.reveal-img", sec);
        if (items.length) gsap.to(items, { opacity: 1, y: 0, scale: 1, duration: .9, ease: "power3.out", stagger: .08, scrollTrigger: { trigger: sec, start: "top 80%" } });
        const cards = $$(".reveal-card", sec);
        if (cards.length) gsap.to(cards, { opacity: 1, y: 0, duration: .8, ease: "power3.out", stagger: .07, scrollTrigger: { trigger: sec, start: "top 78%" } });
      });

      // parallax
      $$("[data-parallax]").forEach((el) => {
        const amt = parseFloat(el.dataset.parallax) || 12;
        gsap.to(el, { yPercent: -amt, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
      });

      // counters
      $$("[data-count]").forEach((el) => {
        const end = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end, duration: 1.6, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          onUpdate: () => { el.textContent = (end % 1 ? obj.v.toFixed(1) : Math.round(obj.v)) + suffix; },
        });
      });
    } else {
      const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: .12 });
      $$(".reveal,.reveal-card,.reveal-img").forEach((el) => io.observe(el));
    }

    // 3D tilt on cards (fine pointer)
    if (window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      $$(".tilt").forEach((card) => {
        let raf;
        card.addEventListener("pointermove", (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
          if (raf) return;
          raf = requestAnimationFrame(() => {
            card.style.transform = `perspective(760px) rotateX(${(0.5 - py) * 8}deg) rotateY(${(px - 0.5) * 10}deg) translateY(-6px)`;
            raf = null;
          });
        });
        card.addEventListener("pointerleave", () => { card.style.transform = ""; });
      });
    }
  }
  run();

  /* ---------- hero video autoplay guard ---------- */
  const hv = $(".hero-video"); if (hv && hv.play) hv.play().catch(() => {});
})();
