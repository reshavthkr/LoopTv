import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import './Card.css'
import {Link } from 'react-router-dom'

function Card({image, name, id, summary }) {
    return (
        // <div>
        // <div className='cc'>
            <Link to={`/details/${id}`} class="card" style= {{width: '15.1rem'}}>
                <img class="card-img-top" src={image} alt={name}/>
                <div class="card-body">
                    <h6 class="card-title">{name}</h6>
                    <p class="card-text">{summary}</p>
                    
                </div>
            </Link>
            
        // </div>
        // </div>
    )
}

export default Card
