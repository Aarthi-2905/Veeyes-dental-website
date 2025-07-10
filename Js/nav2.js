document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Only close if it's NOT a dropdown-toggle
            if (!this.classList.contains('dropdown-toggle')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

    // Prevent dropdown from closing navbar
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
        menu.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });

    // Close navbar when clicking outside (on mobile)
    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = navbarCollapse.contains(event.target);
        const isNavbarOpen = navbarCollapse.classList.contains('show');

        if (!isClickInsideNavbar && isNavbarOpen) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});