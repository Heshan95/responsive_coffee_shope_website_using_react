import React from 'react'
import Hero from './Components/Hero/Hero';
import Service from './Components/Service/Service';
import WhereToBuy from './Components/WheretoBuy/WhereToBuy';
import AppBanner from './Components/AppBanner/AppBanner';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Service/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
    </div>
    
  )
}

export default App;