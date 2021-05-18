import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="navigation" >
            <h3 >
                <Link to = '/LoopTv' className='logotext'>
                Loop Tv
                </Link>
            </h3>
        </div>
    )
}

export default Navbar
