"use client";

import React, { useEffect, useRef } from "react";
import { Leaf, UtensilsCrossed, Heart } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        icon: Leaf,
        title: "Authenticity",
        description: "We believe in the purity of ingredients. No shortcuts, no pre-mixes. Just honest spices sourced directly from the earth.",
    },
    {
        icon: UtensilsCrossed,
        title: "Craftsmanship",
        description: "From roasting spices to plating dishes, commitment and artistry guide our hands. Every plate is a work of passion.",
    },
    {
        icon: Heart,
        title: "Warmth",
        description: "Guests. To some, we call them friends or passersby. But to us, everyone is family. We serve not just food, but love.",
    },
];

export default function Philosophy() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".philosophy-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
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
        <section ref={containerRef} className="py-24 bg-cream px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl text-charcoal">Our Philosophy</h2>
                    <p className="font-subheading text-terracotta uppercase tracking-widest text-xs mt-2">The Pillars of Cafe Ara</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="philosophy-card bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group border border-stone-100"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-offwhite text-terracotta mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                                <item.icon size={28} />
                            </div>
                            <h3 className="font-heading text-2xl text-charcoal mb-4">{item.title}</h3>
                            <p className="font-body text-stone-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
