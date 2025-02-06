import React from 'react'
import HeroSection from '../component/HeroSection'
import Categories from '../component/Categories'
import Products from '../component/Products'
import DealsOfMonths from '../component/DealsOfMonths'
import Pic from '../component/Pic'
import Pic2 from '../component/Pic2'
import RecentPost from '../component/RecentPost'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Products />
      <DealsOfMonths />
      <RecentPost />

    </div>
  )
}
