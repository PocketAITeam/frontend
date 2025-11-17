import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import { ChevronDown } from 'lucide-react';

import logo from '../../assets/images/logo.png';
import menu from '../../assets/icons/menu.svg';

const Navbar = () => {
    const items = [
        {
            key: '1',
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    English
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    عربي
                </a>
            ),
        },
    ];
    return (
        <div>
            <nav className="my-10">
                <div className="container mx-auto flex justify-between items-center text-[#3d3d3d]  px-9">
                    <div className="navbar-logo flex items-center">
                        <img src={logo} alt="" />
                        <h1 className="text-xl font-bold ml-4">Pocket AI</h1>
                    </div>
                    <div className="font-normal text-sm hidden sm:block">
                        <a href="/" className="px-3">
                            Features
                        </a>
                        <a href="/about" className="px-3">
                            How it Works
                        </a>
                        <a href="/contact" className="px-3">
                            FAQ
                        </a>
                        <a href="/contact" className="px-3">
                            Download
                        </a>
                    </div>
                    <div className="hidden sm:block">
                        <Space wrap>
                            <Dropdown
                                menu={{ items }}
                                placement="bottom"
                                arrow={{ pointAtCenter: true }}
                            >
                                <button className="text-base text-[#3D3D3D] bg-[#F4F4F4] border border-[#ECECEC] px-9 py-3 rounded-full hover:bg-[#e0e0e0] transition duration-300">
                                    English{' '}
                                    <ChevronDown className="inline-block" />
                                </button>
                            </Dropdown>
                        </Space>
                    </div>
                    <div className="block sm:hidden">
                        <button>
                            <img src={menu} alt="Menu" />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
