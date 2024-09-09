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
            <h1 className="text-5xl md:text-8xl font-bold text-center mb-5 font-ClashDisplay uppercase mt-20 z-10">
                Siła, która napędza zwycięstwo
            </h1>
            <p className="text-lg md:text-xl font-semibold text-center mb-10 font-ClashDisplay uppercase z-10 leading-relaxed">
                Dołącz do nas i poczuj, jak siła staje się Twoją pasją.
            </p>

            <button
                onClick={handleScrollToAbout}
                className="mt-10 border-2 border-hexwhite p-5 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-hexwhite focus:outline-none z-10 group"
                aria-label="Scroll down"
            >
                <svg
                    className="h-10 w-10 transition-colors duration-300 group-hover:fill-hexblack"
                    viewBox="0 0 800.49 700.85"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                >
                    <path className="cls-1"
                          d="m11.4,141.6l366.66,333.33c12.7,11.57,32.17,11.57,44.87,0l366.66-333.33c6.93-6.3,10.9-15.27,10.9-24.67V0s-377.63,341.66-377.63,341.66c-12.7,11.5-32.03,11.5-44.73,0L.5,0v116.93c0,9.4,3.97,18.37,10.9,24.67Z"/>
                    <path className="cls-1"
                          d="m10.9,358.85l366.66,333.33c12.7,11.57,32.17,11.57,44.87,0l366.66-333.33c6.93-6.3,10.9-15.27,10.9-24.67v-116.93s-377.63,341.66-377.63,341.66c-12.7,11.5-32.03,11.5-44.73,0L0,217.26v116.93c0,9.4,3.97,18.37,10.9,24.67Z"/>
                </svg>

            </button>

        </section>
    );
};

export default HomeSection;
