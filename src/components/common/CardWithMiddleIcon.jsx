import React from 'react';

const CardWithMiddleIcon = ({ id, img, step, description, angle, arrow }) => {
    return (
        <div
            className={`
                card-with-middle-icon
                relative
                flex flex-col items-stretch
                border-[5px] w-[260px] h-[260px]
                border-white rounded-3xl max-w-sm
                shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]
                p-4 ${id === 2 ? '' : 'sm:top-[18px]'}
            `}
            style={{
                background: 'linear-gradient(135deg, #F5F5F5 0%, #EFEDED 100%)',
                transform: `rotate(${angle}deg)`,
                '--before-img': arrow ? `url(${arrow})` : 'none',
            }}
        >
            <div className="flex-1 flex items-center justify-center">
                <img src={img} alt={step} />
            </div>

            <div className="text-start">
                <span className="text-[#989898] font-light text-sm">
                    {step}
                </span>
                <p className="text-[#3D3D3D] text-xl font-semibold">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CardWithMiddleIcon;
