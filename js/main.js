/* AuraSleep — interacciones del sitio. Sin dependencias ni rastreadores. */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  const fmt = (m) => {
    if (m >= -0.001) return "0:00";
    const s = Math.round(-m * 60);
    return "−" + Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  };
  // curva de luz: igual que en el visor 3D (sube lento y luego se estabiliza)
  const luz = (m) => {
    const s = Math.min(Math.max((m + 15) / 15, 0), 1);
    return Math.pow(s * s * (3 - 2 * s), 1.4);
  };

  /* ---------- barra: reloj de la noche al amanecer + tema ---------- */
  const barra = $("#barra");
  const relojTxt = $("#reloj-txt");
  const reloj = $("#reloj");
  const horizonte = $(".horizonte");
  const precio = $("#precio");
  let pendiente = false;
  function alDesplazar() {
    pendiente = false;
    const fin = horizonte.offsetTop + horizonte.offsetHeight * 0.6 - window.innerHeight * 0.5;
    const p = Math.min(Math.max(window.scrollY / Math.max(fin, 1), 0), 1);
    const m = -15 + 15 * p;
    relojTxt.textContent = p >= 1 ? "Hora" : fmt(m);
    reloj.style.setProperty("--brillo", (0.25 + luz(m) * 0.75).toFixed(3));
    barra.classList.toggle("es-dia", precio.getBoundingClientRect().top <= 64);
  }
  window.addEventListener("scroll", () => {
    if (!pendiente) { pendiente = true; requestAnimationFrame(alDesplazar); }
  }, { passive: true });
  window.addEventListener("resize", alDesplazar);
  alDesplazar();

  /* ---------- línea de tiempo del despertar ---------- */
  const rango = $("#linea-rango");
  const salida = $("#linea-min");
  const unidad = $("#linea-unidad");
  const capaLuz = $("#linea-luz");
  const aroma = $("#aroma");
  const filas = $$("#secuencia li");
  const play = $("#linea-play");
  let animando = null;

  function pintar(m) {
    const pct = ((m + 15) / 15) * 100;
    rango.style.setProperty("--p", pct + "%");
    capaLuz.style.opacity = luz(m).toFixed(3);
    const hora = m >= -0.001;
    salida.textContent = hora ? "Hora" : fmt(m);
    unidad.textContent = hora ? "despiertas con luz estable" : "min para tu hora";
    const conAroma = m >= -10;
    aroma.classList.toggle("activo", conAroma);
    aroma.style.setProperty("--cadencia", m >= -5 ? "1.9s" : "3.4s");
    let texto = "";
    filas.forEach((li) => {
      const ok = m >= parseFloat(li.dataset.desde) && m < parseFloat(li.dataset.hasta);
      li.classList.toggle("actual", ok);
      if (ok) texto = li.textContent.replace(/\s+/g, " ").trim();
    });
    rango.setAttribute("aria-valuetext", (hora ? "Hora de despertar" : fmt(m).replace("−", "menos ") + " minutos") + ". " + texto);
  }

  function detener() {
    if (animando) cancelAnimationFrame(animando);
    animando = null;
    play.setAttribute("aria-pressed", "false");
    play.textContent = "Reproducir el despertar";
  }

  rango.addEventListener("input", () => { detener(); pintar(parseFloat(rango.value)); });

  play.addEventListener("click", () => {
    if (animando) { detener(); return; }
    let inicio = parseFloat(rango.value);
    if (inicio >= -0.001) inicio = -15;
    const t0 = performance.now() - ((inicio + 15) / 15) * 15000; // 1 s por minuto
    play.setAttribute("aria-pressed", "true");
    play.textContent = "Pausar";
    const paso = (now) => {
      const m = Math.min(-15 + ((now - t0) / 15000) * 15, 0);
      rango.value = m;
      pintar(m);
      if (m >= 0) { detener(); return; }
      animando = requestAnimationFrame(paso);
    };
    animando = requestAnimationFrame(paso);
  });
  pintar(parseFloat(rango.value));

  /* ---------- visor 3D ---------- */
  const marco = $("#visor-marco");
  const poster = $("#visor-poster");
  const activar = $("#visor-activar");
  const ayuda = $("#visor-ayuda");
  const pie = $("#visor-pie");
  const estado = { vista: "perspectiva", color: "blanco" };
  let iframe = null;

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
      poster.src = "public/img/hero_" + estado.color + ".webp";
      poster.alt = "Vista en perspectiva de la almohada AuraSleep color " + NOMBRES[estado.color] + ".";
      poster.classList.remove("es-vista");
    } else {
      poster.src = "public/img/vista_" + estado.vista + (["uso", "frontal", "posterior", "izquierda"].includes(estado.vista) ? ".jpg" : ".webp");
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
    // "#embed" en vez de "?embed=1": algunos servidores (npx serve) redirigen y pierden la consulta.
    // La vista y el color se envían por postMessage al cargar.
    iframe.src = "modelo-3d/aurasleep-3d.html#embed";
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
  // Simular: corre la secuencia de 15 min (en ~14 s) dentro del modelo; si no estaba cargado, lo carga primero.
  let simularPendiente = false;
  $("#visor-simular").addEventListener("click", () => {
    if (iframe) enviar({ play: true }); else { simularPendiente = true; cargar3D(); }
  });

  // En escritorio se carga solo al acercarse; en celular espera a que la persona lo pida.
  const escritorio = window.matchMedia("(min-width: 861px) and (pointer: fine)");
  if (escritorio.matches && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entradas) => {
      if (entradas.some((e) => e.isIntersecting)) { cargar3D(); io.disconnect(); }
    }, { rootMargin: "400px 0px" });
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

  /* ---------- lista de espera (demostrativa: no envía nada) ---------- */
  const form = $("#form-lista");
  const correo = $("#f-correo");
  const error = $("#f-correo-error");
  const ok = $("#form-ok");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo.value.trim());
    correo.setAttribute("aria-invalid", String(!valido));
    error.hidden = valido;
    if (!valido) { ok.hidden = true; correo.focus(); return; }
    const nombre = $("#f-nombre").value.trim();
    ok.textContent = (nombre ? "Listo, " + nombre + ". " : "Listo. ") +
      "Como es una demostración, tus datos no se enviaron ni se guardaron en ningún lado.";
    ok.hidden = false;
    form.reset();
    correo.removeAttribute("aria-invalid");
  });
  correo.addEventListener("input", () => {
    if (correo.getAttribute("aria-invalid") === "true" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo.value.trim())) {
      correo.removeAttribute("aria-invalid"); error.hidden = true;
    }
  });

  /* ---------- presentación de Canva: solo se carga al pedirla (sin cookies de terceros por defecto) ---------- */
  const canva = $("#canva");
  const canvaBtn = $("#canva-cargar");
  const canvaFrente = $("#canva-frente");
  const canvaEstado = $("#canva-estado");
  const canvaTxt = $("#canva-btn-txt");
  const CANVA_VER = "https://www.canva.com/design/DAHZhJLSbZk/PKP8oiFlfbjpvsR61WyPbQ/view";

  // Adelanta la conexión (DNS + TLS, sin cookies) cuando la persona se acerca al botón.
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

  // El reproductor de Canva mueve el scroll de la página al iniciar. Mientras carga
  // (y un momento después) se mantiene la posición, salvo que la persona se desplace.
  function sostenerScroll(hastaListo) {
    const y = window.scrollY;
    let activo = true;
    const soltar = () => { activo = false; };
    const opts = { passive: true, once: true };
    window.addEventListener("wheel", soltar, opts);
    window.addEventListener("touchmove", soltar, opts);
    window.addEventListener("keydown", soltar, opts);
    const guardia = () => { if (activo && Math.abs(window.scrollY - y) > 2) window.scrollTo(0, y); };
    window.addEventListener("scroll", guardia, { passive: true });
    const fin = () => { activo = false; window.removeEventListener("scroll", guardia); };
    hastaListo.then(() => setTimeout(fin, 2500));
    setTimeout(fin, 15000);
  }

  canvaBtn.addEventListener("click", () => {
    const src = canva.dataset.src;
    if (!src) { window.open(CANVA_VER, "_blank", "noopener"); return; }
    if (canva.classList.contains("cargando")) return;
    canva.classList.add("cargando");
    canvaBtn.setAttribute("aria-disabled", "true");
    canvaTxt.textContent = "Cargando presentación…";
    canvaEstado.textContent = "";

    const f = document.createElement("iframe");
    f.title = "Presentación de venta de AuraSleep en Canva";
    f.allow = "fullscreen";
    f.allowFullscreen = true;
    const listo = new Promise((r) => f.addEventListener("load", r, { once: true }));
    sostenerScroll(listo);
    f.src = src;
    canva.appendChild(f); // detrás de la portada, que sigue visible mientras carga

    const lento = setTimeout(() => {
      canvaEstado.innerHTML = 'Está tardando un poco. Si no aparece, <a href="' + CANVA_VER + '" target="_blank" rel="noopener">ábrela en Canva</a>.';
    }, 8000);

    listo.then(() => {
      clearTimeout(lento);
      // Canva termina de dibujar la primera diapositiva poco después del evento load.
      setTimeout(() => {
        canva.classList.remove("cargando");
        canva.classList.add("lista");
        canvaFrente.classList.add("se-va");
        setTimeout(() => canvaFrente.remove(), 450);
      }, 600);
    });
  });

  /* ---------- referencias: abre "Fuentes" al saltar a una ---------- */
  const fuentes = $(".fuentes");
  $$('a[href^="#fuente-"]').forEach((a) => a.addEventListener("click", () => { fuentes.open = true; }));
  if (location.hash.startsWith("#fuente-")) fuentes.open = true;
})();
