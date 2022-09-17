import React from 'react'
import '../Styles/footer.css'
import logo from '../asstest/logo.png'
import ins from '../asstest/ln.png'
import you from '../asstest/y.png'
import lnld from '../asstest/lndin.png'
import tw from '../asstest/t.png'

const Footer = () => {
  return (
    <section className='sec-footer' id='footer'>
        <div className='left'>
           <a href='home'> <img src={logo} alt='' /></a>
            <span className='ldet'>Make the student 
                life better through our<br/>
                consulting 
                services
                </span>
                <div className='social'>
                    <img src={ins} alt=''/>
                    <img src={lnld} alt=''/>
                    <img src={tw} alt=''/>
                    <img src={you} alt=''/>
                </div>

                <span className='ref' >Concept & Designed by <a href='https://www.linkedin.com/in/ashphiar/' target='blank' >A.R Rumman</a></span>
                <span className='ref2'>Developed by <a href='https://www.linkedin.com/in/rakibul-hassan-saimum-2452a8147/' target='blank' >RH Saimum</a></span>

        </div>


        <div className='right'>
            <div className='com'>
                <span>Company</span>
                <span>Home</span>
                <span>Appointment</span>
                <span>Contact Us</span>
            </div>

            <div className='serv'>
            <span>Services</span>
            <span>University Search</span>
                <span>Visa Processing</span>
                <span>Funding Support</span>
                <span>Essential Document</span>
            </div>
            <div className='leg'>
            <span>Legal</span>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
            </div>
        </div>
    </section>
  )
}

export default Footer