/* ================================================
   STATUS PRO LEGALIS — Gold Particle System
   Canvas-based floating gold particles
   ================================================ */

(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let W, H;
  let animId;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  class Particle {
    constructor() { this.reset(true); }

    reset(init = false) {
      this.x  = random(0, W);
      this.y  = init ? random(0, H) : H + 10;
      this.r  = random(0.8, 2.5);
      this.vx = random(-0.3, 0.3);
      this.vy = random(-0.4, -0.9);
      this.alpha    = 0;
      this.maxAlpha = random(0.3, 0.7);
      this.life     = 0;
      this.maxLife  = random(180, 320);
      this.gold     = Math.random() > 0.5;
    }

    update() {
      this.x    += this.vx;
      this.y    += this.vy;
      this.life++;

      const progress = this.life / this.maxLife;
      if (progress < 0.15) {
        this.alpha = this.maxAlpha * (progress / 0.15);
      } else if (progress > 0.7) {
        this.alpha = this.maxAlpha * (1 - (progress - 0.7) / 0.3);
      } else {
        this.alpha = this.maxAlpha;
      }

      if (this.life >= this.maxLife || this.y < -10) this.reset();
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;

      if (this.gold) {
        // Gold star particle
        ctx.fillStyle = `rgba(255,215,0,1)`;
        ctx.shadowColor = 'rgba(255,215,0,0.8)';
        ctx.shadowBlur = 6;
        drawStar(ctx, this.x, this.y, 5, this.r * 1.4, this.r * 0.6);
      } else {
        // Blue dot
        ctx.fillStyle = `rgba(100,149,237,1)`;
        ctx.shadowColor = 'rgba(100,149,237,0.6)';
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  function drawStar(ctx, cx, cy, spikes, outerR, innerR) {
    let rot = (Math.PI / 2) * 3;
    const step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerR);
    for (let i = 0; i < spikes; i++) {
      ctx.lineTo(
        cx + Math.cos(rot) * outerR,
        cy + Math.sin(rot) * outerR
      );
      rot += step;
      ctx.lineTo(
        cx + Math.cos(rot) * innerR,
        cy + Math.sin(rot) * innerR
      );
      rot += step;
    }
    ctx.lineTo(cx, cy - outerR);
    ctx.closePath();
    ctx.fill();
  }

  function init() {
    resize();
    const COUNT = Math.min(Math.floor(W * H / 14000), 80);
    particles = Array.from({ length: COUNT }, () => new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    animId = requestAnimationFrame(loop);
  }

  function handleVisibility() {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      loop();
    }
  }

  window.addEventListener('resize', () => { resize(); init(); });
  document.addEventListener('visibilitychange', handleVisibility);

  init();
  loop();
})();
