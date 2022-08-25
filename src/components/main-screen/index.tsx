import React from 'react'
import Filters from '../filters'
import Header from '../header'
import Logo from '../logo'
import Navigation from '../navigation'
import SubTitle from '../sub-title'
import Title from '../title'


export const MainScreen = () => {
  return (
    <div className='main-screen'>
        <Header>
            <Logo />
            <Navigation />
        </Header>

        <Title></Title>
        <SubTitle></SubTitle>

        <Filters></Filters>

    </div>
  )
}
