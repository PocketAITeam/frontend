import React from 'react';
import Title from '../common/Title';
import CardWithIcon from '../common/CardWithIcon';

import underline from '../../assets/images/underline-lg.svg';
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
        <section id="features">
            <Title sectionTitle="Why it’s great" underline={underline} />

            <div className="w-full md:px-4 px-12 max-w-7xl flex flex-wrap justify-center gap-5 mb-4 mx-auto">
                {data.map((item) => (
                    <CardWithIcon
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Feature;
