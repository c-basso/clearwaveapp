// Clear Wave — small progressive enhancements (no dependencies).
(function () {
    // Track App Store clicks by placement
    document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('[data-cta]');
        if (!a) return;
        var where = a.getAttribute('data-cta');
        if (window.gtag) gtag('event', 'app_store_click', { cta_location: where, page_path: location.pathname });
        if (window.ym) ym(103203417, 'reachGoal', 'app_store_click', { where: where });
    });

    // Sticky download bar on mobile after the first screen
    var bar = document.querySelector('[data-sticky]');
    if (bar) {
        bar.hidden = false;
        var onScroll = function () { bar.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6); };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // Table of contents: open on desktop, collapsed on phones
    var toc = document.querySelector('[data-toc]');
    if (toc && window.matchMedia('(min-width: 961px)').matches) toc.open = true;

    // Reveal-on-scroll
    if ('IntersectionObserver' in window) {
        var els = document.querySelectorAll('.guide-card, .how__steps li, .tool, .faq-item, .steps li');
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
        }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });
        els.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
    }
})();
