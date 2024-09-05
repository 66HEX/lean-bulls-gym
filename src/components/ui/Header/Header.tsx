import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import logo from "/logo.webp";
import Lenis from 'lenis';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen && menuRef.current) {
            gsap.fromTo(
                menuRef.current,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        } else if (menuRef.current) {
            gsap.to(menuRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    if (menuRef.current) {
                        menuRef.current.style.height = ""; // Resetuje wysokość po animacji
                    }
                },
            });
        }
    }, [isOpen]);

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
        event.preventDefault();
        const lenis = window.lenis as Lenis;
        const element = document.querySelector(selector) as HTMLElement;
        if (element) {
            lenis.scrollTo(element);
        }
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 xl:top-2 left-0 w-full z-50 bg-hexblack/50 backdrop-blur-lg shadow-lg md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-5xl xl:rounded-lg" role="banner">
            <nav className="flex justify-between items-center leading-relaxed h-16 p-4 px-4 md:px-8 lg:px-12 xl:px-16">
                <div className="flex space-x-4 items-center text-hexwhite">
                    <img src={logo} alt="Logo Lean Bulls Gym" className="h-12 w-12 xl:h-8 xl:w-8" />
                    <p className="font-ClashDisplay text-xl xl:text-lg">Lean Bulls Gym</p>
                </div>
                <div className="hidden lg:flex space-x-4 font-ClashDisplay text-hexwhite text-lg" role="navigation">
                    <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} aria-label="Przejdź do strony głównej">Strona główna</a>
                    <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} aria-label="Dowiedz się więcej o nas">O nas</a>
                    <a href="#team" onClick={(e) => handleLinkClick(e, '#team')} aria-label="Poznaj naszych trenerów">Trenerzy</a>
                    <a href="#powerlifting" onClick={(e) => handleLinkClick(e, '#powerlifting')} aria-label="Sprawdź sekcję trójboju siłowego">Sekcja</a>
                    <a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')} aria-label="Zobacz cennik">Cennik</a>
                    <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} aria-label="Zobacz galerię zdjęć">Galeria</a>
                    <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} aria-label="Skontaktuj się z nami">Kontakt</a>
                </div>
                <button
                    className="lg:hidden text-white"
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
                >
                    <FontAwesomeIcon icon={faBars} size="xl" />
                </button>
            </nav>
            <div
                ref={menuRef}
                className={`md:hidden text-xl overflow-hidden flex flex-col space-y-4 font-ClashDisplay text-hexwhite mt-4 p-4 rounded-lg shadow-lg ${isOpen ? '' : 'hidden'}`}
                role="navigation"
            >
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} aria-label="Przejdź do strony głównej">Strona główna</a>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} aria-label="Dowiedz się więcej o nas">O nas</a>
                <a href="#team" onClick={(e) => handleLinkClick(e, '#team')} aria-label="Poznaj naszych trenerów">Trenerzy</a>
                <a href="#powerlifting" onClick={(e) => handleLinkClick(e, '#powerlifting')} aria-label="Sprawdź sekcję trójboju siłowego">Sekcja</a>
                <a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')} aria-label="Zobacz cennik">Cennik</a>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} aria-label="Zobacz galerię zdjęć">Galeria</a>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} aria-label="Skontaktuj się z nami">Kontakt</a>
            </div>
        </header>
    );
};

export default Header;
