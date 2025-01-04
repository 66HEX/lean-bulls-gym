const PricingSection = () => {
    const pricingPlans = [
        {
            name: 'Uczeń/Student',
            price: '170 PLN/mc',
            description: 'Karnet miesięczny ze zniżką dla uczniów i studentów',
            features: [
                'Dostęp do siłowni przez 30 dni',
                'Zniżka dla uczniów i studentów'
            ]
        },
        {
            name: 'Zawodnicy trójboju',
            price: '200 PLN/mc',
            description: 'Karnet miesięczny ze zniżką dla zawodników sportów siłowych',
            features: [
                'Dostęp do siłowni przez 30 dni',
                'Zniżka dla zawodników sportów siłowych'
            ]
        },
        {
            name: 'Normalny',
            price: '220 PLN/mc',
            description: 'Nielimitowany dostęp do siłowni przez 30 dni',
            features: [
                'Nielimitowany dostęp do siłowni przez 30 dni',
                'Kupując karnet normalny na 2 lub 3 miesiące z góry, otrzymasz zniżkę!'
            ]
        },
        {
            name: 'Wejście jednorazowe',
            price: '39 PLN/wejście',
            description: 'Jednorazowy dostęp do siłowni na 1 dzień',
            features: [
                'Dostęp do siłowni na 1 dzień'
            ]
        }
    ];

    return (
        <section id="pricing" className="w-screen bg-hexwhite p-4 md:p-8 lg:p-12 xl:p-16">
            <div className="container mx-auto text-center">
                <div className="mb-8 max-w-5xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-4 font-ClashDisplay">Cennik</h1>
                    <p className="text-lg font-ClashDisplay text-justify md:text-center mx-auto leading-relaxed">
                        Wybierz plan, który najlepiej odpowiada Twoim potrzebom i ciesz się naszymi usługami w pełnym
                        zakresie. Każdy plan został zaprojektowany, aby zapewnić Ci wsparcie i motywację do osiągania
                        swoich celów.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-hexwhite rounded-xl shadow-xl p-4 transition-transform duration-300 hover:scale-105"
                        >
                            <h2 className="text-2xl font-semibold mb-2 text-hexblack font-ClashDisplay leading-relaxed">{plan.name}</h2>
                            <p className="text-hexblack text-xl font-semibold mb-4 font-ClashDisplay leading-relaxed">{plan.price}</p>
                            <p className="text-hexblack text-lg font-ClashDisplay mb-4 leading-relaxed">{plan.description}</p>
                            <ul className="list-disc list-inside text-left text-hexblack font-ClashDisplay leading-relaxed">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="mb-2">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
