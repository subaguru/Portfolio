import React from 'react'
import {projects} from "../data/projects"
import ProjectItem from './ProjectItem'

const Project = () => {
  return (
    <section id='project' className='projectContainer'>
        <span className='projectTitle'>Projects</span>
        <div className='projects'>
            {projects.map((project)=>
            (
                <ProjectItem key={project.title} project={project} />
            )
            )}
        </div>
    </section>
  )
}

export default Project