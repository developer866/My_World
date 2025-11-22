import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'

function Home() {
  return (
    <main className="home-container">
      {/* Home Content */}
      <div className="home-text">
        <h1>Welcome to the my World </h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <p>My World brings together imagination, technology, and personal expression to create an experience that feels unique. Whether you're here to learn, create, explore, or be inspired, everything you need is right at your fingertips.</p>

        </motion.h2>
      </div>

      {/* Image */}
      <div className="hero-image">
        <img src="Astro-bg.png" alt="my w" />
      </div>
    </main>


  )
}

export default Home