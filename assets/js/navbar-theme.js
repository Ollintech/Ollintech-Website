(function () {
    const header = document.getElementById('site-header');
    if (!header) return;

    const sections = document.querySelectorAll('[data-header-theme]');
    const themes = ['hero', 'light', 'dark'];

    function getScrollProbe() {
        return window.scrollY + header.offsetHeight * 0.55;
    }

    function updateNavbarTheme() {
        const probe = getScrollProbe();
        let theme = 'hero';

        sections.forEach((section) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (probe >= top && probe < bottom) {
                theme = section.dataset.headerTheme;
            }
        });

        themes.forEach((t) => {
            header.classList.toggle(`site-header--${t}`, t === theme);
        });
    }

    let ticking = false;
    function onScroll() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(() => {
                updateNavbarTheme();
                ticking = false;
            });
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateNavbarTheme);
    updateNavbarTheme();
})();
