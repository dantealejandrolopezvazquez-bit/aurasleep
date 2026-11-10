/* AuraSleep v2 — capa de movimiento: apariciones, avance, portada viva y cifras que cuentan.
   Solo actúa con html.mov (el usuario no pidió reducir el movimiento). Sin dependencias. */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const raiz = document.documentElement;
  const quieto = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mov = () => raiz.classList.contains("mov") && !quieto.matches;
  quieto.addEventListener?.("change", () => raiz.classList.toggle("mov", !quieto.matches));

  /* ---------- estrellas del cielo alto (posiciones fijas: misma noche cada vez) ---------- */
  const cielo = $("#estrellas");
  if (cielo) {
    let semilla = 7;
    const azar = () => ((semilla = (semilla * 9301 + 49297) % 233280) / 233280);
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 46; i++) {
      const e = document.createElement("i");
      const t = azar() < 0.18 ? 2.6 : azar() < 0.5 ? 1.8 : 1.3;
      e.style.cssText = "left:" + (azar() * 100).toFixed(2) + "%;top:" + (Math.pow(azar(), 1.4) * 100).toFixed(2) + "%;--t:" + t + "px;--o:" + (0.35 + azar() * 0.55).toFixed(2) + ";--dur:" + (2.8 + azar() * 4).toFixed(1) + "s;--del:-" + (azar() * 6).toFixed(1) + "s";
      frag.appendChild(e);
    }
    cielo.appendChild(frag);
  }

  /* ---------- apariciones al entrar en pantalla ---------- */
  // [selector, tipo, escalonar entre hermanos]
  const REGLAS = [
    [".entrada", "", false],
    [".letra-chica", "", false],
    [".sacudida", "", true],
    [".evidencia h3, .evidencia li", "", true],
    [".mesa__cuarto", "zoom", false],
    [".mesa__control", "der", false],
    [".capas > div", "", true],
    [".camara__marco", "zoom", false],
    [".camara__controles", "", false],
    [".ficha__tabla tr", "", true],
    [".caja", "der", false],
    [".comparativa tbody tr", "", true],
    [".razones > div", "", true],
    [".publico", "", true],
    [".precio", "", true],
    [".acordeon details", "", true],
    [".pantalla", "zoom", false],
    [".pantalla__abrir", "", false],
    [".enlaces li", "", true],
    [".lista", "der", false],
    [".creditos__lista > div", "", true],
    ["[data-ap-auto]", "", true],
  ];
  function prepararApariciones() {
    REGLAS.forEach(([sel, tipo, escalonar]) => {
      $$(sel).forEach((el) => {
        if (el.hasAttribute("data-ap")) return;
        el.setAttribute("data-ap", tipo);
        if (escalonar) {
          const hermanos = Array.from(el.parentElement.children).filter((x) => x.matches(sel));
          el.style.setProperty("--d", Math.min(hermanos.indexOf(el), 8) * 80 + "ms");
        }
      });
    });
    // títulos de sección: palabra por palabra
    $$("main h2, .creditos__titulo").forEach((h) => {
      if (h.dataset.partido) return;
      h.dataset.partido = "1";
      h.setAttribute("aria-label", h.textContent.trim());
      const palabras = h.textContent.trim().split(/\s+/);
      h.textContent = "";
      palabras.forEach((p, i) => {
        const pal = document.createElement("span");
        pal.className = "pal";
        pal.setAttribute("aria-hidden", "true");
        const dentro = document.createElement("span");
        dentro.textContent = p;
        dentro.style.setProperty("--i", i);
        pal.appendChild(dentro);
        h.appendChild(pal);
        if (i < palabras.length - 1) h.appendChild(document.createTextNode(" "));
      });
    });
  }
  function observarApariciones() {
    const blancos = $$("[data-ap], main h2, .creditos__titulo");
    if (!("IntersectionObserver" in window)) { blancos.forEach((el) => el.classList.add("visto")); return; }
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visto"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    blancos.forEach((el) => io.observe(el));
  }
  if (mov()) { prepararApariciones(); observarApariciones(); }

  /* ---------- cifras que cuentan (solo cifras reales de la investigación) ---------- */
  // <span data-cuenta="164">164</span>, o data-cuenta="36-56" para rangos; data-dec para decimales
  const cifras = $$("[data-cuenta]");
  const formato = (v, dec) => v.toLocaleString("es-MX", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  function contar(el) {
    const partes = el.dataset.cuenta.split("-").map(Number);
    const dec = parseInt(el.dataset.dec || "0", 10);
    const sep = el.dataset.sep || "–";
    const final = el.textContent;
    const dur = parseInt(el.dataset.dur || "1400", 10);
    const t0 = performance.now();
    const paso = (now) => {
      const k = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - k, 4); // desacelera al llegar
      el.textContent = partes.map((n) => formato(n * e, dec)).join(sep);
      if (k < 1) requestAnimationFrame(paso); else el.textContent = final;
    };
    requestAnimationFrame(paso);
  }
  if (mov() && cifras.length && "IntersectionObserver" in window) {
    cifras.forEach((el) => {
      // reserva el ancho final para que nada salte mientras cuenta
      el.style.display = "inline-block";
      el.style.minWidth = el.getBoundingClientRect().width + "px";
      el.style.fontVariantNumeric = "tabular-nums";
    });
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => { if (e.isIntersecting) { contar(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.6 });
    cifras.forEach((el) => io.observe(el));
  }

  /* ---------- avance del amanecer + producto de la portada que sigue al cursor ---------- */
  const avance = $("#avance");
  const prod = $("#producto-toma");
  const toma = $(".toma");
  const fino = window.matchMedia("(hover: hover) and (pointer: fine)");
  let mx = 0, my = 0, ax = 0, ay = 0, pend = false;

  function cuadro() {
    pend = false;
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (avance) avance.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0).toFixed(4) + ")";
    if (prod && mov()) {
      ax += (mx - ax) * 0.08;
      ay += (my - ay) * 0.08;
      const alto = toma.offsetHeight;
      const baja = y < alto ? y * -0.12 : 0;
      prod.style.transform = "perspective(1200px) translate3d(" + (ax * 14).toFixed(2) + "px," + (ay * 10 + baja).toFixed(2) + "px,0) rotateX(" + (-ay * 4).toFixed(2) + "deg) rotateY(" + (ax * 6).toFixed(2) + "deg)";
      if (Math.abs(mx - ax) > 0.002 || Math.abs(my - ay) > 0.002) pedir();
    }
  }
  const pedir = () => { if (!pend) { pend = true; requestAnimationFrame(cuadro); } };
  window.addEventListener("scroll", pedir, { passive: true });
  window.addEventListener("resize", pedir);
  if (toma && fino.matches) {
    toma.addEventListener("pointermove", (e) => {
      const r = toma.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
      pedir();
    });
    toma.addEventListener("pointerleave", () => { mx = 0; my = 0; pedir(); });
  }
  quieto.addEventListener?.("change", () => { if (quieto.matches && prod) prod.style.transform = ""; });
  pedir();
})();
