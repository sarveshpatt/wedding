/* ============================================
   Sarvesh ♡ Harshadha — Wedding Invitation
   script.js
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
      'hero.youreInvited': "You're Invited",
      'hero.inviteText': 'Together with their families, invite you to celebrate their wedding',
      'hero.cordiallyInvite': 'We Cordially Invite You',
      'hero.reception': 'Reception',
      'hero.wedding': 'Wedding',
      'hero.openInvitation': '\uD83D\uDC8C Open Invitation',
      'hero.scrollDown': 'Scroll Down',
      'story.tag': 'Our Journey',
      'story.title': 'The Love Story',
      'story.milestone1.title': 'How We Met',
      'story.milestone1.desc': 'Our journey began with a simple meeting arranged by our families. Neither of us knew what the future had in store, but that one meeting became the beginning of something beautiful. What started with a conversation slowly turned into countless phone calls, shared smiles, and a comfort that grew stronger every day. Before we knew it, we had found not only a life partner, but also a best friend in each other.',
      'story.milestone2.title': 'The Proposal',
      'story.milestone2.desc': 'There was no grand proposal or perfect movie-like moment. Instead, our story was built through trust, understanding, and the little moments we shared along the way. Through every conversation, every sunflower smile, and every memory we created together, we found ourselves choosing each other more and more with each passing day. Somewhere in that journey, love quietly found its place in our hearts.',
      'story.milestone3.title': 'The Wedding',
      'story.milestone3.desc': 'Today, with the blessings of our families and the love of those who mean the most to us, we begin a new chapter together. As we celebrate this special day, we look forward to a lifetime filled with love, laughter, companionship, and countless beautiful memories. We are grateful for everyone who has been a part of our journey, and we are excited to begin our forever together.',
      'countdown.title': 'Counting Down to Forever',
      'countdown.days': 'Days',
      'countdown.hours': 'Hours',
      'countdown.minutes': 'Minutes',
      'countdown.seconds': 'Seconds',
      'events.tag': 'Save the Dates',
      'events.title': 'Wedding Events',
      'events.day1': 'Day 1 \u2014 19 November 2026',
      'events.day2': 'Day 2 \u2014 20 November 2026',
      'events.nitchiyathartham': 'Nitchiyathartham',
      'events.nitchiyathartham.title': 'Engagement Ceremony',
      'events.patniSeer': 'Patni Seer',
      'events.patniSeer.title': 'Patni Seer',
      'events.muhurthakaal': 'Muhurthakaal',
      'events.muhurthakaal.title': 'Muhurthakaal',
      'events.reception.label': 'Reception',
      'events.reception.title': 'Reception',
      'events.reception.venue': 'OSBS Mahal, Coimbatore',
      'events.muhurtham': 'Muhurtham',
      'events.muhurtham.title': 'Muhurtham',
      'events.muhurtham.venue': 'Arulmigu Kalyana Subramaniya Swamy Temple, Kumarankundru',
      'events.returnToMandapam': 'Wedding Photoshoot',
      'events.returnToMandapam.title': 'Wedding Photoshoot',
      'events.maruSaradu': 'Maru Saradu',
      'events.maruSaradu.title': 'Maru Saradu',
      'venue.tag': 'The Venue',
      'venue.title': 'OSBS Mahal',
      'venue.address': 'Mathampalayam, Mettupalayam Road,\nCoimbatore, Tamil Nadu, India',
      'venue.directions': 'Get Directions',
      'gallery.tag': 'Memories',
      'gallery.title': 'Our Gallery',
      'gallery.placeholder': 'Coming Soon',
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
      'names.groom': '\u0B9A\u0BB0\u0BCD\u0BB5\u0BC7\u0BB7\u0BCD',
      'names.bride': '\u0BB9\u0BB0\u0BCD\u0B9A\u0BA4\u0BBE',
      'nav.logo': '\u0B9A \u2661 \u0BB9',
      'nav.story': '\u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BA4\u0BC8',
      'nav.events': '\u0BA8\u0BBF\u0B95\u0BB4\u0BCD\u0BB5\u0BC1\u0B95\u0BB3\u0BCD',
      'nav.venue': '\u0B87\u0B9F\u0BAE\u0BCD',
      'nav.gallery': '\u0BAA\u0B9F\u0BAA\u0BCD\u0BAA\u0B95\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1',
      'nav.rsvp': '\u0B86\u0B9C\u0BB0\u0BCD\u0BAA\u0BA3\u0BC8',
      'nav.contact': '\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1',
      'hero.youreInvited': '\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B85\u0BB4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1',
      'hero.inviteText': '\u0BA4\u0BA9\u0B95\u0BCD\u0B95\u0BC1\u0BB1\u0BBF\u0BA4\u0BCD\u0BA4\u0BCB\u0BB0\u0BC1\u0B9F\u0BA9\u0BCD, \u0BA4\u0BA9\u0B95\u0BCD\u0B95\u0BB3\u0BA4\u0BC1 \u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BA3\u0BA4\u0BCD\u0BA4\u0BC8 \u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBE\u0B9F\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B8E\u0BA9\u0BCD\u0BB1\u0BC1 \u0B85\u0BB4\u0BC8\u0B95\u0BCD\u0B95\u0BBF\u0BA9\u0BCD\u0BB1\u0BA9\u0BB0\u0BCD',
      'hero.cordiallyInvite': '\u0B85\u0BA9\u0BCD\u0BAA\u0BC1\u0B9F\u0BA9\u0BCD \u0B85\u0BB4\u0BC8\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BCB\u0BAE\u0BCD',
      'hero.reception': '\u0BB5\u0BB0\u0BB5\u0BC7\u0BB1\u0BCD\u0BAA\u0BC1',
      'hero.wedding': '\u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BA3\u0BAE\u0BCD',
      'hero.openInvitation': '\u0B85\u0BB4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8\u0BA4\u0BCD \u0BA4\u0BBF\u0BB1\u0B95\u0BCD\u0B95',
      'hero.scrollDown': '\u0B95\u0BC0\u0BB4\u0BC7 \u0B9A\u0BC6\u0BB2\u0BCD\u0BB2\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD',
      'story.tag': '\u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BAF\u0BA3\u0BAE\u0BCD',
      'story.title': '\u0B95\u0BBE\u0BA4\u0BB2\u0BCD \u0B95\u0BA4\u0BC8',
      'story.milestone1.title': '\u0BA8\u0BBE\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B9A\u0BA8\u0BCD\u0BA4\u0BBF\u0BA4\u0BCD\u0BA4\u0BA4\u0BC1',
      'story.milestone1.desc': 'எங்கள் குடும்பங்களின் அறிமுகத்தின் மூலம் தொடங்கிய இந்த பயணம், எதிர்பாராத விதமாக அழகான உறவாக மலர்ந்தது. சில உரையாடல்கள், பல தொலைபேசி அழைப்புகள், பகிர்ந்த சிரிப்புகள் மற்றும் வளர்ந்த புரிதலின் வழியாக, நாங்கள் ஒருவருக்கொருவர் வாழ்க்கைத் துணையாக மட்டுமல்லாமல், சிறந்த நண்பர்களாகவும் மாறினோம்.',
      'story.milestone2.title': '\u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BA3 \u0BB5\u0BBE\u0BB4\u0BCD\u0BA4\u0BCD\u0BA4\u0BC1',
      'story.milestone2.desc': 'நம்பிக்கை, புரிதல், அன்பான உரையாடல்கள் மற்றும் பகிர்ந்த இனிய நினைவுகள் வழியாக, எங்கள் இதயங்களில் காதல் மெதுவாக மலர்ந்தது. ஒவ்வொரு நாளும், நாங்கள் ஒருவரை ஒருவர் மேலும் மேலும் தேர்ந்தெடுத்தோம்.',
      'story.milestone3.title': '\u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BA3\u0BAE\u0BCD',
      'story.milestone3.desc': 'எங்கள் குடும்பத்தினரின் ஆசீர்வாதங்களுடனும், அன்பிற்குரியவர்களின் முன்னிலையிலும், எங்கள் வாழ்க்கையின் புதிய அத்தியாயத்தை இன்று தொடங்குகிறோம். அன்பு, மகிழ்ச்சி மற்றும் இனிய நினைவுகளால் நிரம்பிய வாழ்வை நோக்கி எங்கள் பயணம் தொடர்கிறது.',
      'countdown.title': '\u0BA8\u0BBF\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4 \u0BAE\u0B95\u0BBF\u0BB4\u0BCD\u0B9A\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC8',
      'countdown.days': '\u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD',
      'countdown.hours': '\u0BAE\u0BA3\u0BBF\u0BA4\u0BCD\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0BB3\u0BCD',
      'countdown.minutes': '\u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD',
      'countdown.seconds': '\u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BCD',
      'events.tag': 'தேதிகளை சேமிக்கவும்',
      'events.title': 'திருமண நிகழ்வுகள்',
      'events.day1': 'நாள் 1 — 19 நவம்பர் 2026',
      'events.day2': 'நாள் 2 — 20 நவம்பர் 2026',
      'events.nitchiyathartham': 'நிச்சயதார்த்தம்',
      'events.nitchiyathartham.title': 'நிச்சயதார்த்த விழா',
      'events.patniSeer': 'பட்டினிச் சீர்',
      'events.patniSeer.title': 'பட்டினிச் சீர்',
      'events.muhurthakaal': 'முகூர்த்த கால்',
      'events.muhurthakaal.title': 'முகூர்த்த கால்',
      'events.reception.label': 'வரவேற்பு',
      'events.reception.title': 'வரவேற்பு',
      'events.reception.venue': 'ஓ.எஸ்.பி.எஸ் மஹல், கோவை',
      'events.muhurtham': 'முகூர்த்தம்',
      'events.muhurtham.title': 'முகூர்த்தம்',
      'events.muhurtham.venue': 'அருள்மிகு கல்யாண சுப்ரமணிய சுவாமி திருக்கோயில், குமரன்குன்று',
      'events.returnToMandapam': 'திருமண புகைப்படம்',
      'events.returnToMandapam.title': 'திருமண புகைப்படம்',
      'events.maruSaradu': 'மருசரடு',
      'events.maruSaradu.title': 'மருசரடு',
      'venue.tag': '\u0B87\u0B9F\u0BAE\u0BCD',
      'venue.title': '\u0B93.\u0B8E\u0BB8\u0BCD.\u0BAA\u0BBF.\u0B8E\u0BB8\u0BCD \u0BAE\u0BB9\u0BB2\u0BCD',
      'venue.address': '\u0BAE\u0BA4\u0BCD\u0BA4\u0BAE\u0BCD\u0BAA\u0BBE\u0BB3\u0BAF\u0BAE\u0BCD, \u0BAE\u0BC6\u0B9F\u0BCD\u0B9F\u0BC1\u0BAA\u0BBE\u0BB3\u0BAF\u0BAE\u0BCD \u0B9A\u0BBE\u0BB2\u0BC8,\n\u0B95\u0BCB\u0BB5\u0BC8, \u0BA4\u0BAE\u0BBF\u0BB4\u0BA8\u0BBE\u0B9F\u0BC1, \u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE',
      'venue.directions': '\u0BB5\u0BB4\u0BBF\u0B95\u0BB3\u0BC8\u0BAA\u0BCD \u0BAA\u0BBE\u0BB0\u0BCD',
      'gallery.tag': '\u0BA8\u0BBF\u0BA9\u0BC8\u0BB5\u0BC1\u0B95\u0BB3\u0BCD',
      'gallery.title': '\u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0B9F\u0BAA\u0BCD\u0BAA\u0B95\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1',
      'gallery.placeholder': '\u0BB5\u0BBF\u0BB0\u0BC8\u0BB5\u0BBF\u0BB2\u0BCD',
      'rsvp.tag': '\u0BAA\u0BA4\u0BBF\u0BB2\u0BCD',
      'rsvp.title': '\u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B9F\u0BA9\u0BCD \u0B9A\u0BC7\u0BB0\u0BC1\u0BB5\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BCD?',
      'rsvp.intro': '\u0B95\u0BC0\u0BB4\u0BC7 \u0B89\u0BB3\u0BCD\u0BB3 \u0BAA\u0BCA\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BA4\u0BCD\u0BA4\u0BC8 \u0BA8\u0BBF\u0BB0\u0BAA\u0BCD\u0BAA\u0BBF \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB0\u0BC1\u0B95\u0BC8\u0BAF\u0BC8 \u0B89\u0BB1\u0BC1\u0BA4\u0BBF \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD.',
      'rsvp.name': '\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BC6\u0BAF\u0BB0\u0BCD',
      'rsvp.mobile': '\u0B95\u0BC8\u0BAF\u0B9F\u0BC8 \u0B8E\u0BA3\u0BCD',
      'rsvp.guests': '\u0BB5\u0BB0\u0BC1\u0B95\u0BC8\u0BAF\u0BBE\u0BB3\u0BB0\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0B8E\u0BA3\u0BCD\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC8',
      'rsvp.selectGuests': '\u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95',
      'rsvp.attending': '\u0BA8\u0BBE\u0BA9\u0BCD \u0B95\u0BB2\u0BA8\u0BCD\u0BA4\u0BC1 \u0B95\u0BCA\u0BB3\u0BCD\u0BB5\u0BC7\u0BA9\u0BCD',
      'rsvp.submit': '\u0BAA\u0BA4\u0BBF\u0BB2\u0BCD \u0B85\u0BA9\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1',
      'rsvp.success.title': '\u0BA8\u0BA9\u0BCD\u0BB1\u0BBF!',
      'rsvp.success.desc': '\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BA4\u0BBF\u0BB2\u0BCD \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BC1\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1. \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B9F\u0BA9\u0BCD \u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBE\u0B9F\u0BBF\u0BAA\u0BCD\u0BAA\u0BA4\u0BB1\u0BCD\u0B95\u0BC1 \u0BA8\u0BBE\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BCB\u0BAE\u0BCD!',
      'contact.tag': '\u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0BAA\u0BC1 \u0B95\u0BCA\u0BB3\u0BCD\u0BB3',
      'contact.title': '\u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BC8 \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD',
      'contact.groom': '\u0B9A\u0BB0\u0BCD\u0BB5\u0BC7\u0BB7\u0BCD (\u0BAE\u0BA3\u0BAE\u0B95\u0BA9\u0BCD)',
      'contact.bride': '\u0BB9\u0BB0\u0BCD\u0BB7\u0BA4\u0BCD\u0BA4\u0BBE\u0BB5\u0BBF\u0BA9\u0BCD \u0B95\u0BC1\u0B9F\u0BC1\u0BAE\u0BCD\u0BAA\u0BAE\u0BCD',
      'contact.whatsapp': '\u0BB5\u0BBE\u0B9F\u0BCD\u0BB8\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0B95',
      'footer.date': '19 \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD 20 \u0BA8\u0BB5\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD 2026',
      'footer.madeWith': '\u0B89\u0BB0\u0BC1\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1',
      'footer.forever': '\u0BA8\u0BBF\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4 \u0B95\u0BBE\u0BB2\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1',
    }
  };

  let currentLang = 'en';

  /* ==========================================
     DOM REFS
     ========================================== */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const html = document.documentElement;
  const navbar = $('#navbar');
  const navLinks = $('#navLinks');
  const navHamburger = $('#navHamburger');
  const langToggle = $('#langToggle');
  const invitationCard = $('#invitationCard');
  const heroOpenBtn = $('#heroOpenBtn');
  const rsvpForm = $('#rsvpForm');
  const rsvpSuccess = $('#rsvpSuccess');
  const scrollIndicator = $('#scrollIndicator');

  const countDays = $('#countDays');
  const countHours = $('#countHours');
  const countMinutes = $('#countMinutes');
  const countSeconds = $('#countSeconds');

  /* ==========================================
     NAVBAR
     ========================================== */
  function updateNavbar() {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });

  /* Hamburger */
  navHamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navHamburger.classList.toggle('active');
    navHamburger.setAttribute('aria-expanded', isOpen);
  });

  /* Close nav on link click (mobile) */
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navHamburger.classList.remove('active');
      navHamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* Active nav link on scroll */
  function updateActiveNav() {
    const sections = $$('section[id]');
    let current = '';

    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ==========================================
     INVITATION CARD
     ========================================== */
  heroOpenBtn.addEventListener('click', () => {
    invitationCard.classList.toggle('open');
    heroOpenBtn.textContent = invitationCard.classList.contains('open')
      ? (currentLang === 'en' ? '✉️ Close' : '\u0B85\u0BB4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0BAE\u0BC2\u0B9F\u0BC1')
      : (currentLang === 'en' ? '\uD83D\uDC8C Open Invitation' : '\u0B85\u0BB4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8\u0BA4\u0BCD \u0BA4\u0BBF\u0BB1\u0B95\u0BCD\u0B95');
  });

  /* Click card to flip */
  invitationCard.addEventListener('click', () => {
    invitationCard.classList.toggle('open');
  });

  /* Falling Petals on first open */
  let petalsShown = false;

  function createPetals() {
    if (petalsShown) return;
    petalsShown = true;

    const colors = ['#E8C76A', '#DBAF4A', '#CCA050', '#B8903A', '#F5D76E', '#F0C75E', '#E6B84E'];

    for (let i = 0; i < 50; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';

      const size = 6 + Math.random() * 10;
      const left = Math.random() * 100;
      const delay = Math.random() * 4;
      const duration = 4 + Math.random() * 4;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const d1 = (Math.random() - 0.5) * 60;
      const d2 = (Math.random() - 0.5) * 60;
      const d3 = (Math.random() - 0.5) * 60;
      const d4 = (Math.random() - 0.5) * 60;

      petal.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size * 1.4}px;
        background: ${color};
        --delay: ${delay}s;
        --duration: ${duration}s;
        --drift-1: ${d1}px;
        --drift-2: ${d2}px;
        --drift-3: ${d3}px;
        --drift-4: ${d4}px;
      `;

      document.body.appendChild(petal);

      setTimeout(() => petal.remove(), (duration + delay) * 1000 + 500);
    }
  }

  heroOpenBtn.addEventListener('click', createPetals);

  /* ==========================================
     COUNTDOWN
     ========================================== */
  function updateCountdown() {
    const weddingDate = new Date('2026-11-20T04:30:00+05:30').getTime();
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff <= 0) {
      countDays.textContent = '00';
      countHours.textContent = '00';
      countMinutes.textContent = '00';
      countSeconds.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countDays.textContent = String(days).padStart(2, '0');
    countHours.textContent = String(hours).padStart(2, '0');
    countMinutes.textContent = String(minutes).padStart(2, '0');
    countSeconds.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ==========================================
     SCROLL REVEAL
     ========================================== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  $$('.reveal').forEach(el => revealObserver.observe(el));

  /* ==========================================
     LANGUAGE TOGGLE
     ========================================== */
  function setLanguage(lang) {
    currentLang = lang;
    html.setAttribute('data-lang', lang);

    const keys = translations[lang];
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (keys[key]) {
        el.textContent = keys[key];
      }
    });

    /* Update hero button text */
    if (invitationCard.classList.contains('open')) {
      heroOpenBtn.textContent = lang === 'en' ? '✉️ Close' : '\u0B85\u0BB4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8 \u0BAE\u0BC2\u0B9F\u0BC1';
    } else {
      heroOpenBtn.textContent = lang === 'en' ? '\uD83D\uDC8C Open Invitation' : '\u0B85\u0BB4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8\u0BA4\u0BCD \u0BA4\u0BBF\u0BB1\u0B95\u0BCD\u0B95';
    }

    /* Update submit button text */
    const submitBtn = rsvpForm.querySelector('.rsvp-submit span:first-child');
    if (submitBtn) submitBtn.textContent = keys['rsvp.submit'];

    try {
      localStorage.setItem('wedding-lang', lang);
    } catch (e) { /* ignore */ }
  }

  langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'ta' : 'en';
    setLanguage(nextLang);
  });

  /* Load saved language */
  try {
    const saved = localStorage.getItem('wedding-lang');
    if (saved === 'ta' || saved === 'en') {
      setLanguage(saved);
    }
  } catch (e) { /* ignore */ }

  /* ==========================================
     RSVP FORM
     ========================================== */

  rsvpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = $('#guestName').value.trim();
    const mobile = $('#guestMobile').value.trim();
    const guests = $('#guestCount').value;
    const attending = $('#attendingCheck').checked;

    if (!name) {
      alert(currentLang === 'en' ? 'Please enter your name.' : '\u0BA4\u0BAF\u0BB5\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BC1 \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BC6\u0BAF\u0BB0\u0BC8 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD.');
      return;
    }

    if (!mobile || !/^[0-9]{10}$/.test(mobile)) {
      alert(currentLang === 'en' ? 'Please enter a valid 10-digit mobile number.' : '\u0B9A\u0BC6\u0BB2\u0BCD\u0BB2\u0BC1\u0BAA\u0B9F\u0BBF\u0BAF\u0BBE\u0BA9 10 \u0B87\u0BB2\u0B95\u0BCD\u0B95\u0BA4\u0BCD\u0BA4\u0BBF\u0BA9\u0BCD \u0B95\u0BC8\u0BAF\u0B9F\u0BC8 \u0B8E\u0BA3\u0BCD\u0BA3\u0BC8 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD.');
      return;
    }

    if (!guests) {
      alert(currentLang === 'en' ? 'Please select number of guests.' : '\u0B85\u0BA4\u0BBF\u0BA4\u0BBF\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0B8E\u0BA3\u0BCD\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC8\u0BAF\u0BC8 \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.');
      return;
    }

    const submitBtn = rsvpForm.querySelector('.rsvp-submit');
    const submitSpan = submitBtn.querySelector('span:first-child');
    submitBtn.disabled = true;
    if (submitSpan) submitSpan.textContent = currentLang === 'en' ? 'Sending\u2026' : '\u0B85\u0BA9\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1\u2026';

    const formData = new FormData(rsvpForm);
    formData.set('attending', attending ? 'Yes' : 'No');

    try {
      const response = await fetch('https://formspree.io/f/xwvjgeba', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        rsvpForm.reset();
        rsvpForm.style.display = 'none';
        rsvpSuccess.classList.add('active');
        setTimeout(() => {
          rsvpSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      } else {
        alert(
          currentLang === 'en'
            ? 'Something went wrong. Please try again or contact us directly.'
            : '\u0B8F\u0BB2\u0BC1\u0BAE\u0BCD \u0BAA\u0BBF\u0BB4\u0BC8 \u0B8F\u0BB1\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BC1\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1. \u0BA4\u0BAF\u0BB5\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BC1 \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BC8 \u0BA8\u0BC7\u0BB0\u0BBF\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0BB0\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.'
        );
      }
    } catch (error) {
      alert(
        currentLang === 'en'
          ? 'Network error. Please check your connection and try again.'
          : '\u0BA8\u0BC6\u0B9F\u0BCD\u0BB5\u0B9F\u0BCD\u0B95\u0BC1 \u0BAA\u0BBF\u0BB4\u0BC8. \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B87\u0BA3\u0BC8\u0BAF\u0BAA\u0BCD\u0BAA\u0BC8 \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BC1 \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.'
      );
    } finally {
      submitBtn.disabled = false;
      if (submitSpan) submitSpan.textContent = translations[currentLang]['rsvp.submit'];
    }
  });

})();
