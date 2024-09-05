import aboutImage from '/about.webp';

const AboutSection = () => {
    return (
        <section
            id="about"
            className="w-screen flex-col xl:flex-row bg-hexwhite p-4 md:p-8 lg:p-12 xl:p-16"
        >
            <div className="w-full h-full flex flex-col xl:flex-row">
                <div
                    className="h-full xl:w-1/2 p-4 md:p-8 flex flex-col justify-start space-y-2 order-2 xl:order-1">
                    <h2 className="text-4xl md:text-6xl mb-4 font-semibold font-ClashDisplay text-center leading-relaxed">
                        Kim jesteśmy?
                    </h2>
                    <p className="text-justify text-hexblack font-ClashDisplay text-lg leading-relaxed">
                        Chcielibyśmy Wam przedstawić założycieli Lean Bulls Gym, trzy osoby z dwóch różnych światów.
                        Zacznijmy od Łukasza Klugiewicza, zawodnika trójboju z jednym z najwyższych totali w Polsce.
                        Łukasz
                        od zawsze lubił pomagać trenującym, więc stworzenie drużyny i połączenie funkcji zawodnika i
                        trenera
                        było naturalnym krokiem. Obecnie prowadzi drużynę Lean Bulls Gdynia.
                    </p>
                    <p className="text-justify text-hexblack font-ClashDisplay text-lg leading-relaxed">
                        Natalia Jasińska, absolwentka GUMedu i AWFu, pracuje z zawodnikami, pomagając im osiągać lepsze
                        wyniki siłowe ze strony dietetycznej. Pasja Łukasza zainspirowała ją do entuzjastycznego
                        wsparcia
                        pomysłu otwarcia nowej siłowni.
                    </p>
                    <p className="text-justify text-hexblack font-ClashDisplay text-lg leading-relaxed">
                        Kaja Kwiatkowska, osoba z biznesu, poznała Łukasza trenując w jednej drużynie. Po zamknięciu
                        siłowni,
                        zaczęła zastanawiać się nad stworzeniem komfortowych warunków do treningu. Po rozmowie z
                        Łukaszem i
                        Natalią postanowiła dołączyć do nich i wesprzeć projekt Lean Bulls Gym.
                    </p>
                </div>
                <div className="h-full xl:w-1/2 p-4 md:p-8 flex items-start justify-start order-1 xl:order-2">
                    <img
                        src={aboutImage}
                        alt="Zdjęcie założycieli Lean Bulls Gym"
                        className="w-full h-auto object-cover shadow-xl rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
