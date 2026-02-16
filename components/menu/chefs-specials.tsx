"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const specials = [
    {
        name: "Lobster Kothu",
        desc: "A decadent twist on the street food classic. Fresh lagoon lobster wok-tossed with godamba roti, vegetables, and our signature spice blend.",
        price: "RS. 4500",
        image: "https://images.unsplash.com/photo-1599003037886-f88506183300?q=80&w=2574&auto=format&fit=crop"
    },
    {
        name: "Bamboo Biryani",
        desc: "Steamed inside natural bamboo logs to infuse an earthy aroma. Layered with tender mutton and aromatic spices.",
        price: "RS. 3200",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2574&auto=format&fit=crop"
    }
];

export default function ChefsSpecials() {
    const containerRef = useRef<HTMLSectionElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".special-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 bg-charcoal text-cream relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1 border border-gold/30 rounded-full bg-gold/10 text-gold text-xs font-subheading uppercase tracking-widest mb-4">
                    <Sparkles size={14} /> Chef's Selection
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-gold">Seasonal Specialists</h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
                {specials.map((item, i) => (
                    <div key={i} className="special-card flex flex-col md:flex-row gap-6 bg-stone-800/50 p-6 rounded-2xl border border-white/5 hover:border-gold/30 transition-colors group">
                        <div className="w-full md:w-48 h-48 bg-stone-700 rounded-lg shrink-0 overflow-hidden relative">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-heading text-2xl text-cream group-hover:text-gold transition-colors">{item.name}</h3>
                            <p className="font-body text-stone-300 mt-2 text-sm leading-relaxed">{item.desc}</p>
                            <span className="font-subheading text-gold font-bold text-lg mt-4 block">{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
