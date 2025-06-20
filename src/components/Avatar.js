import React from 'react'
import myImage from "../assets/myimage.webp"
import avatar from "../assets/avatar.jpg"


const Avatar = () => {
  return (
    <section className='avatarContainer'>
        <div className='aboutDetails'>
            <h1 className='avatarTitle'>Hi, I'm Subaguru Prabakaran</h1>
            <p className='avatarDescription'> I'm a Full Stack Developer with 2 years of experience working with the MERN stack (MongoDB, Express.js, React, and Node.js). I build scalable web applications with clean, maintainable code—from frontend interfaces using React and Redux to backend APIs with Node.js and Express, and databases with MongoDB and SQL. </p>
            <a className='avatarBtn' href="mailto:subaguruprabakaran@gmail.com" >Contact Me</a>
        </div>
        <img className='avatar' src={avatar} alt="avatar"/>
        <div className='topBlur'/>
        <div className='bottomBlur'/>
    </section>
  )
}

export default Avatar