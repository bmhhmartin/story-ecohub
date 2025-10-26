'use client';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative py-4" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #151958 50%, #1d4ed8 100%)' }}>
            {/* Circuit Board Background Pattern */}
            <div className="absolute inset-0 circuit-pattern opacity-20"></div>
            <header className="relative z-10 bg-white mx-auto rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full max-w-6xl flex items-center justify-between shadow-lg pl-4 pr-4">
                {/* Left Section - Logo */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-900 rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-xs sm:text-sm">e</span>
                    </div>
                    <span className="text-blue-900 font-semibold text-lg sm:text-xl">DigitalHub</span>
                </div>

                {/* Desktop Navigation - Hidden on mobile */}
                <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    <a href="#" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
                        About Us
                    </a>
                    <a href="#" className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
                        Support & Contact
                    </a>
                </nav>

                {/* Desktop Right Section - Hidden on mobile */}
                <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                    {/* Register Button */}
                    <button className="px-4 xl:px-6 py-2 border border-blue-900 text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors text-sm">
                        REGISTER
                    </button>
                    
                    {/* Login Button */}
                    <button className="px-4 xl:px-6 py-2 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors text-sm">
                        LOGIN
                    </button>
                    
                    {/* Vertical Separator */}
                    <div className="w-px h-6 bg-gray-300"></div>
                    
                    {/* Language Selector */}
                    <div className="flex items-center space-x-1">
                        <span className="text-blue-900 font-medium text-sm">EN</span>
                        <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    
                    {/* Search Icon */}
                    <svg className="w-5 h-5 text-blue-900 hover:text-blue-700 cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Mobile/Tablet Right Section - Show on smaller screens */}
                <div className="flex lg:hidden items-center space-x-2 sm:space-x-3">
                    {/* Search Icon - Always visible */}
                    <svg className="w-5 h-5 text-blue-900 hover:text-blue-700 cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    
                    {/* Language Selector - Show on tablet and up */}
                    <div className="hidden sm:flex items-center space-x-1">
                        <span className="text-blue-900 font-medium text-sm">EN</span>
                        <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    
                    {/* Hamburger Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        className="p-2 text-blue-900 hover:text-blue-700 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleMenu}></div>
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-900 rounded-md flex items-center justify-center">
                                <span className="text-white font-bold text-sm">e</span>
                            </div>
                            <span className="text-blue-900 font-semibold text-xl">DigitalHub</span>
                        </div>
                        <button 
                            onClick={toggleMenu}
                            className="p-2 text-blue-900 hover:text-blue-700 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Content */}
                    <div className="flex-1 flex flex-col justify-between p-6">
                        {/* Navigation Links */}
                        <nav className="space-y-6">
                            <a 
                                href="#" 
                                className="block text-blue-900 font-medium text-lg hover:text-blue-700 transition-colors"
                                onClick={toggleMenu}
                            >
                                About Us
                            </a>
                            <a 
                                href="#" 
                                className="block text-blue-900 font-medium text-lg hover:text-blue-700 transition-colors"
                                onClick={toggleMenu}
                            >
                                Support & Contact
                            </a>
                        </nav>

                        {/* Action Buttons */}
                        <div className="space-y-4 pt-6 border-t border-gray-200">
                            <button className="w-full px-6 py-3 border border-blue-900 text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors">
                                REGISTER
                            </button>
                            <button className="w-full px-6 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors">
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
