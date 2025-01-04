import backgroundImage from '/home.webp';
import Lenis from 'lenis';

const HomeSection = () => {
    const handleScrollToTeam = () => {
        const lenis = window.lenis as Lenis;
        const teamSection = document.querySelector('#team') as HTMLElement;
        if (teamSection) {
            lenis.scrollTo(teamSection);
        }
    };

    const handleScrollToContact = () => {
        const lenis = window.lenis as Lenis;
        const contactSection = document.querySelector('#contact') as HTMLElement;
        if (contactSection) {
            lenis.scrollTo(contactSection);
        }
    };

    return (
        <section
            id="home"
            className="relative w-screen h-svh overflow-hidden"
        >
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-black"/>
            </div>
            <div
                className="relative h-full container mx-auto flex flex-col justify-center items-start p-4 md:p-8 lg:p-12 xl:p-16">
            <div className="max-w-xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-hexwhite font-ClashDisplay uppercase mb-6">
                        Siła, która
                        <span className="block">napędza</span>
                        <div className="relative">
                            {/* Rozmyta warstwa wewnętrzna */}
                            <h1 className="absolute inset-0 text-hexred/50 blur-sm">
                                zwycięstwo
                            </h1>
                            {/* Ostra warstwa zewnętrzna */}
                            <h1 className="relative text-hexred">
                                zwycięstwo
                            </h1>
                        </div>
                    </h1>
                <p className="text-xl text-hexwhite font-ClashDisplay mb-8 leading-relaxed">
                    Przekraczaj własne granice pod okiem profesjonalistów. Twój sukces jest naszą pasją.
                </p>
                <div className="flex gap-6">
                    <button
                        onClick={handleScrollToTeam}
                        className="bg-hexwhite/[0.05] border border-white/[0.1] backdrop-blur-md text-hexwhite px-6 py-3 rounded-md text-lg font-ClashDisplay"
                    >
                        Poznaj naszą kadrę
                    </button>
                    <button
                        onClick={handleScrollToContact}
                        className="bg-gradient-to-r from-hexred/[0.5] to-red-700/[0.5] border border-hexred/[0.1] backdrop-blur-md text-hexwhite px-6 py-3 rounded-md text-lg font-ClashDisplay"
                    >
                        Kontakt
                    </button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default HomeSection;
