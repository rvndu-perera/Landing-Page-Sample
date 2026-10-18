import './scss/main.scss'
import heroImage from './assets/images/hero/hero2.png'
import logo from './assets/logo-nav.png'
import aboutCourtyard from './assets/images/about/about3.jpg'
import aboutPool from './assets/images/about/about2.jpg'
import aboutBedroom from './assets/images/about/about4.jpg'
import aboutKitchen from './assets/images/about/about1.jpg'

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
