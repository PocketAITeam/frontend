import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Hero.css';

import heroImage from '../../assets/images/hero-image.png';

import googlePlayBadge from '../../assets/images/google-play.svg';
import appStoreBadge from '../../assets/images/app-store.svg';

const Hero = () => {
    const [heroHeight, setHeroHeight] = useState('100vh');

    useEffect(() => {
        const navbar = document.querySelector('.navbar-custom');
        if (navbar) {
            const navbarHeight = navbar.offsetHeight;
            setHeroHeight(`calc(100vh - ${navbarHeight}px)`);
        }
    }, []);
    return (
        <Container
            fluid
            className="hero d-flex align-items-center justify-content-center"
            style={{ height: heroHeight }}
        >
            <Row className="w-100 align-items-center">
                {/* العمود الأول - النص */}
                <Col
                    xs={12}
                    md={7}
                    className="d-flex flex-column justify-content-center text-start"
                >
                    <h1 className="mb-4">
                        Log expenses{' '}
                        <span className="highlighted">by voice.</span>
                    </h1>
                    <h4 className="mb-4">Simple, fast, accurate.</h4>
                    <p className="mb-4">
                        No more typing or forms. Just speak your <br />
                        expenses — our AI logs them in seconds.
                    </p>
                    <div className="d-flex badge-container">
                        <a href="#">Apple</a>
                        <a href="#">Google</a>
                    </div>
                </Col>

                {/* العمود الثاني - الصورة */}
                {/* <Col
                    xs={12}
                    md={5}
                    className="d-flex justify-content-center justify-content-md-end"
                >
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="img-fluid hero-image"
                    />
                </Col> */}
            </Row>
        </Container>
    );
};

export default Hero;
