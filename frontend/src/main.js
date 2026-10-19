import './scss/main.scss'
import hero1 from './assets/images/hero/hero1.png'
import hero2 from './assets/images/hero/hero2.png'
import hero3 from './assets/images/hero/hero3.png'
import hero4 from './assets/images/hero/hero4.png'
import logo from './assets/logo-nav.png'
import aboutCourtyard from './assets/images/about/about3.jpg'
import aboutPool from './assets/images/about/about2.jpg'
import aboutBedroom from './assets/images/about/about4.jpg'
import aboutKitchen from './assets/images/about/about1.jpg'
import site1 from './assets/images/sites/site1.jpg'
import site2 from './assets/images/sites/site2.jpg'
import site3 from './assets/images/sites/site3.jpg'
import site4 from './assets/images/sites/site4.jpg'
import site5 from './assets/images/sites/site5.jpg'
import site6 from './assets/images/sites/site6.jpg'
import offersPackages from './assets/images/offers/packages.png'
import dp1 from './assets/images/feedbck/dp1.jpg'
import dp2 from './assets/images/feedbck/dp2.jpg'
import dp3 from './assets/images/feedbck/dp3.jpg'
import dp4 from './assets/images/feedbck/dp4.jpg'
import dp5 from './assets/images/feedbck/dp5.jpg'
import dp6 from './assets/images/feedbck/dp6.jpg'
import dp7 from './assets/images/feedbck/dp7.jpg'
import dp8 from './assets/images/feedbck/dp8.jpg'
import logoFooter from './assets/logo-footer.png'

