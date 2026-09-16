import { useState } from 'react'

import heroBg from './assets/hero-bg.png'

import manaliImg from './assets/manali.png'

import chakrataImg from './assets/chakrata.png'

import jibhiTirthan from './assets/jibhi-tirthan.png'

import madhyamaheswarImg from './assets/madhyamaheswar.png'

import yullaKandaImg from './assets/yulla-kanda.png'

import choptaTungnathImg from './assets/chopta-tungnath.png'

import UdaipurImg from './assets/Udaipur.png'

import TriundTrek from './assets/Triund Trek.png'

import nainitalImg from './assets/nainital.png'

import nainitaalkainchidhaamImg from './assets/nainitaal kainchi dhaam.png'

import McLEODGANJImg from './assets/McLEODGANJ.png'

import KasolKheergangaImg from './assets/Kasol-Kheerganga.png'

import KareriLakeImg from './assets/Kareri Lake.png'

import HamptaPassImg from './assets/Hampta Pass.png'

import DayaraBugyalImg from './assets/Dayara Bugyal.png'



import ChitkulKalpaImg from './assets/Chitkul-Kalpa.png'

import logo from './assets/yatraana-logo.png'

import ctaBg from './assets/cta-bg.png'

import './App.css'

function App() {
  const [selectedTrip, setSelectedTrip] = useState(null)
  const [activeButton, setActiveButton] = useState(null)
  const [showAllTrips, setShowAllTrips] = useState(false)
  const [showAllTreks, setShowAllTreks] = useState(false)
  const [showBooking, setShowBooking] = useState(false)
  const [showAllDhams, setShowAllDhams] = useState(false)
  return (
    <div className="app">

      {/* NAVBAR */}
<nav className="navbar">
  <div className="brand-logo">
    <img src={logo} alt="Yatraana" />
  </div>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#categories">Categories</a>
    <a href="#treks">Departure</a>
    <a href="#about">About Us</a>
    <a href="#reviews">Reviews</a>
  </div>

  <button
  className="book-btn"
  onClick={() => setShowBooking(true)}
>
  Book Now
</button>
</nav>

{showBooking && (
  <div
    className="booking-overlay"
    onClick={() => setShowBooking(false)}
  >
    <div
      className="booking-form"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="booking-close"
        onClick={() => setShowBooking(false)}
      >
        ✕
      </button>

      <p className="section-label">PLAN YOUR JOURNEY</p>

      <h2>
        Book Your <span>Trip</span>
      </h2>

      <p className="booking-subtitle">
        Fill in your details and our team will get in touch with you.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert("Thank you! Your booking enquiry has been received.")
          setShowBooking(false)
        }}
      >
        <div className="form-row">

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </div>

        </div>

        <div className="form-group">
          <label>Select Package</label>

          <select required defaultValue="">
            <option value="" disabled>
              Choose your journey
            </option>

            <option>Trips</option>
            <option>Treks</option>
            <option>Dham Yatra</option>
          </select>
        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Number of Travellers</label>

            <input
              type="number"
              min="1"
              placeholder="e.g. 2"
              required
            />
          </div>

          <div className="form-group">
            <label>Preferred Departure</label>

            <select required defaultValue="">
              <option value="" disabled>
                Select day
              </option>

              <option>Friday</option>
              <option>Other / Discuss</option>
            </select>
          </div>

        </div>

        <div className="form-group">
          <label>
            Message <span>(Optional)</span>
          </label>

          <textarea
            rows="3"
            placeholder="Tell us anything you'd like us to know..."
          ></textarea>
        </div>

        <button type="submit" className="booking-submit">
          Send Booking Enquiry →
        </button>

      </form>
    </div>
  </div>
)}

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
      
      {/* CATEGORIES */}
