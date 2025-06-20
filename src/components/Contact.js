import React from 'react'
import linkedinIcon from "../assets/linkedinIcon.png"
import githubIcon from "../assets/githubIcon.png"
import emailIcon from "../assets/emailIcon.png"

const Contact = () => {
  return (
    <footer id='contact' className='contactContainer'>
        <div className='contactPlaceholders'>
        <h3>Contact</h3>
        <p>Feel free to reach out!</p>
        </div>
        <ul className='contactLinksContainer'>
            <li>
                <img src={emailIcon} alt='LinkedInIcon'/>
                <a href='mailto:subaguruprabakaran@gmail.com'>subaguruprabakaran@gmail.com</a>
            </li>
            <li>
                <img src={linkedinIcon} alt='LinkedInIcon'/>
                <a href='https://www.linkedin.com/in/subaguru-prabakaran-g/'>linkedin.com/subaguru-prabakaran-g</a>
            </li>
            <li>
                <img src={githubIcon} alt='LinkedInIcon'/>
                <a href='https://github.com/subaguru'>github.com/subaguru</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact