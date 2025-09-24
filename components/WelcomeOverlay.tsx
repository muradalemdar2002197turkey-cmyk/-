import React from 'react';

interface WelcomeOverlayProps {
    onEnter: () => void;
}

const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ onEnter }) => {
    return (
        <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-md z-[100] flex justify-center items-center text-white text-center animate-fade-in" aria-modal="true" role="dialog">
            <div className="p-8 rounded-lg max-w-md mx-4">
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-sky-400">أهلاً بك</h2>
                <p className="text-xl md:text-2xl mb-6 text-gray-300">في الموقع الرسمي للأستاذ أحمد رضا</p>
                <p className="text-lg text-gray-400 mb-8 animate-pulse">اللهم صلِّ وسلم وبارك على سيدنا محمد</p>
                <button
                    onClick={onEnter}
                    className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-12 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
                >
                    ابدأ الآن
                </button>
            </div>
        </div>
    );
};

export default WelcomeOverlay;