<section className="categories" id="categories">

  <div className="section-heading categories-heading">
    <div>
      <p className="section-label">
        EXPLORE WITH YATRAANA
      </p>

      <h2>
        Choose Your <span>Journey</span>
      </h2>
    </div>
  </div>

  <div className="category-grid">

    <div
      className="category-card"
      onClick={() => {
        document.querySelector('#trips')?.scrollIntoView({
          behavior: 'smooth'
        })
      }}
    >
      <div className="category-icon">🧳</div>
      <h3>Trips</h3>
      <p>Explore beautiful destinations and create unforgettable memories.</p>
      <span>Explore Trips →</span>
    </div>


    <div
      className="category-card"
      onClick={() => {
        document.querySelector('#treks')?.scrollIntoView({
          behavior: 'smooth'
        })
      }}
    >
      <div className="category-icon">🥾</div>
      <h3>Treks</h3>
      <p>Challenge yourself and discover India's breathtaking trails.</p>
      <span>Explore Treks →</span>
    </div>


    <div
      className="category-card"
      onClick={() => {
        document.querySelector('#dhams')?.scrollIntoView({
          behavior: 'smooth'
        })
      }}
    >
      <div className="category-icon">🙏</div>
      <h3>Dham Yatra</h3>
      <p>Embark on a soulful journey to India's sacred destinations.</p>
      <span>Explore Yatras →</span>
    </div>

  </div>

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

    {/* 1. Chopta Tungnath */}
    <div
      className="trip-card"
      onClick={() => setSelectedTrip('Chopta Tungnath')}
    >
      <div
        className="trip-image"
        style={{ backgroundImage: `url(${choptaTungnathImg})` }}
      >
        <span>POPULAR</span>
      </div>

      <div className="trip-info">
        <p>UTTARAKHAND</p>
        <h3>Chopta Tungnath</h3>

        <div className="trip-details">
          <span>₹4,699</span>
        </div>
      </div>
    </div>


    {/* 2. Manali Kasol */}
    <div
      className="trip-card"
      onClick={() => setSelectedTrip('Manali Kasol')}
    >
      <div
        className="trip-image"
        style={{ backgroundImage: `url(${manaliImg})` }}
      >
        <span>POPULAR</span>
      </div>

      <div className="trip-info">
        <p>HIMACHAL PRADESH</p>
        <h3>Manali Kasol</h3>

        <div className="trip-details">
          <span>₹4,999</span>
        </div>
      </div>
    </div>


    {/* 3. Manali Kullu Kasol */}
    <div
      className="trip-card"
      onClick={() => setSelectedTrip('Manali Kullu Kasol')}
    >
      <div
        className="trip-image"
        style={{ backgroundImage: `url(${manaliImg})` }}
      >
        <span>EXPERIENCE</span>
      </div>

      <div className="trip-info">
        <p>HIMACHAL PRADESH</p>
        <h3>Manali Kullu Kasol</h3>

        <div className="trip-details">
          <span>₹5,999</span>
        </div>
      </div>
    </div>


    {/* VIEW ALL */}
    {showAllTrips && (
      <>

        {/* 4. Nainital Kainchi Dham */}
        <div
          className="trip-card"
          onClick={() => setSelectedTrip('Nainital Kainchi Dham')}
        >
          <div
            className="trip-image"
            style={{
              backgroundImage: `url(${nainitaalkainchidhaamImg})`
            }}
          >
            <span>POPULAR</span>
          </div>

          <div className="trip-info">
            <p>UTTARAKHAND</p>
            <h3>Nainital Kainchi Dham</h3>

            <div className="trip-details">
              <span>₹5,999</span>
            </div>
          </div>
        </div>


        {/* 5. Chakrata Hills */}
        <div
          className="trip-card"
          onClick={() => setSelectedTrip('Chakrata Hills')}
        >
          <div
            className="trip-image"
            style={{ backgroundImage: `url(${chakrataImg})` }}
          >
            <span>POPULAR</span>
          </div>

          <div className="trip-info">
            <p>UTTARAKHAND</p>
            <h3>Chakrata Hills</h3>

            <div className="trip-details">
              <span>₹4,399</span>
            </div>
          </div>
        </div>


        {/* 6. Jibhi Tirthan Valley */}
        <div
          className="trip-card"
          onClick={() => setSelectedTrip('Jibhi Tirthan Valley')}
        >
          <div
            className="trip-image"
            style={{ backgroundImage: `url(${jibhiTirthan})` }}
          >
            <span>NEW</span>
          </div>

          <div className="trip-info">
            <p>HIMACHAL PRADESH</p>
            <h3>Jibhi Tirthan Valley</h3>

            <div className="trip-details">
              <span>₹4,999</span>
            </div>
          </div>
        </div>


        {/* 7. Udaipur Mount Abu */}
        <div
          className="trip-card"
          onClick={() => setSelectedTrip('Udaipur Mount Abu')}
        >
          <div
            className="trip-image"
            style={{ backgroundImage: `url(${UdaipurImg})` }}
          >
            <span>NEW</span>
          </div>

          <div className="trip-info">
            <p>RAJASTHAN</p>
            <h3>Udaipur Mount Abu</h3>

            <div className="trip-details">
              <span>₹5,999</span>
            </div>
          </div>
        </div>


        {/* 8. Chitkul Kalpa */}
        <div
          className="trip-card"
          onClick={() => setSelectedTrip('Chitkul Kalpa')}
        >
          <div
            className="trip-image"
            style={{ backgroundImage: `url(${ChitkulKalpaImg})` }}
          >
            <span>EXPERIENCE</span>
          </div>

          <div className="trip-info">
            <p>HIMACHAL PRADESH</p>
            <h3>Chitkul Kalpa</h3>

            <div className="trip-details">
              <span>₹7,999</span>
            </div>
          </div>
        </div>


        {/* 9. McLeodganj Bir */}
        <div
          className="trip-card"
          onClick={() => setSelectedTrip('McLeodganj Bir')}
        >
          <div
            className="trip-image"
            style={{ backgroundImage: `url(${McLEODGANJImg})` }}
          >
            <span>POPULAR</span>
          </div>

          <div className="trip-info">
            <p>HIMACHAL PRADESH</p>
            <h3>McLeodganj Bir</h3>

            <div className="trip-details">
              <span>₹5,999</span>
            </div>
          </div>
        </div>

      </>
    )}

  </div>

