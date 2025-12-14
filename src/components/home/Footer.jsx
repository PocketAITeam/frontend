import React from 'react';

import footerLogo from '../../assets/images/footer_logo.png';
import emailIcon from '../../assets/icons/email.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import tiktokIcon from '../../assets/icons/tiktok.svg';
import googleIcon from '../../assets/icons/google.svg';
import googleText from '../../assets/icons/google_text_black.svg';
import appleIcon from '../../assets/icons/apple_black.svg';
import appleText from '../../assets/icons/apple_text_black.svg';
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col justify-center">
                <div className="flex flex-col">
                    <div className="flex justify-evenly">
                        <div className="self-end">
                            <img src={footerLogo} alt="Pocket AI" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-white font-semibold text-xl mb-6">
                                Legal links
                            </span>
                            <ul className="text-[#DCDCDC] text-base font-normal text-left">
                                <li className="mb-6">Privacy Policy</li>
                                <li>Terms of Use</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-white font-semibold text-xl mb-6">
                                Get In Touch
                            </span>
                            <div className="flex text-[#DCDCDC] text-base font-normal gap-2.5">
                                <div>
                                    <img src={emailIcon} alt="email" />
                                </div>
                                <a href="mailto:support@pocket-ai.app">
                                    support@pocket-ai.app
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex">
                                <a
                                    href=""
                                    className="w-10 h-10 border border-white rounded-full flex items-center justify-center mr-6"
                                >
                                    <img src={youtubeIcon} alt="" />
                                </a>
                                <a
                                    href=""
                                    className="w-10 h-10 border border-white rounded-full flex items-center justify-center"
                                >
                                    <img src={tiktokIcon} alt="" />
                                </a>
                            </div>
                            <div className="flex space-x-4 mt-6">
                                <a
                                    href="#"
                                    className="bg-[#F4F4F4] text-[#090909] px-5 py-4 flex items-center space-x-2 border-[3px] border-white rounded-3xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]"
                                >
                                    <img src={appleIcon} alt="Apple Icon" />
                                    <img src={appleText} alt="Apple Text" />
                                </a>
                                <a
                                    href="#"
                                    className="bg-[#F4F4F4] text-[#090909] px-5 py-4 flex items-center space-x-2 border-[3px] border-white rounded-3xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]"
                                >
                                    <img src={googleIcon} alt="Apple Icon" />
                                    <img src={googleText} alt="Apple Text" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-[#292929] pb-8">
                <span className="text-[#019CDE] text-sm font-normal">
                    All Rights Reserved to © 2025 Pocket.
                </span>
            </div>
        </>
    );
};

export default Footer;
