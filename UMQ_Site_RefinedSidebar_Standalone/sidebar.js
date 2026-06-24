/* Collapsible icon-rail sidebar for Option 8. State persists in localStorage. */
(function () {
  try { if (localStorage.getItem('umq-rail') === '1') document.body.classList.add('rail'); } catch (e) {}
  var btn = document.getElementById('collapse');
  function paint() {
    if (!btn) return;
    var railed = document.body.classList.contains('rail');
    var i = btn.querySelector('i');
    if (i) i.className = railed ? 'fas fa-angles-right' : 'fas fa-angles-left';
    var lbl = btn.querySelector('.label');
    if (lbl) lbl.textContent = railed ? 'Expand' : 'Collapse';
    btn.setAttribute('aria-pressed', railed ? 'true' : 'false');
  }
  paint();
  if (btn) {
    btn.addEventListener('click', function () {
      document.body.classList.toggle('rail');
      try { localStorage.setItem('umq-rail', document.body.classList.contains('rail') ? '1' : '0'); } catch (e) {}
      paint();
    });
  }
})();
