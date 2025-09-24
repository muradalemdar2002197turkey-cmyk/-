import React from 'react';

interface HeroProps {
    onCoursesClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCoursesClick }) => {
    return (
        <div 
            className="h-screen bg-cover bg-center flex items-center justify-center relative text-white text-center"
            style={{ backgroundImage: "url('https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/536283955_769097919036049_4633148832353579175_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5j4_waeIMQgQ7kNvwE6kerE&_nc_oc=Adk6L7kX0d_u-h8YIQOPk29HlOb93Wn7It9Lg6eKZuaDb6Mrx3XUepoPTt0FkCC79Wk&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=kAe1vOtUe-4HQiLUDN30Dw&oh=00_AfaOCDipNEUBN3BHfBIz0mCNMEHI-xBaFIfQnC3AElMh-A&oe=68D8F12E')" }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative z-10 p-6">
                <h2 className="text-5xl md:text-7xl font-black mb-4 animate-fade-in-down" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>الإمام في الفيزياء</h2>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-up" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>مع الأستاذ أحمد رضا، كن القائد في فهم أعقد القوانين.</p>
                <button 
                    onClick={onCoursesClick}
                    className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
                >
                    استكشف الدورات
                </button>
            </div>
        </div>
    );
};

export default Hero;