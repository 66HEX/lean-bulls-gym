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
                        Lean Bulls to klub sportowy, w którym prowadzona jest sekcja trójboju siłowego oraz treningi personalne. Działamy również jako stowarzyszenie, promując aktywność fizyczną i zdrowy styl życia.
                    </p>
                    <p className="text-justify text-hexblack font-ClashDisplay text-lg leading-relaxed">
                        Klub został założony przez trzy osoby: Łukasza Klugiewicza, jednego z najlepszych zawodników trójboju siłowego w Polsce, który od lat dzieli się swoją wiedzą jako trener drużyny Lean Bulls Gdynia. Natalię Jasińską, dietetyczkę sportową, która wspiera zawodników od strony żywieniowej, pomagając im osiągać lepsze wyniki oraz Kaję Kwiatkowską, osobę związana z biznesem, dołączyła, która wspiera projekt od strony organizacyjnej.
                    </p>
                    <p className="text-justify text-hexblack font-ClashDisplay text-lg leading-relaxed">
                        Lean Bulls to miejsce dla każdego, kto chce rozwijać swoją siłę, kondycję oraz promować zdrowe nawyki, wspierając lokalną społeczność.
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
