const HOTEL_WHATSAPP = "2348035550198";
const HOTEL_PHONE = "+234 803 555 0198";
const HOTEL_EMAIL = "reservations@charlingtonhotel.com";
const HOTEL_ADDRESS = "12 Victoria Crescent, Lekki Phase 1, Lagos, Nigeria";

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (toggle && nav) {
  const closeMenu = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

const date = document.getElementById("bookingDate");
const now = new Date();

if (date) {
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
  date.min = localDate;
}

const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("guestName").value.trim();
    const type = document.getElementById("bookingType").value;
    const preferredDate = date ? date.value || "Not specified" : "Not specified";

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    const message =
      `Hello Charlington Hotel & Suites,\n\n` +
      `My name is ${name}.\n` +
      `I would like to enquire about: ${type}.\n` +
      `Preferred date: ${preferredDate}.\n\n` +
      `Please let me know availability, pricing and next steps. I understand this is an enquiry, not a confirmed booking.`;

    window.open(
      `https://wa.me/${HOTEL_WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  });
}

document.querySelectorAll("[data-type]").forEach((link) => {
  link.addEventListener("click", () => {
    const bookingType = document.getElementById("bookingType");
    if (bookingType) {
      bookingType.value = link.dataset.type;
    }
  });
});

if (HOTEL_PHONE) {
  const phoneLink = document.getElementById("phoneLink");
  if (phoneLink) {
    phoneLink.textContent = HOTEL_PHONE;
    phoneLink.href = `tel:${HOTEL_PHONE.replace(/[^\d+]/g, "")}`;
  }
}

if (HOTEL_EMAIL) {
  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.textContent = HOTEL_EMAIL;
    emailLink.href = `mailto:${HOTEL_EMAIL}`;
  }
}

const hotelAddress = document.getElementById("hotelAddress");
if (hotelAddress) {
  hotelAddress.textContent = HOTEL_ADDRESS;
}