document.querySelector('#app').innerHTML = `
  <main>
    <section class="hero" aria-labelledby="hero-title">
      <!-- Background Slideshow -->
      <div class="hero-slideshow" aria-hidden="true">
        <div class="hero-slide is-active" style="background-image: url('${hero2}')"></div>
        <div class="hero-slide" style="background-image: url('${hero1}')"></div>
        <div class="hero-slide" style="background-image: url('${hero3}')"></div>
        <div class="hero-slide" style="background-image: url('${hero4}')"></div>
      </div>

      <header class="site-header">
        <a class="brand" href="#home" aria-label="Shirohana Villas home">
          <img src="${logo}" alt="Shirohana Villas" />
        </a>

        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Open navigation">
          <span></span><span></span>
        </button>

        <nav class="primary-navigation" id="primary-navigation" aria-label="Main navigation">
          <a href="#branches">
            <span>Our Branches</span>
            <svg class="nav-chevron" width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
              <path d="M1 1.25L4.5 4.75L8 1.25" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#offers">Offers &amp; Packages</a>
          <a href="#blogs">Blogs</a>
          <a href="#about">About Us</a>
        </nav>

        <a class="header-booking" href="#booking" aria-label="Book your stay">
          <span>Book Now</span>
          <svg class="header-booking-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </header>

      <div class="hero-content" id="home">
        <h1 id="hero-title">Make your stay<br />Calm and Peaceful</h1>
        <p class="hero-description">Immerse yourself in a serene eco-friendly villa experience crafted for mind and body.</p>
        <a class="hero-explore-btn" href="#about" aria-label="Explore our villas">
          <span>Explore More</span>
          <svg class="hero-explore-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <!-- Slide Indicators -->
      <div class="hero-indicators" role="tablist" aria-label="Hero slide controls">
        <button class="hero-dot is-active" type="button" role="tab" aria-selected="true" aria-label="Slide 1"></button>
        <button class="hero-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 2"></button>
        <button class="hero-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 3"></button>
        <button class="hero-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 4"></button>
      </div>
    </section>

    <section class="about-section" id="about" aria-labelledby="about-title">
      <div class="about-copy">
        <p class="section-eyebrow">About Us</p>
        <h2 id="about-title">Eight Curated Eco Luxury Escapes</h2>
        <p class="about-intro">Isle &amp; Garden offers a collection of eight private eco-luxury escapes across Sri Lanka. Our portfolio spans the misty highlands of Haputale and Nuwara Eliya; the coastal soul of Kalpitiya, Kosgoda, Negombo, and Bentota; the historic landscape of Kirinda; and the quiet wilderness of Kaleliya.</p>
        <p class="about-detail">Each property features distinct architecture, style, and curated experiences, defined by its sense of place, while delivering our signature comfort and serenity.</p>
      </div>

      <div class="about-gallery" aria-label="A glimpse of Shirohana Villas">
        <!-- Left column: Courtyard (tall) + Kitchen (wide) -->
        <div class="about-gallery-col">
          <div class="about-img-wrap about-img-tall">
            <img src="${aboutCourtyard}" alt="A peaceful courtyard framed by traditional villa wings and tropical greenery" />
          </div>
          <div class="about-img-wrap about-img-wide">
            <img src="${aboutKitchen}" alt="An open villa kitchen looking out to a tropical garden" />
          </div>
        </div>

        <!-- Right column: Pool (wide) + Bedroom (tall) -->
        <div class="about-gallery-col">
          <div class="about-img-wrap about-img-wide">
            <img src="${aboutPool}" alt="A private plunge pool and daybed tucked into a lush tropical villa" />
          </div>
          <div class="about-img-wrap about-img-tall">
            <img src="${aboutBedroom}" alt="A calm villa bedroom with views of Sri Lanka's green highlands" />
          </div>
        </div>
      </div>
    </section>

    <section class="sites-section" id="branches" aria-labelledby="sites-title">
      <div class="sites-inner">

        <div class="sites-grid">

          <!-- Col 3, Row 1: Header -->
          <header class="sites-header">
            <p class="section-eyebrow">Our Branches</p>
            <h2 class="sites-heading" id="sites-title">Explore Our<br>Sites</h2>
          </header>

          <!-- Card 1: Col 1, Row 2 -->
          <article class="site-card site-card-1">
            <img class="site-card-img" src="${site1}" alt="Eco Natural Villa, Colombo" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <div class="site-card-info">
                <span class="site-card-location">Colombo,</span>
                <span class="site-card-name">Eco Natural Villa</span>
              </div>
              <a class="site-card-btn" href="#view-info" aria-label="View info for Eco Natural Villa">
                View Info <span class="site-card-arrow" aria-hidden="true">&#x2197;</span>
              </a>
            </div>
          </article>

          <!-- Card 2: Col 2, Row 1/3 (tall, starts at top alongside header) -->
          <article class="site-card site-card-2">
            <img class="site-card-img" src="${site2}" alt="Eco Natural Villa, Colombo" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <div class="site-card-info">
                <span class="site-card-location">Colombo,</span>
                <span class="site-card-name">Eco Natural Villa</span>
              </div>
              <a class="site-card-btn" href="#view-info" aria-label="View info for Eco Natural Villa">
                View Info <span class="site-card-arrow" aria-hidden="true">&#x2197;</span>
              </a>
            </div>
          </article>

          <!-- Card 3: Col 3, Row 2 -->
          <article class="site-card site-card-3">
            <img class="site-card-img" src="${site3}" alt="Eco Natural Villa, Colombo" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <div class="site-card-info">
                <span class="site-card-location">Colombo,</span>
                <span class="site-card-name">Eco Natural Villa</span>
              </div>
              <a class="site-card-btn" href="#view-info" aria-label="View info for Eco Natural Villa">
                View Info <span class="site-card-arrow" aria-hidden="true">&#x2197;</span>
              </a>
            </div>
          </article>

          <!-- Card 4: Col 1, Row 3 (Bottom fade effect) -->
          <article class="site-card site-card-fade site-card-4">
            <img class="site-card-img" src="${site4}" alt="Eco Natural Villa, Colombo" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <div class="site-card-info">
                <span class="site-card-location">Colombo,</span>
                <span class="site-card-name">Eco Natural Villa</span>
              </div>
              <a class="site-card-btn" href="#view-info" aria-label="View info for Eco Natural Villa">
                View Info <span class="site-card-arrow" aria-hidden="true">&#x2197;</span>
              </a>
            </div>
          </article>

          <!-- Card 5: Col 2, Row 3 (Bottom fade effect) -->
          <article class="site-card site-card-fade site-card-5">
            <img class="site-card-img" src="${site5}" alt="Eco Natural Villa, Colombo" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <div class="site-card-info">
                <span class="site-card-location">Colombo,</span>
                <span class="site-card-name">Eco Natural Villa</span>
              </div>
              <a class="site-card-btn" href="#view-info" aria-label="View info for Eco Natural Villa">
                View Info <span class="site-card-arrow" aria-hidden="true">&#x2197;</span>
              </a>
            </div>
          </article>

          <!-- Card 6: Col 3, Row 3 (Bottom fade effect) -->
          <article class="site-card site-card-fade site-card-6">
            <img class="site-card-img" src="${site6}" alt="Eco Natural Villa, Colombo" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <div class="site-card-info">
                <span class="site-card-location">Colombo,</span>
                <span class="site-card-name">Eco Natural Villa</span>
              </div>
              <a class="site-card-btn" href="#view-info" aria-label="View info for Eco Natural Villa">
                View Info <span class="site-card-arrow" aria-hidden="true">&#x2197;</span>
              </a>
            </div>
          </article>

        </div><!-- /.sites-grid -->

        <div class="sites-cta-wrap">
          <a class="sites-cta-btn" href="#all-sites" aria-label="Explore all branches and sites">
            Explore More <span class="sites-cta-arrow" aria-hidden="true">&#x2197;</span>
          </a>
        </div>

      </div><!-- /.sites-inner -->
    </section>

    <section class="offers-section" id="offers" aria-labelledby="offers-title">
      <div class="offers-inner">

        <!-- Left: Copy wrap -->
        <div class="offers-copy-wrap">
          <div class="offers-copy">
            <p class="offers-eyebrow">Our Offers</p>
            <h2 id="offers-title">Offers and Packages</h2>
            <p class="offers-description">From scuba diving in Kalpitiya to Hiking in Haputale, our curated packages invite you to discover and fall in love with the beauty of Sri Lanka.</p>

            <div class="offers-activities" role="list">
              <div class="offers-activity" role="listitem">
                <svg class="offers-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 1.5L5.5 5L1.5 8.5H3.8L7.8 5L3.8 1.5H1.5Z" fill="#32986e"/>
                </svg>
                <span>Wild Life Safaris</span>
              </div>
              <div class="offers-activity" role="listitem">
                <svg class="offers-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 1.5L5.5 5L1.5 8.5H3.8L7.8 5L3.8 1.5H1.5Z" fill="#32986e"/>
                </svg>
                <span>Outdoor Camping</span>
              </div>
              <div class="offers-activity" role="listitem">
                <svg class="offers-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 1.5L5.5 5L1.5 8.5H3.8L7.8 5L3.8 1.5H1.5Z" fill="#32986e"/>
                </svg>
                <span>Rafting Adventures</span>
              </div>
              <div class="offers-activity" role="listitem">
                <svg class="offers-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 1.5L5.5 5L1.5 8.5H3.8L7.8 5L3.8 1.5H1.5Z" fill="#32986e"/>
                </svg>
                <span>Scuba Diving</span>
              </div>
              <div class="offers-activity" role="listitem">
                <svg class="offers-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 1.5L5.5 5L1.5 8.5H3.8L7.8 5L3.8 1.5H1.5Z" fill="#32986e"/>
                </svg>
                <span>ATV Rides</span>
              </div>
              <div class="offers-activity" role="listitem">
                <svg class="offers-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 1.5L5.5 5L1.5 8.5H3.8L7.8 5L3.8 1.5H1.5Z" fill="#32986e"/>
                </svg>
                <span>River Boat Rides</span>
              </div>
              <div class="offers-activity" role="listitem">
                <svg class="offers-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 1.5L5.5 5L1.5 8.5H3.8L7.8 5L3.8 1.5H1.5Z" fill="#32986e"/>
                </svg>
                <span>Jets key Rides</span>
              </div>
              <div class="offers-activity" role="listitem">
                <svg class="offers-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 1.5L5.5 5L1.5 8.5H3.8L7.8 5L3.8 1.5H1.5Z" fill="#32986e"/>
                </svg>
                <span>Zip Lines</span>
              </div>
            </div>

            <div class="offers-cta">
              <a class="offers-link-plain" href="#booking">Quick Booking</a>
              <a class="offers-link-outline" href="#offers-all" aria-label="Explore all offers and packages">
                Explore More <span class="offers-arrow" aria-hidden="true">&#x2197;</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Image collage -->
        <div class="offers-image">
          <img src="${offersPackages}" alt="A collage of Sri Lanka adventure packages — elephant safari, white water rafting, ATV riding, and outdoor camping" />
        </div>

      </div>
    </section>

    <section class="feedback-section" id="feedbacks" aria-labelledby="feedback-title">
      <div class="feedback-inner">
        <div class="feedback-grid">

          <!-- Card 1 (Row 1, Col 1) -->
          <article class="feedback-card">
            <div class="feedback-card-header">
              <img class="feedback-avatar" src="${dp1}" alt="Milli Mack" />
              <div class="feedback-author-info">
                <span class="feedback-name">Milli Mack</span>
                <span class="feedback-role">CEO @Multilac</span>
              </div>
            </div>
            <p class="feedback-quote">&ldquo;We stayed at Villa Serenity for a week, and it exceeded every expectation. The ocean views from the terrace were breathtaking, and the private pool was pristine. The staff went above and beyond to make our family stay memorable. We're already planning our return!&rdquo;</p>
          </article>

          <!-- Card 2 (Row 1, Col 2) -->
          <article class="feedback-card">
            <div class="feedback-card-header">
              <img class="feedback-avatar" src="${dp2}" alt="Elena R." />
              <div class="feedback-author-info">
                <span class="feedback-name">Elena R.</span>
                <span class="feedback-role">Germany</span>
              </div>
            </div>
            <p class="feedback-quote">&ldquo;From the seamless check-in process to the personalized concierge service, every detail was handled flawlessly. Waking up to the sound of the waves and enjoying fresh breakfast prepared daily at the villa was pure luxury.&rdquo;</p>
          </article>

          <!-- Title Block (Row 1, Col 3) -->
          <div class="feedback-title-card">
            <div class="feedback-quote-icon" aria-hidden="true">
              <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 22.8C0 12.8 6.5 3.5 17.5 0L19.5 4.8C12.5 7.8 8.5 13.8 8.5 18.2H18.5V38H0V22.8ZM27.5 22.8C27.5 12.8 34 3.5 45 0L47 4.8C40 7.8 36 13.8 36 18.2H46V38H27.5V22.8Z" fill="#32835f"/>
              </svg>
            </div>
            <h2 class="feedback-heading" id="feedback-title">Our Guests&rsquo;<br>Feedbacks</h2>
          </div>

          <!-- Card 3 (Row 2, Col 1) -->
          <article class="feedback-card">
            <div class="feedback-card-header">
              <img class="feedback-avatar" src="${dp3}" alt="Sarath Jay" />
              <div class="feedback-author-info">
                <span class="feedback-name">Sarath Jay</span>
                <span class="feedback-role">CEO @Multilac</span>
              </div>
            </div>
            <p class="feedback-quote">&ldquo;We booked a 5-bedroom villa for a milestone birthday with friends. The layout was spacious enough for everyone to have privacy while providing amazing common areas to cook, lounge, and celebrate together. Highly recommended!&rdquo;</p>
          </article>

          <!-- Card 4 (Row 2, Col 2) -->
          <article class="feedback-card">
            <div class="feedback-card-header">
              <img class="feedback-avatar" src="${dp4}" alt="Sara Saf." />
              <div class="feedback-author-info">
                <span class="feedback-name">Sara Saf.</span>
                <span class="feedback-role">CEO @Multilac</span>
              </div>
            </div>
            <p class="feedback-quote">&ldquo;The villa was fully equipped with top-tier amenities, comfortable beds, and a kitchen that had everything we needed. The interior design was elegant yet cozy. It really felt like staying in a private retreat.&rdquo;</p>
          </article>

          <!-- Card 5 (Row 2, Col 3) -->
          <article class="feedback-card">
            <div class="feedback-card-header">
              <img class="feedback-avatar" src="${dp5}" alt="Davy Johns" />
              <div class="feedback-author-info">
                <span class="feedback-name">Davy Johns</span>
                <span class="feedback-role">CEO @Multilac</span>
              </div>
            </div>
            <p class="feedback-quote">&ldquo;If you are looking for peace and quiet away from crowded resorts, this is the place. Nestled in the hills with panoramic views, we enjoyed total seclusion while still being only a 10-minute drive from the beach.&rdquo;</p>
          </article>

          <!-- Card 6 (Row 3, Col 1) -->
          <article class="feedback-card">
            <div class="feedback-card-header">
              <img class="feedback-avatar" src="${dp6}" alt="St. John" />
              <div class="feedback-author-info">
                <span class="feedback-name">St. John</span>
                <span class="feedback-role">CEO @Multilac</span>
              </div>
            </div>
            <p class="feedback-quote">&ldquo;Traveling with toddlers can be stressful, but the villa team provided high chairs, baby gates, and pool safety measures beforehand. It allowed us to relax completely and enjoy our vacation together.&rdquo;</p>
          </article>

          <!-- Card 7 (Row 3, Col 2) -->
          <article class="feedback-card">
            <div class="feedback-card-header">
              <img class="feedback-avatar" src="${dp7}" alt="Salina Wil." />
              <div class="feedback-author-info">
                <span class="feedback-name">Salina Wil.</span>
                <span class="feedback-role">CEO @Multilac</span>
              </div>
            </div>
            <p class="feedback-quote">&ldquo;Photos usually look better than reality, but in this case, the villa was even more gorgeous in person. Five-star service, gorgeous architecture, and smooth booking from start to finish.&rdquo;</p>
          </article>

          <!-- Card 8 (Row 3, Col 3) -->
          <article class="feedback-card">
            <div class="feedback-card-header">
              <img class="feedback-avatar" src="${dp8}" alt="Kenji N." />
              <div class="feedback-author-info">
                <span class="feedback-name">Kenji N.</span>
                <span class="feedback-role">CEO @Codex</span>
              </div>
            </div>
            <p class="feedback-quote">&ldquo;The high-speed Wi-Fi allowed me to handle remote work meetings seamlessly, while the serene outdoor lounge served as the best desk view I've ever had. A perfect balance of productivity and leisure!&rdquo;</p>
          </article>

        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer" id="contacts">
    <div class="footer-inner">
      <div class="footer-logo-wrap">
        <a href="#home" aria-label="Shirohana Villas">
          <img class="footer-logo" src="${logoFooter}" alt="Shirohana Villas" />
        </a>
      </div>

      <div class="footer-grid">
        <!-- Col 1: Contact -->
        <div class="footer-col">
          <h3 class="footer-col-title">Contact</h3>
          <div class="footer-contact-list">
            <div class="footer-contact-item">
              <span class="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </span>
              <div class="contact-text">
                <span class="contact-title">SHIROHANA GARDEN VILLAS</span>
                32B Macna Marcan Mawatha,<br />Colombo 3, Sri Lanka
              </div>
            </div>

            <div class="footer-contact-item">
              <span class="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </span>
              <div class="contact-text">
                <a href="mailto:villas@shirohanaflowers.com">villas@shirohanaflowers.com</a>
              </div>
            </div>

            <div class="footer-contact-item">
              <span class="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </span>
              <div class="contact-text">
                <a href="tel:+94771080859">(+94) 77 108 0859</a><br />
                <a href="tel:+94776273252">(+94) 77 627 3252</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Col 2: Our Villas -->
        <div class="footer-col">
          <h3 class="footer-col-title">Our Villas</h3>
          <ul class="footer-nav-list">
            <li><a href="#villas">Luna Laguna</a></li>
            <li><a href="#villas">Treasure Rock</a></li>
            <li><a href="#villas">Villa Vista</a></li>
            <li><a href="#villas">Boutique 87</a></li>
            <li><a href="#villas">Saffron &amp; Blue</a></li>
            <li><a href="#villas">SinhaGiri Mansion</a></li>
          </ul>
        </div>

        <!-- Col 3: Quick Links -->
        <div class="footer-col">
          <h3 class="footer-col-title">Quick Links</h3>
          <ul class="footer-nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#offers">Packages</a></li>
            <li><a href="#contacts">Contacts</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <!-- Col 4: News Alert Subscription & Social -->
        <div class="footer-col">
          <h3 class="footer-col-title">News Alert<br />Subscription</h3>
          <form class="footer-subscription-form" onsubmit="event.preventDefault();">
            <input type="email" placeholder="Enter your E-mail" required aria-label="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
          <p class="footer-newsletter-note">Receive exclusive offers, travel inspiration, and updates from Isle &amp; Garden. Unsubscribe anytime.</p>

          <div class="footer-social-wrap">
            <h4 class="footer-social-title">Follow Us on</h4>
            <div class="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>Copyright &copy; 2026 Shirohana. All Rights Reserved. Web Design and Development by Rvndu.</p>
      </div>
    </div>
  </footer>
`

