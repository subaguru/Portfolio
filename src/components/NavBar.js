import React,{useState} from 'react'
import menuIcon from "../assets/menuIcon.png"
import closeIcon from "../assets/closeIcon.png"

const NavBar = () => {
    const [menuOpen,setmenuOpen]=useState(false)
  return (
    <div className='navBarContainer'>
        <nav className='navBar'>
            <a href='/'>Portfolio</a>
            <div className='menuItemsContainer'>
                <img className='hamburgerIcon' onClick={()=>setmenuOpen(!menuOpen)} src={`${!menuOpen?menuIcon:closeIcon}`} alt="menu"/>
                <ul onClick={()=>setmenuOpen(false)} className={`${menuOpen?'menuActive':'menuItems'}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar