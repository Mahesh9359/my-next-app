"use client"
import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Categories from './Categories/Categories'
import PopularRestaurants from './PopularRestaurants/PopularRestaurants'
import OffersSection from './OffersSection/OffersSection'
import Testimonials from './Testimonials/Testimonials'

function HomePage() {
  return (
    <div>
      <HeroSection title="Delicious Food Delivered Fast 🍱"/>
      <Categories />
      <PopularRestaurants/>
      <OffersSection />
      <Testimonials />
    </div>
  )
}

export default HomePage
