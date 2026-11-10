/* AuraSleep v2 — interacciones. Sin dependencias ni rastreadores. */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const quieto = window.matchMedia("(prefers-reduced-motion: reduce)");

  const fmt = (m) => {
    if (m >= -0.001) return "0:00";
    const s = Math.round(-m * 60);
    return "−" + Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  };
  // misma curva de luz que el visor 3D: sube lento y se estabiliza
  const luz = (m) => {
    const s = Math.min(Math.max((m + 15) / 15, 0), 1);
    return Math.pow(s * s * (3 - 2 * s), 1.4);
  };

  /* ---------- barra: se marca al despegarse de la portada ---------- */
  const barra = $("#barra");
  let pendiente = false;
  function alDesplazar() {
    pendiente = false;
    barra.classList.toggle("desplazada", window.scrollY > 24);
  }
  window.addEventListener("scroll", () => { if (!pendiente) { pendiente = true; requestAnimationFrame(alDesplazar); } }, { passive: true });
  alDesplazar();

  /* ---------- la secuencia: el cuarto amanece minuto a minuto ---------- */
  const mesa = $("#mesa");
  const recorrido = $("#recorrido");
  const fijo = $(".recorrido__fijo");
  const rango = $("#mesa-rango");
  const salida = $("#mesa-min");
  const unidad = $("#mesa-unidad");
  const pasos = $$("#hoja .paso");
  const play = $("#mesa-play");
  const pistaMesa = $("#mesa-pista");
  const BARRA = 68;
  let animando = null;
  let minuto = -15;
  let fijado = false;
  const sujetar = (v, a, b) => Math.min(Math.max(v, a), b);
  const suaveIO = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

  function pintar(m) {
    minuto = m;
    const l = luz(m);
    recorrido.style.setProperty("--l", l.toFixed(3));
    rango.value = m;
    rango.style.setProperty("--p", ((m + 15) / 15) * 100 + "%");
    const hora = m >= -0.001;
    salida.textContent = hora ? "Hora" : fmt(m);
    unidad.textContent = hora ? "despiertas con luz estable" : "para tu hora";
    mesa.classList.toggle("con-aroma", m >= -10);
    mesa.style.setProperty("--cadencia", m >= -5 ? "1.9s" : "3.4s");
    let texto = "";
    pasos.forEach((p) => {
      const desde = parseFloat(p.dataset.desde), hasta = parseFloat(p.dataset.hasta);
      const ok = m >= desde && m < hasta;
      p.setAttribute("aria-pressed", String(ok));
      p.classList.toggle("pasado", m >= hasta);
      p.style.setProperty("--k", ok ? (hasta > 0 ? 1 : sujetar((m - desde) / (hasta - desde), 0, 1)).toFixed(3) : "0");
      if (ok) texto = p.textContent.replace(/\s+/g, " ").trim();
    });
    rango.setAttribute("aria-valuetext", (hora ? "Hora de despertar" : fmt(m).replace("−", "menos ") + " minutos") + ". " + texto);
  }
  // modo fijo: en pantallas amplias el scroll mueve los minutos
  const viaje = () => recorrido.offsetHeight - fijo.offsetHeight;
  const inicioRecorrido = () => recorrido.getBoundingClientRect().top + window.scrollY - BARRA;
  const yDeMinuto = (m) => inicioRecorrido() + ((m + 15) / 15) * viaje();
  function medirFijado() {
    const debe = !quieto.matches && window.innerWidth >= 901 && window.innerHeight >= 680;
    if (debe !== fijado) { fijado = debe; recorrido.classList.toggle("fijado", fijado); }
    if (fijado) desdeScroll();
  }
  function desdeScroll() {
    if (!fijado) return;
    const top = recorrido.getBoundingClientRect().top;
    const p = sujetar((BARRA - top) / viaje(), 0, 1);
    pintar(-15 + 15 * p);
    pistaMesa.classList.toggle("fuera", p > 0.04);
  }
  let pendMesa = false;
  window.addEventListener("scroll", () => {
    if (fijado && !pendMesa) { pendMesa = true; requestAnimationFrame(() => { pendMesa = false; desdeScroll(); }); }
  }, { passive: true });
  window.addEventListener("resize", medirFijado);
  quieto.addEventListener?.("change", medirFijado);

  // lleva la secuencia a un minuto: con scroll en modo fijo, o animando los minutos
  function irA(destino, dur, alTerminar) {
    if (animando) cancelAnimationFrame(animando);
    const parejo = dur > 2000; // la reproducción va a ritmo constante; los saltos, con curva
    if (quieto.matches) {
      if (fijado) window.scrollTo({ top: yDeMinuto(destino), behavior: "instant" }); else pintar(destino);
      if (alTerminar) alTerminar();
      return;
    }
    const t0 = performance.now();
    if (fijado) {
      const y0 = window.scrollY, y1 = yDeMinuto(destino);
      const cuadro = (now) => {
        const k = sujetar((now - t0) / dur, 0, 1);
        window.scrollTo({ top: y0 + (y1 - y0) * (parejo ? k : suaveIO(k)), behavior: "instant" });
        if (k < 1) animando = requestAnimationFrame(cuadro); else { animando = null; if (alTerminar) alTerminar(); }
      };
      animando = requestAnimationFrame(cuadro);
    } else {
      const m0 = minuto;
      const cuadro = (now) => {
        const k = sujetar((now - t0) / dur, 0, 1);
        pintar(m0 + (destino - m0) * (parejo ? k : suaveIO(k)));
        if (k < 1) animando = requestAnimationFrame(cuadro); else { animando = null; if (alTerminar) alTerminar(); }
      };
      animando = requestAnimationFrame(cuadro);
    }
  }
  function detener() {
    if (animando) cancelAnimationFrame(animando);
    animando = null;
    play.setAttribute("aria-pressed", "false");
    play.textContent = "Reproducir el despertar";
  }
  // si la persona toma el control del scroll, la reproducción se detiene
  ["wheel", "touchstart", "keydown"].forEach((ev) => window.addEventListener(ev, (e) => {
    if (play.getAttribute("aria-pressed") !== "true") return;
    if (ev === "keydown" && (e.target === play || e.key === "Tab" || e.key === "Shift")) return;
    detener();
  }, { passive: true }));
  rango.addEventListener("input", () => {
    detener();
    const m = parseFloat(rango.value);
    if (fijado) window.scrollTo({ top: yDeMinuto(m), behavior: "instant" }); else pintar(m);
  });
  pasos.forEach((p) => p.addEventListener("click", () => {
    detener();
    irA(parseFloat(p.dataset.min), 900);
  }));
  play.addEventListener("click", () => {
    if (play.getAttribute("aria-pressed") === "true") { detener(); return; }
    if (minuto >= -0.001) {
      if (fijado) window.scrollTo({ top: yDeMinuto(-15), behavior: "instant" });
      pintar(-15);
    }
    const inicio = minuto;
    play.setAttribute("aria-pressed", "true");
    play.textContent = "Pausar";
    irA(0, Math.max(-inicio * 1000, 2001), detener); // 1 s por minuto
  });
  pintar(-15);
  medirFijado();

  /* ---------- visor 3D con el marco "multiplano" ---------- */
  const marco = $("#visor-marco");
  const poster = $("#visor-poster");
  const activar = $("#visor-activar");
  const ayuda = $("#visor-ayuda");
  const pie = $("#visor-pie");
  const estado = { vista: "perspectiva", color: "blanco" };
  let iframe = null;
  let simularPendiente = false;
  const PIES = {
    perspectiva: "Perspectiva: la almohada con su base de carga por inducción, el botón táctil oculto y el difusor en el lateral.",
    superior: "Vista superior: la cinta de fibra óptica en el borde superior (60–80 cm lineales, 3–4 cm de ancho) y las medidas de 68 × 48 cm.",
    frontal: "Vista frontal: el ancho de 68 cm, el perfil ergonómico de 13 cm al centro y la base de carga por inducción bajo una esquina.",
    posterior: "Vista posterior: el borde superior con la cinta de fibra óptica cosida y el LED cálido que la alimenta en una esquina.",
    izquierda: "Vista lateral izquierda: el lado opuesto al difusor, con el fondo de 48 cm y el perfil de 13 cm al centro y unos 10 cm cerca de los bordes.",
    lateral: "Vista lateral derecha: el difusor de aroma tamaño moneda y el perfil ergonómico de 13 cm al centro y unos 10 cm cerca de los bordes.",
    interna: "Vista interna (rayos X): batería, placa BLE, bobina de inducción, sensor de presión, cartucho, microbomba y módulo LED dentro de una bolsita de malla acolchada.",
    uso: "En uso: con la cabeza apoyada, la luz de la cinta llega a los párpados cerrados y el difusor dirige ráfagas de aroma hacia la nariz, sin sonido. La figura es genérica, solo de referencia.",
  };
  const NOMBRES = { blanco: "Blanco roto", gris: "Gris piedra", beige: "Beige cálido" };

  function actualizarPoster() {
    if (estado.vista === "perspectiva") {
      poster.src = "../public/img/hero_" + estado.color + ".webp";
      poster.alt = "Vista en perspectiva de la almohada AuraSleep color " + NOMBRES[estado.color] + ".";
      poster.classList.remove("es-vista");
    } else {
      poster.src = "../public/img/vista_" + estado.vista + (["uso", "frontal", "posterior", "izquierda"].includes(estado.vista) ? ".jpg" : ".webp");
      poster.alt = PIES[estado.vista];
      poster.classList.add("es-vista");
    }
  }
  function enviar(datos) {
    if (iframe && iframe.contentWindow) iframe.contentWindow.postMessage(Object.assign({ aurasleep: true }, datos), "*");
  }
  function cargar3D() {
    if (iframe) return;
    iframe = document.createElement("iframe");
    iframe.title = "Modelo 3D interactivo de AuraSleep";
    // "#embed": algunos servidores (npx serve) redirigen y pierden la consulta; el hash se conserva.
    iframe.src = "../modelo-3d/aurasleep-3d.html#embed&marco=multiplano";
    iframe.addEventListener("load", () => {
      poster.hidden = true;
      enviar({ view: estado.vista, color: estado.color });
      if (simularPendiente) { simularPendiente = false; enviar({ play: true }); }
    });
    marco.appendChild(iframe);
    activar.hidden = true;
    ayuda.hidden = false;
    if (window.matchMedia("(pointer: coarse)").matches) ayuda.textContent = "Desliza a los lados para girar";
  }
  activar.addEventListener("click", cargar3D);
  $("#visor-simular").addEventListener("click", () => {
    if (iframe) enviar({ play: true }); else { simularPendiente = true; cargar3D(); }
  });
  if (window.matchMedia("(min-width: 901px) and (pointer: fine)").matches && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((e) => { if (e.some((x) => x.isIntersecting)) { cargar3D(); io.disconnect(); } }, { rootMargin: "400px 0px" });
    io.observe(marco);
  }
  $$("[data-vista]").forEach((b) => b.addEventListener("click", () => {
    estado.vista = b.dataset.vista;
    $$("[data-vista]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    pie.textContent = PIES[estado.vista];
    if (iframe) enviar({ view: estado.vista }); else actualizarPoster();
  }));
  $$("[data-color]").forEach((b) => b.addEventListener("click", () => {
    estado.color = b.dataset.color;
    $$("[data-color]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    if (iframe) enviar({ color: estado.color }); else actualizarPoster();
  }));

  /* ---------- selector vivo de color de funda ---------- */
  const muestrario = $("#muestrario");
  if (muestrario) {
    const fotos = $$(".muestrario__foto", muestrario);
    const botones = $$("[data-funda]", muestrario);
    const nombre = $("#funda-nombre");
    const ORDEN = ["blanco", "gris", "beige"];
    let actual = "blanco";
    let giro = null;
    let tocado = false;
    function elegir(color) {
      if (color === actual) return;
      fotos.forEach((f) => {
        const es = f.dataset.color === color;
        f.classList.toggle("sale", f.dataset.color === actual);
        f.classList.toggle("activa", es);
        if (es) f.removeAttribute("aria-hidden"); else f.setAttribute("aria-hidden", "true");
      });
      botones.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.funda === color)));
      muestrario.dataset.color = color;
      nombre.textContent = NOMBRES[color];
      nombre.classList.remove("cambia");
      void nombre.offsetWidth; // reinicia la animación del nombre
      nombre.classList.add("cambia");
      actual = color;
      setTimeout(() => fotos.forEach((f) => f.classList.remove("sale")), 820);
    }
    const parar = () => { if (giro) { clearInterval(giro); giro = null; } };
    const arrancar = () => {
      if (tocado || giro || quieto.matches || document.hidden) return;
      giro = setInterval(() => elegir(ORDEN[(ORDEN.indexOf(actual) + 1) % ORDEN.length]), 3200);
    };
    botones.forEach((b) => b.addEventListener("click", () => { tocado = true; parar(); elegir(b.dataset.funda); }));
    // mientras el cursor está encima, no cambia sola
    muestrario.addEventListener("pointerenter", parar);
    muestrario.addEventListener("pointerleave", arrancar);
    muestrario.addEventListener("focusin", parar);
    document.addEventListener("visibilitychange", () => (document.hidden ? parar() : visible && arrancar()));
    let visible = false;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((es) => {
        es.forEach((e) => { visible = e.isIntersecting; if (visible) arrancar(); else parar(); });
      }, { threshold: 0.5 }).observe(muestrario);
    }
  }

  /* ---------- la función: Canva solo carga al pedirla ---------- */
  const canva = $("#canva");
  const canvaBtn = $("#canva-cargar");
  const canvaFrente = $("#canva-frente");
  const canvaEstado = $("#canva-estado");
  const canvaTxt = $("#canva-btn-txt");
  const CANVA_VER = "https://www.canva.com/design/DAHZhJLSbZk/PKP8oiFlfbjpvsR61WyPbQ/view";
  let precalentado = false;
  const precalentar = () => {
    if (precalentado) return;
    precalentado = true;
    for (const h of ["https://www.canva.com", "https://static.canva.com"]) {
      const l = document.createElement("link");
      l.rel = "preconnect"; l.href = h; l.crossOrigin = "";
      document.head.appendChild(l);
    }
  };
  ["pointerenter", "focus", "touchstart"].forEach((ev) => canvaBtn.addEventListener(ev, precalentar, { passive: true }));
  // El reproductor de Canva mueve el scroll al iniciar; se mantiene la posición mientras carga.
  function sostenerScroll(listo) {
    const y = window.scrollY;
    let activo = true;
    const soltar = () => { activo = false; };
    const o = { passive: true, once: true };
    window.addEventListener("wheel", soltar, o);
    window.addEventListener("touchmove", soltar, o);
    window.addEventListener("keydown", soltar, o);
    const guardia = () => { if (activo && Math.abs(window.scrollY - y) > 2) window.scrollTo(0, y); };
    window.addEventListener("scroll", guardia, { passive: true });
    const fin = () => { activo = false; window.removeEventListener("scroll", guardia); };
    listo.then(() => setTimeout(fin, 2500));
    setTimeout(fin, 15000);
  }
  canvaBtn.addEventListener("click", () => {
    if (canva.classList.contains("cargando")) return;
    canva.classList.add("cargando");
    canvaBtn.setAttribute("aria-disabled", "true");
    canvaTxt.textContent = "Cargando presentación…";
    const f = document.createElement("iframe");
    f.title = "Presentación de venta de AuraSleep en Canva";
    f.allow = "fullscreen";
    f.allowFullscreen = true;
    const listo = new Promise((r) => f.addEventListener("load", r, { once: true }));
    sostenerScroll(listo);
    f.src = canva.dataset.src;
    canva.appendChild(f);
    const lento = setTimeout(() => {
      canvaEstado.innerHTML = 'Está tardando un poco. Si no aparece, <a href="' + CANVA_VER + '" target="_blank" rel="noopener">ábrela en Canva</a>.';
    }, 8000);
    listo.then(() => {
      clearTimeout(lento);
      setTimeout(() => {
        canva.classList.remove("cargando");
        canva.classList.add("lista");
        canvaFrente.classList.add("se-va");
        setTimeout(() => canvaFrente.remove(), 500);
      }, 600);
    });
  });

  /* ---------- lista de espera (demostrativa: no envía nada) ---------- */
  const form = $("#form-lista");
  const correo = $("#f-correo");
  const error = $("#f-correo-error");
  const ok = $("#form-ok");
  const valido = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const bien = valido(correo.value);
    correo.setAttribute("aria-invalid", String(!bien));
    error.hidden = bien;
    if (!bien) { ok.hidden = true; correo.focus(); return; }
    const nombre = $("#f-nombre").value.trim();
    ok.textContent = (nombre ? "Listo, " + nombre + ". " : "Listo. ") + "Como es una demostración, tus datos no se enviaron ni se guardaron en ningún lado.";
    ok.hidden = false;
    form.reset();
    correo.removeAttribute("aria-invalid");
  });
  correo.addEventListener("input", () => {
    if (correo.getAttribute("aria-invalid") === "true" && valido(correo.value)) { correo.removeAttribute("aria-invalid"); error.hidden = true; }
  });

  /* ---------- comparador: alarma contra AuraSleep ---------- */
  const duelo = $("#duelo");
  if (duelo) {
    const dRango = $("#duelo-rango");
    const dAura = $("#duelo-aura");
    const dDiv = $("#duelo-divisor");
    const nAlarma = $("#duelo-notas-alarma");
    const nAura = $("#duelo-notas-aura");
    let pista = null;
    const fijar = (x) => {
      dAura.style.clipPath = "inset(0 0 0 " + x + "%)";
      dDiv.style.left = x + "%";
      nAlarma.classList.toggle("atenua", x < 38);
      nAura.classList.toggle("atenua", x > 62);
      const r = Math.round(x);
      dRango.setAttribute("aria-valuetext", r <= 8 ? "Se ve solo el despertar con AuraSleep" : r >= 92 ? "Se ve solo el despertar con alarma" : r + " por ciento alarma, " + (100 - r) + " por ciento AuraSleep");
    };
    const soltarPista = () => { if (pista) { cancelAnimationFrame(pista); pista = null; } };
    dRango.addEventListener("input", () => { soltarPista(); fijar(parseFloat(dRango.value)); });
    ["pointerdown", "keydown"].forEach((ev) => dRango.addEventListener(ev, soltarPista));
    fijar(50);
    // una sola vez: la línea se mueve sola para enseñar que se puede arrastrar
    const ensenar = () => {
      const pasos = [[50, 0], [70, 700], [32, 1600], [50, 2300]];
      const t0 = performance.now();
      const suave = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
      const cuadro = (now) => {
        const t = now - t0;
        let i = 1;
        while (i < pasos.length - 1 && t > pasos[i][1]) i++;
        const [a, ta] = pasos[i - 1], [b, tb] = pasos[i];
        const k = Math.min(Math.max((t - ta) / (tb - ta), 0), 1);
        const x = a + (b - a) * suave(k);
        dRango.value = x;
        fijar(x);
        if (t < pasos[pasos.length - 1][1]) pista = requestAnimationFrame(cuadro); else pista = null;
      };
      pista = requestAnimationFrame(cuadro);
    };
    if ("IntersectionObserver" in window) {
      let mostrado = false;
      const io = new IntersectionObserver((es) => {
        es.forEach((e) => {
          duelo.classList.toggle("vivo", e.isIntersecting);
          if (e.isIntersecting) {
            duelo.classList.add("visto-curva");
            if (!mostrado && !quieto.matches) { mostrado = true; setTimeout(ensenar, 500); }
          }
        });
      }, { threshold: 0.45 });
      io.observe($("#duelo-marco"));
    } else duelo.classList.add("vivo", "visto-curva");
  }

  /* ---------- menú de celular: se cierra al elegir una sección ---------- */
  const menu = $(".menu");
  if (menu) $$("a", menu).forEach((a) => a.addEventListener("click", () => { menu.open = false; }));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && menu && menu.open) { menu.open = false; $("summary", menu).focus(); } });

  /* ---------- referencias: abre "Fuentes" al saltar a una ---------- */
  const fuentes = $(".fuentes");
  $$('a[href^="#fuente-"]').forEach((a) => a.addEventListener("click", () => { fuentes.open = true; }));
  if (location.hash.startsWith("#fuente-")) fuentes.open = true;
})();
