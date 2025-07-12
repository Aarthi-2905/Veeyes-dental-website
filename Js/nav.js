document.addEventListener('DOMContentLoaded', function () {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (!navbarCollapse || !navbarToggler) return; // Stop if elements not found

  const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');

  // Collapse navbar on nav-link click
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    });
  });

  // Prevent dropdown menu clicks from closing navbar
  dropdownMenus.forEach(menu => {
    menu.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

  // Collapse navbar if clicking outside (in mobile view)
  document.addEventListener('click', function (event) {
    // Safe check first
    if (!navbarCollapse) return;

    const isNavbarOpen = navbarCollapse.classList.contains('show');
    const isClickInsideNavbar = navbarCollapse.contains(event.target);

    if (!isClickInsideNavbar && isNavbarOpen && !navbarToggler.contains(event.target)) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  });
});
