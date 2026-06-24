/*
  Shared front-end behaviors for all designs (dependency-free, file:// + http safe):
   - active nav highlighting (adds .active + aria-current to the current page link)
   - scroll reveal for .fade-up / .reveal / [data-reveal]
   - animated number counters for [data-count] (respects reduced motion)
   - mobile nav toggle for [data-nav-toggle="#selector"]
   - dynamic footer year for [data-year]
*/
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function currentFile() {
    var p = window.location.pathname.split('/').filter(Boolean);
    var last = p.length ? p[p.length - 1] : '';
    if (!last || last.indexOf('.') === -1) last = 'index.html';
    return decodeURIComponent(last).toLowerCase();
  }

  function activeNav() {
    var here = currentFile();
    document.querySelectorAll('a.nav-link, [data-nav] a').forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
      var match = href === here || (here === 'index.html' && (href === '' || href === 'index.html'));
      if (match) { a.classList.add('active'); a.setAttribute('aria-current', 'page'); }
      else { a.classList.remove('active'); a.removeAttribute('aria-current'); }
    });
  }

  function reveal() {
    var els = document.querySelectorAll('.fade-up, .reveal, [data-reveal]');
    if (!els.length) return;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible', 'is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('visible', 'is-visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  function format(n, dec) { return Number(n.toFixed(dec)).toLocaleString('en-US'); }

  function counters() {
    var els = document.querySelectorAll('[data-count]');
    if (!els.length) return;
    function run(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      if (isNaN(target)) return;
      var suffix = el.getAttribute('data-suffix') || '';
      var dec = (target % 1 !== 0) ? 1 : 0;
      if (reduce) { el.textContent = format(target, dec) + suffix; return; }
      var dur = 1400, start = performance.now();
      (function tick(now) {
        var t = Math.min(1, (now - start) / dur);
        var eased = 1 - Math.pow(1 - t, 3);
        el.textContent = format(target * eased, dec) + suffix;
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = format(target, dec) + suffix;
      })(start);
    }
    if (!('IntersectionObserver' in window)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  }

  function mobileNav() {
    document.querySelectorAll('[data-nav-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sel = btn.getAttribute('data-nav-toggle');
        var target = sel ? document.querySelector(sel) : null;
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if (target) target.classList.toggle('open');
        else document.body.classList.toggle('nav-open');
      });
    });
  }

  function year() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  function init() { activeNav(); reveal(); counters(); mobileNav(); year(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
