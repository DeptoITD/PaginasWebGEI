/**
 * cookies.js - Banner de cookies
 * Grupo Empresarial INDESCO
 */

document.addEventListener("DOMContentLoaded", function () {
  const yaExiste = document.getElementById("cookie-banner-ref");
  const preferenciaGuardada = localStorage.getItem("cookiesAceptadas");

  if (!preferenciaGuardada && !yaExiste) {
    const banner = document.createElement("div");
    banner.id = "cookie-banner-ref";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Aviso de uso de cookies");

    banner.innerHTML = `
      <h2>Usamos cookies</h2>
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px; max-width: 1400px; margin: 0 auto; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 280px;">
          <p>
            Este sitio web utiliza cookies para mejorar tu experiencia y analizar el tráfico. Al continuar navegando, aceptas nuestra Política de Cookies. Puedes leer más sobre cómo usamos tus datos personales en nuestra
            <a href="https://www.indesco.la/_files/ugd/33ea43_414a2185224940adb287b1be87c0e195.pdf" target="_blank" rel="noopener noreferrer">política de privacidad</a>.
          </p>
        </div>
        <div style="display: flex; gap: 10px; align-items: center; flex-shrink: 0; flex-wrap: wrap;">
          <button id="rechazar-cookies-ref" type="button" class="cookie-btn-outline">
            Rechazar no esenciales
          </button>
          <button id="aceptar-cookies-ref" type="button" class="cookie-btn-accent">
            Aceptar
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    document.getElementById("aceptar-cookies-ref").addEventListener("click", function () {
      localStorage.setItem("cookiesAceptadas", "todas");
      banner.remove();
    });

    document.getElementById("rechazar-cookies-ref").addEventListener("click", function () {
      localStorage.setItem("cookiesAceptadas", "esenciales");
      banner.remove();
    });
  }
});
