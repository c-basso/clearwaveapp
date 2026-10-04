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

    // Online water eject tone (Web Audio API)
    var tp = document.querySelector('[data-tone-player]');
    if (tp && (window.AudioContext || window.webkitAudioContext)) {
        var btn = tp.querySelector('[data-tp-toggle]'), range = tp.querySelector('[data-tp-range]'),
            hzOut = tp.querySelector('[data-tp-hz]'), bar = tp.querySelector('[data-tp-bar]'),
            secs = +tp.getAttribute('data-secs') || 30, unit = tp.getAttribute('data-unit') || 'Hz',
            ctx = null, osc = null, gain = null, t0 = 0, raf = 0;
        var label = function () {
            btn.textContent = osc ? tp.getAttribute('data-stop') : tp.getAttribute('data-play').replace('{hz}', range.value);
            btn.setAttribute('aria-pressed', osc ? 'true' : 'false');
        };
        var stop = function () {
            if (!osc) return;
            var o = osc, now = ctx.currentTime;
            gain.gain.cancelScheduledValues(now);
            gain.gain.setValueAtTime(gain.gain.value, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.1);
            o.stop(now + 0.12);
            osc = null; cancelAnimationFrame(raf); bar.style.width = '0'; label();
        };
        var tick = function () {
            var p = (performance.now() - t0) / 1000 / secs;
            bar.style.width = Math.min(p, 1) * 100 + '%';
            if (p >= 1) stop(); else raf = requestAnimationFrame(tick);
        };
        var start = function () {
            try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}
            ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
            if (ctx.resume) ctx.resume();
            osc = ctx.createOscillator(); gain = ctx.createGain();
            osc.type = 'sine'; osc.frequency.value = +range.value;
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.9, ctx.currentTime + 0.15);
            osc.connect(gain); gain.connect(ctx.destination); osc.start();
            t0 = performance.now(); tick(); label();
        };
        btn.addEventListener('click', function () { osc ? stop() : start(); });
        range.addEventListener('input', function () {
            hzOut.textContent = range.value + ' ' + unit;
            if (osc) osc.frequency.setTargetAtTime(+range.value, ctx.currentTime, 0.05); else label();
        });
        document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); });
    } else if (tp) { tp.hidden = true; }
})();
