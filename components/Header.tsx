import React, { useState, useEffect } from 'react';

interface HeaderProps {
    onHomeClick: () => void;
    onAboutClick: () => void;
    onCoursesClick: () => void;
    onVideosClick: () => void;
    onPlatformClick: () => void;
    onLocationsClick: () => void;
    onTestimonialsClick: () => void;
    onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onAboutClick, onCoursesClick, onVideosClick, onPlatformClick, onLocationsClick, onTestimonialsClick, onContactClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = (
        <>
            <button onClick={() => { onHomeClick(); setIsOpen(false); }} className="text-lg hover:text-sky-400 transition-colors duration-300">الرئيسية</button>
            <button onClick={() => { onAboutClick(); setIsOpen(false); }} className="text-lg hover:text-sky-400 transition-colors duration-300">من نحن</button>
            <button onClick={() => { onCoursesClick(); setIsOpen(false); }} className="text-lg hover:text-sky-400 transition-colors duration-300">الدورات</button>
            <button onClick={() => { onVideosClick(); setIsOpen(false); }} className="text-lg hover:text-sky-400 transition-colors duration-300">المحاضرات</button>
            <button onClick={() => { onPlatformClick(); setIsOpen(false); }} className="text-lg hover:text-sky-400 transition-colors duration-300">المنصة</button>
            <button onClick={() => { onLocationsClick(); setIsOpen(false); }} className="text-lg hover:text-sky-400 transition-colors duration-300">أماكننا</button>
            <button onClick={() => { onTestimonialsClick(); setIsOpen(false); }} className="text-lg hover:text-sky-400 transition-colors duration-300">آراء الطلاب</button>
            <button onClick={() => { onContactClick(); setIsOpen(false); }} className="text-lg hover:text-sky-400 transition-colors duration-300">انضم إلينا</button>
        </>
    );

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white cursor-pointer" onClick={onHomeClick}>أحمد رضا <span className="text-sky-400">|</span> فيزياء</h1>
                <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
                    {navLinks}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8">
                    <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    {navLinks}
                </div>
            )}
        </header>
    );
};

export default Header;