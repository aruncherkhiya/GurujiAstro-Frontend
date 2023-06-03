import React from 'react'
import { Footer, Header, VideoCarsoul, Astrologers, ManyPOS, Review } from '../../component'

import './style.scss'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <VideoCarsoul/>
      <Astrologers/>
      <ManyPOS/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default Home
