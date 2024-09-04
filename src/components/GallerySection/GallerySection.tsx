import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const GallerySection = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const lightboxRef = useRef<HTMLDivElement>(null); // Referencja do kontenera lightboxa

    const galleryImages = [
        './gym/gym-photo-1.webp',
        './gym/gym-photo-2.webp',
        './gym/gym-photo-3.webp',
        './gym/gym-photo-4.webp',
        './gym/gym-photo-5.webp',
        './gym/gym-photo-6.webp'
    ];

    const openLightbox = (image: string) => {
        setCurrentImage(image);
        setLightboxOpen(true);
        gsap.to('.lightbox', { opacity: 1, duration: 0.5, display: 'flex' });
    };

    const closeLightbox = () => {
        gsap.to('.lightbox', { opacity: 0, duration: 0.5, display: 'none' }).eventCallback('onComplete', () => {
            setLightboxOpen(false);
            setCurrentImage(null);
        });
    };

    const handleOutsideClick = (e: MouseEvent) => {
        if (lightboxRef.current && !lightboxRef.current.contains(e.target as Node)) {
            closeLightbox();
        }
    };

    useEffect(() => {
        if (lightboxOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [lightboxOpen]);

    return (
        <section id="gallery" className="w-screen bg-hexwhite p-4 md:p-8 lg:p-12 xl:p-16">
            <div className="container mx-auto text-center">
                <div className="mb-8 max-w-5xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-4 font-ClashDisplay">Galeria</h1>
                    <p className="text-lg font-ClashDisplay text-justify md:text-center mx-auto leading-relaxed">
                        Zobacz naszą siłownię w akcji! Oto kilka zdjęć, które pokazują nasze nowoczesne wyposażenie i przestronną
                        salę treningową. Mamy nadzieję, że te zdjęcia zachęcą Cię do odwiedzenia nas osobiście.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer"
                            onClick={() => openLightbox(image)}
                        >
                            <img
                                src={image}
                                alt={`Zdjęcie siłowni ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                loading="lazy" // Dodany lazy loading
                            />
                        </div>
                    ))}
                </div>

                {lightboxOpen && (
                    <div className="fixed inset-0 z-50 lightbox bg-black bg-opacity-75 flex items-center justify-center">
                        <div
                            ref={lightboxRef}
                            className="relative max-w-4xl max-h-4xl bg-white p-4 rounded-lg"
                        >
                            <img
                                src={currentImage || ''}
                                alt="Powiększone zdjęcie"
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 text-white text-2xl rounded-full p-4"
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;
