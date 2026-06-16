const formulario = document.querySelector("#contactForm");
const mensaje = formulario.querySelector("textarea#mensaje");

// Asignar la clase CSS personalizada a la caja de texto
mensaje.classList.add("mensaje-grande");

// Cambiar el tamaño de la caja de texto
mensaje.style.width = "100%";
mensaje.style.height = "150px";