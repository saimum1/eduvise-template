import React from 'react'
import '../Styles/service.css'
import carrier from '../asstest/carier.png'
import adguide from '../asstest/adguide.png'
import scholar from '../asstest/scholar.png'
import house from '../asstest/house.png'
import travel from '../asstest/travel.png'
import visa from '../asstest/visa.png'

const Service = () => {
  return (
    <section className='services' id='service'>
            <div className='container'>
                <div className='details'>
                    <span>Our Services</span>
                    <span> We Provide Multiple Services</span>
                    <span>We provide the best service in the field of consulting and we are a reputable<br/>
                    organization with and exclusive purpose 
                    of providing free educational consulting.
                    </span>
                </div>

                    
                <div className='card-container'>

                    <div className='card'>
                    <img src={carrier} alt='' />
                    <span>Carrier Consulting</span>
                    <p>We are a team of career consultants who work with people who feel unhappy, stuck, uninspired or unable to make.</p>
                    </div>

                    <div className='card'>
                    <img src={house} alt='' />
                    <span>Carrier Consulting</span>
                    <p>We are a team of career consultants who work with people who feel unhappy, stuck, uninspired or unable to make.</p>
                    </div>

                    <div className='card'>
                    <img src={visa} alt='' />
                    <span>Carrier Consulting</span>
                    <p>We are a team of career consultants who work with people who feel unhappy, stuck, uninspired or unable to make.</p>
                    </div>

                    <div className='card'>
                    <img src={adguide} alt='' />
                    <span>Carrier Consulting</span>
                    <p>We are a team of career consultants who work with people who feel unhappy, stuck, uninspired or unable to make.</p>
                    </div>

                    <div className='card'>
                    <img src={travel} alt='' />
                    <span>Carrier Consulting</span>
                    <p>We are a team of career consultants who work with people who feel unhappy, stuck, uninspired or unable to make.</p>
                    </div>

                    <div className='card'>
                    <img src={scholar} alt='' />
                    <span>Carrier Consulting</span>
                    <p>We are a team of career consultants who work with people who feel unhappy, stuck, uninspired or unable to make.</p>
                    </div>
                
                   
                  
                  
                   
                  
                </div>
            </div>


    </section>
  )
}

export default Service