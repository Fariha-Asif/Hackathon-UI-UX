'use client'

import React from 'react'
import HeroSection from './Components/HeroSection'
import BrandLogos from './Components/BrandLogos'
import Featured1 from './Components/Featured1'
import Featured2 from './Components/Featured2'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BrandLogos />
      <Featured1 />
      <Featured2 />
    </div>
  )
}
