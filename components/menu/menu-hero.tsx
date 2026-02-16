"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MenuHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax
            gsap.fromTo(
                bgRef.current,
                { y: 0 },
                {
                    y: "30%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

            // Text Reveal
            gsap.fromTo(
                textRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    delay: 0.2,
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-charcoal"
        >
            {/* Background Image */}
            <div ref={bgRef} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop"
                    alt="Culinary Arts"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

            {/* Content */}
            <div ref={textRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-4">
                <span className="block font-subheading text-sm md:text-base text-gold uppercase tracking-[0.2em]">
                    A Culinary Journey
                </span>
                <h1 className="font-display text-6xl md:text-8xl text-offwhite leading-none">
                    Our <span className="text-terracotta italic">Menu</span>
                </h1>
                <p className="font-body text-lg md:text-xl text-stone-300 max-w-xl mx-auto leading-relaxed">
                    Traditional flavors, prepared with patience and passion.
                </p>
            </div>
        </section>
    );
}
