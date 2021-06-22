import React from 'react';
import Carditem from './Carditem';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these spots!</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="card_items">
                        <Carditem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards; 
