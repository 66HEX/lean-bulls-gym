"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import LogoCenter from "/logo-preloader/logo-center.png";
import LogoTop from "/logo-preloader/logo-top.png";
import LogoBottom from "/logo-preloader/logo-bottom.png";

const Preloader: React.FC = () => {
    useEffect(() => {
        const logoCenter = document.querySelector(".logo-center") as HTMLElement;
        const logoTop = document.querySelector(".logo-top") as HTMLElement;
        const logoBottom = document.querySelector(".logo-bottom") as HTMLElement;

        // Initial setup for the logos
        if (logoCenter) {
            logoCenter.style.transform = 'scale(0)';
            logoCenter.style.opacity = '0';
        }

        if (logoTop) {
            logoTop.style.transform = 'scale(0)';
            logoTop.style.opacity = '0';
        }

        if (logoBottom) {
            logoBottom.style.transform = 'scale(0)';
            logoBottom.style.opacity = '0';
        }

        logoCenter?.offsetHeight;  // Forces a reflow

        // Create GSAP timeline
        const tl = gsap.timeline({ paused: false });

        tl
            // Center logo animation
            .to({}, { duration: 0.2 }) // Short delay before the center logo
            .to(".logo-center", {
                duration: 0.5,
                scale: 1,
                opacity: 1,
                ease: "power3.out",
            })

            // Top logo animation
            .to({}, { duration: 0.2 }) // Short delay before top logo
            .to(".logo-top", {
                duration: 0.5,
                scale: 1,
                opacity: 1,
                ease: "power3.out",
            })

            // Bottom logo animation
            .to({}, { duration: 0.2 }) // Short delay before bottom logo
            .to(".logo-bottom", {
                duration: 0.5,
                scale: 1,
                opacity: 1,
                ease: "power3.out",
            })

            .to({}, { duration: 0.5 }) // Pause after bottom logo appears
            .to([".logo-center", ".logo-top", ".logo-bottom"], {
                duration: 0.5,
                scale: 0,
                opacity: 0,
                ease: "power3.in",
            })

            .to("#preloader", {
                duration: 0.6,
                opacity: 0,
                ease: "power2.out",
                onComplete: () => {
                    const preloader = document.getElementById("preloader");
                    if (preloader) {
                        preloader.style.visibility = 'hidden';
                        preloader.style.pointerEvents = 'none';
                    }
                }
            });

        tl.play();
    }, []);

    return (
        <div>
            <div
                id="preloader"
                className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-svh z-[100] bg-hexblack"
            >
                {/* Top Logo */}
                <img src={LogoTop} className="logo-top opacity-0" alt="Logo Top" height={300} width={300}/>

                {/* Center Logo */}
                <img src={LogoCenter} className="logo-center opacity-0" alt="Logo Center" height={250} width={250}/>

                {/* Bottom Logo */}
                <img src={LogoBottom} className="logo-bottom opacity-0" alt="Logo Bottom" height={250} width={250}/>
            </div>
        </div>
    );
};

export default Preloader;
