"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                bgRef.current,
                { scale: 1.1 },
                {
                    scale: 1,
                    duration: 1.5,
                    ease: "power2.out",
                }
            );

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
            className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center bg-forest"
        >
            {/* Background Image */}
            <div ref={bgRef} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=2670&auto=format&fit=crop"
                    alt="Cafe Ara Heritage"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-70"
                    priority
                />
            </div>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-0 bg-forest/40" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 mt-12 text-cream">
                <h1 className="font-display text-5xl md:text-7xl mb-4">
                    Connect with <br />
                    <span className="italic text-terracotta-light">Our Heritage</span>
                </h1>
                <p className="font-subheading text-sm uppercase tracking-widest opacity-90 text-offwhite">
                    An enduring dialogue between tradition and hospitality
                </p>
            </div>
        </section>
    );
}
