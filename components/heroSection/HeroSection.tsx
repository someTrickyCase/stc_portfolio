"use client";

import { writeCustomStore } from "@/store/customStore";
import { githubIcon, telegramIcon } from "../ui/icons";
import { getRandomInt } from "@/lib/getRandomInt";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
    const audioElementRef = useRef<HTMLAudioElement>(null);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    function toggleAudioIndicator() {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    }

    function handleClick() {
        writeCustomStore(getRandomInt(2) ? "forward" : "backward");
    }

    useEffect(() => {
        if (!audioElementRef.current) return;
        if (isAudioPlaying) audioElementRef.current.play();
        else audioElementRef.current.pause();
    }, [isAudioPlaying]);

    return (
        <div className='fullscreen center-all px-2 md:px-10 lg:px-16 xl:px-24'>
            <p className='absolute top-6 text-sm font-extralight cursor-default'>@someTrickyCase</p>

            <div
                onClick={handleClick}
                className='cursor-pointer flex flex-col w-full leading-[44px] sm:leading-[60px] md:leading-[68px] lg:leading-[78px] xl:leading-[90px]'>
                <h1 className='w-full headed-font'>/frontend</h1>
                <h2 className='pl-6'>UI/UX developer</h2>
            </div>

            <div className='flex flex-col gap-2 items-center justify-center absolute bottom-16'>
                <h3 className='roboto text-lg font-light uppercase'>Showcases</h3>
                <div className='center-all gap-4 font-base'>
                    <a href='https://artic-gallery.netlify.app'>ARTIC Gallery</a>
                    <a href='https://t.me/TroffiRu_bot'>TroffiRu Bot</a>
                </div>
            </div>

            <div className='absolute bottom-4 center-all gap-4'>
                <a href='https://t.me/snowinboots'>{telegramIcon}</a>
                <a href='https://github.com/someTrickyCase'>{githubIcon}</a>
            </div>

            <button
                onClick={toggleAudioIndicator}
                className='ml-10 flex items-center space-x-0.5 absolute top-8 left-0'>
                <audio ref={audioElementRef} className='hidden' src='/audio/surround.mp3' loop />

                {[1, 2, 3, 4].map((bar) => {
                    return (
                        <div
                            key={bar}
                            className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
                            style={{ animationDelay: `${bar * 0.6}s` }}
                        />
                    );
                })}
            </button>
        </div>
    );
}
