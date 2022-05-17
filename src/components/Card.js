import React from 'react';
import './Card.css';

let Card = (props) => {
    return (
        <>
            <div class="card">
                <img src={props.poster} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.source}</p>
                    <a href={props.link}><button className='btn btn-danger'>Watch now</button></a>
                </div>
            </div>

        </>
    )
};


export default Card;