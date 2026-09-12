/* ============================================
   Sarvesh ♡ Harshadha — Wedding Invitation
   "Soft Floating Light" edition — script.js
   ============================================ */

(function () {
  'use strict';

  /* ==========================================
     TRANSLATIONS
     ========================================== */
  const translations = {
    en: {
      'names.groom': 'Sarvesh',
      'names.bride': 'Harshadha',
      'nav.logo': 'S ♡ H',
      'nav.story': 'Our Story',
      'nav.events': 'Events',
      'nav.venue': 'Venue',
      'nav.gallery': 'Gallery',
      'nav.rsvp': 'Attending',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'Wedding Invitation',
      'hero.inviteText': 'Together with their families, invite you to celebrate their wedding',
      'hero.reception': 'Reception',
      'hero.wedding': 'Wedding',
      'hero.explore': 'Explore Invitation',
      'hero.scrollDown': 'Scroll Down',
      'gate.open': 'Tap to open our invitation',
      'countdown.subtitle': 'The celebration begins in',
      'countdown.title': 'Counting Down to Forever',
      'countdown.days': 'Days',
      'countdown.hours': 'Hours',
      'countdown.minutes': 'Minutes',
      'countdown.seconds': 'Seconds',
      'story.tag': 'Our Journey',
      'story.title': 'The Love Story',
      'story.milestone1.title': 'How We Met',
      'story.milestone1.desc': 'Our journey began with a simple meeting arranged by our families. Neither of us knew what the future had in store, but that one meeting became the beginning of something beautiful. What started with a conversation slowly turned into countless phone calls, shared smiles, and a comfort that grew stronger every day. Before we knew it, we had found not only a life partner, but also a best friend in each other.',
      'story.milestone2.title': 'The Proposal',
      'story.milestone2.desc': 'There was no grand proposal or perfect movie-like moment. Instead, our story was built through trust, understanding, and the little moments we shared along the way. Through every conversation, every sunflower smile, and every memory we created together, we found ourselves choosing each other more and more with each passing day. Somewhere in that journey, love quietly found its place in our hearts.',
      'story.milestone3.title': 'The Wedding',
      'story.milestone3.desc': 'Today, with the blessings of our families and the love of those who mean the most to us, we begin a new chapter together. As we celebrate this special day, we look forward to a lifetime filled with love, laughter, companionship, and countless beautiful memories. We are grateful for everyone who has been a part of our journey, and we are excited to begin our forever together.',
      'events.tag': 'Save the Dates',
      'events.title': 'Wedding Events',
      'events.day1': 'Day 1 — 19 November 2026',
      'events.day2': 'Day 2 — 20 November 2026',
      'events.nitchiyathartham': 'Nitchiyathartham',
      'events.patniSeer': 'Patni Seer',
      'events.muhurthakaal': 'Muhurthakaal',
      'events.reception.label': 'Reception',
      'events.reception.venue': 'OSBS Mahal, Coimbatore',
      'events.muhurtham': 'Muhurtham',
      'events.muhurtham.venue': 'Arulmigu Kalyana Subramaniya Swamy Temple, Kumarankundru',
      'events.returnToMandapam': 'Wedding Photoshoot',
      'events.maruSaradu': 'Maru Saradu',
      'events.addCalendar': 'Add to Calendar',
      'venue.tag': 'The Venue',
      'venue.title': 'OSBS Mahal',
      'venue.city': 'Coimbatore, Tamil Nadu',
      'venue.address': 'Mathampalayam, Mettupalayam Road,\nCoimbatore, Tamil Nadu, India',
      'venue.directions': 'Get Directions',
      'gallery.tag': 'Memories',
      'gallery.title': 'Our Gallery',
      'gallery.hint': 'Tap a photo to view it larger',
      'rsvp.tag': 'Response',
      'rsvp.title': 'Will You Join Us?',
      'rsvp.intro': 'Kindly confirm your presence by filling the form below.',
      'rsvp.name': 'Your Name',
      'rsvp.mobile': 'Mobile Number',
      'rsvp.guests': 'Number of Guests',
      'rsvp.selectGuests': 'Select',
      'rsvp.attending': 'I will be attending',
      'rsvp.submit': 'Send Response',
      'rsvp.success.title': 'Thank You!',
      'rsvp.success.desc': 'Your response has been recorded. We look forward to celebrating with you!',
      'contact.tag': 'Get in Touch',
      'contact.title': 'Contact Us',
      'contact.groom': 'Sarvesh (Groom)',
      'contact.bride': "Harshadha's Family",
      'contact.whatsapp': 'WhatsApp',
      'footer.date': '19 & 20 November 2026',
      'footer.madeWith': 'Made with',
      'footer.forever': 'for forever',
    },
    ta: {
      'names.groom': 'சர்வேஷ்',
      'names.bride': 'ஹர்சதா',
      'nav.logo': 'ச ♡ ஹ',
      'nav.story': 'எங்கள் கதை',
      'nav.events': 'நிகழ்வுகள்',
      'nav.venue': 'இடம்',
      'nav.gallery': 'படப்பகுப்பு',
      'nav.rsvp': 'ஆஜர்பணை',
      'nav.contact': 'தொடர்பு',
      'hero.eyebrow': 'திருமண அழைப்பிதழ்',
      'hero.inviteText': 'தனக்குறித்தோருடன், தங்களது திருமணத்தை கொண்டாடுங்கள் என்று அழைக்கின்றனர்',
      'hero.reception': 'வரவேற்பு',
      'hero.wedding': 'திருமணம்',
      'hero.explore': 'அழைப்பிதழைக் காண்க',
      'hero.scrollDown': 'கீழே செல்லுங்கள்',
      'gate.open': 'அழைப்பிதழைத் திறக்க தட்டவும்',
      'countdown.subtitle': 'கொண்டாட்டம் தொடங்க இன்னும்',
      'countdown.title': 'நிறைந்த மகிழ்ச்சிக்கான எண்ணிக்கை',
      'countdown.days': 'நாட்கள்',
      'countdown.hours': 'மணித்திங்கள்',
      'countdown.minutes': 'நிமிடம்',
      'countdown.seconds': 'வினாடிகள்',
      'story.tag': 'எங்கள் பயணம்',
      'story.title': 'காதல் கதை',
      'story.milestone1.title': 'நாங்கள் சந்தித்தது',
      'story.milestone1.desc': 'எங்கள் குடும்பங்களின் அறிமுகத்தின் மூலம் தொடங்கிய இந்த பயணம், எதிர்பாராத விதமாக அழகான உறவாக மலர்ந்தது. சில உரையாடல்கள், பல தொலைபேசி அழைப்புகள், பகிர்ந்த சிரிப்புகள் மற்றும் வளர்ந்த புரிதலின் வழியாக, நாங்கள் ஒருவருக்கொருவர் வாழ்க்கைத் துணையாக மட்டுமல்லாமல், சிறந்த நண்பர்களாகவும் மாறினோம்.',
      'story.milestone2.title': 'திருமண வாழ்த்து',
      'story.milestone2.desc': 'நம்பிக்கை, புரிதல், அன்பான உரையாடல்கள் மற்றும் பகிர்ந்த இனிய நினைவுகள் வழியாக, எங்கள் இதயங்களில் காதல் மெதுவாக மலர்ந்தது. ஒவ்வொரு நாளும், நாங்கள் ஒருவரை ஒருவர் மேலும் மேலும் தேர்ந்தெடுத்தோம்.',
      'story.milestone3.title': 'திருமணம்',
      'story.milestone3.desc': 'எங்கள் குடும்பத்தினரின் ஆசீர்வாதங்களுடனும், அன்பிற்குரியவர்களின் முன்னிலையிலும், எங்கள் வாழ்க்கையின் புதிய அத்தியாயத்தை இன்று தொடங்குகிறோம். அன்பு, மகிழ்ச்சி மற்றும் இனிய நினைவுகளால் நிரம்பிய வாழ்வை நோக்கி எங்கள் பயணம் தொடர்கிறது.',
      'events.tag': 'தேதிகளை சேமிக்கவும்',
      'events.title': 'திருமண நிகழ்வுகள்',
      'events.day1': 'நாள் 1 — 19 நவம்பர் 2026',
      'events.day2': 'நாள் 2 — 20 நவம்பர் 2026',
      'events.nitchiyathartham': 'நிச்சயதார்த்தம்',
      'events.patniSeer': 'பட்டினிச் சீர்',
      'events.muhurthakaal': 'முகூர்த்த கால்',
      'events.reception.label': 'வரவேற்பு',
      'events.reception.venue': 'ஓ.எஸ்.பி.எஸ் மஹல், கோவை',
      'events.muhurtham': 'முகூர்த்தம்',
      'events.muhurtham.venue': 'அருள்மிகு கல்யாண சுப்ரமணிய சுவாமி திருக்கோயில், குமரன்குன்று',
      'events.returnToMandapam': 'திருமண புகைப்படம்',
      'events.maruSaradu': 'மருசரடு',
      'events.addCalendar': 'நாட்காட்டியில் சேர்',
      'venue.tag': 'இடம்',
      'venue.title': 'ஓ.எஸ்.பி.எஸ் மஹல்',
      'venue.city': 'கோவை, தமிழ்நாடு',
      'venue.address': 'மத்தம்பாளையம், மெட்டுப்பாளையம் சாலை,\nகோவை, தமிழ்நாடு, இந்தியா',
      'venue.directions': 'வழிகளைப் பார்',
      'gallery.tag': 'நினைவுகள்',
      'gallery.title': 'எங்கள் படப்பகுப்பு',
      'gallery.hint': 'பெரிதாகப் பார்க்க படத்தைத் தட்டவும்',
      'rsvp.tag': 'பதில்',
      'rsvp.title': 'எங்களுடன் சேருவீர்கள்?',
      'rsvp.intro': 'கீழே உள்ள பொருத்தத்தை நிரப்பி உங்கள் வருகையை உறுதி செய்யுங்கள்.',
      'rsvp.name': 'உங்கள் பெயர்',
      'rsvp.mobile': 'கையடை எண்',
      'rsvp.guests': 'வருகையாளர்களின் எண்ணிக்கை',
      'rsvp.selectGuests': 'தேர்ந்தெடுக்க',
      'rsvp.attending': 'நான் கலந்து கொள்வேன்',
      'rsvp.submit': 'பதில் அனுப்பு',
      'rsvp.success.title': 'நன்றி!',
      'rsvp.success.desc': 'உங்கள் பதில் பதிவு செய்யப்பட்டுள்ளது. உங்களுடன் கொண்டாடிப்பதற்கு நாங்கள் எதிர்பார்க்கிறோம்!',
      'contact.tag': 'தொடர்பு கொள்ள',
      'contact.title': 'எங்களை தொடர்கவும்',
      'contact.groom': 'சர்வேஷ் (மணமகன்)',
      'contact.bride': 'ஹர்ஷத்தாவின் குடும்பம்',
      'contact.whatsapp': 'வாட்ஸப்பில் தொடர்க',
      'footer.date': '19 மற்றும் 20 நவம்பர் 2026',
      'footer.madeWith': 'உருவாக்கப்பட்டது',
      'footer.forever': 'நிறைந்த காலத்திற்கு',
    }
  };

  /* ==========================================
     SHORTHAND + ELEMENTS
     ========================================== */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

  const html = document.documentElement;
  const gate = $('#gate');
  const gateBtn = $('#gateBtn');
  const envelope = $('#envelope');
  const dock = $('#dock');
  const dockLinks = $('#dockLinks');
  const dockBurger = $('#dockBurger');
  const langToggle = $('#langToggle');
  const progressBar = $('#progressBar');
  const petalField = $('#petalField');
  const rsvpForm = $('#rsvpForm');
  const rsvpSuccess = $('#rsvpSuccess');
  const toTop = $('#toTop');
  const lightbox = $('#lightbox');
  const lightboxImg = $('#lightboxImg');
  const galleryTiles = $$('#galleryGrid .tile');

  const countDays = $('#countDays');
  const countHours = $('#countHours');
  const countMinutes = $('#countMinutes');
  const countSeconds = $('#countSeconds');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const lockScroll = (on) => document.body.classList.toggle('is-locked', on);

  let currentLang = 'en';

  /* ==========================================
     PETALS
     ========================================== */
  const PETAL_COLORS = ['#E8C76A', '#E3C67C', '#F6D9E0', '#F4BCCC', '#FFD9B0', '#DFEADB', '#C9E3C0'];

  function spawnPetals(count, opts) {
    if (reduceMotion || !petalField) return;
    opts = opts || {};

    for (let i = 0; i < count; i++) {
      const petal = document.createElement('span');
      petal.className = 'petal';

      const size = (opts.min || 7) + Math.random() * (opts.spread || 11);
      petal.style.left = (Math.random() * 100) + '%';
      petal.style.width = size + 'px';
      petal.style.height = (size * 1.35) + 'px';
      petal.style.background = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
      petal.style.setProperty('--dur', (11 + Math.random() * 11) + 's');
      petal.style.setProperty('--delay', (Math.random() * 14) + 's');
      petal.style.setProperty('--dx', ((Math.random() - 0.5) * 180) + 'px');
      petal.style.setProperty('--alpha', (0.32 + Math.random() * 0.34).toFixed(2));

      petalField.appendChild(petal);
    }
  }

  /* ==========================================
     ENVELOPE GATE
     ========================================== */
  let gateOpened = false;

  function openGate(fast) {
    if (gateOpened) return;
    gateOpened = true;

    gate.classList.add('is-open');
    spawnPetals(18);

    const revealDelay = fast || reduceMotion ? 240 : 1150;

    window.setTimeout(() => {
      gate.classList.add('is-gone');
      gate.setAttribute('aria-hidden', 'true');
      lockScroll(false);
      try { sessionStorage.setItem('wl-gate-opened', '1'); } catch (e) { /* ignore */ }
    }, revealDelay);
  }

  let gateSeen = false;
  try { gateSeen = sessionStorage.getItem('wl-gate-opened') === '1'; } catch (e) { gateSeen = false; }

  if (gateSeen || !gate) {
    if (gate) {
      gate.classList.add('is-gone');
      gate.setAttribute('aria-hidden', 'true');
    }
    gateOpened = true;
    lockScroll(false);
  } else {
    lockScroll(true);
    gateBtn.addEventListener('click', () => openGate(false));
    envelope.addEventListener('click', () => openGate(false));
    document.addEventListener('keydown', (e) => {
      if (!gateOpened && (e.key === 'Enter' || e.key === ' ')) openGate(false);
    });
  }

  spawnPetals(14);

  /* ==========================================
     NAV — dock, active link, burger
     ========================================== */
  function updateDock() {
    dock.classList.toggle('scrolled', window.scrollY > 60);

    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    progressBar.style.width = pct + '%';

    toTop.classList.toggle('show', window.scrollY > 620);

    let current = '';
    $$('section[id], header[id]').forEach((section) => {
      const top = section.offsetTop - 160;
      if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
        current = section.getAttribute('id');
      }
    });

    $$('.dock-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  function closeDock() {
    dockLinks.classList.remove('open');
    dockBurger.classList.remove('active');
    dockBurger.setAttribute('aria-expanded', 'false');
  }

  dockBurger.addEventListener('click', () => {
    const open = dockLinks.classList.toggle('open');
    dockBurger.classList.toggle('active', open);
    dockBurger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  $$('.dock-link').forEach((link) => link.addEventListener('click', closeDock));

  document.addEventListener('click', (e) => {
    if (!dockLinks.classList.contains('open')) return;
    if (!dock.contains(e.target)) closeDock();
  });

  /* ==========================================
     COUNTDOWN
     ========================================== */
  function updateCountdown() {
    const target = new Date('2026-11-20T04:30:00+05:30').getTime();
    const diff = target - Date.now();

    if (diff <= 0) {
      countDays.textContent = '00';
      countHours.textContent = '00';
      countMinutes.textContent = '00';
      countSeconds.textContent = '00';
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    countDays.textContent = String(days).padStart(2, '0');
    countHours.textContent = String(hours).padStart(2, '0');
    countMinutes.textContent = String(minutes).padStart(2, '0');
    countSeconds.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  /* ==========================================
     ADD TO CALENDAR
     ========================================== */
  const CALENDAR = {
    wedding: {
      dates: '20261120T040000/20261120T053000',
      en: { text: 'Sarvesh ♡ Harshadha — Muhurtham', details: 'Wedding ceremony at Arulmigu Kalyana Subramaniya Swamy Temple, Kumarankundru.' },
      ta: { text: 'சர்வேஷ் ♡ ஹர்சதா — முகூர்த்தம்', details: 'அருள்மிகு கல்யாண சுப்ரமணிய சுவாமி திருக்கோயில், குமரன்குன்று.' },
      location: 'Arulmigu Kalyana Subramaniya Swamy Temple, Kumarankundru, Coimbatore'
    },
    reception: {
      dates: '20261119T180000/20261119T220000',
      en: { text: 'Sarvesh ♡ Harshadha — Reception', details: 'Reception at OSBS Mahal, Coimbatore.' },
      ta: { text: 'சர்வேஷ் ♡ ஹர்சதா — வரவேற்பு', details: 'ஓ.எஸ்.பி.எஸ் மஹல், கோவை.' },
      location: 'OSBS Mahal, Mathampalayam, Mettupalayam Road, Coimbatore'
    }
  };

  function calendarUrl(key) {
    const ev = CALENDAR[key];
    if (!ev) return '#';
    const copy = ev[currentLang] || ev.en;

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: copy.text,
      dates: ev.dates,
      ctz: 'Asia/Kolkata',
      location: ev.location,
      details: copy.details
    });

    return 'https://calendar.google.com/calendar/render?' + params.toString();
  }

  function wireCalendarButtons() {
    $$('[data-calendar]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const url = calendarUrl(btn.getAttribute('data-calendar'));
        if (url !== '#') window.open(url, '_blank', 'noopener');
      });
    });
  }

  wireCalendarButtons();

  /* ==========================================
     SCROLL REVEAL
     ========================================== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  $$('.reveal').forEach((el) => revealObserver.observe(el));

  /* ==========================================
     PARALLAX
     ========================================== */
  const parallaxItems = $$('[data-depth]').concat($$('[data-drift]'));
  let ticking = false;

  function applyParallax() {
    const y = window.scrollY;
    parallaxItems.forEach((el) => {
      const depth = parseFloat(el.getAttribute('data-depth') || el.getAttribute('data-drift') || '0');
      el.style.setProperty('--py', (y * depth * 0.09).toFixed(1) + 'px');
    });
    ticking = false;
  }

  function onScroll() {
    updateDock();
    if (!reduceMotion && !ticking) {
      ticking = true;
      window.requestAnimationFrame(applyParallax);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { updateDock(); applyParallax(); }, { passive: true });
  updateDock();
  applyParallax();

  /* ==========================================
     3D TILT
     ========================================== */
  const MAX_TILT = 7;

  if (canHover && !reduceMotion) {
    $$('[data-tilt]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;

        el.style.setProperty('--ry', (px * MAX_TILT * 2).toFixed(2) + 'deg');
        el.style.setProperty('--rx', (-py * MAX_TILT * 2).toFixed(2) + 'deg');
      });

      el.addEventListener('pointerleave', () => {
        el.style.setProperty('--ry', '0deg');
        el.style.setProperty('--rx', '0deg');
      });
    });
  }

  /* ==========================================
     GALLERY LIGHTBOX
     ========================================== */
  let lightboxIndex = 0;

  function showPhoto(index) {
    if (!galleryTiles.length) return;
    lightboxIndex = (index + galleryTiles.length) % galleryTiles.length;
    const img = galleryTiles[lightboxIndex].querySelector('img');
    lightboxImg.src = img.getAttribute('src');
    lightboxImg.alt = img.getAttribute('alt') || '';
  }

  function openLightbox(index) {
    showPhoto(index);
    lightbox.classList.add('open');
    lockScroll(true);
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lockScroll(false);
  }

  galleryTiles.forEach((tile, i) => {
    tile.addEventListener('click', () => openLightbox(i));
  });

  $('#lightboxClose').addEventListener('click', closeLightbox);
  $('#lightboxPrev').addEventListener('click', (e) => { e.stopPropagation(); showPhoto(lightboxIndex - 1); });
  $('#lightboxNext').addEventListener('click', (e) => { e.stopPropagation(); showPhoto(lightboxIndex + 1); });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPhoto(lightboxIndex - 1);
    if (e.key === 'ArrowRight') showPhoto(lightboxIndex + 1);
  });

  /* ==========================================
     BACK TO TOP
     ========================================== */
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* ==========================================
     LANGUAGE
     ========================================== */
  function setLanguage(lang) {
    currentLang = translations[lang] ? lang : 'en';
    html.setAttribute('data-lang', currentLang);

    const keys = translations[currentLang];
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (typeof keys[key] === 'string') el.textContent = keys[key];
    });

    const submitLabel = $('.submit-label');
    if (submitLabel) submitLabel.textContent = keys['rsvp.submit'];

    try { localStorage.setItem('wedding-luxe-lang', currentLang); } catch (e) { /* ignore */ }
  }

  langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'ta' : 'en');
  });

  try {
    const saved = localStorage.getItem('wedding-luxe-lang');
    if (saved === 'ta' || saved === 'en') setLanguage(saved);
  } catch (e) { /* ignore */ }

  /* ==========================================
     RSVP
     ========================================== */
  function markInvalid(input) {
    input.classList.add('invalid');
    input.focus();
    input.addEventListener('input', () => input.classList.remove('invalid'), { once: true });
  }

  rsvpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = $('#guestName');
    const mobileInput = $('#guestMobile');
    const guestInput = $('#guestCount');

    const name = nameInput.value.trim();
    const mobile = mobileInput.value.trim();
    const guests = guestInput.value;
    const attending = $('#attendingCheck').checked;

    if (!name) { markInvalid(nameInput); return; }
    if (!/^[0-9]{10}$/.test(mobile)) { markInvalid(mobileInput); return; }
    if (!guests) { markInvalid(guestInput); return; }

    const submitBtn = $('#rsvpSubmit');
    const submitLabel = $('.submit-label');
    const originalLabel = submitLabel.textContent;

    submitBtn.disabled = true;
    submitLabel.textContent = currentLang === 'en' ? 'Sending…' : 'அனுப்புகிறது…';

    const formData = new FormData(rsvpForm);
    formData.set('attending', attending ? 'Yes' : 'No');

    try {
      const response = await fetch('https://formspree.io/f/xwvjgeba', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) throw new Error('Request failed');

      rsvpForm.reset();
      rsvpForm.style.display = 'none';
      rsvpSuccess.classList.add('active');
      window.setTimeout(() => {
        rsvpSuccess.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      }, 120);
    } catch (error) {
      window.alert(
        currentLang === 'en'
          ? 'Something went wrong. Please try again or contact us directly.'
          : 'ஏதோ பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும் அல்லது எங்களை நேரில் தொடர்பு கொள்ளவும்.'
      );
      submitLabel.textContent = originalLabel;
      submitBtn.disabled = false;
    }
  });

})();
