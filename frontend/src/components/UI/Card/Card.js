import React from 'react';
import {NavLink} from 'react-router-dom';
import './Card.css'
import defaultImg from './default.png';

const Card = props => {
    return <div className="card-deck">
        <div className='card'>
            {props.image[0] ? <img className="card-img-top" alt='картинка' src={props.image[0].photo}/>
            : <img className="card-img-top" src={defaultImg} alt='default'/>}
            {props.header || props.link ? <div className="card-body">
                {props.header ? <h5 className="card-title">{props.header}</h5> : null}
                {props.link ? <NavLink to={props.link.url} className="btn btn-primary">{props.link.text}</NavLink> : null}
            </div> : null}
        </div>
    </div>};


export default Card
