"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = Array.from({ length: 9 }).map((_, i) => i + 1);

export default function GalleryGrid() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                containerRef.current?.children || [],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
            {images.map((id, index) => (
                <div
                    key={id}
                    className={`relative overflow-hidden rounded-lg bg-stone-200 group ${index % 3 === 0 ? "md:col-span-2 md:row-span-2 md:h-[616px]" : ""}`}
                >
                    <div className="absolute inset-0 bg-terracotta/10 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-display text-2xl">
                        Image {id}
                    </div>
                </div>
            ))}
        </div>
    );
}
