import React from 'react'
import Filters from '../filters'
import Header from '../header'
import Logo from '../logo'
import Navigation from '../navigation'
import Banner from '../banner'

import './main-screen.css'


export const MainScreen = () => {
  return (
    <div className='main-screen vertical flexbox'>
        <Header>
            <Logo />
            <Navigation />
        </Header>
        <Banner title='Rethink your living & renting' subTitle='Make your stay painless with us'></Banner>
        <Filters/>
        <div className="down-arrow-container"><img src="/images/down-arrow.png" alt='Down'/></div>
    </div>
  )
}
