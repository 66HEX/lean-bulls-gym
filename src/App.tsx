import { useEffect } from 'react';
import { initializeLenis, destroyLenis } from './utils/LenisUtils.tsx';
import './App.css';
import Header from "./components/ui/Header/Header.tsx";
import HomeSection from "./components/HomeSection/HomeSection.tsx";
import AboutSection from "./components/AboutSection/AboutSection.tsx";
import TeamSection from "./components/TeamSection/TeamSection.tsx";
import PowerliftingSection from "./components/PowerliftingSection/PowerliftingSection.tsx";
import PricingSection from "./components/PricingSection/PricingSection.tsx";
import GallerySection from "./components/GallerySection/GallerySection.tsx";
import ContactSection from "./components/ContactSection/ContactSection.tsx";

function App() {
    useEffect(() => {
        initializeLenis();

        return () => {
            destroyLenis();
        };
    }, []);

    return (
        <>
            <Header />
            <HomeSection />
            <AboutSection />
            <TeamSection />
            <PowerliftingSection />
            <PricingSection />
            <GallerySection />
            <ContactSection />
        </>
    );
}

export default App;
