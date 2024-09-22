const TrainingSection = () => {
    return (
        <section
            id="training"
            className="w-screen flex flex-col justify-center items-center bg-cover bg-center text-hexwhite p-4 md:p-8 lg:p-12 xl:p-16 relative"
            style={{
                backgroundImage: `linear-gradient(rgba(90, 20, 20, 0.8), rgba(90, 20, 20, 0.8)), url('/powerlifting.webp')`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl mt-4 font-semibold font-ClashDisplay leading-relaxed">
                    Oferta
                </h1>

                <div className="max-w-5xl p-4">
                    <p className="text-lg mb-6 font-ClashDisplay text-justify">
                        W Lean Bulls Gym oferujemy szeroki zakres treningów personalnych, które są dostosowane do
                        potrzeb każdego klienta. Niezależnie od tego, czy jesteś początkującym, czy zaawansowanym
                        sportowcem, nasi doświadczeni trenerzy będą pracować z Tobą, aby stworzyć plan, który pomoże Ci
                        osiągnąć Twoje cele fitnessowe, zwiększając siłę, wytrzymałość i ogólną kondycję.
                    </p>
                    <p className="text-lg mb-6 font-ClashDisplay text-justify leading-relaxed">
                        Nasza siłownia dysponuje nowoczesnym sprzętem oraz strefami treningowymi, które umożliwiają
                        różnorodne formy aktywności. Oferujemy nie tylko treningi siłowe, ale również cardio i zajęcia
                        funkcjonalne. Dzięki tak bogatej ofercie, każdy znajdzie coś dla
                        siebie i będzie mógł dostosować swój trening do indywidualnych preferencji.
                    </p>
                    <p className="text-lg mb-6 font-ClashDisplay text-justify leading-relaxed">
                        Dla osób, które są zainteresowane trójbojem siłowym, mamy specjalną sekcję, w której można
                        poprawić swoje wyniki w przysiadzie, wyciskaniu leżąc oraz martwym ciągu. Wspieramy zarówno
                        początkujących, jak i zaawansowanych sportowców, oferując im możliwość rozwoju swoich
                        umiejętności w tym zakresie.
                    </p>
                    <p className="text-lg font-ClashDisplay text-justify leading-relaxed">
                        Organizujemy także warsztaty, seminaria oraz konsultacje dietetyczne, które pomagają w osiąganiu
                        optymalnych wyników. Naszym celem jest zapewnienie kompleksowego wsparcia, które pomoże Ci w
                        pełni wykorzystać potencjał swojego ciała. Dołącz do nas i zacznij swoją przygodę z treningiem
                        już dziś – czekamy na Ciebie!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrainingSection;
