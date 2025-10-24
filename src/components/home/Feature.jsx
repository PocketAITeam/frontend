import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Feature.css';
import Title from '../common/Title';
import CardWithIcon from '../common/CardWithIcon';

import icon1 from '../../assets/icons/microphone.svg';
import icon2 from '../../assets/icons/edit.svg';
import icon3 from '../../assets/icons/empty-wallet.svg';
import icon4 from '../../assets/icons/trash.svg';
import icon5 from '../../assets/icons/shield-tick.svg';

const Feature = () => {
    const data = [
        {
            id: 1,
            icon: icon1,
            title: 'Voice logging in seconds',
            description: 'One tap, talk, done.',
        },
        {
            id: 2,
            icon: icon2,
            title: 'Type when needed ',
            description: 'Quick add for noisy places.',
        },
        {
            id: 3,
            icon: icon3,
            title: 'Balance & recents',
            description: 'Monthly total and a clean timeline.',
        },
        {
            id: 4,
            icon: icon4,
            title: 'Quick edit & delete',
            description: 'Fix mistakes fast.',
        },
        {
            id: 5,
            icon: icon5,
            title: 'Private & synced',
            description: 'Your data stays safe.',
        },
    ];
    return (
        <Container className="text-center my-5 feature-section">
            <Title sectionTitle="Why it’s great" />
            <Row className="g-4 justify-content-center">
                {data.map((item) => (
                    <Col md={4} className="" key={item.id}>
                        <CardWithIcon
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Feature;
