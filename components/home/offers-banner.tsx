"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const offers = [
    {
        id: 1,
        title: "Avurudu Feast",
        desc: "Celebrate the New Year with our traditional spread.",
        discount: "Family Platter - RS. 8500",
        color: "bg-terracotta",
        accent: "text-white"
    },
    {
        id: 2,
        title: "Weekend Kotthu",
        desc: "Unlimited Kotthu & Hopper station every Friday.",
        discount: "All You Can Eat - RS. 2500",
        color: "bg-forest",
        accent: "text-gold"
    },
    {
        id: 3,
        title: "High Tea",
        desc: "Sri Lankan savories and sweets with premium tea.",
        discount: "For Two - RS. 4000",
        color: "bg-gold",
        accent: "text-charcoal"
    }
];

export default function OffersBanner() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Optional: Auto-scroll or draggable logic could go here
        const ctx = gsap.context(() => {
            gsap.from(scrollContainerRef.current?.children || [], {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: scrollContainerRef.current,
                    start: "top 80%"
                }
            });
        }, scrollContainerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-20 bg-cream border-b border-terracotta/10">
            <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
                <div>
                    <span className="font-subheading text-terracotta uppercase tracking-widest text-sm">Festivals & Offers</span>
                    <h2 className="font-display text-4xl text-charcoal mt-2">Happening Now</h2>
                </div>
                <div className="hidden md:block">
                    {/* Navigation arrows could go here */}
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-8 px-6 max-w-7xl mx-auto scrollbar-hide snap-x"
            >
                {offers.map((offer) => (
                    <div
                        key={offer.id}
                        className={`min-w-[300px] md:min-w-[400px] p-8 rounded-2xl ${offer.color} ${offer.accent} snap-center flex flex-col justify-between group transition-transform hover:-translate-y-1 duration-300`}
                    >
                        <div className="space-y-4">
                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider">
                                Limited Time
                            </span>
                            <h3 className="font-display text-3xl">{offer.title}</h3>
                            <p className={`font-body text-lg opacity-90 ${offer.color === 'bg-gold' ? 'text-charcoal' : 'text-white/80'}`}>
                                {offer.desc}
                            </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/20 flex justify-between items-center">
                            <span className="font-heading text-xl">{offer.discount}</span>
                            <Button variant={offer.color === 'bg-gold' ? 'primary' : 'outline'} className={offer.color === 'bg-gold' ? '' : 'border-white text-white hover:bg-white hover:text-charcoal'}>
                                Book Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
