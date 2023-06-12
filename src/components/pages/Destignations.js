import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../Carditem';
import kyoto from '../../images/kyoto.jpg';
import nara from '../../images/nara.jpg';
import okinawa from '../../images/okinawa.jpg';
import osaka from '../../images/osaka.jpg';
import sapporo from '../../images/sapporo.jpg';
import kobe from '../../images/kobe.jpg';
import sendai from '../../images/sendai.jpg';
import kumamoto from '../../images/kumamoto.jpg';
import asahikawa from '../../images/asahikawa.jpg';
import nagasaki from '../../images/nagasaki.jpg';

export default function Destignations() {
    return (
        
        <div className='cards-d'>
          <h1>Choose from many interesting places Japan has to offer:</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src={kyoto}
                  text='Kyoto : Explore the capital of feudal Japan'
                  label='History'
                  path='/destignations'
                />
                <CardItem
                  src={nara}
                  text='Nara : The aincent setlement of the Yammato people'
                  label='Luxury'
                  path='/destignations'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem
                  src={okinawa}
                  text='Okinawa : Most beautiful beaches in Japan'
                  label='Mystery'
                  path='/destignations'
                />
                <CardItem
                  src={osaka}
                  text='Osaka : Explore the food capital of Japan'
                  label='Adventure'
                  path='/destignations'
                />
                <CardItem
                  src={sapporo}
                  text='Sapporo : Expirience funtimes in the snows of Hokkaido'
                  label='Adrenaline'
                  path='/destignations'
                />
                 </ul>
                 <ul className='cards__items'>
                <CardItem
                  src={kobe}
                  text='Kobe : Home of the best wagyu beef in the world'
                  label='Food'
                  path='/destignations'
                />
                <CardItem
                  src={sendai}
                  text='Sendai : Attend one of many interesting festivals which occur during the year'
                  label='Festivities'
                  path='/destignations'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem
                  src={kumamoto}
                  text='Kumamoto : Explore Mount Aso and expirience the deep history of feudal Japan'
                  label='Mystery'
                  path='/destignations'
                />
                <CardItem
                  src={asahikawa}
                  text='Asahikawa : Welcome to the "roof" of Japan, the penguins are awaiting'
                  label='Adventure'
                  path='/destignations'
                />
                <CardItem
                  src={nagasaki}
                  text='Nagasaki : Expirience the best hot springs in Japan'
                  label='Relaxation'
                  path='/destignations'
                />
                 </ul>
             
            </div>
          </div>
        </div>
        
      );
}