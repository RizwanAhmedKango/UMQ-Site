/*
  Tech Innovator background: connected particle network.
  Runs on every page (canvas is fixed, behind content). Respects reduced motion.
*/
(function () {
  var canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var particles = [];

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2;
  }
  Particle.prototype.update = function () {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  };
  Particle.prototype.draw = function () {
    ctx.fillStyle = '#00f5d4';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };

  function init() {
    particles = [];
    var count = Math.min(110, Math.floor(window.innerWidth / 14));
    for (var i = 0; i < count; i++) particles.push(new Particle());
  }

  function links() {
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var p = particles[i], p2 = particles[j];
        var d = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (d < 120) {
          ctx.strokeStyle = 'rgba(0, 245, 212, ' + (1 - d / 120) + ')';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        }
      }
    }
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function (p) { p.update(); p.draw(); });
    links();
    requestAnimationFrame(frame);
  }

  function staticDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function (p) { p.draw(); });
    links();
  }

  window.addEventListener('resize', function () { resize(); init(); if (reduce) staticDraw(); });
  resize(); init();
  if (reduce) staticDraw(); else frame();
})();
