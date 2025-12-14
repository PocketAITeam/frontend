import React, { useEffect, useState } from 'react';

import heroImage from '../../assets/images/hero-image.png';
import appleIcon from '../../assets/icons/apple.svg';
import appleText from '../../assets/icons/apple_text.svg';
import googleIcon from '../../assets/icons/google.svg';
import googleText from '../../assets/icons/google_text.svg';
const Hero = () => {
    return (
        <div className="relative w-full h-[calc(100vh-141px)] flex items-center">
            <div className="container mx-auto w-full flex items-center justify-between h-[calc(100vh-141px)]">
                <div className="w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center gap-10">
                    {/* النص */}
                    <div className="flex flex-col justify-center items-center sm:items-start text-left">
                        <h1 className="text-4xl md:text-[64px] font-bold mb-4 text-black">
                            Log expenses{' '}
                            <span className="text-blue-500">by voice.</span>
                        </h1>

                        <h4 className="text-4xl md:text-[64px] mb-4 font-bold text-black">
                            Simple, fast, accurate.
                        </h4>

                        <p className="text-[#464646] mb-6 font-light text-2xl leading-relaxed">
                            No more typing or forms. Just speak your <br />
                            expenses — our AI logs them in seconds.
                        </p>

                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="bg-[#292929] text-white px-6 py-5 flex items-center space-x-2 border-[3px] border-[#292929] rounded-3xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]"
                            >
                                <img src={appleIcon} alt="Apple Icon" />
                                <img src={appleText} alt="Apple Text" />
                            </a>
                            <a
                                href="#"
                                className="bg-[#292929] text-white px-6 py-5 flex items-center space-x-2 border-[3px] border-[#292929] rounded-3xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]"
                            >
                                <img src={googleIcon} alt="Apple Icon" />
                                <img src={googleText} alt="Apple Text" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute right-0 bottom-0">
                <img
                    src={heroImage}
                    alt="Hero"
                    className="w-full max-w-md object-contain"
                />
            </div>
        </div>
    );
};

export default Hero;
