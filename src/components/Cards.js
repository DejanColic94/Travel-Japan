import React from 'react';
import Carditem from './Carditem';
import './Cards.css'
import Kyoto from '../images/kyoto.jpg';
import Nara from '../images/nara.jpg';
import Osaka from '../images/osaka.jpg';


function Cards() {
    return (
        <div className="cards">
            <h1>Check out these spots!</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="card_items">
                        <Carditem 
                        src = {Kyoto}
                        text = "Kyoto, the old capital and the center of feudal Japan"
                        label = "adventure"
                        path = "/destignations" />
                         <Carditem 
                        src = {Nara}
                        text = "Nara, the first capital, and the biggest setlement of Yammato people"
                        label = "adventure"
                        path = "/destignations" />
                         <Carditem 
                        src = {Osaka}
                        text = "Osaka, the food capital of modern Japan"
                        label = "adventure"
                        path = "/destignations" />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards; 
