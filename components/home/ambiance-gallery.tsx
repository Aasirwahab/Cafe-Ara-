"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AmbianceGallery() {
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Row 1: Moves Left
            gsap.to(row1Ref.current, {
                xPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: row1Ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            // Row 2: Moves Right
            gsap.to(row2Ref.current, {
                xPercent: 10,
                ease: "none",
                scrollTrigger: {
                    trigger: row2Ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 bg-charcoal overflow-hidden transform skew-y-0">
            <div className="text-center mb-16 px-6">
                <span className="font-subheading text-gold uppercase tracking-widest text-sm">The Atmosphere</span>
                <h2 className="font-display text-4xl md:text-5xl text-cream mt-3">A Place to Breathe</h2>
            </div>

            <div className="space-y-6">
                {/* Row 1 */}
                <div ref={row1Ref} className="flex gap-4 w-[150%] -ml-[25%]">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-64 sm:h-80 w-1/4 bg-stone-800 rounded-lg overflow-hidden shrink-0 relative opacity-80 hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-display text-4xl">
                                Interior {i + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div ref={row2Ref} className="flex gap-4 w-[150%] -ml-[10%]">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-48 sm:h-64 w-1/5 bg-stone-700 rounded-lg overflow-hidden shrink-0 relative opacity-80 hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-display text-4xl">
                                Detail {i + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
