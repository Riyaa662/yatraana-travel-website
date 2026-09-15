import { useState } from 'react'
import logo from './assets/yatraana-logo.png'
import ctaBg from './assets/cta-bg.png'
import './App.css'

function App() {
  const [selectedTrip, setSelectedTrip] = useState(null)
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
          <a href="#contact">Reviews</a>
        </div>

        <button className="book-btn">
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
            <button className="primary-btn">
              Explore Trips →
            </button>

            <button className="outline-btn">
              Explore Treks
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

          <button className="view-btn">
            View All →
          </button>

        </div>


        <div className="trip-grid">

          <div className="trip-card"
            onClick={() => setSelectedTrip('Manali Escape')}
            >
            <div className="trip-image manali">
              <span>BESTSELLER</span>
            </div>

            <div className="trip-info">
              <p>HIMACHAL PRADESH</p>

              <h3>Manali Escape</h3>

              <div className="trip-details">
                <span>5 Days</span>
                
              </div>
            </div>
          </div>


          <div className="trip-card"
            onClick={() => setSelectedTrip('Chakrata')}
            >
            <div className="trip-image kashmir">
              <span>POPULAR</span>
            </div>

            <div className="trip-info">
              <p>UTTARAKHAND</p>

              <h3>Chakrata</h3>

              <div className="trip-details">
                <span>2 Days</span>
              
              </div>
            </div>
          </div>


          <div className="trip-card"
            onClick={() => setSelectedTrip('Goa')}
            >
            <div className="trip-image goa">
              <span>NEW</span>
            </div>

            <div className="trip-info">
              <p>GOA</p>

              <h3>Goa Getaway</h3>

              <div className="trip-details">
                <span>4 Days</span>
                
              </div>
            </div>
          </div>

        </div>

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

          <button className="view-btn">
            View All →
          </button>

        </div>


        <div className="trek-grid">

          <div className="trek-card">
            <div className="trek-image kedarkantha"></div>

            <div className="trek-content">
              <p>UTTARAKHAND</p>
              <h3>Madhyamaheswar</h3>
              <span>3Days-2Nights | Moderate</span>
            </div>
          </div>


          <div className="trek-card">
            <div className="trek-image hampta"></div>

            <div className="trek-content">
              <p>HIMACHAL PRADESH</p>
              <h3>Yulla Kanda</h3>
              <span>3Days-2Nights | Moderate</span>
            </div>
          </div>


          <div className="trek-card">
            <div className="trek-image kasol"></div>

            <div className="trek-content">
              <p>UTTARAKHAND</p>
              <h3>Chopta Tungnath</h3>
              <span> 3Days-2Nights | Easy</span>
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


      {/* CTA */}
<section
  className="cta"
  style={{ backgroundImage: `url(${ctaBg})` }}

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