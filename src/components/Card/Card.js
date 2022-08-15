import React from 'react';
import "./Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="product_preview" style={{width: "100%"}} />
            <div className="description">
                <h2>{ props.title }</h2>
            </div>
        </div>
    );
}

export default Card;
