import React, { useState } from 'react';
import { Button, Dropdown, Space } from 'antd';
import { ChevronDown } from 'lucide-react';

import { Menu, X } from 'lucide-react';

import logo from '../../assets/images/logo.png';
import menu from '../../assets/icons/menu.svg';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    const items = [
        {
            key: '1',
            label: (
                <a rel="noopener noreferrer" href="/">
                    English
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" disabled>
                    عربي
                </a>
            ),
        },
    ];
    return (
        <nav className="sticky top-0 z-50 py-5 bg-[#fcfcfc] backdrop-blur-lg">
            <div className="container relative mx-auto flex justify-between items-center text-[#3d3d3d] px-9">
                <div className="navbar-logo flex items-center">
                    <img src={logo} alt="" />
                    <h1 className="text-xl font-bold ml-4">Pocket AI</h1>
                </div>
                <div className="font-normal text-sm hidden md:block">
                    <a
                        href="/"
                        className="px-3 text-[#3D3D3D] hover:text-[#019CDE] transition-all duration-200"
                    >
                        Features
                    </a>
                    <a
                        href="/about"
                        className="px-3 text-[#3D3D3D] hover:text-[#019CDE] transition-all duration-200"
                    >
                        How it Works
                    </a>
                    <a
                        href="/contact"
                        className="px-3 text-[#3D3D3D] hover:text-[#019CDE] transition-all duration-200"
                    >
                        FAQ
                    </a>
                    <a
                        href="/contact"
                        className="px-3 text-[#3D3D3D] hover:text-[#019CDE] transition-all duration-200"
                    >
                        Download
                    </a>
                </div>
                <div className="hidden md:block">
                    <Space wrap>
                        <Dropdown
                            menu={{ items }}
                            placement="bottom"
                            arrow={{ pointAtCenter: true }}
                        >
                            <button className="text-base text-[#3D3D3D] bg-[#F4F4F4] border border-[#ECECEC] px-9 py-3 rounded-full hover:bg-[#e0e0e0] transition duration-300">
                                English <ChevronDown className="inline-block" />
                            </button>
                        </Dropdown>
                    </Space>
                </div>
                <div className="md:hidden sm:flex flex-col justify-end outline-0 focus:outline-0">
                    <button onClick={toggleMobileDrawer}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div
                    className="fixed right-0 top-[101px] md:hidden z-20 bg-[#b6b6b6] backdrop-blur-3xl w-full p-12 flex flex-col justify-center lg:hidden"
                    style={{
                        background:
                            'linear-gradient(135deg, #F5F5F5 0%, #EFEDED 100%)',
                    }}
                >
                    <ul className="flex flex-col space-y-8 md:hidden font-medium">
                        <li>
                            <a
                                href="/"
                                className="px-3 text-[#3D3D3D] focus:text-[#019CDE] transition-all duration-200"
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="px-3 text-[#3D3D3D] hover:text-[#019CDE] transition-all duration-200"
                            >
                                How it Works
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="px-3 text-[#3D3D3D] hover:text-[#019CDE] transition-all duration-200"
                            >
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="px-3 text-[#3D3D3D] hover:text-[#019CDE] transition-all duration-200"
                            >
                                Download
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
