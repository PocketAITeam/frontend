import React from 'react';

import './CardWithIcon.css';
const CardWithIcon = ({ icon, title, description }) => {
    return (
        <div className="card-with-icon">
            <div className="icon-container">
                <img src={icon} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default CardWithIcon;
