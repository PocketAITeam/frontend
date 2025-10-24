import React from 'react';
import NavbarComponent from '../components/layout/Navbar.jsx';
import Hero from '../components/home/Hero.jsx';
import Feature from '../components/home/Feature.jsx';

const Home = () => {
    return (
        <>
            <NavbarComponent />
            <Hero />
            <Feature />
        </>
    );
};

export default Home;
