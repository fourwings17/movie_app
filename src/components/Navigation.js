import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
    return (
        <div>
            <div className='logo'></div>            
            <div className='menu'> 
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </div>
    )
}