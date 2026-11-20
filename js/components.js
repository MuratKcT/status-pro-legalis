/* Shared header + footer injected into every page */

function injectComponents() {
  // Detect depth for relative paths
  const depth = window.location.pathname.includes('/products/') ? '../' : '';

  /* ---- TOPBAR + NAVBAR ---- */
  const navHTML = `
<div class="topbar">
  <div class="topbar-inner">
    <div class="topbar-left">
      <a href="mailto:b2b@statusprolegalis.com" class="topbar-item">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        b2b@statusprolegalis.com
      </a>
      <div class="topbar-sep"></div>
      <a href="https://wa.me/48888595316" class="topbar-item" target="_blank" rel="noopener">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        +48 888 595 316
      </a>
      <div class="topbar-sep"></div>
      <span class="topbar-item">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Warsaw, Poland
      </span>
    </div>
    <div class="lang-switcher">
      <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>
      <button class="lang-btn" data-lang="pl" onclick="setLang('pl')">PL</button>
      <button class="lang-btn" data-lang="ua" onclick="setLang('ua')">UA</button>
      <button class="lang-btn" data-lang="tr" onclick="setLang('tr')">TR</button>
      <button class="lang-btn" data-lang="ru" onclick="setLang('ru')">RU</button>
    </div>
  </div>
</div>
<nav class="navbar" id="navbar">
  <div class="nav-inner">
    <a href="${depth}index.html" class="nav-logo">
      <img src="${depth}logo.png" alt="Status Pro Legalis" class="nav-logo-img"/>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="${depth}index.html" data-i18n="nav.home"></a></li>
      <li><a href="${depth}business-services.html" data-i18n="nav.business"></a></li>
      <li><a href="${depth}international-trade.html" data-i18n="nav.trade"></a></li>
      <li><a href="${depth}industrial-products.html" data-i18n="nav.products"></a></li>
      <li><a href="${depth}innovation.html" data-i18n="nav.innovation"></a></li>
      <li><a href="${depth}about.html" data-i18n="nav.about"></a></li>
      <li><a href="${depth}contact.html" data-i18n="nav.contact"></a></li>
      <li class="nav-rfq"><a href="${depth}contact.html#rfq" data-i18n="nav.rfq"></a></li>
    </ul>
    <button class="nav-toggle" id="navToggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  /* ---- FOOTER ---- */
  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="${depth}logo.png" alt="Status Pro Legalis" class="footer-logo-img"/>
          <span class="footer-logo-name">STATUS PRO LEGALIS</span>
        </div>
        <p data-i18n="footer.company"></p>
        <div class="footer-legal-note" data-i18n="footer.legal"></div>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.links"></h4>
        <ul class="footer-links">
          <li><a href="${depth}business-services.html" data-i18n="nav.business"></a></li>
          <li><a href="${depth}international-trade.html" data-i18n="nav.trade"></a></li>
          <li><a href="${depth}innovation.html" data-i18n="nav.innovation"></a></li>
          <li><a href="${depth}about.html" data-i18n="nav.about"></a></li>
          <li><a href="${depth}contact.html" data-i18n="nav.contact"></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.products_title"></h4>
        <ul class="footer-links">
          <li><a href="${depth}products/hawkline.html">HAWKLINE</a></li>
          <li><a href="${depth}products/isin-daylight.html">IŞIN DAYLIGHT</a></li>
          <li><a href="${depth}products/ersan-group.html">ERSAN GROUP</a></li>
          <li><a href="${depth}products/sayal-vinc.html">SAYAL VİNÇ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.contact_title"></h4>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📍</span>
          <span data-i18n="footer.city">Warsaw, Poland</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📧</span>
          <a href="mailto:b2b@statusprolegalis.com">b2b@statusprolegalis.com</a>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">💬</span>
          <a href="https://wa.me/48888595316">+48 888 595 316</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year"></span> Status Pro Legalis. <span data-i18n="footer.rights"></span></span>
      <div class="footer-bottom-langs">
        <button class="footer-bottom-lang" onclick="setLang('en')">EN</button>
        <button class="footer-bottom-lang" onclick="setLang('pl')">PL</button>
        <button class="footer-bottom-lang" onclick="setLang('ua')">UA</button>
        <button class="footer-bottom-lang" onclick="setLang('tr')">TR</button>
        <button class="footer-bottom-lang" onclick="setLang('ru')">RU</button>
      </div>
    </div>
  </div>
</footer>
<a href="https://wa.me/48888595316" class="whatsapp-fab" target="_blank" rel="noopener" aria-label="WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;

  /* ---- INJECT ---- */
  const navTarget = document.getElementById('nav-placeholder');
  const footTarget = document.getElementById('footer-placeholder');
  if (navTarget)  navTarget.outerHTML = navHTML;
  if (footTarget) footTarget.outerHTML = footerHTML;

  /* ---- INIT NAV BEHAVIOR ---- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
    const toggle = document.getElementById('navToggle');
    const links  = document.getElementById('navLinks');
    if (toggle && links) {
      toggle.addEventListener('click', () => links.classList.toggle('open'));
      document.addEventListener('click', e => {
        if (!navbar.contains(e.target)) links.classList.remove('open');
      });
    }
  }

  document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

  /* ---- SCROLL REVEAL ---- */
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
}

document.addEventListener('DOMContentLoaded', injectComponents);
