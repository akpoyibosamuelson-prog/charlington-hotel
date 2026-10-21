:root {
  --bg: #f7f3ee;
  --paper: #fffdfb;
  --ink: #1e1d1b;
  --muted: #6a625d;
  --green: #1c2d2a;
  --gold: #c7a56d;
  --gold-soft: #e8cf95;
  --line: #e7ddcf;
  --shadow: 0 18px 40px rgba(18,17,15,0.08);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  color: var(--ink);
  font-family: "Inter", sans-serif;
  background: #f9f5f1;
}

a { text-decoration: none; color: inherit; }

img { display: block; max-width: 100%; }

button, input, select { font: inherit; }

.topbar {
  background: #171c1a;
  color: #f2eadf;
  padding: 12px 6%;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 6%;
  background: rgba(249,245,241,0.96);
  border-bottom: 1px solid var(--line);
  position: sticky;
  top: 0;
  z-index: 20;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border: 1px solid var(--gold);
  color: var(--gold);
  font-weight: 700;
  font-size: 1.35rem;
}

.brand strong, .brand small {
  display: block;
  letter-spacing: 0.14em;
}

.brand strong { font-size: 0.82rem; }
.brand small {
  font-size: 0.58rem;
  color: var(--muted);
  margin-top: 4px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.nav a:hover { color: var(--gold); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 22px;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.2s ease;
}

.primary-btn {
  background: linear-gradient(180deg, #d9be88, #c39b5a);
  color: #171412;
  box-shadow: 0 14px 24px rgba(191,145,84,0.15);
}

.ghost-btn {
  border-color: rgba(255,255,255,0.45);
  color: white;
  background: rgba(255,255,255,0.04);
}

.nav-btn {
  background: var(--green);
  color: white;
}

.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  font-size: 1.7rem;
  cursor: pointer;
}

.hero {
  min-height: 610px;
  padding: 80px 6%;
  display: grid;
  grid-template-columns: 1.5fr 0.7fr;
  align-items: end;
  background:
    linear-gradient(90deg, rgba(15,16,16,0.82), rgba(15,16,16,0.68) 45%, rgba(15,16,16,0.22)),
    url("https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=80") center/cover;
  color: white;
}

.hero-inner { max-width: 680px; }

.eyebrow {
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold-soft);
  margin: 0 0 12px;
  font-weight: 700;
}

.hero h1 {
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 600;
  font-size: clamp(3.4rem, 5vw, 5.8rem);
  line-height: 0.96;
}

.hero h1 span { color: var(--gold-soft); }

.hero-copy {
  color: #eee3d7;
  font-size: 1.02rem;
  line-height: 1.8;
  max-width: 520px;
  margin: 22px 0 26px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-note {
  margin-top: 32px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: #ece1d4;
}

.hero-panel {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 14px;
}

.panel-card {
  width: min(240px, 100%);
  padding: 22px 20px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  backdrop-filter: blur(6px);
  box-shadow: var(--shadow);
}

.panel-card span,
.panel-card small { display: block; }

.panel-card span {
  color: #eee3d7;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.panel-card strong {
  display: block;
  margin: 12px 0 8px;
  font-family: "Cormorant Garamond", serif;
  font-size: 2rem;
}

.booking {
  background: linear-gradient(180deg, #f3eee8, #f7f2ed);
  padding: 42px 6% 30px;
  border-bottom: 1px solid var(--line);
  display: grid;
  grid-template-columns: 1fr 2.3fr;
  gap: 18px 30px;
  align-items: center;
}

.booking-head h2 {
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
}

#bookingForm {
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr auto;
  gap: 12px;
  align-items: end;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

input, select {
  width: 100%;
  padding: 14px 12px;
  border: 1px solid #d8cab6;
  background: #fffdfb;
  font: inherit;
}

.form-help {
  grid-column: 2;
  margin: 0;
  color: #7b736a;
  font-size: 0.7rem;
}

.prefix-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  padding: 28px 6%;
  background: var(--paper);
}

.stat {
  text-align: center;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.55);
  padding: 24px 18px;
}

.stat strong {
  display: block;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2rem, 3vw, 2.8rem);
  color: var(--green);
}

.stat span {
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  font-size: 0.68rem;
}

.section {
  padding: 90px 6%;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 30px;
}

.section-heading.compact { margin-bottom: 18px; }

.section-heading h2,
.feature-copy h2,
.about-brief h2,
.cta h2 {
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.5rem, 4vw, 3.7rem);
  line-height: 1.05;
}

.section-heading p,
.about-brief p,
.feature-copy p,
.policy-card p,
.review-card p {
  color: var(--muted);
  line-height: 1.8;
}

