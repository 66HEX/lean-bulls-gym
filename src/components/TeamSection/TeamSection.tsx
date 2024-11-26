import Modal from './Modal/Modal.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import teamMember1 from '/crew/lukasz.webp';
import teamMember2 from '/crew/artur.webp';
import teamMember3 from '/crew/stanislaw.webp';
import teamMember4 from '/crew/natalia.webp';
import { useState } from 'react';

interface ModalState {
    active: boolean;
    index: number;
}

const TeamSection = () => {
    const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
    const teamMembers = [
        {
            name: 'Łukasz Klugiewicz',
            role: 'Trener i założyciel sekcji trójboju siłowego',
            image: teamMember1,
            instagram: 'https://www.instagram.com/chudybyk_933/'
        },
        {
            name: 'Artur Lisowski',
            role: 'Trener personalny oraz przygotowania motorycznego',
            image: teamMember2,
            instagram: 'https://www.instagram.com/lisucjusz/'
        },
        {
            name: 'Stanisław Biernat',
            role: 'Student fizjoterapii oraz trener personalny',
            image: teamMember3,
            instagram: 'https://www.instagram.com/sztangislav/'
        },
        {
            name: 'Natalia Jasińska',
            role: 'Dietetyczka kliniczna i sportowa',
            image: teamMember4,
            instagram: 'https://www.instagram.com/nat.jasinska/'
        }
    ];

    const handleMouseEnter = (index: number) => {
        setModal({ active: true, index });
    };

    const handleMouseLeave = (index: number) => {
        setModal({ active: false, index });
    };

    const handleMouseClick = (instagram: string) => {
        window.open(instagram, '_blank', 'noopener,noreferrer');
    };

    return (
        <section
            id="team"
            className="w-screen bg-hexwhite p-4 md:p-8 lg:p-12 xl:p-16">
            <div className="container mx-auto text-center">
                <div className="mb-8 max-w-5xl mx-auto px-4 md:px-8 ">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-4 font-ClashDisplay leading-relaxed">
                        Trenerzy
                    </h1>
                    <p className="text-lg font-ClashDisplay text-justify md:text-center mx-auto leading-relaxed">
                        W Lean Bulls Gym mamy trójkę doświadczonych trenerów oraz dietetyczkę, którzy są tu, aby
                        wspierać Was na każdym kroku. Nasi eksperci pomogą Wam osiągnąć cele siłowe i zadbać o zdrową
                        dietę.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            onClick={() => handleMouseClick(member.instagram)} // Obsługa kliknięcia
                            className="relative flex flex-col items-center bg-hexwhite rounded-xl shadow-xl p-4 transition-transform duration-300 hover:scale-105 cursor-pointer"
                        >
                            <div className="relative w-full">
                                <img
                                    src={member.image}
                                    alt={`Zdjęcie ${member.name}`}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <a
                                    href={member.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-2 left-2 p-2 rounded-lg shadow-lg text-white hover:text-gray-300 hover:scale-110 transition-all duration-300"
                                >
                                    <FontAwesomeIcon icon={faInstagram} size="2xl" />
                                </a>
                            </div>
                            <h2 className="text-2xl font-semibold mt-4 mb-2 text-hexblack font-ClashDisplay leading-relaxed">
                                {member.name}
                            </h2>
                            <p className="text-hexblack text-lg font-ClashDisplay leading-relaxed">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Modal modal={modal} />
        </section>
    );
};

export default TeamSection;
