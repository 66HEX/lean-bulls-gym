import backgroundImage from '/home.webp';
import Lenis from 'lenis';
import BackgroundOverlay from '../ui/BackgroundOverlay/BackgroundOverlay.tsx'
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
            className="relative w-screen h-screen overflow-hidden"
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
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/70 to-black"/>
                \
                <div
                    className="absolute inset-0 bg-black opacity-20"/>
            </div>
            <BackgroundOverlay/>

            <div
                className="relative h-full container mx-auto flex flex-col justify-center items-start p-4 md:p-8 lg:p-12 xl:p-16">
            <div className="max-w-xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-hexwhite font-ClashDisplay uppercase leading-tight mb-6">
                        Siła, która
                        <span className="block">napędza</span>
                        <span className="block bg-gradient-to-r from-hexred to-red-600 text-transparent bg-clip-text opacity-70 backdrop-blur-md">zwycięstwo</span>
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
                        className="bg-gradient-to-r from-hexred/[0.3] to-red-700/[0.3] border border-hexred/[0.1] backdrop-blur-md text-hexwhite px-6 py-3 rounded-md text-lg font-ClashDisplay"
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