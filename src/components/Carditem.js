import React from 'react';
import { Link } from 'react-router-dom';

function Carditem() {
    return (
        <>
            <li className="cards_item"> 
                <Link className="cards_item_link">
                    <figure className="cards_item_pick-wrap">
                        <img src="/" alt="Travel" className="cards_item_img">

                        </img>
                    </figure>
                    <div className="cards_item_info">
                        <h5 className="cards_item_text">d</h5>
                    </div>
                </Link>

            </li>
        </>
    )
}

export default Carditem;
