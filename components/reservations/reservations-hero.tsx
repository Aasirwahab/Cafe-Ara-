"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ReservationsHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax for background
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
            className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center bg-charcoal"
        >
            {/* Background Image */}
            <div ref={bgRef} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop"
                    alt="Fine Dining Table Setting"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

            {/* Content */}
            <div ref={textRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
                <span className="block font-subheading text-sm md:text-base text-gold uppercase tracking-[0.2em]">
                    An Unforgettable Experience
                </span>
                <h1 className="font-display text-6xl md:text-8xl text-offwhite leading-none">
                    Reserve Your <br /> <span className="text-terracotta italic">Table</span>
                </h1>
                <p className="font-body text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
                    Join us for an evening of culinary artistry and warm hospitality.
                    We recommend booking 2 weeks in advance for weekend service.
                </p>
            </div>
        </section>
    );
}
