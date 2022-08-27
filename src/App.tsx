import React from 'react';
import './App.css';
import AboutUs from './components/about-us';
import Explore from './components/explore';
import Footer from './components/footer';
import { MainScreen } from './components/main-screen';

function App() {
  return (
    <div className='App'>
      <MainScreen />
      <div className="curve"><img src="/images/curve.png" alt=""/></div>
      <div className='main-area'>
        <Explore />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
