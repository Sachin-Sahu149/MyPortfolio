import CodingAchievementsSection from '@/components/CodingAchievementsSection'
import FeaturedProjectSection from '@/components/FeaturedProjectSection'
import FooterSection from '@/components/FooterSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import TechnicalSkillsSection from '@/components/TechnicalSkillsSection'
import React from 'react'

function Home() {
  return (
    <div className='w-full min-h-screen '>
      <Navbar/>
      <HeroSection/>
      <CodingAchievementsSection/>
      <TechnicalSkillsSection/>
      <FeaturedProjectSection/>
      <FooterSection/>
    </div>
  )
}

export default Home