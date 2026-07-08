(function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';

  function isProductPage(file) {
    var directProductPages = [
      'products.html',
      'glass-for-mobile-phones.html',
      'lens-protector.html',
      'glass-for-tablet.html'
    ];

    if (directProductPages.indexOf(file) !== -1) return true;

    var nonProductPages = [
      'index.html',
      'about.html',
      'catalog.html',
      'contact.html',
      '404.html'
    ];

    return file.endsWith('.html') && nonProductPages.indexOf(file) === -1;
  }

  function injectSharedLayout() {
    var header = document.querySelector('.site-header');
    var footer = document.querySelector('.site-footer');

    if (header) {
      var utilityBar = document.createElement('div');
      utilityBar.className = 'top-utility-bar';
      utilityBar.innerHTML =
        '<div class="container utility-wrap">' +
          '<div class="utility-left">' +
            '<a href="mailto:lisa@ulelaglass.com">📧 lisa@ulelaglass.com</a>' +
            '<span class="utility-sep">|</span>' +
            '<a href="https://wa.me/8613691648395" target="_blank" rel="noopener">📱 WhatsApp: +86 136 9164 8395</a>' +
          '</div>' +
          '<div class="utility-right">' +
            '<span>OEM / ODM Supported</span>' +
            '<span>24-48h Sample</span>' +
            '<span>Global Shipping</span>' +
          '</div>' +
        '</div>';

      if (!document.querySelector('.top-utility-bar')) {
        header.parentNode.insertBefore(utilityBar, header);
      }

      header.innerHTML =
        '<div class="container nav">' +
          '<a href="index.html" class="logo">ULELA</a>' +
          '<button class="nav-toggle" type="button" aria-expanded="false" aria-label="Toggle menu">☰</button>' +
          '<nav class="main-menu">' +
            '<a href="index.html" data-nav="home">Home</a>' +
            '<div class="nav-item products-menu">' +
              '<div class="products-link-row">' +
                '<a href="products.html" data-nav="products">Products</a>' +
                '<button class="products-toggle" type="button" aria-expanded="false" aria-label="Toggle Products submenu">▾</button>' +
              '</div>' +
              '<div class="nav-dropdown">' +
                '<div class="dropdown-group">' +
                  '<a class="dropdown-title" href="glass-for-mobile-phones.html">Glass For Mobile Phones</a>' +
                  '<a href="glass-for-mobile-phones.html#hd-silkprint-2x">HD Silkprint 2X</a>' +
                  '<a href="glass-for-mobile-phones.html#super-strong">Super Strong</a>' +
                  '<a href="glass-for-mobile-phones.html#privacy">Privacy</a>' +
                  '<a href="glass-for-mobile-phones.html#ultrasonic-unlock">Ultrasonic Unlock</a>' +
                  '<a href="glass-for-mobile-phones.html#magic-kit">Magic Kit</a>' +
                '</div>' +
                '<div class="dropdown-group">' +
                  '<a class="dropdown-title" href="lens-protector.html">Lens Protector</a>' +
                  '<a class="dropdown-title" href="glass-for-tablet.html">Glass For Tablet</a>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '<a href="catalog.html" data-nav="catalog">Catalog</a>' +
            '<a href="about.html" data-nav="about">About Us</a>' +
            '<a href="contact.html" data-nav="contact">Contact</a>' +
            '<a class="btn btn-primary nav-cta" href="contact.html">Get a Quote</a>' +
          '</nav>' +
        '</div>';
    }

    if (footer) {
      footer.innerHTML =
        '<div class="container footer-grid">' +
          '<div>' +
            '<div class="logo footer-logo">ULELA</div>' +
            '<p>Professional screen protector manufacturer for phones, tablets and camera lenses.</p>' +
            '<div class="footer-social">' +
              '<a href="https://wa.me/8613691648395" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>' +
              '<a href="mailto:lisa@ulelaglass.com" aria-label="Email">✉️</a>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<h4>Products</h4>' +
            '<ul>' +
              '<li><a href="glass-for-mobile-phones.html">Glass For Mobile Phones</a></li>' +
              '<li><a href="lens-protector.html">Lens Protector</a></li>' +
              '<li><a href="glass-for-tablet.html">Glass For Tablet</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4>Quick Links</h4>' +
            '<ul>' +
              '<li><a href="index.html">Home</a></li>' +
              '<li><a href="about.html">About Us</a></li>' +
              '<li><a href="catalog.html">Catalog</a></li>' +
              '<li><a href="contact.html">Contact</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4>Contact</h4>' +
            '<ul>' +
              '<li>📧 <a href="mailto:lisa@ulelaglass.com">lisa@ulelaglass.com</a></li>' +
              '<li>📱 <a href="https://wa.me/8613691648395" target="_blank" rel="noopener">WhatsApp +8613691648395</a></li>' +
              '<li>🌐 <a href="https://www.ulelaglass.com" target="_blank" rel="noopener">www.ulelaglass.com</a></li>' +
              '<li>📍 Dongguan, Guangdong, China</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom"><div class="container">© 2025 ULELA. All Rights Reserved. | www.ulelaglass.com</div></div>';
    }
  }

  function setActiveMenu() {
    var current = 'home';

    if (isProductPage(path)) {
      current = 'products';
    } else if (path === 'catalog.html') {
      current = 'catalog';
    } else if (path === 'about.html') {
      current = 'about';
    } else if (path === 'contact.html') {
      current = 'contact';
    }

    var activeLink = document.querySelector('[data-nav="' + current + '"]');
    if (activeLink) activeLink.classList.add('active');
  }

  function setupMobileMenu() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    var toggle = header.querySelector('.nav-toggle');
    var productsToggle = header.querySelector('.products-toggle');
    var productsMenu = header.querySelector('.products-menu');

    if (toggle) {
      toggle.addEventListener('click', function () {
        var isOpen = header.classList.toggle('menu-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    if (productsToggle && productsMenu) {
      productsToggle.addEventListener('click', function (event) {
        event.preventDefault();
        var isOpen = productsMenu.classList.toggle('open');
        productsToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
  }

  function createIcon(label, svgPath) {
    return '<span class="floating-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="' + svgPath + '"></path></svg></span><span class="floating-text">' + label + '</span>';
  }

  function setupFloatingIcons() {
    if (document.querySelector('.floating-contact')) return;

    var wrap = document.createElement('div');
    wrap.className = 'floating-contact';
    wrap.innerHTML =
      '<a class="floating-btn whatsapp" href="https://wa.me/8613691648395" target="_blank" rel="noopener">' +
        createIcon('WhatsApp', 'M20.52 3.48A11.78 11.78 0 0 0 12.01 0C5.39 0 .02 5.37.02 11.98a11.9 11.9 0 0 0 1.62 5.97L0 24l6.2-1.62a11.94 11.94 0 0 0 5.8 1.48h.01c6.62 0 12-5.38 12-12a11.9 11.9 0 0 0-3.49-8.38Zm-8.5 18.35a9.92 9.92 0 0 1-5.05-1.38l-.36-.2-3.68.96.98-3.58-.23-.37a9.88 9.88 0 1 1 8.34 4.57Zm5.43-7.43c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.6.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.26-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.52 0 1.48 1.08 2.92 1.23 3.12.15.2 2.12 3.23 5.12 4.53.71.31 1.27.5 1.7.64.71.22 1.36.19 1.88.12.57-.09 1.78-.73 2.03-1.44.25-.71.25-1.33.18-1.45-.08-.12-.28-.2-.58-.35Z') +
      '</a>' +
      '<a class="floating-btn email" href="mailto:lisa@ulelaglass.com">' +
        createIcon('Email', 'M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.51l10 6.25 10-6.25V6H2Zm20 12V8.49l-9.47 5.92a1 1 0 0 1-1.06 0L2 8.49V18h20Z') +
      '</a>' +
      '<a class="floating-btn inquiry" href="contact.html">' +
        createIcon('Inquiry', 'M2 3h20v14H6l-4 4V3Zm2 2v11.17L5.17 15H20V5H4Zm3 2h10v2H7V7Zm0 4h7v2H7v-2Z') +
      '</a>' +
      '<button class="floating-btn top" type="button" id="back-to-top">' +
        createIcon('Top', 'M12 4 4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8Z') +
      '</button>';

    document.body.appendChild(wrap);

    var backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      window.addEventListener('scroll', function () {
        if (window.scrollY > 260) {
          backToTop.classList.add('show');
        } else {
          backToTop.classList.remove('show');
        }
      });
    }
  }

  function setupHeroCarousel() {
    var carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;

    var slides = carousel.querySelectorAll('.hero-slide');
    var dotsWrap = carousel.querySelector('.carousel-dots');
    var nextBtn = carousel.querySelector('.carousel-arrow.next');
    var prevBtn = carousel.querySelector('.carousel-arrow.prev');
    var activeIndex = 0;
    var interval = parseInt(carousel.getAttribute('data-interval'), 10) || 4000;
    var timer;

    if (slides.length <= 1 || !dotsWrap || !nextBtn || !prevBtn) {
      carousel.classList.add('hero-static');
      return;
    }

    function renderDots() {
      dotsWrap.innerHTML = '';
      slides.forEach(function (_, index) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot' + (index === activeIndex ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to banner ' + (index + 1));
        dot.addEventListener('click', function () {
          goTo(index);
          restart();
        });
        dotsWrap.appendChild(dot);
      });
    }

    function goTo(index) {
      slides[activeIndex].classList.remove('active');
      activeIndex = (index + slides.length) % slides.length;
      slides[activeIndex].classList.add('active');
      renderDots();
    }

    function next() { goTo(activeIndex + 1); }
    function prev() { goTo(activeIndex - 1); }

    function start() {
      timer = window.setInterval(next, interval);
    }

    function restart() {
      window.clearInterval(timer);
      start();
    }

    if (nextBtn) nextBtn.addEventListener('click', function () { next(); restart(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restart(); });

    renderDots();
    start();
  }

  function prefillContactForm() {
    if (!window.location.pathname.includes('contact')) return;
    var params = new URLSearchParams(window.location.search);
    var product = params.get('product');
    if (product) {
      var msgBox = document.getElementById('contact-message');
      if (msgBox && !msgBox.value) {
        msgBox.value = 'Hello, I am interested in ' + decodeURIComponent(product) + ' and would like to request a quote. Please provide pricing, MOQ and lead time information. Thank you.';
      }
      var subjectBox = document.getElementById('contact-subject');
      if (subjectBox && !subjectBox.value) {
        subjectBox.value = 'Inquiry: ' + decodeURIComponent(product);
      }
    }
  }

  injectSharedLayout();
  setActiveMenu();
  setupMobileMenu();
  setupFloatingIcons();
  setupHeroCarousel();
  prefillContactForm();
})();
