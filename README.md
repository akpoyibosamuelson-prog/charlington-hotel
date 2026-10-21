/* Before publishing, replace these placeholders with the hotel's real details. */
const HOTEL_WHATSAPP = "2348000000000";
const HOTEL_PHONE = "";
const HOTEL_EMAIL = "";
const HOTEL_ADDRESS = "Add hotel address and city";

document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
  });

  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    });
  });
}

const date = document.getElementById('bookingDate');
if (date) {
  const now = new Date();
  date.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().split('T')[0];
}

document.getElementById('bookingForm')?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('guestName').value.trim();
  const type = document.getElementById('bookingType').value;
  const preferredDate = date?.value || 'Not specified';

  if (!name) {
    return alert('Please enter your name.');
  }

  if (HOTEL_WHATSAPP === '2348000000000') {
    return alert('The hotel WhatsApp number is not configured yet. Update HOTEL_WHATSAPP in script.js before publishing.');
  }

  const message = `Hello Charlington Hotel & Suites,\n\nMy name is ${name}.\nI would like to enquire about: ${type}.\nPreferred date: ${preferredDate}.\n\nPlease let me know availability, pricing and next steps. I understand this is an enquiry, not a confirmed booking.`;

  window.open(`https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

document.querySelectorAll('[data-type]').forEach((a) => {
  a.addEventListener('click', () => {
    const target = document.getElementById('bookingType');
    if (target) target.value = a.dataset.type;
  });
});

if (HOTEL_PHONE) {
  const a = document.getElementById('phoneLink');
  if (a) {
    a.textContent = HOTEL_PHONE;
    a.href = `tel:${HOTEL_PHONE.replace(/[^\d+]/g, '')}`;
  }
}

if (HOTEL_EMAIL) {
  const a = document.getElementById('emailLink');
  if (a) {
    a.textContent = HOTEL_EMAIL;
    a.href = `mailto:${HOTEL_EMAIL}`;
  }
}

document.getElementById('hotelAddress').textContent = HOTEL_ADDRESS;

