/* ================================================
   STATUS PRO LEGALIS — 3D Tilt Effect
   Applied to [data-tilt] elements
   ================================================ */

(function() {
  const MAX_TILT  = 10;   // degrees
  const SCALE     = 1.03;
  const SPEED     = 400;  // ms transition speed

  function initTilt(el) {
    let rect;

    function getRect() { rect = el.getBoundingClientRect(); }

    function onMouseMove(e) {
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;
      const rotX =  ((y - cy) / cy) * -MAX_TILT;
      const rotY =  ((x - cx) / cx) *  MAX_TILT;

      el.style.transform =
        `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${SCALE},${SCALE},${SCALE})`;
    }

    function onMouseLeave() {
      el.style.transition = `transform ${SPEED}ms cubic-bezier(0.23,1,0.32,1)`;
      el.style.transform  = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    }

    function onMouseEnter() {
      getRect();
      el.style.transition = 'transform 0.08s ease';
    }

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mousemove',  onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
  }

  function setup() {
    document.querySelectorAll('[data-tilt]').forEach(initTilt);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
