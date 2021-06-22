  
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
             <video src= {require('../videos/video-2.mp4').default} autoPlay loop muted/>
             <h1>ADVENTURE AWAITS</h1>
             <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Get Started</Button>
                <Button className="btns" buttonStyle="btn-primary" buttonSize="btn--large">Watch Trailer <i className="far fa-play-circle" /></Button>
            </div>
        </div>
    )
}

export default Hero;
