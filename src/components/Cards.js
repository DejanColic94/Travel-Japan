import React from 'react';
import './Cards.css';
import CardItem from './Carditem';
import kyoto from '../images/kyoto.jpg';
import nara from '../images/nara.jpg';
import okinawa from '../images/okinawa.jpg';
import osaka from '../images/osaka.jpg';
import sapporo from '../images/sapporo.jpg';
import tokyo from '../images/tokyo.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={kyoto}
              text='Kyoto : Explore the capital of feudal Japan'
              label='History'
              path='/services'
            />
            <CardItem
              src={nara}
              text='Nara : The aincent setlement of the Yammato people'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={okinawa}
              text='Okinawa : Most beautiful beaches in Japan'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={osaka}
              text='Osaka : Explore the food capital of Japan'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={sapporo}
              text='Sapporo : Expirience funtimes in the snows of Hokkaido'
              label='Adrenaline'
              path='/sign-up'
            />
             </ul>
            <ul className='cards__items'>
            <CardItem
              src={tokyo}
              text='Tokyo : Welcome to the biggest city on the planet'
              label='Night life'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;