import React from 'react'
 import '../Styles/aboutus.css'
import s1 from '../asstest/stw.png'
import s2 from '../asstest/st2.png'
import s3 from '../asstest/jn.png'

const AboutUs = () => {
  return (
    <section className='service bg' id='aboutus'>
            <div className='containe'>
                <div className='detail'>
                   
                    <span className='heading'> What Student Says About Us</span>

                    <span className='des'>We have chosen a selection of
                     student stories to give you better 
                    insights into<br/> the warm and supportive environment
                    </span>
                </div>

                    
                <div className='cards-container'>

                    <div className='cards'>
                        <div className='imgdiv'>
                        <img src={s1} alt='' />
                        <div  className='imgd'>
                        <span>S. Stowe</span>
                    <span>University of Toronto</span>
                        </div>
                 
                        </div>
                  
                    <p>
                        Before undertaking the IELTS exam, 
                        I <br/>consulted from them  and managed to<br/> 
                        pass the IELTS exam successfully with<br/> 
                        their assistance.
                         The consultant that<br/> helped me was very kind and helpful. </p>
                        
                    </div>




                    <div className='cards'>
                        <div className='imgdiv'>
                        <img src={s2} alt='' />
                        <div  className='imgd'>
                        <span>Adam Wright</span>
                    <span>University of Melbourne</span>
                        </div>
                        </div>
                  
                    <p>I visited fineanswer 4 months ago,
                         and<br/> with the help of them I managed 
                         to <br/>secure an Australian student visa
                         to<br/> pursue higher studies at the University<br/> of Melbourne. It</p>
                      
                    </div>




                    <div className='cards'>
                        <div className='imgdiv'>
                        <img src={s3} alt='' />
                        <div  className='imgd'>
                        <span>Johnny Welch</span>
                    <span>Mount Royal University</span>
                        </div>
                        </div>
                  
                    <p>I got admission into the University of <br/>toronto in the US, 
                        with a $40,000<br/> scholarship, which made me feel 
                        very<br/> excited 
                        and happy. My experience with<br/> fineanswer was wonderful. </p>
                        
                    </div>

                  
                </div>
            </div>

            <div className='dot_container'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>

    </section>
  )
}

export default AboutUs