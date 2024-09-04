import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="w-screen bg-hexblack text-hexwhite p-4 md:p-8 lg:p-12 xl:p-16" role="contentinfo">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">

                <div className="flex flex-col mb-8 md:mb-0 md:w-1/3">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-ClashDisplay">Lean Bulls Gym</h2>
                    <div className="flex space-x-4 mb-4">
                        <a
                            href="https://www.facebook.com/leanbullsgym"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Lean Bulls Gym na Facebooku"
                        >
                            <FontAwesomeIcon icon={faFacebookF} className="text-3xl hover:text-gray-400 transition-colors" />
                        </a>
                        <a
                            href="https://www.instagram.com/leanbullsgym/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Lean Bulls Gym na Instagramie"
                        >
                            <FontAwesomeIcon icon={faInstagram} className="text-3xl hover:text-gray-400 transition-colors" />
                        </a>
                    </div>
                </div>

                <div className="text-left mb-8 md:mb-0 md:w-1/3">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 font-ClashDisplay">Godziny otwarcia</h3>
                    <p className="text-lg font-ClashDisplay mb-1">Poniedziałek - Piątek: 8:00 - 21:00</p>
                    <p className="text-lg font-ClashDisplay mb-1">Sobota: 9:00 - 16:00</p>
                    <p className="text-lg font-ClashDisplay">Niedziela: 10:00 - 14:00</p>
                </div>

                <div className="text-left md:text-right md:w-1/3">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 font-ClashDisplay">Kontakt</h3>
                    <p className="text-lg font-ClashDisplay mb-1">ul. Polska 7</p>
                    <p className="text-lg font-ClashDisplay mb-1">81-339 Gdynia</p>
                    <p className="text-lg font-ClashDisplay">+48 505 219 027</p>
                </div>
            </div>

            <div className="border-t border-gray-600 pt-4 mt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-lg font-ClashDisplay text-center md:text-left">Wszelkie prawa zastrzeżone.</p>
                <p className="text-lg font-ClashDisplay text-center md:text-right">
                    Designed by
                    <a
                        href="https://www.hexthecoder.pl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-hexwhite hover:text-gray-400"
                        aria-label="Strona HEX"
                    >
                        HEX
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