.section-heading > p {
  max-width: 420px;
  margin: 0;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.card {
  background: white;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.card-image {
  height: 250px;
  background-size: cover;
  background-position: center;
}

.card-image.room { background-image: url("https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80"); }
.card-image.dining { background-image: url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"); }
.card-image.events { background-image: url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80"); }

.card-body {
  padding: 24px;
}

.card-body h3 {
  margin: 0 0 10px;
  font-family: "Cormorant Garamond", serif;
  font-size: 2.2rem;
}

.card-body p {
  color: var(--muted);
  line-height: 1.7;
  margin: 0 0 16px;
}

.card-meta {
  border-top: 1px solid var(--line);
  padding-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.card-meta span {
  color: var(--green);
  font-weight: 600;
  font-size: 0.78rem;
}

.card-meta a {
  color: var(--green);
  font-weight: 700;
  font-size: 0.75rem;
}

.feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(180deg, #233530, #192724);
  color: white;
}

.feature-image {
  min-height: 430px;
  background: url("https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80") center/cover;
}

.feature-copy {
  padding: 70px 8%;
}

.feature-copy p {
  color: #dfe9e2;
}

.facility-list {
  list-style: none;
  padding: 0;
  margin: 24px 0 30px;
  display: grid;
  gap: 14px;
}

.facility-list li {
  position: relative;
  padding-left: 24px;
  color: #edf2ef;
  line-height: 1.7;
}

.facility-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--gold-soft);
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.review-card {
  background: white;
  border: 1px solid var(--line);
  padding: 26px 22px;
  box-shadow: var(--shadow);
}

.stars {
  color: #d5a342;
  letter-spacing: 0.12em;
  font-size: 1rem;
  margin-bottom: 12px;
}

.review-card strong {
  display: block;
  margin-top: 20px;
  color: var(--muted);
}

.policy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.policy-card {
  background: white;
  border: 1px solid var(--line);
  padding: 24px 20px;
  box-shadow: var(--shadow);
}

.policy-card h3 {
  margin: 0 0 12px;
  font-family: "Cormorant Garamond", serif;
  font-size: 2rem;
}

.about-brief {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 30px;
  align-items: center;
  padding-top: 90px;
  padding-bottom: 90px;
}

.about-brief p {
  max-width: 650px;
}

.story-box {
  min-height: 250px;
  background: linear-gradient(135deg, #c8a56d, #6d7e74);
  padding: 26px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.story-box span {
  letter-spacing: 0.18em;
  font-size: 0.6rem;
  text-transform: uppercase;
}

.story-box strong {
  display: block;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-top: 18px;
  line-height: 1.1;
}

.cta {
  text-align: center;
  background: #f3eee8;
  padding: 84px 6%;
}

.cta p {
  color: var(--muted);
  line-height: 1.8;
}

footer {
  background: #131918;
  color: #f3efe9;
  padding: 48px 6% 0;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  gap: 22px;
  align-items: start;
}

.footer-main h4 {
  margin: 0 0 8px;
  color: var(--gold-soft);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.68rem;
}

.footer-main a,
.footer-main p {
  color: #e4ded7;
  font-size: 0.85rem;
  line-height: 1.8;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  margin-top: 30px;
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  color: #b9b3ab;
  font-size: 0.7rem;
}

.faq-toggle {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  border: none;
  background: var(--green);
  color: white;
  font-weight: 700;
  border-radius: 999px;
  padding: 14px 18px;
  cursor: pointer;
  box-shadow: 0 20px 36px rgba(0,0,0,0.15);
}

.chat-widget {
  position: fixed;
  right: 20px;
  bottom: 90px;
  width: min(340px, calc(100% - 20px));
  background: #fffdfb;
  border: 1px solid #eadfc9;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0,0,0,0.12);
  z-index: 1000;
  display: none;
}

.chat-widget.open {
  display: block;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--green);
  color: white;
  padding: 14px 16px;
  font-weight: 700;
}

.chat-header button {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.chat-body {
  max-height: 250px;
  overflow-y: auto;
  background: #f8f1ea;
  padding: 14px 12px;
}

.bot-msg, .user-msg {
  max-width: 85%;
  border-radius: 12px;
  padding: 10px 12px;
  margin: 8px 0;
  line-height: 1.5;
  font-size: 0.9rem;
}

.bot-msg {
  background: #efe3c8;
  color: var(--ink);
}

.user-msg {
  background: #dfe8e3;
  color: var(--ink);
  margin-left: auto;
}

.chat-input-wrap {
  display: flex;
  border-top: 1px solid var(--line);
  background: white;
}

.chat-input-wrap input {
  flex: 1;
  border: none;
  padding: 14px 12px;
}

.chat-input-wrap button {
  border: none;
  background: var(--gold);
  color: #171412;
  font-weight: 700;
  padding: 0 16px;
  cursor: pointer;
}

.chat-actions {
  padding: 12px;
  background: white;
  border-top: 1px solid var(--line);
}

.support-btn {
  width: 100%;
  padding: 12px;
  background: var(--green);
  color: white;
  border: none;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .booking {
    grid-template-columns: 1fr;
  }

  #bookingForm {
    grid-template-columns: repeat(2, 1fr);
  }

  .form-help {
    grid-column: 1;
  }

  .cards,
  .review-grid,
  .policy-grid,
  .prefix-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .feature,
  .about-brief,
  .footer-main {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .header {
    flex-wrap: wrap;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  .menu-toggle {
    display: block;
  }

  .nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 6px;
  }

  .nav.open {
    display: flex;
  }

  .cards,
  .review-grid,
  .policy-grid,
  .prefix-strip,
  #bookingForm {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: 520px;
    padding-top: 52px;
  }

  .hero-panel {
    justify-content: flex-start;
  }

  .chat-widget {
    width: calc(100% - 20px);
    right: 10px;
    bottom: 74px;
  }
}

