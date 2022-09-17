import React from 'react'
import '../Styles/about.css'
const About = () => {
  return (


    <section className='sec-container' id='about'>
        <div className='head'>
            <p>We are trusted by student 
                from all over the country</p>
        </div>
        <div className='det'>
            <p>To be one of the best and
                 trusted overseas education 
                 consulting firms in assisting 
                 students and working professionals to 
                 build their international careers 
                 through the
                 right advice on abroad study.</p>
        </div>
        <div className='count'>
            <div>
                <span className='per'>100%</span>
                <span className='perdet'>Satisfaction</span>
            </div>

            <div>
                <span className='per'>200+</span>
                <span className='perdet'>Happy Users</span>
            </div>

            <div>
                <span className='per'>100+</span>
                <span className='perdet'>Universities</span>
            </div>
        </div>
    </section>
  )
}

export default About