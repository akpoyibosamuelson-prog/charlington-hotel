<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us | Charlington Hotel & Suites</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="topbar">
    <span>Warm hospitality, trusted service</span>
    <a href="index.html#contact">Contact us ↗</a>
  </div>

  <header class="header">
    <a href="index.html" class="brand" aria-label="Charlington Hotel home">
      <span class="logo">C</span>
      <span>
        <strong>CHARLINGTON</strong>
        <small>HOTEL &amp; SUITES</small>
      </span>
    </a>

    <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">☰</button>

    <nav class="nav" id="nav">
      <a href="index.html#rooms">Rooms</a>
      <a href="index.html#facilities">Facilities</a>
      <a href="index.html#reviews">Reviews</a>
      <a href="events.html">Events</a>
      <a href="about.html" class="active">About</a>
      <a href="index.html#booking" class="btn nav-btn">Book now</a>
    </nav>
  </header>

  <main>
    <section class="page-hero about-hero">
      <div class="page-hero-content">
        <p class="eyebrow">ABOUT US</p>
        <h1>A story rooted in hospitality.</h1>
      </div>
    </section>

    <section class="section about-page">
      <div>
        <p class="eyebrow">OUR STORY</p>
        <h2>Built to make every guest feel at home.</h2>
        <p>Charlington Hotel &amp; Suites was created to offer more than a place to sleep. It was built around a simple idea: every guest should feel welcomed, cared for and confident that their stay is in good hands. From the beginning, we focused on affordable comfort, professional service, and warm hospitality that leaves a lasting impression.</p>
        <p>Today, the hotel stands as a place where guests rest comfortably, staff serve with pride, and families, business travellers and event hosts all find the right environment for their needs. We are committed to making each experience smooth, calm and memorable.</p>
      </div>

      <div class="story-box">
        <span>OUR PROMISE</span>
        <strong>To provide comfort, care and service that guests remember.</strong>
      </div>
    </section>

    <section class="section policies">
      <div class="section-heading compact">
        <div>
          <p class="eyebrow">GUEST POLICY</p>
          <h2>Simple, clear and guest-friendly.</h2>
        </div>
      </div>

      <div class="policy-grid">
        <div class="policy-card">
          <h3>Check-in &amp; Check-out</h3>
          <p><strong>Check-in:</strong> 2:00 PM</p>
          <p><strong>Check-out:</strong> 12:00 PM</p>
        </div>

        <div class="policy-card">
          <h3>Payments</h3>
          <p>We accept cash, bank transfer, mobile money and selected card payments to make reservations easier.</p>
        </div>

        <div class="policy-card">
          <h3>Cancellation</h3>
          <p>Cancellation terms vary by reservation type, but early notice is always appreciated so we can assist effectively.</p>
        </div>
      </div>
    </section>
  </main>

  <footer id="contact">
    <div class="footer-main">
      <div class="brand footer-brand">
        <span class="logo">C</span>
        <span>
          <strong>CHARLINGTON</strong>
          <small>HOTEL &amp; SUITES</small>
        </span>
      </div>

      <div>
        <h4>Phone / WhatsApp</h4>
        <a href="#">Add hotel phone number</a>
      </div>

      <div>
        <h4>Email</h4>
        <a href="#">Add hotel email</a>
      </div>

      <div>
        <h4>Address</h4>
        <p>Add hotel address and city</p>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© <span id="year"></span> Charlington Hotel &amp; Suites</span>
      <span>Enquiries do not confirm a reservation.</span>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>



