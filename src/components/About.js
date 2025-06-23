import React from 'react'
import cursonIcon from "../assets/cursorIcon.png"
import serverIcon from "../assets/serverIcon.png"
import uiIcon from "../assets/uiIcon.png"
import avatar2 from "../assets/avatar2.avif"


const About = () => {
  return (
    <section id="about" className='aboutSection'>
        <h2>About</h2>
        <div className='aboutContainer'>
            <img src={avatar2} alt='aboutImage' />
            <ul className='aboutItems'>
                <li className='aboutItem'>
                    <img src={cursonIcon} alt='cursorIcon'/>
                    <div className='aboutDescription'>
                        <h3>Frontend Developer</h3>
                        <p>Skilled in building responsive and optimized user interfaces using React, Redux, HTML, CSS, and JavaScript.
                        </p>
                    </div>
                </li>
                <li className='aboutItem'>
                    <img src={uiIcon} alt='cursorIcon'/>
                    <div className='aboutDescription'>
                        <h3>Backend Development</h3>
                        <p>Experience with Node.js and Postman for API development and server-side logic.                       </p>
                    </div>
                </li>
                <li className='aboutItem'>
                    <img src={serverIcon} alt='cursorIcon'/>
                    <div className='aboutDescription'>
                        <h3>Database Development</h3>
                        <p>Strong expertise in MONGODB,MYSQL with Aggregation, and Indexing.
                        </p>
                    </div>
                </li>
              
            </ul>
        </div>
    </section>
  )
}

export default About