const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.primary-navigation')

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation')
  navigation.classList.toggle('is-open', !isOpen)
})

// ─── Hero Slideshow Controller ─────────────────────────────────────
const heroSlides = document.querySelectorAll('.hero-slide')
const heroDots = document.querySelectorAll('.hero-dot')

if (heroSlides.length > 1) {
  let currentSlideIndex = 0
  let slideshowTimer = null
  const SLIDE_DURATION = 5000 // 5 seconds per slide

  const showSlide = (nextIndex) => {
    heroSlides[currentSlideIndex].classList.remove('is-active')
    if (heroDots[currentSlideIndex]) {
      heroDots[currentSlideIndex].classList.remove('is-active')
      heroDots[currentSlideIndex].setAttribute('aria-selected', 'false')
    }

    currentSlideIndex = nextIndex

    heroSlides[currentSlideIndex].classList.add('is-active')
    if (heroDots[currentSlideIndex]) {
      heroDots[currentSlideIndex].classList.add('is-active')
      heroDots[currentSlideIndex].setAttribute('aria-selected', 'true')
    }
  }

  const advanceSlide = () => {
    const nextIndex = (currentSlideIndex + 1) % heroSlides.length
    showSlide(nextIndex)
  }

  const startSlideshow = () => {
    stopSlideshow()
    slideshowTimer = setInterval(advanceSlide, SLIDE_DURATION)
  }

  const stopSlideshow = () => {
    if (slideshowTimer) {
      clearInterval(slideshowTimer)
      slideshowTimer = null
    }
  }

  heroDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx)
      startSlideshow() // reset timer on manual selection
    })
  })

  startSlideshow()
}
