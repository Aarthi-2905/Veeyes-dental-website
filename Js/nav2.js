document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    if (navbarCollapse) {
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
            const isNavbarOpen = navbarCollapse.classList.contains('show');
            const isClickInsideNavbar = navbarCollapse.contains(event.target);

            if (!isClickInsideNavbar && isNavbarOpen) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    }
});
