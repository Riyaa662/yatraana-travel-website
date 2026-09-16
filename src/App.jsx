import { useState } from 'react'
import heroBg from './assets/hero-bg.png'
import manaliImg from './assets/manali.png'
import chakrataImg from './assets/chakrata.png'
import jibhiTirthan from './assets/jibhi-tirthan.png'
import madhyamaheswarImg from './assets/madhyamaheswar.png'
import yullaKandaImg from './assets/yulla-kanda.png'
import choptaTungnathImg from './assets/chopta-tungnath.png'
import logo from './assets/yatraana-logo.png'
import ctaBg from './assets/cta-bg.png'
import './App.css'

function App() {
  const [selectedTrip, setSelectedTrip] = useState(null)
  const [activeButton, setActiveButton] = useState(null)
  const [showAllTrips, setShowAllTrips] = useState(false)
  const [showAllTreks, setShowAllTreks] = useState(false)
  return (
    <div className="app">

      {/* NAVBAR */}
<nav className="navbar">
  <div className="brand-logo">
    <img src={logo} alt="Yatraana" />
  </div>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#trips">Categories</a>
    <a href="#treks">Departure</a>
    <a href="#about">About Us</a>
    <a href="#reviews">Reviews</a>
  </div>

  <button
    className="book-btn"
    onClick={() => {
      document.querySelector('.contact-section')?.scrollIntoView({
        behavior: 'smooth'
      })
    }}
  >
    Book Now
  </button>
</nav>


      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-content">

          <h1>
            Where Journeys
            <br />
            <span>Become Stories</span>
          </h1>

          <p className="hero-tagline">
           MAKING EVERY MILE MEMORABLE
          </p> 

          

         <div className="hero-buttons">

  <button
    className={activeButton === 'trips' ? 'primary-btn' : 'outline-btn'}
    onClick={() => {
      setActiveButton('trips')
      document.querySelector('#trips')?.scrollIntoView({
        behavior: 'smooth'
      })
    }}
  >
    Explore Trips →
  </button>

  <button
    className={activeButton === 'treks' ? 'primary-btn' : 'outline-btn'}
    onClick={() => {
      setActiveButton('treks')
      document.querySelector('#treks')?.scrollIntoView({
        behavior: 'smooth'
      })
    }}
  >
    Explore Treks →
  </button>

</div>
        </div>

      </section>


      {/* INTRO */}
      <section className="intro">

        <p className="section-label">
          THE YATRAANA EXPERIENCE
        </p>

        <h2>
          Travel isn't just about
          <br />
          <span>where you go.</span>
        </h2>

        <p>
          It's about the stories you collect along the way.
        </p>

      </section>


      {/* TRIPS */}
      <section className="trips" id="trips">

        <div className="section-heading">

          <div>
            <p className="section-label">
              DISCOVER INDIA
            </p>

            <h2>
              Popular <span>Trips</span>
            </h2>
          </div>

          <button
            className="view-btn"
             onClick={() => setShowAllTrips(!showAllTrips)}
           >
             {showAllTrips ? 'Show Less ↑' : 'View All →'}
          </button>

        </div>


        <div className="trip-grid">

          <div className="trip-card"
            onClick={() => setSelectedTrip('Manali Escape')}
            >
            <div
             className="trip-image"
              style={{ backgroundImage: `url(${manaliImg})` }}
              >
             <span>BESTSELLER</span>
            </div>

            <div className="trip-info">
              <p>HIMACHAL PRADESH</p>

              <h3 style={{ color: '#D71920' }}>Manali Escape</h3>

              <div className="trip-details">
                <span>3 Days-2 Nights</span>
                
              </div>
            </div>
          </div>


          <div className="trip-card"
            onClick={() => setSelectedTrip('Chakrata')}
            >
            <div
            className="trip-image"
             style={{ backgroundImage: `url(${chakrataImg})` }}
             >
           <span>POPULAR</span>
            </div>

            <div className="trip-info">
              <p>UTTARAKHAND</p>

             <h3 style={{ color: '#D71920' }}>Chakrata</h3>

              <div className="trip-details">
                <span>2 Days-1 Night</span>
              
              </div>
            </div>
          </div>


          <div className="trip-card"
            onClick={() => setSelectedTrip('Jibhi-Tirthan')}
            >
            <div
              className="trip-image"
               style={{ backgroundImage: `url(${jibhiTirthan})` }}
                 >
             <span>NEW</span>
            </div>

            <div className="trip-info">
              <p>HIMANCHAL PRADESH</p>

              <h3 style={{ color: '#D71920' }}>Jibhi-Tirthan</h3>

              <div className="trip-details">
                <span>3 Days-2 Nights</span>
                
              </div>
            </div>
          </div>

        </div>
        {showAllTrips && (
  <>
          <div className="trip-card"
             onClick={() => setSelectedTrip('Kasol Escape')}
          >
          <div className="trip-image">
             <span>COMING SOON</span>
           </div>

           <div className="trip-info">
            <p>HIMACHAL PRADESH</p>
           <h3 style={{ color: '#D71920' }}>Kasol Escape</h3>

           <div className="trip-details">
             <span>3 Days-2 Nights</span>
          </div>
          </div>
         </div>

           <div className="trip-card"
            onClick={() => setSelectedTrip('Rishikesh') }
           >
           <div className="trip-image">
             <span>COMING SOON</span>
           </div>

            <div className="trip-info">
            <p>UTTARAKHAND</p>
           <h3 style={{ color: '#D71920' }}>Rishikesh</h3>

           <div className="trip-details">
             <span>2 Days-1 Night</span>
             </div>
             </div>
             </div>
             </>
)}

      </section>


      {/* TREKS */}
      <section className="treks" id="treks">

        <div className="section-heading">

          <div>
            <p className="section-label">
              FOR THE ADVENTURE
            </p>

            <h2>
              Find Your <span>Trail</span>
            </h2>
          </div>

          <button
             className="view-btn"
              onClick={() => setShowAllTreks(!showAllTreks)}
          >
              {showAllTreks ? 'Show Less ↑' : 'View All →'}
          </button>

        </div>


        <div className="trek-grid">

          <div className="trek-card"
           onClick={() => setSelectedTrip('Madhyamaheswar')}
           >
            <div
               className="trek-image"
               style={{ backgroundImage: `url(${madhyamaheswarImg})` }}
            >
            </div>

            <div className="trek-content">
              <p>UTTARAKHAND</p>
              <h3>Madhyamaheswar</h3>
              <span>3Days-2Nights | Moderate</span>
            </div>
          </div>


          <div className="trek-card"
           onClick={() => setSelectedTrip('Yulla Kanda')}
           >
            <div
             className="trek-image"
             style={{ backgroundImage: `url(${yullaKandaImg})` }}
            >
            </div>

            <div className="trek-content">
              <p>HIMACHAL PRADESH</p>
              <h3>Yulla Kanda</h3>
              <span>3Days-2Nights | Moderate</span>
            </div>
          </div>


          <div className="trek-card"
           onClick={() => setSelectedTrip('Chopta Tungnath')}
           >
           <div
            className="trek-image"
            style={{
              backgroundImage: `url(${choptaTungnathImg})`,
            backgroundPosition: 'center 100%'
              }}
            >
            </div>

            <div className="trek-content">
              <p>UTTARAKHAND</p>
              <h3>Chopta Tungnath</h3>
              <span> 3Days-2Nights | Easy</span>
            </div>
          </div>

        </div>

      </section>
        
        {/* DHAM YATRAS */}
<section className="dhams" id="dhams">

  <div className="section-heading">

    <div>
      <p className="section-label">
        DIVINE JOURNEYS
      </p>

      <h2>
        Dham <span>Yatras</span>
      </h2>
    </div>

    <button className="view-btn">
      View All →
    </button>

  </div>

  <div className="dham-grid">

    <div
      className="dham-card"
      onClick={() => setSelectedTrip('Kedarnath Dham')}
    >
      <div className="dham-image">
        <span>POPULAR</span>
      </div>

      <div className="dham-content">
        <p>UTTARAKHAND</p>
        <h3>Kedarnath Dham</h3>
        <div className="dham-details">
          <span>Starting ₹6,499</span>
        </div>
      </div>
    </div>


    <div
      className="dham-card"
      onClick={() => setSelectedTrip('Do Dham (Kedar–Badri)')}
    >
      <div className="dham-image">
        <span>POPULAR</span>
      </div>

      <div className="dham-content">
        <p>UTTARAKHAND</p>
        <h3>Do Dham</h3>
        <div className="dham-details">
          <span>Starting ₹9,999</span>
        </div>
      </div>
    </div>


    <div
      className="dham-card"
      onClick={() => setSelectedTrip('Char Dham Yatra')}
    >
      <div className="dham-image">
        <span>EXPERIENCE</span>
      </div>

      <div className="dham-content">
        <p>UTTARAKHAND</p>
        <h3>Char Dham Yatra</h3>
        <div className="dham-details">
          <span>Starting ₹19,999</span>
        </div>
      </div>
    </div>

  </div>

</section>


      {/* TRIP POPUP */}
      {selectedTrip && (
        <div
          className="trip-popup-overlay"
          onClick={() => setSelectedTrip(null)}
        >
          <div
            className="trip-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setSelectedTrip(null)}
            >
              ✕
            </button>

            <h2>{selectedTrip}</h2>

            <p>
              Discover an unforgettable journey with Yatraana.
            </p>

            <button
              className="primary-btn"
              onClick={() => setSelectedTrip(null)}
            >
              Book Now →
            </button>
          </div>
        </div>
      )}


     

      {/* WHY YATRAANA */}
      <section className="why" id="about">

        <div>
          <p className="section-label">
            WHY YATRAANA
          </p>

          <h2>
            Your journey,
            <br />
            <span>Our responsibility.</span>
          </h2>
        </div>


        <div className="why-grid">

          <div>
            <h3>✦ Curated Trips</h3>
            <p>
              Carefully planned experiences made for you.
            </p>
          </div>

          <div>
            <h3>◇ Local Experts</h3>
            <p>
              Explore destinations with people who know them best.
            </p>
          </div>

          <div>
            <h3>✓ Safe & Reliable</h3>
            <p>
              Your safety and comfort always come first.
            </p>
          </div>

          <div>
            <h3>♡ Made With Love</h3>
            <p>
              Because every journey deserves a story.
            </p>
          </div>

        </div>

      </section>

      {/* REVIEWS */}
<section className="reviews-section" id="reviews">

  <p className="section-label">
    TRAVELLER STORIES
  </p>

  <h2>
    What Our <span>Travellers Say</span>
  </h2>

  <div className="reviews-grid">

    <div className="review-card">
      <div className="stars">★★★★★</div>
      <p>
        “The entire trip was beautifully planned. Everything felt
        smooth, comfortable and memorable.”
      </p>
      <h4>Priya Sharma</h4>
      <small>Manali Traveller</small>
    </div>

    <div className="review-card">
      <div className="stars">★★★★★</div>
      <p>
        “Loved the experience! The destination, stay and overall
        planning made the trip truly special.”
      </p>
      <h4>Rahul Mehta</h4>
      <small>Chakrata Traveller</small>
    </div>

    <div className="review-card">
      <div className="stars">★★★★★</div>
      <p>
        “Yatraana made travelling so easy. Can't wait for my next
        adventure with them!”
      </p>
      <h4>Ananya Verma</h4>
      <small>Jibhi Traveller</small>
    </div>

  </div>

</section>

{/* CONTACT */}
<section className="contact-section">

  <p className="section-label">
    LET'S CONNECT
  </p>

  <h2>
    Plan Your <span>Next Journey</span>
  </h2>

  <div className="contact-cards">

    <a href="tel:7415665172" className="contact-card">
      <div className="contact-icon">☎</div>
      <div>
        <small>CALL US</small>
        <p>7415665172</p>
      </div>
    </a>

    <a href="mailto:yatraana11@gmail.com" className="contact-card">
      <div className="contact-icon">✉</div>
      <div>
        <small>EMAIL US</small>
        <p>yatraana11@gmail.com</p>
      </div>
    </a>

    <a
      href="https://www.instagram.com/yatraana.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <div className="contact-icon instagram-icon">
  <span></span>
</div>
      <div>
        <small>FOLLOW US</small>
        <p>@yatraana.in</p>
      </div>
    </a>

  </div>

</section>

      {/* CTA */}
<section
  className="cta"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),
      url(${ctaBg})
    `
  }}
>
  <div className="cta-logo">
  <img src={logo} alt="Yatraana" />
</div>

  <p>YOUR NEXT ADVENTURE IS WAITING</p>

  <h2>
    Where will you
    <br />
    <span>go next?</span>
  </h2>

  <button className="primary-btn">
    Start Exploring →
  </button>

</section>

      {/* FOOTER */}
      <footer id="contact">

        <div className="footer-logo">
          YATRAANA
        </div>

        <p>
          Journeys worth remembering.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#trips">Categories</a>
          <a href="#treks">Departure</a>
          <a href="#about">About</a>
          <a href="#contact">Reviews</a>
        </div>

        <small>
          © 2026 Yatraana. All rights reserved.
        </small>

      </footer>

    </div>
  )
}

export default App