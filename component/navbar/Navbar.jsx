import React from 'react'
import './navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === 'a' ? 'active' : ''}> <AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BsFillJournalBookmarkFill /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <AiFillPhone /></a>

        </nav>
    )
}

export default Navbar