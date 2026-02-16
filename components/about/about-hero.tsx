"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial Reveal
            const tl = gsap.timeline();
            tl.fromTo(
                bgRef.current,
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2, ease: "power3.inOut" }
            ).fromTo(
                textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
                "-=1"
            );

            // Parallax on Scroll
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
            className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-charcoal"
        >
            {/* Background Image */}
            <div ref={bgRef} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop"
                    alt="Cafe Ara Interior"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

            {/* Content */}
            <div ref={textRef} className="relative z-10 text-center px-6 max-w-5xl">
                <span className="block font-subheading text-terracotta-light text-sm tracking-[0.3em] uppercase mb-4">
                    Est. 2024
                </span>
                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-cream leading-none">
                    The Roots of <br />
                    <span className="italic text-terracotta">Flavor</span>
                </h1>
            </div>
        </section>
    );
}
