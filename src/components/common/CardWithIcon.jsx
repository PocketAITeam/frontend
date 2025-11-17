import React from 'react';

const CardWithIcon = ({ icon, title, description }) => {
    return (
        <div
            className="flex flex-col items-start border-[5px] border-white rounded-3xl py-9 pl-7 max-w-sm w-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]"
            style={{
                background: 'linear-gradient(135deg, #F5F5F5 0%, #EFEDED 100%)',
            }}
        >
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full">
                <img src={icon} alt={title} />
            </div>
            <h3 className="my-3 text-[#3D3D3D] font-semibold text-xl">
                {title}
            </h3>
            <p className="text-[#656565] text-base font-normal">
                {description}
            </p>
        </div>
    );
};

export default CardWithIcon;
