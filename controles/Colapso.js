// Marca el enlace activo y cierra el menú móvil al elegir una opción
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navItems.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
      }
    });
    link.classList.add('active');
  });
});

// Cierra el menú colapsado después de hacer clic en un enlace en pantallas pequeñas
for (const link of navItems) {
  link.addEventListener('click', () => {
    // 992px = punto de quiebre de navbar-expand-lg de Bootstrap
    if (window.innerWidth < 992) {
      const collapseElement = document.getElementById('navbarSupportedContent');
      const collapse = new bootstrap.Collapse(collapseElement, {
        toggle: false
      });
      collapse.hide();
    }
  });
}
