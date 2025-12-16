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
import { Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    // return (
    //     <>
    //         <footer className="flex flex-col justify-center">
    //             <div className="flex flex-col">
    //                 <div className="flex justify-evenly">
    //                     <div className="self-end">
    //                         <img src={footerLogo} alt="Pocket AI" />
    //                     </div>
    //                     <div className="flex flex-col items-start">
    //                         <span className="text-white font-semibold text-xl mb-6">
    //                             Legal links
    //                         </span>
    //                         <ul className="text-[#DCDCDC] text-base font-normal text-left">
    //                             <li className="mb-6">Privacy Policy</li>
    //                             <li>Terms of Use</li>
    //                         </ul>
    //                     </div>
    //                     <div className="flex flex-col items-start">
    //                         <span className="text-white font-semibold text-xl mb-6">
    //                             Get In Touch
    //                         </span>
    //                         <div className="flex text-[#DCDCDC] text-base font-normal gap-2.5">
    //                             <div>
    //                                 <img src={emailIcon} alt="email" />
    //                             </div>
    //                             <a href="mailto:support@pocket-ai.app">
    //                                 support@pocket-ai.app
    //                             </a>
    //                         </div>
    //                     </div>
    //                     <div className="flex flex-col items-start">
    //                         <div className="flex">
    //                             <a
    //                                 href=""
    //                                 className="w-10 h-10 border border-white rounded-full flex items-center justify-center mr-6"
    //                             >
    //                                 <img src={youtubeIcon} alt="" />
    //                             </a>
    //                             <a
    //                                 href=""
    //                                 className="w-10 h-10 border border-white rounded-full flex items-center justify-center"
    //                             >
    //                                 <img src={tiktokIcon} alt="" />
    //                             </a>
    //                         </div>

    //                     </div>
    //                 </div>
    //             </div>
    //         </footer>
    //
    //     </>
    // );
    return (
        <footer className="">
            <div className="h-[340px] md:h-[410px] flex md:flex-row flex-col-reverse md:justify-between md:items-center md:space-x-10 lg:space-x-30 justify-center max-w-5xl mx-auto sm:px-6 px-3">
                <div className="flex md:flex-1 justify-between mt-8 md:mt-0">
                    <div className="flex items-center">
                        <img
                            src={footerLogo}
                            alt="Pocket AI"
                            className="sm:w-15 w-8"
                        />
                    </div>
                    <div className="flex flex-col md:space-y-6 space-y-3 sm:text-base text-sm">
                        <span className="text-white font-semibold text-left">
                            Legal links
                        </span>
                        <ul className="text-[#DCDCDC] text-left">
                            <li className="md:mb-6 mb-3">Privacy Policy</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:space-y-6 space-y-3 sm:text-base text-sm  text-left">
                        <span className="text-white font-semibold md:mb-6 mb-3">
                            Get In Touch
                        </span>
                        <div className="flex text-[#DCDCDC] sm:gap-2.5 gap-1.5">
                            <div>
                                <img
                                    src={emailIcon}
                                    alt="email"
                                    className="sm:w-6 sm:h-6 w-4 h-4"
                                />
                            </div>
                            <a href="mailto:support@pocket-ai.app">
                                support@pocket-ai.app
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="flex space-x-5">
                        <a
                            href="#"
                            className="flex justify-center items-center border border-white w-10 h-10 rounded-full"
                        >
                            <img src={tiktokIcon} alt="" />
                        </a>
                        <a
                            href="#"
                            className="flex justify-center items-center border border-white w-10 h-10 rounded-full"
                        >
                            <img src={youtubeIcon} alt="" />
                        </a>
                    </div>
                    <div className="flex space-x-3 items-center w-full">
                        <a
                            href="#"
                            className="bg-[#F4F4F4] text-[#090909] px-4 py-3 flex items-center space-x-2 border-[3px] border-white lg:rounded-3xl rounded-[20px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]"
                        >
                            <img
                                src={appleIcon}
                                alt="Apple Icon"
                                className="lg:w-7 w-5"
                            />
                            <img
                                src={appleText}
                                alt="Apple Text"
                                className="lg:w-30 w-20"
                            />
                        </a>
                        <a
                            href="#"
                            className="bg-[#F4F4F4] text-[#090909] px-4 py-3 flex items-center space-x-2 border-[3px] border-white lg:rounded-3xl rounded-[20px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]"
                        >
                            <img
                                src={googleIcon}
                                alt="Apple Icon"
                                className="lg:w-7 w-5"
                            />
                            <img
                                src={googleText}
                                alt="Apple Text"
                                className="lg:w-30 w-20"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="pb-5">
                <span className="text-[#019CDE] text-sm font-normal">
                    All Rights Reserved to © 2025 Pocket.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
