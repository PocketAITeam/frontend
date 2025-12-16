import React, { useEffect, useState } from 'react';

import heroImage from '../../assets/images/hero-image.png';
import appleIcon from '../../assets/icons/apple.svg';
import appleText from '../../assets/icons/apple_text.svg';
import googleIcon from '../../assets/icons/google.svg';
import googleText from '../../assets/icons/google_text.svg';
const Hero = () => {
    return (
        <div className="flex justify-between flex-wrap max-w-7xl mx-auto md:px-14">
            <div className="flex flex-col justify-center items-center md:items-start md:text-left text-center lg:w-2/3 w-full">
                <h1 className="lg:text-6xl sm:text-5xl text-2xl sm:leading-19 leading-10 font-bold md:mb-4 mb-1 text-black">
                    Track expenses{' '}
                    <span className="text-[#019CDE]">by voice.</span>
                </h1>

                <h4 className="lg:text-6xl sm:text-5xl text-2xl sm:leading-19 leading-10 md:mb-4 mb-1 font-bold text-black">
                    Simple, fast, accurate.
                </h4>

                <p className="text-[#464646] mb-6 font-light sm:text-2xl text-base leading-relaxed">
                    No more typing or forms. Just speak your <br />
                    expenses — our AI logs them in seconds.
                </p>

                <div className="flex space-x-3">
                    <a
                        href="#"
                        className="bg-[#292929] text-white flex items-center space-x-2 border-[3px] border-[#292929] sm:rounded-3xl rounded-[20px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] px-4 py-3"
                    >
                        <img
                            src={appleIcon}
                            alt="Apple Icon"
                            className="sm:w-7 w-5"
                        />
                        <img
                            src={appleText}
                            alt="Apple Text"
                            className="sm:w-30 w-20"
                        />
                    </a>
                    <a
                        href="#"
                        className="bg-[#292929] text-white flex items-center space-x-2 border-[3px] border-[#292929] sm:rounded-3xl rounded-[20px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] px-4 py-3"
                    >
                        <img
                            src={googleIcon}
                            alt="Apple Icon"
                            className="sm:w-7 w-5"
                        />
                        <img
                            src={googleText}
                            alt="Apple Text"
                            className="sm:w-30 w-20"
                        />
                    </a>
                </div>
            </div>
            <div className="lg:w-1/3 w-full flex justify-center lg:justify-end lg:mt-0 mt-12 items-center">
                <img src={heroImage} alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;
