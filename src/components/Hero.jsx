import React from 'react'
import '../Styles/hero.css'
import HI from '../asstest/hero.png'

const Hero = () => {
  return (
    <section className='hero-section' id='home'>


    <div className='hero_details'>
        
    <span>One of the largest</span>
    <span>study abroad platform.</span>



<div className='small_details'>
<span>
If you need help with 
your overseas admissions
at the
</span>
<span>universities, we
can provide you best 
support for your</span>

<span>
academic
profile and choice.
    </span> 
</div>




<a href='#'>Request A Call Back</a>
    </div>

    
    <div className='hero-image'>
        <img src={HI} alt=" " className='hrimage'/>
    </div>
    
</section>

  )
}

export default Hero