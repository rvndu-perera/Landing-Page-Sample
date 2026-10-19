import './scss/main.scss'
import heroImage from './assets/images/hero/hero2.png'
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

document.querySelector('#app').innerHTML = `
  <main>
    <section class="hero" aria-labelledby="hero-title" style="--hero-image: url('${heroImage}')">
      <header class="site-header">
        <a class="brand" href="#home" aria-label="Shirohana Villas home">
          <img src="${logo}" alt="Shirohana Villas" />
        </a>

        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Open navigation">
          <span></span><span></span>
        </button>

        <nav class="primary-navigation" id="primary-navigation" aria-label="Main navigation">
          <a href="#branches">Our Branches <span class="chevron" aria-hidden="true">⌄</span></a>
          <a href="#offers">Offers &amp; Packages</a>
          <a href="#blogs">Blogs</a>
          <a href="#about">About Us</a>
        </nav>

        <a class="header-booking" href="#booking">Book Now <span aria-hidden="true">↗</span></a>
      </header>

      <div class="hero-content" id="home">
        <p class="hero-eyebrow">A slower kind of escape</p>
        <h1 id="hero-title">Make your stay<br />Calm and Peaceful</h1>
        <p class="hero-description">Immerse yourself in a serene eco-friendly villa experience crafted for mind and body.</p>
      </div>

      <a class="explore-link" href="#about">Explore <span aria-hidden="true">↓</span></a>
    </section>

    <section class="about-section" id="about" aria-labelledby="about-title">
      <div class="about-copy">
        <p class="section-eyebrow">About Us</p>
        <h2 id="about-title">Eight Curated Eco Luxury Escapes</h2>
        <p class="about-intro">Isle &amp; Garden offers a collection of eight private eco-luxury escapes across Sri Lanka. Our portfolio spans the misty highlands of Haputale and Nuwara Eliya, the coastal soul of Kalpitiya, Koggala, Negombo, and Bentota; the historic landscape of Kandy; and the quiet wilderness of Kalawewa.</p>
        <p class="about-detail">Each property features distinct architecture, style, and curated experiences, defined by its sense of place, while delivering our signature comfort and serenity.</p>
      </div>

      <div class="about-gallery" aria-label="A glimpse of Shirohana Villas">
        <img class="about-gallery-main" src="${aboutCourtyard}" alt="A peaceful courtyard framed by traditional villa wings and tropical greenery" />
        <img src="${aboutPool}" alt="A private plunge pool tucked into a lush tropical villa" />
        <img src="${aboutBedroom}" alt="A calm villa bedroom with views of Sri Lanka's green highlands" />
        <img src="${aboutKitchen}" alt="An open villa kitchen looking out to a tropical garden" />
      </div>
    </section>

    <section class="sites-section" id="branches" aria-labelledby="sites-title">
      <div class="sites-inner">

        <div class="sites-header">
          <div class="sites-header-left">
            <p class="section-eyebrow">Our Sites</p>
          </div>
          <h2 class="sites-heading" id="sites-title">Explore Our<br>Sites</h2>
        </div>

        <div class="sites-grid">

          <!-- Card 1 — tall left (spans rows 1–2) -->
          <article class="site-card">
            <img class="site-card-img" src="${site1}" alt="Shirohana Kandy — a lakeside eco villa with private pool amid lush jungle" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <span class="site-card-location">Kandy</span>
              <a class="site-card-book" href="#booking" aria-label="Book a villa at Kandy">
                Book a Villa <span class="site-card-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="site-card">
            <img class="site-card-img" src="${site2}" alt="Shirohana Kandy — garden plunge tub with mountain lake view at dusk" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <span class="site-card-location">Kandy</span>
              <a class="site-card-book" href="#booking" aria-label="Book a villa at Kandy">
                Book a Villa <span class="site-card-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <!-- Card 3 -->
          <article class="site-card">
            <img class="site-card-img" src="${site3}" alt="Shirohana Haputale — hilltop villa with infinity pool overlooking misty valleys" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <span class="site-card-location">Haputale</span>
              <a class="site-card-book" href="#booking" aria-label="Book a villa at Haputale">
                Book a Villa <span class="site-card-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <!-- Card 4 -->
          <article class="site-card">
            <img class="site-card-img" src="${site4}" alt="Shirohana Kandy — traditional courtyard villa with carved columns" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <span class="site-card-location">Kandy</span>
              <a class="site-card-book" href="#booking" aria-label="Book a villa at Kandy">
                Book a Villa <span class="site-card-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <!-- Card 5 -->
          <article class="site-card">
            <img class="site-card-img" src="${site5}" alt="Shirohana Kalawewa — jungle villa with Sigiriya Rock Fortress views" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <span class="site-card-location">Kalawewa</span>
              <a class="site-card-book" href="#booking" aria-label="Book a villa at Kalawewa">
                Book a Villa <span class="site-card-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <!-- Card 6 — full-width panoramic strip -->
          <article class="site-card">
            <img class="site-card-img" src="${site6}" alt="Shirohana Negombo — open villa kitchen with tropical garden and pool" />
            <div class="site-card-overlay" aria-hidden="true"></div>
            <div class="site-card-footer">
              <span class="site-card-location">Negombo</span>
              <a class="site-card-book" href="#booking" aria-label="Book a villa at Negombo">
                Book a Villa <span class="site-card-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

        </div><!-- /.sites-grid -->

        <div class="sites-load-more">
          <button class="load-more-btn" type="button" id="sites-load-more" aria-label="Load more sites">
            Load more <span class="load-more-icon" aria-hidden="true">↓</span>
          </button>
        </div>

      </div><!-- /.sites-inner -->
    </section>

    <section class="offers-section" id="offers" aria-labelledby="offers-title">
      <div class="offers-inner">

        <!-- Left: Copy -->
        <div class="offers-copy">
          <p class="section-eyebrow">Our Offers</p>
          <h2 id="offers-title">Offers and Packages</h2>
          <p class="offers-description">From scuba diving in Kalpitiya to Hiking in Haputale, our curated packages invite you to discover and fall in love with the beauty of Sri Lanka.</p>

          <div class="offers-activities" role="list">
            <div class="offers-activity" role="listitem">Wild Life Safaris</div>
            <div class="offers-activity" role="listitem">Outdoor Camping</div>
            <div class="offers-activity" role="listitem">Rafting Adventures</div>
            <div class="offers-activity" role="listitem">Scuba Diving</div>
            <div class="offers-activity" role="listitem">ATV Rides</div>
            <div class="offers-activity" role="listitem">River Boat Rides</div>
            <div class="offers-activity" role="listitem">Jet Sky Rides</div>
            <div class="offers-activity" role="listitem">Zip Lines</div>
          </div>

          <div class="offers-cta">
            <a class="offers-link-plain" href="#booking">Quick Booking</a>
            <a class="offers-link-outline" href="#offers-all" aria-label="Explore all offers and packages">
              Explore More <span class="offers-arrow" aria-hidden="true">↗</span>
            </a>
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
`

const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.primary-navigation')

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation')
  navigation.classList.toggle('is-open', !isOpen)
})