</section>

     {/* TREKS */}
<section className="treks" id="treks">

  <div className="section-heading">

    <div>
      <p className="section-label">
        ADVENTURE AWAITS
      </p>

      <h2>
        Popular <span>Treks</span>
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

    {/* 1. Yulla Kanda */}
    <div
      className="trek-card"
      onClick={() => setSelectedTrip('Yulla Kanda')}
    >
      <div
        className="trek-image"
        style={{ backgroundImage: `url(${yullaKandaImg})` }}
      ></div>

      <div className="trek-content">
        <p>HIMACHAL PRADESH</p>
        <h3>Yulla Kanda</h3>

        <div className="trek-details">
          <span>₹5,499</span>
        </div>
      </div>
    </div>


    {/* 2. Madhyamaheshwar */}
    <div
      className="trek-card"
      onClick={() => setSelectedTrip('Madhyamaheshwar')}
    >
      <div
        className="trek-image"
        style={{ backgroundImage: `url(${madhyamaheswarImg})` }}
      ></div>

      <div className="trek-content">
        <p>UTTARAKHAND</p>
        <h3>Madhyamaheshwar</h3>

        <div className="trek-details">
          <span>₹5,499</span>
        </div>
      </div>
    </div>


    {/* 3. Rudranath Kalpeshwar */}
    <div
      className="trek-card"
      onClick={() => setSelectedTrip('Rudranath Kalpeshwar')}
    >
      <div
        className="trek-image"
        style={{ backgroundImage: 'none' }}
      ></div>

      <div className="trek-content">
        <p>UTTARAKHAND</p>
        <h3>Rudranath Kalpeshwar</h3>

        <div className="trek-details">
          <span>₹8,999</span>
        </div>
      </div>
    </div>


    {/* VIEW ALL */}
    {showAllTreks && (
      <>

        {/* 4. McLeodganj Triund */}
        <div
          className="trek-card"
          onClick={() => setSelectedTrip('McLeodganj Triund')}
        >
          <div
            className="trek-image"
            style={{ backgroundImage: `url(${TriundTrek})` }}
          ></div>

          <div className="trek-content">
            <p>HIMACHAL PRADESH</p>
            <h3>McLeodganj Triund</h3>

            <div className="trek-details">
              <span>₹5,999</span>
            </div>
          </div>
        </div>


        {/* 5. Kareri Lake */}
        <div
          className="trek-card"
          onClick={() => setSelectedTrip('Kareri Lake')}
        >
          <div
            className="trek-image"
            style={{ backgroundImage: `url(${KareriLakeImg})` }}
          ></div>

          <div className="trek-content">
            <p>HIMACHAL PRADESH</p>
            <h3>Kareri Lake</h3>

            <div className="trek-details">
              <span>₹4,999</span>
            </div>
          </div>
        </div>


        {/* 6. Kasol Kheerganga */}
        <div
          className="trek-card"
          onClick={() => setSelectedTrip('Kasol Kheerganga')}
        >
          <div
            className="trek-image"
            style={{ backgroundImage: `url(${KasolKheergangaImg})` }}
          ></div>

          <div className="trek-content">
            <p>HIMACHAL PRADESH</p>
            <h3>Kasol Kheerganga</h3>

            <div className="trek-details">
              <span>₹5,999</span>
            </div>
          </div>
        </div>


        {/* 7. McLeodganj Kareri Lake */}
        <div
          className="trek-card"
          onClick={() => setSelectedTrip('McLeodganj Kareri Lake')}
        >
          <div
            className="trek-image"
            style={{
              backgroundImage: `url(${McLEODGANJImg})`
            }}
          ></div>

          <div className="trek-content">
            <p>HIMACHAL PRADESH</p>
            <h3>McLeodganj Kareri Lake</h3>

            <div className="trek-details">
              <span>₹5,999</span>
            </div>
          </div>
        </div>


        {/* 8. Dayara Bugyal */}
        <div
          className="trek-card"
          onClick={() => setSelectedTrip('Dayara Bugyal')}
        >
          <div
            className="trek-image"
            style={{ backgroundImage: `url(${DayaraBugyalImg})` }}
          ></div>

          <div className="trek-content">
            <p>UTTARAKHAND</p>
            <h3>Dayara Bugyal</h3>

            <div className="trek-details">
              <span>₹4,999</span>
            </div>
          </div>
        </div>


        {/* 9. Hampta Pass */}
        <div
          className="trek-card"
          onClick={() => setSelectedTrip('Hampta Pass')}
        >
          <div
            className="trek-image"
            style={{ backgroundImage: `url(${HamptaPassImg})` }}
          ></div>

          <div className="trek-content">
            <p>HIMACHAL PRADESH</p>
            <h3>Hampta Pass</h3>

            <div className="trek-details">
              <span>₹4,999</span>
            </div>
          </div>
        </div>

      </>
    )}

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

    <button
      className="view-btn"
      onClick={() => setShowAllDhams(!showAllDhams)}
    >
      {showAllDhams ? 'Show Less ↑' : 'View All →'}
    </button>

  </div>


  <div className="dham-grid">

    {/* 1. Kedarnath Dham */}
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
          <span>₹6,499</span>
        </div>
      </div>
    </div>


    {/* 2. Do Dham (Kedar–Badri) */}
    <div
      className="dham-card"
      onClick={() => setSelectedTrip('Do Dham (Kedar–Badri)')}
    >
      <div className="dham-image">
        <span>POPULAR</span>
      </div>

      <div className="dham-content">
        <p>UTTARAKHAND</p>
        <h3>Do Dham (Kedar–Badri)</h3>

        <div className="dham-details">
          <span>₹9,999</span>
        </div>
      </div>
    </div>


    {/* 3. Do Dham + Tungnath */}
    {showAllDhams && (
      <div
        className="dham-card"
        onClick={() => setSelectedTrip('Do Dham + Tungnath')}
      >
        <div className="dham-image">
          <span>EXPERIENCE</span>
        </div>

        <div className="dham-content">
          <p>UTTARAKHAND</p>
          <h3>Do Dham + Tungnath</h3>

          <div className="dham-details">
            <span>₹10,999</span>
          </div>
        </div>
      </div>
    )}


    {/* 4. Kedarnath + Tungnath */}
    {showAllDhams && (
      <div
        className="dham-card"
        onClick={() => setSelectedTrip('Kedarnath + Tungnath')}
      >
        <div className="dham-image">
          <span>EXPERIENCE</span>
        </div>

        <div className="dham-content">
          <p>UTTARAKHAND</p>
          <h3>Kedarnath + Tungnath</h3>

          <div className="dham-details">
            <span>₹7,999</span>
          </div>
        </div>
      </div>
    )}


    {/* 5. Char Dham Yatra */}
    {showAllDhams && (
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
            <span>₹19,999</span>
          </div>
        </div>
      </div>
    )}

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