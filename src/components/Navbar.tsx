import React from 'react'
import '../style/Navbar.css'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className='nav'>
            <p><Link className='link' to='/home'>Home</Link></p>
            <p><Link className='link'  to='/users'>Users</Link></p>
            <p><Link className='link'  to='/about'>About</Link></p>
        </div>
    )
}

export default Navbar