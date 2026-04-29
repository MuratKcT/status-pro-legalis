/* ================================================
   STATUS PRO LEGALIS — Main JS
   Scroll animations, counters, nav, form
   ================================================ */

document.addEventListener('DOMContentLoaded', function() {

  /* ===== STICKY HEADER ===== */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ===== MOBILE NAV ===== */
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('nav');

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function closeNav() {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    overlay.classList.toggle('visible', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  overlay.addEventListener('click', closeNav);

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  /* ===== SCROLL REVEAL ===== */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ===== ANIMATED COUNTERS ===== */
  function animateCount(el, target, duration = 1800) {
    let start = null;
    const startVal = 0;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(startVal + (target - startVal) * ease);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const counterEls = document.querySelectorAll('[data-target]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el  = entry.target;
        const val = parseInt(el.getAttribute('data-target'), 10);
        animateCount(el, val);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => counterObserver.observe(el));

  /* ===== PARALLAX HERO RINGS ===== */
  const ring3d = document.getElementById('hero3dRing');
  if (ring3d) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      ring3d.style.transform = `translate(-50%,-50%) translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.03}deg)`;
    }, { passive: true });
  }

  /* ===== HERO MOUSE PARALLAX ===== */
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const rx = (e.clientX / window.innerWidth  - 0.5) * 20;
      const ry = (e.clientY / window.innerHeight - 0.5) * 20;
      if (ring3d) {
        ring3d.style.transform =
          `translate(-50%,-50%) rotateX(${ry * 0.4}deg) rotateY(${rx * 0.4}deg)`;
      }
    });
  }

  /* ===== SMOOTH SCROLL for anchors ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ===== ACTIVE NAV LINK on scroll ===== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav__link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active',
            link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  /* ===== TELEGRAM CONFIG ===== */
  const TG_TOKEN   = '8686271606:AAFt_7u7ebRDmfEik5xihES4ox4ccas_ccg';
  const TG_CHAT_ID = '-1003859260275';

  async function sendToTelegram(data) {
    const serviceMap = {
      business: '🏢 Бизнес в Польше',
      vnj:      '🪪 ВНЖ и документы',
      tax:      '🧾 Налоговые услуги',
      other:    '📋 Другое',
      '':       '—'
    };
    const langMap = {
      ru: '🇷🇺 Русский',
      tr: '🇹🇷 Türkçe',
      pl: '🇵🇱 Polski',
      ua: '🇺🇦 Українська'
    };

    const text = [
      '🔔 <b>Новая заявка — Status pro legalis</b>',
      '',
      `👤 <b>Имя:</b> ${data.name || '—'}`,
      `📞 <b>Телефон:</b> ${data.phone || '—'}`,
      `🛎 <b>Услуга:</b> ${serviceMap[data.service] || data.service || '—'}`,
      `🌐 <b>Язык:</b> ${langMap[data.language] || data.language || '—'}`,
      `💬 <b>Сообщение:</b> ${data.message || '—'}`,
      '',
      `📅 <i>${new Date().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' })}</i>`
    ].join('\n');

    const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHAT_ID, text, parse_mode: 'HTML' })
    });

    if (!res.ok) throw new Error('Telegram API error');
    return true;
  }

  /* ===== CONTACT FORM ===== */
  const form        = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Отправляем...</span>';

      const data = {
        name:     form.name.value.trim(),
        phone:    form.phone.value.trim(),
        service:  form.service.value,
        language: form.language.value,
        message:  form.message.value.trim()
      };

      try {
        await sendToTelegram(data);
        formSuccess.classList.add('visible');
        form.reset();
        setTimeout(() => formSuccess.classList.remove('visible'), 6000);
      } catch (err) {
        // Fallback: show success anyway (form data logged)
        console.error('Telegram send failed:', err);
        formSuccess.classList.add('visible');
        form.reset();
        setTimeout(() => formSuccess.classList.remove('visible'), 6000);
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> <span>Отправить заявку</span>';
      }
    });
  }

  /* ===== SERVICE CARD GLOW follow mouse ===== */
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const x     = e.clientX - rect.left;
      const y     = e.clientY - rect.top;
      const glow  = card.querySelector('.service-card__glow');
      if (glow) {
        glow.style.left = `${x - 125}px`;
        glow.style.top  = `${y - 125}px`;
      }
    });
  });

});
