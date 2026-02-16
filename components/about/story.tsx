"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current?.children || [],
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4 h-full relative">
                    <div className="aspect-[3/4] bg-stone-200 rounded-lg translate-y-8 w-full">
                        {/* Image 1 Placeholder */}
                    </div>
                    <div className="aspect-[3/4] bg-stone-300 rounded-lg w-full">
                        {/* Image 2 Placeholder */}
                    </div>
                </div>

                {/* Text Content */}
                <div ref={textRef} className="space-y-6">
                    <h2 className="font-display text-4xl md:text-5xl text-charcoal">
                        Rooted in <span className="text-terracotta italic">Tradition</span>
                    </h2>
                    <p className="font-body text-lg text-stone-600 leading-relaxed">
                        Our journey began not in a culinary school, but in the family kitchens of Jaffna and Kerala.
                        We believe that food is a language—a way to share history, comfort, and joy.
                    </p>
                    <p className="font-body text-lg text-stone-600 leading-relaxed">
                        At Cafe Ara, we source our spices directly from farmers we know by name.
                        We roast our curry powders in-house daily, ensuring that the aroma that greets you
                        is as authentic as possible.
                    </p>
                    <div className="pt-4">
                        <blockquote className="font-display text-2xl text-terracotta border-l-4 border-gold pl-6 italic">
                            "To eat is a necessity, but to eat intelligently is an art."
                        </blockquote>
                        <cite className="block mt-2 font-subheading text-sm uppercase tracking-widest text-stone-500 not-italic">— François de La Rochefoucauld</cite>
                    </div>
                </div>
            </div>
        </section>
    );
}
