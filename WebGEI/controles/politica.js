// Espera a que todo el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

  // Busca el elemento con el ID "ver-politica" (el enlace que abre la política de privacidad)
  const politicaBtn = document.getElementById("ver-politica");

  // Verifica que el botón exista antes de intentar usarlo
  if (politicaBtn) {

    // Agrega un evento al botón para cuando el usuario haga clic
    politicaBtn.addEventListener("click", function (e) {
      
      // Previene el comportamiento por defecto del enlace (navegar a "#")
      e.preventDefault();

      // Crea una instancia del modal Bootstrap apuntando al modal con ID "modalPolitica"
      const politicaModal = new bootstrap.Modal(document.getElementById("modalPolitica"));

      // Muestra el modal en pantalla
      politicaModal.show();
    });
  }
});
