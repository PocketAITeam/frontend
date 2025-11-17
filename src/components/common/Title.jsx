import React from 'react';

const Title = ({ sectionTitle, underline }) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-[#292929] font-bold text-[40px] mt-12">
                {sectionTitle}
            </h2>
            <div className="mt-1.5 mb-12 ml-12">
                <img src={underline} alt="" />
            </div>
        </div>
    );
};

export default Title;
