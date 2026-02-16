"use client";

import React, { useEffect, useRef } from "react";
import globalGsap, { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Cinematic Reveal Sequence
            tl.fromTo(
                bgRef.current,
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2.5, ease: "power2.out" }
            )
                .fromTo(
                    textRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
                    "-=1.5"
                )
                .fromTo(
                    scrollIndicatorRef.current,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
                    "-=0.5"
                );

            // Parallax Effect on Scroll
            gsap.to(bgRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Floating Particles Animation
            gsap.utils.toArray<HTMLElement>(".floating-particle").forEach((particle, i) => {
                gsap.to(particle, {
                    y: "random(-20, 20)",
                    x: "random(-10, 10)",
                    rotation: "random(-15, 15)",
                    opacity: "random(0.3, 0.6)",
                    duration: "random(3, 6)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.2,
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
        >
            {/* Background Image */}
            <div ref={bgRef} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop"
                    alt="Warm Cafe Ambiance"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/40" />
            </div>

            {/* Floating "Spice" Particles (Decorative) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="floating-particle absolute top-1/4 left-1/4 w-2 h-2 bg-gold/40 rounded-full blur-[1px]" />
                <div className="floating-particle absolute top-1/3 right-1/4 w-3 h-3 bg-terracotta/30 rounded-full blur-[2px]" />
                <div className="floating-particle absolute bottom-1/3 left-1/3 w-1 h-1 bg-cream/50 rounded-full blur-[0px]" />
                <div className="floating-particle absolute top-1/2 right-1/3 w-2 h-2 bg-gold/20 rounded-full blur-[1px]" />
                <div className="floating-particle absolute bottom-1/4 right-1/5 w-4 h-4 bg-terracotta/20 rounded-full blur-[3px]" />
            </div>

            {/* Content */}
            <div ref={textRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8">
                <span className="inline-block py-1 px-3 border border-gold/30 rounded-full text-gold text-xs uppercase tracking-[0.2em] mb-4 backdrop-blur-sm">
                    Est. 2024
                </span>
                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-cream leading-none tracking-tight drop-shadow-2xl">
                    Taste the <span className="text-terracotta italic">Warmth</span>
                </h1>
                <p className="font-body text-lg md:text-2xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed">
                    A culinary sanctuary where every meal tells a story of tradition, spice, and soul.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
                    <Link href="/reservations">
                        <Button variant="primary" className="h-14 px-8 text-lg">Reserve a Table</Button>
                    </Link>
                    <Link href="/menu">
                        <Button variant="outline" className="h-14 px-8 text-lg text-cream border-cream/50 hover:bg-cream hover:text-charcoal transition-all">
                            Explore Menu
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div ref={scrollIndicatorRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/50">
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <ChevronDown className="animate-bounce w-5 h-5" />
            </div>
        </section>
    );
}
