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
      'story.milestone1.desc': 'Two souls destined to find each other, brought together by the beautiful tapestry of fate. Our journey began with a smile that promised forever.',
      'story.milestone2.title': 'The Proposal',
      'story.milestone2.desc': 'A moment suspended in time, where words turned into promises and two hearts decided to beat as one. The beginning of our forever.',
      'story.milestone3.title': 'The Wedding',
      'story.milestone3.desc': 'Surrounded by loved ones, under the auspicious heavens, we unite in the sacred bond of matrimony. A celebration of love, culture, and togetherness.',
      'countdown.title': 'Counting Down to Forever',
      'countdown.days': 'Days',
      'countdown.hours': 'Hours',
      'countdown.minutes': 'Minutes',
      'countdown.seconds': 'Seconds',
      'events.tag': 'Save the Dates',
      'events.title': 'Wedding Events',
      'events.reception.label': 'Reception',
      'events.reception.title': 'Evening Reception',
      'events.reception.venue': 'OSBS Mahal, Coimbatore',
      'events.wedding.label': 'Wedding',
      'events.wedding.title': 'Sacred Wedding Ceremony',
      'events.wedding.venue': 'OSBS Mahal, Coimbatore',
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
      'story.milestone1.desc': '\u0B92\u0BB0\u0BC1\u0BB5\u0BB0\u0BC8\u0B92\u0BB0\u0BC1\u0BB5\u0BB0\u0BCD \u0B95\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BCA\u0BB3\u0BCD\u0BB3 \u0BB5\u0BBF\u0BA4\u0BBF\u0BAF\u0BBF\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0B87\u0BB0\u0BA3\u0BCD\u0B9F\u0BC1 \u0B86\u0BA4\u0BCD\u0BAE\u0BBE\u0B95\u0BCD\u0B95\u0BB3\u0BCD, \u0BB5\u0BBF\u0BA4\u0BBF\u0BAF\u0BBF\u0BA9\u0BCD \u0B85\u0BB4\u0B95\u0BBE\u0BA9 \u0BA8\u0BC2\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BBF\u0BA9\u0BBE\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BBF\u0BA3\u0BC8\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA9\u0BB0\u0BCD. \u0B8E\u0BA9\u0BCD\u0BB1\u0BC6\u0BA9\u0BCD\u0BA9\u0BC1\u0BAE\u0BCD \u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1\u0B9F\u0BAE\u0BCD \u0B85\u0BB3\u0BBF\u0BA4\u0BCD\u0BA4 \u0B92\u0BB0\u0BC1 \u0B9A\u0BBF\u0BB1\u0BBF\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0B8E\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BAF\u0BA3\u0BAE\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95\u0BBF\u0BAF\u0BA4\u0BC1.',
      'story.milestone2.title': '\u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BA3 \u0BB5\u0BBE\u0BB4\u0BCD\u0BA4\u0BCD\u0BA4\u0BC1',
      'story.milestone2.desc': '\u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BA8\u0BBF\u0BB1\u0BC1\u0BA4\u0BCD\u0BA4\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0B92\u0BB0\u0BC1 \u0B95\u0BCD\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BCD, \u0BB5\u0BBE\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BC8\u0B95\u0BB3\u0BCD \u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1\u0B9F\u0BAE\u0BCD\u0B86\u0B95\u0BB5\u0BC1\u0BAE\u0BCD, \u0B87\u0BB0\u0BA3\u0BCD\u0B9F\u0BC1 \u0B87\u0BA4\u0BAF\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BBE\u0B95 \u0BA4\u0BC1\u0B9F\u0BBF\u0B95\u0BCD\u0B95 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BA9. \u0B8E\u0BA9\u0BCD\u0BB1\u0BC6\u0BA9\u0BCD\u0BA9\u0BC1\u0BAE\u0BCD \u0B8E\u0BA9\u0BCD\u0B95\u0BB3\u0BCD \u0BA4\u0BCA\u0B9F\u0B95\u0BCD\u0B95\u0BAE\u0BCD.',
      'story.milestone3.title': '\u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BA3\u0BAE\u0BCD',
      'story.milestone3.desc': '\u0B85\u0BA9\u0BCD\u0BAA\u0BC1\u0B9F\u0BC8\u0BAF\u0BB5\u0BB0\u0BCD\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0BAE\u0BA4\u0BCD\u0BA4\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD, \u0BA8\u0BB2\u0BCD\u0BB2 \u0BB5\u0BBE\u0BA9\u0BA4\u0BCD\u0BA4\u0BBF\u0BA9\u0BCD \u0B95\u0BC0\u0BB4\u0BCD, \u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BA3 \u0B8E\u0BA9\u0BCD\u0B95\u0BBF\u0BA9\u0BCD\u0BB1 \u0BAA\u0BB0\u0BBF\u0B9A\u0BC1\u0BA4\u0BCD\u0BA4 \u0B95\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BBE\u0BA9\u0BCD\u0BA9\u0BBF\u0BA9\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BBF\u0BA3\u0BC8\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BCB\u0BAE\u0BCD. \u0B95\u0BBE\u0BA4\u0BB2\u0BCD, \u0B95\u0BB2\u0bbe\u0B9A\u0BCD\u0B9A\u0BBE\u0BB0\u0BAE\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BBF\u0BA3\u0BC8\u0BB5\u0BBF\u0BA9\u0BCD \u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBE\u0B9F\u0BAE\u0BCD.',
      'countdown.title': '\u0BA8\u0BBF\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4 \u0BAE\u0B95\u0BBF\u0BB4\u0BCD\u0B9A\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC8',
      'countdown.days': '\u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD',
      'countdown.hours': '\u0BAE\u0BA3\u0BBF\u0BA4\u0BCD\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0BB3\u0BCD',
      'countdown.minutes': '\u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD',
      'countdown.seconds': '\u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BCD',
      'events.tag': '\u0BA4\u0BC7\u0BA4\u0BBF\u0B95\u0BB3\u0BC8 \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD',
      'events.title': '\u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BA3 \u0BA8\u0BBF\u0B95\u0BB4\u0BCD\u0BB5\u0BC1\u0B95\u0BB3\u0BCD',
      'events.reception.label': '\u0BB5\u0BB0\u0BB5\u0BC7\u0BB1\u0BCD\u0BAA\u0BC1',
      'events.reception.title': '\u0BAE\u0BBE\u0BB2\u0BC8 \u0BB5\u0BB0\u0BB5\u0BC7\u0BB1\u0BCD\u0BAA\u0BC1',
      'events.reception.venue': '\u0B8E\u0BB8\u0BCD.\u0BAA\u0BBF.\u0B8E\u0BB8\u0BCD \u0BAE\u0BB9\u0BB2\u0BCD, \u0B95\u0BCB\u0BB5\u0BC8',
      'events.wedding.label': '\u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BA3\u0BAE\u0BCD',
      'events.wedding.title': '\u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BA3 \u0B9A\u0B9F\u0B99\u0BCD\u0B95\u0BC1',
      'events.wedding.venue': '\u0B8E\u0BB8\u0BCD.\u0BAA\u0BBF.\u0B8E\u0BB8\u0BCD \u0BAE\u0BB9\u0BB2\u0BCD, \u0B95\u0BCB\u0BB5\u0BC8',
      'venue.tag': '\u0B87\u0B9F\u0BAE\u0BCD',
      'venue.title': '\u0B8E\u0BB8\u0BCD.\u0BAA\u0BBF.\u0B8E\u0BB8\u0BCD \u0BAE\u0BB9\u0BB2\u0BCD',
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
      'rsvp.success.title': '\u0BA8\u0BA8\u0BCD\u0BB1\u0BBF!',
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
      ? (currentLang === 'en' ? '✉️ Close' : '\u0BAE\u0BC2\u0B9F\u0BC1')
      : (currentLang === 'en' ? '\uD83D\uDC8C Open Invitation' : '\u0B85\u0BB4\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8\u0BA4\u0BCD \u0BA4\u0BBF\u0BB1\u0B95\u0BCD\u0B95');
  });

  /* Click card to flip */
  invitationCard.addEventListener('click', () => {
    invitationCard.classList.toggle('open');
  });

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
      heroOpenBtn.textContent = lang === 'en' ? '✉️ Close' : '\u0BAE\u0BC2\u0B9F\u0BC1';
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

  rsvpForm.addEventListener('submit', (e) => {
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

    const formData = {
      name,
      mobile,
      guests,
      attending,
      timestamp: new Date().toISOString(),
    };

    console.log('RSVP Data:', formData);

    rsvpForm.reset();
    rsvpForm.style.display = 'none';
    rsvpSuccess.classList.add('active');

    /* Scroll to success */
    setTimeout(() => {
      rsvpSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  });

})();
