import React from 'react';

import CardWithMiddleIcon from '../common/CardWithMiddleIcon';
import Title from '../common/Title';

import underline from '../../assets/images/underline-md.svg';
import recordImage from '../../assets/icons/rec.png';
import recordTimeImage from '../../assets/icons/rec_time.png';
import transactionsImage from '../../assets/icons/transactions.png';

import './functionality.css';

const Functionality = () => {
    const data = [
        {
            id: 1,
            img: recordImage,
            step: 'Step 1',
            description: 'Hold the mic',
            angle: -5.6,
            arrow: 'v',
        },
        {
            id: 2,
            img: recordTimeImage,
            step: 'Step 2',
            description: 'Talk....',
            angle: 0,
            arrow: '/images/arrow.svg',
        },
        {
            id: 3,
            img: transactionsImage,
            step: 'Step 3',
            description: 'See it in your history',
            angle: 6.02,
            arrow: '/images/arrow2.svg',
        },
    ];
    return (
        <div>
            <Title sectionTitle="How it works" underline={underline} />

            <div className="w-full px-4 flex flex-wrap justify-center gap-28 mb-4">
                {data.map((item) => (
                    <CardWithMiddleIcon
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        step={item.step}
                        description={item.description}
                        angle={item.angle}
                        arrow={item.arrow}
                    />
                ))}
            </div>
        </div>
    );
};

export default Functionality;
