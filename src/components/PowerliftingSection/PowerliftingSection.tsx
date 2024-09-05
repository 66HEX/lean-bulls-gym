const PowerliftingSection = () => {
    return (
        <section
            id="powerlifting"
            className="w-screen flex flex-col justify-center items-center bg-cover bg-center text-hexwhite p-4 md:p-8 lg:p-12 xl:p-16 relative"
            style={{
                backgroundImage: `linear-gradient(rgba(90, 20, 20, 0.8), rgba(90, 20, 20, 0.8)), url('/powerlifting.webp')`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl mt-4 font-semibold font-ClashDisplay leading-relaxed">
                    Sekcja Trójboju Siłowego
                </h1>

                <div className="max-w-5xl p-4">
                    <p className="text-lg mb-6 font-ClashDisplay text-justify">
                        <strong>Sekcja trójboju siłowego</strong> to idealne miejsce dla miłośników sportów
                        siłowych, którzy chcą poprawić swoje wyniki w trzech podstawowych konkurencjach: przysiadzie, wyciskaniu
                        leżąc oraz martwym ciągu.
                    </p>
                    <p className="text-lg mb-6 font-ClashDisplay text-justify leading-relaxed">
                        Nasza siłownia oferuje profesjonalnie wyposażone strefy treningowe z wysokiej jakości sprzętem, który
                        spełnia standardy zawodowe. Doświadczona kadra trenerów zapewnia indywidualne podejście do każdego uczestnika,
                        pomagając w technice oraz planowaniu treningów.
                    </p>
                    <p className="text-lg mb-6 font-ClashDisplay text-justify leading-relaxed">
                        Regularne zajęcia grupowe pozwalają na ciągłe doskonalenie umiejętności. Dzięki przyjaznej atmosferze i
                        wsparciu innych pasjonatów, sekcja trójboju siłowego staje się nie tylko miejscem treningu, ale także
                        społecznością wspierającą rozwój fizyczny i mentalny.
                    </p>
                    <p className="text-lg font-ClashDisplay text-justify leading-relaxed">
                        W naszej sekcji organizujemy także cykliczne warsztaty i seminaria, które pozwalają uczestnikom na doskonalenie techniki oraz
                        poszerzenie wiedzy na temat treningu. Dodatkowo, dostępność konsultacji dietetycznych
                        wspomaga osiąganie optymalnych wyników. Zachęcamy do dołączenia i podniesienia swoich wyników na wyższy poziom!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PowerliftingSection;
