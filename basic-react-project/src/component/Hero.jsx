import React from 'react';
import amazon from '../images/amazon.png';
import flipkart from '../images/flipkart.png';
import santa from '../images/tenor.gif'; 

const Hero = () => {
  return (
   <main className='hero container'>
    <div className='hero-content'>
        <h2>HEY,IT's A <pli className='chr'>CHRISTMAS</pli> TIME!</h2>
        <p>Christmas Special Offer:Flat 50%-90% OFF +
            Additional Rs 500 OFF </p>
            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>
            <div className='shopping'>
                <p>Also Available On</p>

                <div className="brand-icons">
                    <img src={amazon} alt ="" />
                    <img src={flipkart} alt="" />
                </div>
            </div>
    </div>
    <div className='hero-image'>
      <img src={santa} alt="hero-image"    height=""  width=""/>
    </div>
   </main>
  )
}

export default Hero
