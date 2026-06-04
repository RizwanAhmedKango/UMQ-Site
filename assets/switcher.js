/*
  Shared design switcher for Dr. Umair's site.
  Injects a floating button + panel on every design page so visitors can
  jump between the 8 designs and back to the gallery.
  Works from any OptionX/ folder (siblings under UMQ-Site/) and on file://.
  Requires Font Awesome (already loaded on every page) for the palette icon.
*/
(function () {
  var DESIGNS = [
    { dir: 'Option1_ModernAcademic',    label: 'Modern Academic' },
    { dir: 'Option2_TechInnovator',     label: 'Tech Innovator' },
    { dir: 'Option3_VisualStoryteller', label: 'Visual Storyteller' },
    { dir: 'Option4_DataDriven',        label: 'Data-Driven Sidebar' },
    { dir: 'Option5_ModernDark',        label: 'Modern + Dark' },
    { dir: 'Option6_MinimalAcademic',   label: 'Minimal Academic' },
    { dir: 'Option7_BoldTech',          label: 'Bold Tech' },
    { dir: 'Option8_RefinedSidebar',    label: 'Refined Sidebar' }
  ];

  // The current design = the folder that contains this page.
  var parts = window.location.pathname.split('/').filter(Boolean);
  var currentDir = parts.length >= 2 ? decodeURIComponent(parts[parts.length - 2]) : '';

  function build() {
    var style = document.createElement('style');
    style.textContent = [
      '.umq-switch-fab{position:fixed;bottom:1.5rem;right:1.5rem;width:56px;height:56px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.2rem;color:#fff;background:#15151a;box-shadow:0 10px 28px rgba(0,0,0,.32);z-index:9000;transition:transform .2s ease}',
      '.umq-switch-fab:hover{transform:scale(1.08)}',
      '.umq-switch-fab:focus-visible{outline:3px solid #4f8cff;outline-offset:3px}',
      '.umq-switch-panel{position:fixed;bottom:5.4rem;right:1.5rem;width:256px;max-height:72vh;overflow:auto;background:#fff;color:#15151a;border-radius:16px;box-shadow:0 22px 60px rgba(0,0,0,.28);padding:.5rem;z-index:9000;display:none;font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}',
      '.umq-switch-panel.open{display:block}',
      '.umq-switch-panel h4{margin:.5rem .8rem .55rem;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:#8a8a93}',
      '.umq-switch-panel a{display:flex;align-items:center;gap:.6rem;padding:.55rem .8rem;border-radius:10px;text-decoration:none;color:#26262c;font-size:.85rem;font-weight:500;line-height:1.2}',
      '.umq-switch-panel a:hover{background:#f1f1f4}',
      '.umq-switch-panel a.current{background:#15151a;color:#fff}',
      '.umq-switch-panel a .dot{width:8px;height:8px;border-radius:50%;background:currentColor;opacity:.5;flex:none}',
      '.umq-switch-panel .umq-gallery{margin-top:.35rem;border-top:1px solid #ececf0;padding-top:.6rem;color:#1257c4;font-weight:600}',
      '@media (prefers-reduced-motion: reduce){.umq-switch-fab{transition:none}}'
    ].join('');
    document.head.appendChild(style);

    var fab = document.createElement('button');
    fab.className = 'umq-switch-fab';
    fab.type = 'button';
    fab.setAttribute('aria-label', 'Switch design');
    fab.setAttribute('aria-expanded', 'false');
    fab.innerHTML = '<i class="fas fa-palette" aria-hidden="true"></i>';

    var panel = document.createElement('div');
    panel.className = 'umq-switch-panel';
    panel.setAttribute('role', 'menu');

    var html = '<h4>Switch design</h4>';
    DESIGNS.forEach(function (d, i) {
      var cur = d.dir === currentDir ? ' current' : '';
      html += '<a role="menuitem" class="design' + cur + '" href="../' + d.dir + '/index.html">' +
              '<span class="dot"></span>' + (i + 1) + '. ' + d.label + (cur ? ' · current' : '') + '</a>';
    });
    html += '<a role="menuitem" class="umq-gallery" href="../index.html"><span class="dot"></span>← All designs (gallery)</a>';
    panel.innerHTML = html;

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    function toggle(open) {
      var show = (typeof open === 'boolean') ? open : !panel.classList.contains('open');
      panel.classList.toggle('open', show);
      fab.setAttribute('aria-expanded', String(show));
    }
    fab.addEventListener('click', function () { toggle(); });
    document.addEventListener('click', function (e) {
      if (!panel.contains(e.target) && !fab.contains(e.target)) toggle(false);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggle(false); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
