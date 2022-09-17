import React from 'react'
import ad1 from '../asstest/ad1.png'
import ad2 from '../asstest/aaa.png'
import ad3 from '../asstest/ad3.png'
import ad4 from '../asstest/m.png'
import ad5 from '../asstest/n.png'
import '../Styles/ad.css'



const Advertisement = () => {
  return (
    <section className='ad' id='ad'>
     
        <span>Some Featured Universities</span>

        <hr/>

        <div className='ad-logos'>

            <img src={ad1} alt=''/>
            <img src={ad2} alt='' />
             <img src={ad3} alt='' />
            <img src={ad4} alt=''/>
            <img src={ad5} alt=''/>
        </div>
        <div className='dot_container'>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      
    </section>
  )
}

export default Advertisement