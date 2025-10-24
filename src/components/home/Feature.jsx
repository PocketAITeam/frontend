import React from 'react';
import { Container } from 'react-bootstrap';

import './Feature.css';

const Feature = () => {
    return (
        <Container
            className="text-center my-5 feature-section"
            style={{ height: '100px', position: 'relative' }}
        >
            <h2 className="mb-4">Why it`s great</h2>
        </Container>
    );
};

export default Feature;
