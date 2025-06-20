import React from 'react'
import GT from '../assets/GT.jpg'
import {skills_dev} from "../data/skills"
import history from "../data/history.json"

const Experience = () => {
  return (
    <section id='experience' className='experienceContainer'>
      <h3>Experience</h3>
      <div className='skillContent'>
      <div className='skillSection'>
        {
          skills_dev.map((skill)=>(
            <div className='skill'>
              <div className='skillImageContainer'>
            <img src={skill.icon} alt='html-skill'/>
            </div>

            <p>{skill.title}</p>
          </div>
    
          ))
        }
      </div>
      <div className='experienceSection'>
        {
          history.map((exp)=>(
            <div className='indivudualExperience'>
        <img src={GT} alt='GT' />
        <div className='historyItemDetails'>
          <span>{exp.role}, {exp.organisation}</span>
          <p>{exp.startDate} - {exp.endDate}</p>
          <ul>
            {exp.experiences.map((point)=>(
              <li>{point}</li>
            ))}
          </ul>
        </div>
      </div>
          ))
        }
      
      </div>
      </div>
    </section>
  )
}

export default Experience