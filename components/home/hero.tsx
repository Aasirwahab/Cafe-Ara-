"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Cinematic Reveal Sequence
            tl.fromTo(
                bgRef.current,
                { scale: 1.2, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2, ease: "power3.inOut" }
            )
                .fromTo(
                    textRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
                    "-=1" // Overlap with bg animation
                );

            // Parallax Effect on Scroll
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center"
        >
            {/* Background (Video Placeholder) */}
            <div
                ref={bgRef}
                className="absolute inset-0 bg-terracotta-dark/20 z-0"
            >
                {/* Replace with <video> or <Image> */}
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800" />
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div ref={textRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-tight">
                    Taste the Warmth <br />
                    <span className="italic font-light text-gold">of Cafe Ara</span>
                </h1>
                <p className="font-body text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
                    A culinary sanctuary where every meal tells a story.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                    <Button variant="primary">Reserve a Table</Button>
                    <Button variant="outline" className="text-cream border-cream hover:bg-cream hover:text-charcoal">
                        Explore Menu
                    </Button>
                </div>
            </div>
        </section>
    );
}
