import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './Hero.css';

import heroImage from '../../assets/images/hero-image.png';

import googlePlayBadge from '../../assets/images/google-play.svg';
import appStoreBadge from '../../assets/images/app-store.svg';

const Hero = () => {
    return (
        <div className="hero" style={{ height: '84vh' }}>
            <div className="col-8 data">
                <div className="">
                    Log expenses <span className="highlighted">by voice.</span>
                </div>
                <div className="">Simple, fast, accurate.</div>
                <p>
                    No more typing or forms. Just speak your
                    <br />
                    expenses — our AI logs them in seconds.
                </p>
                <div className="d-flex badge-container">
                    <a>
                        <img src={appStoreBadge} alt="App Store Badge" />
                    </a>
                    <a>
                        <img src={googlePlayBadge} alt="Google Play Badge" />
                    </a>
                </div>
            </div>
            <div className="col-4 image">
                <img src={heroImage} alt="Hero image" className="img-fluid" />
            </div>
        </div>
    );
};

export default Hero;
