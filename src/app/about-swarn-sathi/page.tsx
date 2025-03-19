import AboutBanner from '@/components/about-swarn-sathi/AboutBanner'
import AboutSection from '@/components/about-swarn-sathi/AboutSection';
import CareersSection from '@/components/about-swarn-sathi/CareersSection';
import CoreValues from '@/components/about-swarn-sathi/CoreValues';
import TeamSection from '@/components/about-swarn-sathi/TeamSection';
import React from 'react'

const page = () => {
  return (
      <>
          <AboutBanner />
          <AboutSection />
          <CoreValues />
          <TeamSection />
          <CareersSection/>
      </>
  )
}

export default page;
