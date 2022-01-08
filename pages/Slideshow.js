/** @format */

import Image from "next/image";
import React, { useState, useEffect } from "react";

const slideshow = () => {
    const images = ["e-waste-1.jpg", "e-waste-2.jpg", "e-waste-3.jpg"];
    const [index, setIndex] = useState(0);
    const [index1, setIndex1] = useState(1);

    const [transL, setTransL] = useState(false);
    const [transR, setTransR] = useState(false);

    useEffect(() => {
        if (transR) {
            setTimeout(() => {
                setTransR(false);
            }, 800);
        }
        if (transL) {
            setTimeout(() => {
                setTransL(false);
                setIndex((index + 1) % images.length);
                setIndex1((index1 + 1) % images.length);
            }, 800);
        }
    }, [transL]);

    const handlePrev = () => {
        setTransR(true);
        setTransL(false);

        const nextIndex = index - 1;
        const nextIndex1 = index1 - 1;

        if (nextIndex < 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(nextIndex);
        }
        if (nextIndex1 < 0) {
            setIndex1(images.length - 1);
        } else {
            setIndex1(nextIndex1);
        }
    };
    const handleNext = () => {
        setTransL(true);
        setTransR(false);
    };

    return (
        <>
            <div className="sm:flex hidden justify-center space-x-4 mt-20 mb-40">
                <button className="h-auto w-10 bg-transparent font-extrabold text-3xl text-white" onClick={handlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <div className="relative w-3/4 h-[500px] overflow-hidden rounded-xl">
                    <img src={images[index]} alt="" className="absolute object-contain z-20 w-full h-full p-4" className={transL ? "transition duration-500 ease-linear tranform -translate-x-full" : transR ? "animate-slideL" : ""} />
                    <img src={images[index1]} alt="" className="absolute object-contain z-0 w-full h-full p-4" className={transL ? "animate-slideR" : transR ? "transition duration-500 ease-linear tranform translate-x-full" : ""} />
                </div>
                <button className="h-auto w-10 bg-transparent font-extrabold text-3xl text-white" id="scr" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default slideshow;
