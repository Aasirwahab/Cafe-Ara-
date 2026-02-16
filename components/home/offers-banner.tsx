"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const offers = [
    {
        id: 1,
        title: "Avurudu Feast",
        desc: "Celebrate the New Year with our traditional spread.",
        discount: "Family Platter - RS. 8500",
        color: "bg-terracotta",
        accent: "text-white",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Weekend Kotthu",
        desc: "Unlimited Kotthu & Hopper station every Friday.",
        discount: "All You Can Eat - RS. 2500",
        color: "bg-forest",
        accent: "text-gold",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "High Tea",
        desc: "Sri Lankan savories and sweets with premium tea.",
        discount: "For Two - RS. 4000",
        color: "bg-gold",
        accent: "text-charcoal",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2574&auto=format&fit=crop"
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
                        className={`min-w-[300px] md:min-w-[400px] h-[500px] p-8 rounded-2xl relative overflow-hidden snap-center flex flex-col justify-between group transition-transform hover:-translate-y-1 duration-300`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 opacity-90 ${offer.color} mix-blend-multiply`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        <div className="relative z-10 space-y-4">
                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider text-white">
                                Limited Time
                            </span>
                            <h3 className={`font-display text-4xl ${offer.accent === 'text-charcoal' ? 'text-charcoal' : 'text-white'}`}>{offer.title}</h3>
                            <p className={`font-body text-lg ${offer.accent === 'text-charcoal' ? 'text-charcoal/90' : 'text-white/90'}`}>
                                {offer.desc}
                            </p>
                        </div>
                        <div className="relative z-10 mt-8 pt-6 border-t border-white/20 flex justify-between items-center">
                            <span className={`font-heading text-xl ${offer.accent === 'text-charcoal' ? 'text-charcoal' : 'text-white'}`}>{offer.discount}</span>
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
