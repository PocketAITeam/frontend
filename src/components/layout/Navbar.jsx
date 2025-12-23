import React, { useEffect, useState } from 'react';
import { Dropdown, Space } from 'antd';
import { ChevronDown, Menu, X } from 'lucide-react';

import logo from '../../assets/images/logo.png';

const NavLink = ({ href, label, activeSection, onClick }) => {
    const id = href.replace('#', '');
    const isActive = activeSection === id;

    const handleClick = (e) => {
        e.preventDefault();

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        onClick?.();
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`px-3 transition-all duration-200 ${
                isActive
                    ? 'text-[#019CDE] font-semibold'
                    : 'text-[#3D3D3D] hover:text-[#019CDE]'
            }`}
        >
            {label}
        </a>
    );
};

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('features');

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen((prev) => !prev);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const items = [
        {
            key: '1',
            label: <a href="/">English</a>,
        },
        {
            key: '2',
            label: <span className="opacity-50 cursor-not-allowed">عربي</span>,
        },
    ];

    return (
        <nav className="sticky top-0 z-50 py-5 bg-[#fcfcfc] backdrop-blur-lg">
            <div className="container relative mx-auto flex justify-between items-center text-[#3d3d3d] px-9">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img src={logo} alt="Pocket AI" />
                    <h1 className="text-xl font-bold ml-4">Pocket AI</h1>
                </a>

                {/* Desktop Links */}
                <div className="font-normal text-sm hidden md:flex">
                    <NavLink
                        href="#features"
                        label="Features"
                        activeSection={activeSection}
                    />
                    <NavLink
                        href="#functionality"
                        label="How it Works"
                        activeSection={activeSection}
                    />
                    <NavLink
                        href="#faq"
                        label="FAQ"
                        activeSection={activeSection}
                    />
                    <NavLink
                        href="#download"
                        label="Download"
                        activeSection={activeSection}
                    />
                </div>

                {/* Language */}
                <div className="hidden md:block">
                    <Space wrap>
                        <Dropdown menu={{ items }} placement="bottom">
                            <button className="text-base text-[#3D3D3D] bg-[#F4F4F4] border border-[#ECECEC] px-9 py-3 rounded-full hover:bg-[#e0e0e0] transition duration-300">
                                English{' '}
                                <ChevronDown className="inline-block ml-1" />
                            </button>
                        </Dropdown>
                    </Space>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileDrawer}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileDrawerOpen && (
                <div
                    className="fixed right-0 top-[101px] md:hidden z-20 w-full p-12 flex flex-col"
                    style={{
                        background:
                            'linear-gradient(135deg, #F5F5F5 0%, #EFEDED 100%)',
                    }}
                >
                    <ul className="flex flex-col space-y-8 font-medium">
                        <li>
                            <NavLink
                                href="#features"
                                label="Features"
                                activeSection={activeSection}
                                onClick={() => setMobileDrawerOpen(false)}
                            />
                        </li>
                        <li>
                            <NavLink
                                href="#functionality"
                                label="How it Works"
                                activeSection={activeSection}
                                onClick={() => setMobileDrawerOpen(false)}
                            />
                        </li>
                        <li>
                            <NavLink
                                href="#faq"
                                label="FAQ"
                                activeSection={activeSection}
                                onClick={() => setMobileDrawerOpen(false)}
                            />
                        </li>
                        <li>
                            <NavLink
                                href="#download"
                                label="Download"
                                activeSection={activeSection}
                                onClick={() => setMobileDrawerOpen(false)}
                            />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
