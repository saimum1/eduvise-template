import React from 'react'
import '../Styles/navbar.css'
import Logo from '../asstest/logo.png' 
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <div className="header">


      
      <img src={Logo} alt='' className="im" />
     


     
      <ul className='header-menu'>
      <li><Link
      
             to='home'
             span={true}
             smooth={true}>Home</Link></li>


            <li><Link
             to='services'
             span={true}
             smooth={true}>Our Services</Link></li>


            <li><Link
             to='ev'
             span={true}
             smooth={true}>Events</Link></li>

            <li><Link
             to=''
             span={true}
             smooth={true}>Testimonials</Link></li>

            <li><Link
             to='aboutus'
             span={true}
             smooth={true}>About Us</Link></li>

            <li><Link
            className='ab'
             to='aboutus'
             span={true}
             smooth={true}>Appointemnt Now</Link></li>

      </ul>

      
        
        
    </div>
  )
}

export default Navbar