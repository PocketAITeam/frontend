import React from 'react';
import Title from '../common/Title';
import CardWithoutIcon from '../common/CardWithoutIcon';

import underline from '../../assets/images/underline-sm.svg';

const FQA = () => {
    const data = [
        {
            id: 1,
            title: 'Which languages?',
            description: 'Arabic (incl. mixed English words) at launch.',
        },
        {
            id: 2,
            title: 'Is my data private?',
            description: 'Yes. We encrypt in transit and store securely.',
        },
        {
            id: 3,
            title: 'Price?',
            description: 'Free to start.',
        },
    ];
    return (
        <div>
            <Title sectionTitle="FQA" underline={underline} />

            <div className="w-full md:px-4 px-12 flex flex-wrap justify-center gap-5 mb-20 mx-auto">
                {data.map((item) => (
                    <CardWithoutIcon
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default FQA;
