import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Videos from './components/Videos';
import Platform from './components/Platform';
import Locations from './components/Locations';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UpdateNotifier from './components/UpdateNotifier';
import WelcomeOverlay from './components/WelcomeOverlay';
import ShareButton from './components/ShareButton';

const App: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState(true);

    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const coursesRef = useRef<HTMLDivElement>(null);
    const videosRef = useRef<HTMLDivElement>(null);
    const platformRef = useRef<HTMLDivElement>(null);
    const locationsRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (showWelcome) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showWelcome]);

    const handleEnterSite = () => {
        setShowWelcome(false);
    };

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="text-gray-200">
            {showWelcome && <WelcomeOverlay onEnter={handleEnterSite} />}
            <Header
                onHomeClick={() => scrollToSection(homeRef)}
                onAboutClick={() => scrollToSection(aboutRef)}
                onCoursesClick={() => scrollToSection(coursesRef)}
                onVideosClick={() => scrollToSection(videosRef)}
                onPlatformClick={() => scrollToSection(platformRef)}
                onLocationsClick={() => scrollToSection(locationsRef)}
                onTestimonialsClick={() => scrollToSection(testimonialsRef)}
                onContactClick={() => scrollToSection(contactRef)}
            />
            <main>
                <div ref={homeRef}>
                    <Hero onCoursesClick={() => scrollToSection(coursesRef)} />
                </div>
                <div ref={aboutRef}>
                    <About />
                </div>
                <div ref={coursesRef}>
                    <Menu />
                </div>
                <div ref={videosRef}>
                    <Videos />
                </div>
                <div ref={platformRef}>
                    <Platform />
                </div>
                <div ref={locationsRef}>
                    <Locations />
                </div>
                <div ref={testimonialsRef}>
                    <Gallery />
                </div>
                <div ref={contactRef}>
                    <Contact />
                </div>
            </main>
            <Footer />
            <UpdateNotifier />
            <ShareButton />
        </div>
    );
};

export default App;