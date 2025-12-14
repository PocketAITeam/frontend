import React from 'react';
import NavbarComponent from '../components/layout/Navbar.jsx';
import Hero from '../components/home/Hero.jsx';
import Feature from '../components/home/Feature.jsx';
import FQA from '../components/home/FQA.jsx';
import Footer from '../components/home/Footer.jsx';

const Home = () => {
    return (
        <>
            <NavbarComponent />
            <Hero />
            <Feature />
            <FQA />
            <Footer />
        </>
    );
};

export default Home;
