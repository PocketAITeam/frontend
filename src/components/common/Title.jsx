import React from 'react';

import underline from '../../assets/images/underline-lg.svg';

import './Title.css';
const Title = ({ sectionTitle }) => {
    return (
        <div className="section-title">
            <h2>{sectionTitle}</h2>
            <div className="underline">
                <img src={underline} alt="" />
            </div>
        </div>
    );
};

export default Title;
