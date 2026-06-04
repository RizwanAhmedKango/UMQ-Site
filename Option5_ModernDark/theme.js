/* Light/dark toggle for Option 5. The initial theme is set by an inline
   script in <head> (before paint) to avoid a flash; this wires the button. */
(function () {
  var btn = document.getElementById('theme-btn');
  if (!btn) return;
  function paint() {
    var t = document.documentElement.getAttribute('data-theme');
    btn.innerHTML = t === 'dark'
      ? '<i class="fas fa-sun" aria-hidden="true"></i>'
      : '<i class="fas fa-moon" aria-hidden="true"></i>';
    btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
  }
  paint();
  btn.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme');
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('umq-theme', next); } catch (e) {}
    paint();
  });
})();
