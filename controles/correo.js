/**
 * correo.js - Envío de formularios con EmailJS
 * Grupo Empresarial INDESCO
 *
 * - #contactForm: formulario del modal de contacto (todas las páginas).
 * - #trabajaForm: formulario "Trabaja con nosotros" (si existe en la página).
 */

document.addEventListener("DOMContentLoaded", function () {
  const SERVICE_ID = "service_ulbyg1e";
  const TEMPLATE_ID = "template_fz9ndsk";
  const MENSAJE_ERROR = "No pudimos enviar tu información. Intenta de nuevo o escribe a comercial@grupoindesco.com.";

  if (typeof emailjs === "undefined") {
    console.error("EmailJS no cargó: los formularios no se pueden enviar.");
    return;
  }
  emailjs.init("whwx2I9xs36zdfvw6");

  // Envía los datos y restaura el botón al terminar, tenga o no éxito
  function enviar(boton, textoEnviando, data, onOk) {
    const textoOriginal = boton.textContent;
    boton.disabled = true;
    boton.textContent = textoEnviando;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data)
      .then(onOk, function (err) {
        console.error("Error EmailJS", err);
        alert(MENSAJE_ERROR);
      })
      .finally(function () {
        boton.disabled = false;
        boton.textContent = textoOriginal;
      });
  }

  // Oculta el formulario, muestra el mensaje de éxito y luego ejecuta callback.
  // No se reemplaza el HTML del formulario: sus referencias y listeners deben seguir vivos.
  function mostrarAgradecimiento(formEl, texto, callback) {
    const mensaje = document.createElement("p");
    mensaje.className = "text-center py-4 h5";
    mensaje.style.color = "#3B0E1D";
    mensaje.setAttribute("role", "status");
    mensaje.textContent = texto;

    formEl.hidden = true;
    formEl.parentElement.insertBefore(mensaje, formEl);

    setTimeout(function () {
      mensaje.remove();
      formEl.hidden = false;
      if (callback) callback();
    }, 2500);
  }

  // --- Modal de contacto ---
  const contactForm = document.getElementById("contactForm");
  const modalContactoEl = document.getElementById("modalContacto");
  const btnContacto = document.getElementById("enviarMensaje");

  if (contactForm && modalContactoEl && btnContacto) {
    const modalContacto = bootstrap.Modal.getOrCreateInstance(modalContactoEl);

    btnContacto.addEventListener("click", function () {
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const data = {
        nombre: contactForm.nombre.value.trim(),
        telefono: contactForm.telefono.value.trim(),
        email: contactForm.email.value.trim(),
        mensaje: contactForm.mensaje.value.trim(),
        destino: "comercial@grupoindesco.com"
      };

      enviar(btnContacto, "Enviando...", data, function () {
        mostrarAgradecimiento(contactForm, "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.", function () {
          modalContacto.hide();
        });
      });
    });

    modalContactoEl.addEventListener("hidden.bs.modal", function () {
      contactForm.reset();
    });
  }

  // --- Trabaja con nosotros ---
  const trabajaForm = document.getElementById("trabajaForm");
  const btnTrabaja = document.getElementById("enviarTrabaja");

  if (trabajaForm && btnTrabaja) {
    btnTrabaja.addEventListener("click", function () {
      if (!trabajaForm.checkValidity()) {
        trabajaForm.reportValidity();
        return;
      }

      const data = {
        nombre: trabajaForm.querySelector("#trabajaNombre").value.trim(),
        telefono: trabajaForm.querySelector("#trabajaTelefono").value.trim(),
        email: trabajaForm.querySelector("#trabajaEmail").value.trim(),
        area: trabajaForm.querySelector("#trabajaArea").value,
        perfil: trabajaForm.querySelector("#trabajaPerfil").value.trim(),
        cv_link: trabajaForm.querySelector("#trabajaCvLink").value.trim() || "No adjuntó enlace",
        destinatarios: "gth@indesco.com.co, comercial@indesco.com.co"
      };

      enviar(btnTrabaja, "Enviando postulación...", data, function () {
        mostrarAgradecimiento(trabajaForm, "¡Postulación recibida! Tu hoja de vida fue enviada a Gestión de Talento Humano (GTH) y Comercial.", function () {
          trabajaForm.reset();
        });
      });
    });
  }
});
