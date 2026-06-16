document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("whwx2I9xs36zdfvw6");

  var modal = new bootstrap.Modal(document.getElementById("modalContacto"));
  var form = document.getElementById("contactForm");

  // Guardar el contenido original del modal
  var contenidoOriginal = document.getElementById("modalContacto").innerHTML;

  document.getElementById("enviarMensaje").addEventListener("click", function () {
    if (validarFormulario()) {
      enviarEmail();
    }
  });

  modal._element.addEventListener("hidden.bs.modal", function () {
    limpiarFormulario();
    // Restaurar el contenido original del modal al cerrar
    document.getElementById("modalContacto").innerHTML = contenidoOriginal;
  });

  function validarFormulario() {
    var inputs = form.querySelectorAll("input, textarea");

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false;
      }
    }

    return true;
  }

  function limpiarFormulario() {
    form.reset();
  }

  function enviarEmail() {
    var form = document.getElementById("contactForm");

    var nombre = form.querySelector("#nombre").value;
    var telefono = form.querySelector("#telefono").value;
    var email = form.querySelector("#email").value;
    var mensaje = form.querySelector("#mensaje").value;

    var data = {
      nombre: nombre,
      telefono: telefono,
      email: email,
      mensaje: mensaje,
    };

    emailjs.send("service_ulbyg1e", "template_fz9ndsk", data).then(
      function (response) {
        console.log("Correo enviado con éxito", response);

        // Ocultar botones de cerrar y enviar
        var modalFooter = modal._element.querySelector(".modal-footer");
        modalFooter.style.display = "none";

        // Mostrar mensaje de agradecimiento 
        var modalBody = modal._element.querySelector(".modal-body");
        modalBody.innerHTML =
          '<p class="text-center" style="transition: opacity 0.3s;">¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>';

        // Cerrar el modal después de x segundos
        setTimeout(function () {
          modal.hide();
        }, 1200); // 1000 milisegundos = 1 segundo
      },
      function (error) {
        console.log("Error al enviar el correo", error);
        // Puedes manejar errores aquí si es necesario
      }
    );
  }
});
