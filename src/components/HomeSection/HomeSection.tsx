import Lenis from 'lenis';

const HomeSection = () => {
    const handleScrollToAbout = () => {
        const lenis = window.lenis as Lenis;
        const aboutSection = document.querySelector('#about') as HTMLElement;
        if (aboutSection) {
            lenis.scrollTo(aboutSection);
        }
    };

    return (
        <section
            id="home"
            className="w-screen h-svh flex flex-col justify-center items-center bg-cover bg-center text-hexwhite p-4 md:p-8 lg:p-12 xl:p-16"
            style={{
                backgroundImage: `url(${'/home.webp'})`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
            <h1 className="text-5xl md:text-8xl font-bold text-center mb-4 font-ClashDisplay uppercase mt-20 z-10">
                Siła, która napędza zwycięstwo
            </h1>
            <p className="text-lg md:text-xl font-semibold text-center mb-8 font-ClashDisplay uppercase z-10">
                Dołącz do nas i poczuj, jak siła staje się Twoją pasją.
            </p>

            <button
                onClick={handleScrollToAbout}
                className=" border-2 border-hexwhite text-hexwhite p-5 rounded-full flex items-center justify-center transition-transform transform hover:scale-105 duration-300 focus:outline-none z-10"
                aria-label="Scroll down"
            >
                <img src="/double_arrow.svg" className="h-8 w-8" alt="Scroll down arrow"/>
            </button>
        </section>
    );
};

export default HomeSection;
