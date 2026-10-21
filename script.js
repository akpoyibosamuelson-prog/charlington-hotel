:root {
  --ink: #171410;
  --muted: #766a5f;
  --cream: #f5efe8;
  --paper: #f9f6f2;
  --green: #1d2b27;
  --deep: #101312;
  --gold: #c7a56d;
  --gold-soft: #e2c693;
  --line: #e8ddd0;
  --serif: 'Playfair Display', Georgia, serif;
  --sans: 'DM Sans', Arial, sans-serif;
  --shadow: 0 24px 60px rgba(20, 18, 15, 0.12);
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  color: var(--ink);
  font-family: var(--sans);
  background: linear-gradient(180deg, #f9f6f2, #f3eee8 32%, #f9f6f2);
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, select {
  font: inherit;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 6.5%;
  background: var(--deep);
  color: #efe7d9;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.topbar a {
  color: var(--gold-soft);
  font-weight: 600;
}

.header {
  height: 92px;
  padding: 0 6.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(249, 246, 242, 0.9);
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(23, 20, 16, 0.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.monogram {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border: 1px solid var(--gold);
  color: var(--gold);
  font: 27px var(--serif);
  background: rgba(199, 165, 109, 0.08);
}

.brand b,
.brand small {
  display: block;
  letter-spacing: 0.13em;
}

.brand b {
  font-size: 13px;
}

.brand small {
  font-size: 9px;
  color: var(--muted);
  margin-top: 5px;
  letter-spacing: 0.23em;
}

nav {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 12px;
  font-weight: 600;
}

nav a:not(.nav-button) {
  color: #4c433d;
}

nav a:hover,
.card-copy a:hover,
.footer-bottom a:hover {
  color: #a58042;
}

.nav-button {
  padding: 14px 22px;
  background: var(--green);
  color: white;
  box-shadow: var(--shadow);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.menu-toggle {
  display: none;
  border: 0;
  background: none;
  font-size: 25px;
  cursor: pointer;
}

.hero {
  min-height: 640px;
  display: grid;
  grid-template-columns: 1.6fr 0.6fr;
  align-items: end;
  padding: 75px 10% 50px;
  color: white;
  background: linear-gradient(90deg, rgba(17, 16, 13, 0.86), rgba(17, 16, 13, 0.72) 42%, rgba(17, 16, 13, 0.18)), url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=85') center/cover;
}

.hero-inner {
  max-width: 680px;
}

.eyebrow {
  font-size: 10px;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: #c8a46d;
  margin: 0 0 17px;
  text-transform: uppercase;
}

.hero h1 {
  font: 600 clamp(48px, 6vw, 80px)/1.02 var(--serif);
  letter-spacing: -0.03em;
  margin: 0;
}

.hero h1 em,
.section h2 em,
.dining-copy h2 em {
  font-weight: 500;
  color: var(--gold-soft);
}

.hero-copy {
  max-width: 500px;
  color: #ece5de;
  font-size: 16px;
  line-height: 1.8;
  margin: 22px 0 30px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.button {
  min-height: 52px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.2s ease;
  border-radius: 0;
}

.gold {
  background: linear-gradient(180deg, #d7ba82, #c29b5d);
  color: #1d211d;
  box-shadow: 0 18px 28px rgba(199, 165, 109, 0.2);
}

.gold:hover {
  background: linear-gradient(180deg, #d8bf89, #caa761);
}

.outline {
  border-color: rgba(255, 255, 255, 0.4);
  color: white;
  background: rgba(255, 255, 255, 0.03);
}

.outline:hover {
  background: white;
  color: var(--green);
}

.dark {
  background: var(--green);
  color: white;
}

.hero-note {
  margin-top: 42px;
  font-size: 10px;
  color: #e8ded0;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.hero-panel {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 16px;
}

.panel-card {
  width: min(100%, 240px);
  padding: 22px 20px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow);
}

.panel-card span,
.panel-card small {
  display: block;
  color: #efe4d6;
}

.panel-card span {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.panel-card strong {
  display: block;
  margin: 12px 0 8px;
  font: 600 28px var(--serif);
  color: white;
}

.booking {
  padding: 38px 6.5% 28px;
  background: linear-gradient(180deg, #f4efe8, #f7f2ed);
  display: grid;
  grid-template-columns: 1fr 2.4fr;
  gap: 20px 35px;
  align-items: center;
  border-bottom: 1px solid rgba(23, 20, 16, 0.06);
}

.booking h2 {
  font: 500 30px var(--serif);
  margin: 0;
}

.booking .eyebrow {
  margin-bottom: 8px;
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr auto;
  gap: 12px;
  align-items: end;
}

label {
  font-size: 10px;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

input,
select {
  width: 100%;
  min-width: 0;
  border: 1px solid #d7cdbd;
  background: #fffdfb;
  padding: 14px 12px;
  color: var(--ink);
  font-size: 12px;
  border-radius: 0;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.form-help {
  grid-column: 2;
  color: #7b7369;
  font-size: 10px;
  margin: 0;
  letter-spacing: 0.04em;
}

.intro-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  padding-top: 26px;
  padding-bottom: 26px;
  background: var(--paper);
}

.stat {
  padding: 26px 18px;
  text-align: center;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.5);
}

.stat strong {
  display: block;
  font: 600 clamp(26px, 3vw, 36px) var(--serif);
  color: var(--green);
}

.stat span {
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--muted);
  text-transform: uppercase;
}

.section {
  padding: 96px 8%;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 35px;
  margin-bottom: 42px;
}

.section-heading.compact {
  margin-bottom: 24px;
}

.section h2,
.dining-copy h2,
.about h2,
.cta h2 {
  font: 500 clamp(34px, 4vw, 52px)/1.12 var(--serif);
  margin: 0;
  letter-spacing: -0.025em;
}

.section-heading > p {
  max-width: 430px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
  margin: 0 0 5px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.cards article {
  background: #fffdfb;
  border: 1px solid rgba(23, 20, 16, 0.08);
  box-shadow: 0 12px 30px rgba(18, 17, 15, 0.05);
}

.card-image {
  height: 250px;
  position: relative;
  background-size: cover;
  background-position: center;
}

.room {
  background-image: url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80');
}

.food {
  background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80');
}

.event {
  background-image: url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80');
}

.card-image span {
  position: absolute;
  left: 18px;
  bottom: 17px;
  background: rgba(18, 24, 22, 0.82);
  padding: 9px 12px;
  color: white;
  font-size: 9px;
  letter-spacing: 0.14em;
}

.card-copy {
  padding: 28px 24px 30px;
}

.card-copy h3 {
  font: 500 28px var(--serif);
  margin: 0 0 10px;
}

.card-copy p {
  font-size: 12px;
  line-height: 1.8;
  color: var(--muted);
  min-height: 72px;
  margin: 0 0 20px;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid var(--line);
  padding-top: 14px;
}

.card-meta span {
  font-size: 11px;
  color: var(--green);
  font-weight: 600;
}

.card-meta a {
  font-size: 11px;
  font-weight: 700;
  color: var(--green);
  letter-spacing: 0.05em;
}

.dining-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(180deg, #24352f, #182823);
  color: white;
}

.dining-photo {
  background: url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85') center/cover;
  min-height: 500px;
}

.dining-copy {
  padding: 78px clamp(34px, 7vw, 100px);
  align-self: center;
}

.dining-copy > p:not(.eyebrow) {
  color: #dfe7e1;
  font-size: 14px;
  line-height: 1.9;
  max-width: 440px;
  margin: 22px 0;
}

.menu-types {
  display: flex;
  gap: 27px;
  margin: 27px 0 30px;
  padding: 18px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
}

.menu-types span {
  font-size: 9px;
  color: var(--gold-soft);
  letter-spacing: 0.08em;
}

.menu-types b {
  display: block;
  color: white;
  font-size: 12px;
  margin-top: 8px;
  letter-spacing: 0;
}

.dining-copy small {
  display: block;
  font-size: 10px;
  line-height: 1.7;
  color: #c5cec7;
  margin-top: 18px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 18px;
}

.gallery-item {
  min-height: 220px;
  overflow: hidden;
}

.gallery-item.tall {
  grid-row: span 2;
  min-height: 460px;
}

.gallery-item.wide {
  grid-column: span 2;
  min-height: 240px;
}

.about {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 9%;
  align-items: center;
}

.about-text {
  font-size: 14px;
  line-height: 1.9;
  color: var(--muted);
  max-width: 570px;
  margin: 20px 0 30px;
}

.values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.values div {
  border-top: 1px solid var(--line);
  padding-top: 15px;
}

.values span {
  font-size: 10px;
  color: #ad8d52;
  display: block;
  margin-bottom: 12px;
}

.values b {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.values p {
  font-size: 10px;
  line-height: 1.7;
  color: var(--muted);
}

.about-art {
  background: linear-gradient(135deg, #b99d72, #6a7b70);
  padding: 18px;
  min-height: 380px;
  display: flex;
  box-shadow: var(--shadow);
}

.about-art > div {
  border: 1px solid rgba(255, 255, 255, 0.45);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.about-art span,
.about-art small {
  font-size: 9px;
  letter-spacing: 0.3em;
}

.about-art strong {
  font: 500 clamp(32px, 4vw, 48px)/1.15 var(--serif);
  margin: 20px 0;
}

.testimonials {
  background: #f5efe8;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 18px;
}

blockquote {
  margin: 0;
  padding: 28px 22px;
  background: white;
  border: 1px solid rgba(23, 20, 16, 0.08);
  color: var(--ink);
  line-height: 1.8;
  font-size: 14px;
  box-shadow: 0 10px 25px rgba(18, 17, 15, 0.04);
}

cite {
  display: block;
  margin-top: 18px;
  font-style: normal;
  color: var(--muted);
  font-weight: 600;
}

.cta {
  text-align: center;
  padding: 82px 20px;
  background: linear-gradient(180deg, #f6f0e9, #f2ebe2);
}

.cta h2 {
  font-size: clamp(34px, 4vw, 48px);
}

.cta > p:not(.eyebrow) {
  font-size: 13px;
  color: var(--muted);
  margin: 16px 0 25px;
  line-height: 1.8;
}

footer {
  background: var(--deep);
  color: #f3f1e9;
  padding: 52px 7% 0;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.1fr 0.8fr 2fr;
  gap: 35px;
  align-items: start;
  padding-bottom: 42px;
}

.footer-brand b {
  color: white;
}

.footer-brand small {
  color: #b9c1b9;
}

.footer-main > p {
  font-size: 12px;
  line-height: 1.8;
  color: #b9c1b9;
  margin: 0;
  max-width: 210px;
}

.contact-details {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.contact-details span {
  font-size: 9px;
  letter-spacing: 0.15em;
  color: var(--gold-soft);
}

.contact-details a,
.contact-details p {
  display: block;
  font-size: 11px;
  color: #e1e5dd;
  margin: 10px 0 0;
  line-height: 1.7;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
  font-size: 9px;
  color: #aeb9af;
}

.footer-bottom a {
  color: var(--gold-soft);
}

@media (max-width: 980px) {
  nav { gap: 14px; }

  .hero {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-panel {
    justify-content: flex-start;
  }

  .booking {
    grid-template-columns: 1fr;
  }

  form {
    grid-template-columns: repeat(2, 1fr);
  }

  .form-help {
    grid-column: 1;
  }

  .intro-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .section {
    padding: 72px 6%;
  }

  .card-image {
    height: 200px;
  }

  .about {
    gap: 5%;
  }

  .footer-main {
    grid-template-columns: 1fr 1fr;
  }

  .contact-details {
    grid-column: 1 / -1;
  }
}

@media (max-width: 700px) {
  .topbar {
    padding: 10px 5%;
    font-size: 9px;
  }

  .header {
    height: 72px;
    padding: 0 5%;
  }

  .monogram {
    width: 36px;
    height: 36px;
  }

  .brand b {
    font-size: 11px;
  }

  .brand small {
    font-size: 8px;
  }

  .menu-toggle {
    display: block;
    color: var(--green);
  }

  nav {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 72px;
    padding: 18px 5% 25px;
    background: rgba(249, 246, 242, 0.97);
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }

  nav.open {
    display: flex;
  }

  nav a {
    padding: 13px 0;
  }

  nav .nav-button {
    padding: 14px;
    text-align: center;
    margin-top: 8px;
  }

  .hero {
    min-height: 540px;
    padding: 65px 7%;
    background-position: 58% center;
  }

  .hero h1 {
    font-size: 49px;
  }

  .hero-copy {
    font-size: 13px;
  }

  .booking {
    padding: 32px 6%;
  }

  form {
    grid-template-columns: 1fr 1fr;
  }

  .booking form label {
    min-width: 0;
  }

  .booking form button {
    grid-column: 1 / -1;
  }

  .section {
    padding: 62px 6%;
  }

  .section-heading {
    display: block;
  }

  .section-heading > p {
    margin-top: 18px;
  }

  .cards,
  .testimonial-grid,
  .values {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .card-image {
    height: 235px;
  }

  .card-copy p {
    min-height: 0;
  }

  .dining-feature {
    grid-template-columns: 1fr;
  }

  .dining-photo {
    min-height: 280px;
  }

  .dining-copy {
    padding: 48px 7%;
  }

  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }

  .gallery-item.tall,
  .gallery-item.wide {
    grid-column: auto;
    grid-row: auto;
    min-height: 200px;
  }

  .about {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .about-art {
    min-height: 290px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .contact-details {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
  }

  .cta {
    padding: 60px 6%;
  }
}

@media (max-width: 390px) {
  .hero h1 {
    font-size: 42px;
  }

  .actions .button {
    width: 100%;
  }

  form {
    grid-template-columns: 1fr;
  }

  .booking form button {
    grid-column: 1;
  }

  .intro-strip {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .values div {
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: 0 8px;
  }

  .values span {
    grid-row: span 2;
  }

  .values p {
    margin: 6px 0;
  }
}

