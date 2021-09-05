import React from 'react'
import {Link} from 'react-scroll'
import './Nav.css'

const Nav = () => {
    return (
        <div className='navbar'>
            <img className='navbar-logo' src='#' alt='Logo'></img>
            <ul className='navbar-list'>
                <li className='nav-item'>
                    <Link>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link>Projects</Link>
                </li>
                <li className='nav-item'>
                    <Link>Contact</Link>
                </li>
            </ul>

        </div>
    )
}

export default Nav
