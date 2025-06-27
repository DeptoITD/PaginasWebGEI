document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookiesAceptadas")) {
    const popup = document.createElement("div");
    popup.id = "cookie-popup";
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.left = "20px";
    popup.style.right = "20px";
    popup.style.background = "#40735b"; // color de fondo desde style.css
    popup.style.color = "#fff";
    popup.style.border = "1px solid #3B0E1D";
    popup.style.padding = "20px";
    popup.style.zIndex = "9999";
    popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    popup.style.borderRadius = "8px";

    popup.innerHTML = `
      <p style="margin: 0 0 10px 0;">
        Este sitio web utiliza cookies para mejorar tu experiencia y analizar el tráfico.
        Al continuar navegando, aceptas nuestra Política de Cookies.
        Puedes leer más sobre cómo usamos tus datos personales en nuestra
        <a href="#politica-privacidad" style="color: #6b3088; text-decoration: underline;">política de privacidad</a>.
      </p>
      <button id="aceptar-cookies" style="background-color: #7b0010; color: white; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer;">
        Aceptar
      </button>
    `;

    document.body.appendChild(popup);

    document.getElementById("aceptar-cookies").addEventListener("click", function () {
      localStorage.setItem("cookiesAceptadas", "true");
      popup.style.display = "none";
    });
  }
});
