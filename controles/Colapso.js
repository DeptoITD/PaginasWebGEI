// Highlight the active link
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the 'active' class from all other menu items
    navItems.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
      }
    });

    // Add the 'active' class to the clicked menu item
    link.classList.add('active');
  });
});

// Hide the navbar collapse after clicking a link on small devices
const links = document.querySelectorAll('.nav-link');
for (const link of links) {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      const collapseElement = document.getElementById('navbarSupportedContent');
      const collapse = new bootstrap.Collapse(collapseElement, {
        toggle: false // Set toggle to false to prevent hiding the collapse on subsequent clicks
      });
      collapse.hide();
    }
  });
}