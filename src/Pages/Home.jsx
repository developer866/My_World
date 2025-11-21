import React from 'react'
import './Home.css'

function Home() {
  return (
    <main className="home-container">
      {/* Home Content */}
      <div className="home-text">
        <h1>Welcome to the My World </h1>
        <p>My World brings together imagination, technology, and personal expression to create an experience that feels unique. Whether you're here to learn, create, explore, or be inspired, everything you need is right at your fingertips.</p>
      </div>

      {/* Image */}
      <div className="hero-image">
        <img src="Astro-bg.png" alt="my w" />
      </div>
    </main>


  )
}

export default Home