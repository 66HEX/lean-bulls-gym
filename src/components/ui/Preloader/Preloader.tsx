import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preloader: React.FC = () => {
    const [width, setWidth] = useState<number>(0);
    const [animationComplete, setAnimationComplete] = useState<boolean>(false);

    useEffect(() => {
        const bar = document.getElementById("barconfrm");
        const percentElement = document.getElementById("percent");
        const preloader = document.getElementById("preloader");

        if (!bar || !percentElement || !preloader) return;

        let id: number; // Change the type to number

        const frame = () => {
            if (width >= 100) {
                clearInterval(id);
                setAnimationComplete(true);
            } else {
                setWidth(prevWidth => {
                    const newWidth = prevWidth + 1;
                    bar.style.width = newWidth + "%";
                    percentElement.innerHTML = newWidth + "%";
                    return newWidth;
                });
            }
        };

        const move = () => {
            id = window.setInterval(frame, 10); // Use window.setInterval
        };

        const tll = gsap.timeline({ paused: true });

        tll.to(
            "#bar",
            { scale: 0, duration: 0.3, ease: "power2.out" }
        );
        tll.to(
            "#percent",
            { scale: 0, duration: 0.3, ease: "power2.out" }
        );

        tll.to("#preloader", {
            duration: 0.5,
            opacity: 0,
            ease: "power2.out",
            onComplete: () => {
                if (preloader) {
                    preloader.style.visibility = 'hidden';
                    preloader.style.pointerEvents = 'none';
                }
            }
        });

        move();

        if (animationComplete) {
            tll.play();
        }

        return () => clearInterval(id);
    }, [width, animationComplete]);

    return (
        <div>
            <div
                id="preloader"
                className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-svh z-[100] bg-hexblack"
            >
                <div
                    id="bar"
                    className="w-3/5 md:w-2/5 mt-10"
                >
                    <div
                        id="barconfrm"
                        className="w-0 bg-hexwhite h-1"
                    ></div>
                </div>
                <div
                    id="percent"
                    className="text-hexwhite font-ClashDisplay mt-5"
                >
                    0%
                </div>
            </div>
        </div>
    );
};

export default Preloader;
