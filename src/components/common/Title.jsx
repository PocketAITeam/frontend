import React from 'react';

import underline from '../../assets/images/underline-lg.svg';

const Title = ({ sectionTitle }) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-[#292929] font-bold text-[40px] mt-12">
                {sectionTitle}
            </h2>
            <div className="mt-1.5 mb-12 ml-32">
                <img src={underline} alt="" />
            </div>
        </div>
    );
};

export default Title;
