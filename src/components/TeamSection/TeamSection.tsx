import teamMember1 from '/crew/lukasz.webp';
import teamMember2 from '/crew/artur.webp';
import teamMember3 from '/crew/stanislaw.webp';
import teamMember4 from '/crew/natalia.webp';

const TeamSection = () => {
    const teamMembers = [
        { name: 'Łukasz Klugiewicz', role: 'Trener i założyciel sekcji trójboju siłowego', image: teamMember1 },
        { name: 'Artur Lisowski', role: 'Trener personalny oraz przygotowania motorycznego', image: teamMember2 },
        { name: 'Stanisław Biernat', role: 'Student fizjoterapii oraz trener personalny', image: teamMember3 },
        { name: 'Natalia Jasińska', role: 'Dietetyczka kliniczna i sportowa', image: teamMember4 }
    ];

    return (
        <section
            id="team"
            className="w-screen bg-hexwhite p-4 md:p-8 lg:p-12 xl:p-16">
            <div
                className="container mx-auto text-center"
            >
                <div className="mb-8 max-w-5xl mx-auto px-4 md:px-8 ">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-4 font-ClashDisplay">
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
                            className="flex flex-col items-center bg-hexwhite rounded-xl shadow-xl p-4 transition-transform duration-300 hover:scale-105"
                        >
                            <div className="mb-4">
                                <img
                                    src={member.image}
                                    alt={`Zdjęcie ${member.name}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-semibold mb-2 text-hexblack font-ClashDisplay">{member.name}</h2>
                            <p className="text-hexblack text-lg font-ClashDisplay">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
