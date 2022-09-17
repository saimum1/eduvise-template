import React from 'react'
import '../Styles/event.css'
import apr1 from '../asstest/22apr.png'
import apr2 from '../asstest/25apr.png'
import apr3 from '../asstest/17apr.png'
import arrow from '../asstest/ra.png'

const Event = () => {
  return (
    <section className='service bg'  id='ev'>
            <div className='containe'>
                <div className='detail'>
                   
                    <span className='heading'> Upcoming University Events</span>

                    <span className='des'>we always make sure that we bring 
                        correct information about all ongoing and
                         <br/> upcoming events for you worldwide.
                    </span>
                </div>

                    
                <div className='cards-container'>

                    <div className='cards'>
                        <div className='imgdiv'>
                        <img src={apr1} alt='' />
                    <span>Demystifying Systemic Social and Emotional Learning.</span>
                        </div>
                  
                    <p>Opportunities for cooperative structures<br/> and 
                        reflection are essential for learning <br/>across grades and 
                        core academic<br/> subjects. What might this look like for.</p>
                        <a href='#'>Details Information<span><img src={arrow} alt=''/></span></a>
                    </div>




                    <div className='cards'>
                        <div className='imgdiv'>
                        <img src={apr2} alt='' />
                    <span>New Considerations Around Educational Assessment</span>
                        </div>
                  
                    <p>The Spencer Foundation has teamed up <br/>with Phi 
                        Delta Kappan to publish a series <br/>of thought pieces 
                        about the kinds of <br/>schools and learning 
                        opportunities it may <br/>be possible to create in.</p>
                        <a href='#'>Details Information<span><img src={arrow} alt=''/></span></a>
                    </div>




                    <div className='cards'>
                        <div className='imgdiv'>
                        <img src={apr3} alt='' />
                    <span>New Pathways: High Schools That Change Lives.</span>
                        </div>
                  
                    <p>Getting Smart's new pathways campaign <br/>will serve as 
                        a road map to the new<br/> architecture 
                        for American high schools,<br/> where every learner,
                         regardless of zip <br/>code.</p>
                        <a href='#'>Details Information<span><img src={arrow} alt=''/></span></a>
                    </div>

                  
                </div>
            </div>

            <div className='dot_container'>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>

    </section>
  )
}

export default Event