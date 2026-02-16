"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
    {
        name: "Jaffna Crab Curry",
        desc: "Wild-caught lagoon crab cooked in varied roasted spices.",
        price: "RS. 3800",
        tag: "Sri Lankan"
    },
    {
        name: "Mutton Biryani",
        desc: "Slow-cooked goat meat layered with fragrant basmati rice.",
        price: "RS. 2600",
        tag: "Indian"
    },
    {
        name: "Hot Butter Cuttlefish",
        desc: "Crispy battered cuttlefish tossed in chili garlic butter.",
        price: "RS. 2200",
        tag: "Specialty"
    }
];

export default function SignatureDishes() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current?.children || [],
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-offwhite">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="font-subheading text-terracotta uppercase tracking-[0.2em] text-sm">Our Classics</span>
                    <h2 className="font-display text-4xl md:text-5xl text-charcoal">Signature Dishes</h2>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dishes.map((dish, idx) => (
                        <div key={idx} className="group relative bg-cream p-4 pb-8 transition-transform duration-500 hover:-translate-y-2">
                            {/* Image Placeholder */}
                            <div className="aspect-[4/3] bg-stone-300 w-full mb-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                                <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-display text-lg">
                                    [Dish Image {idx + 1}]
                                </div>
                            </div>

                            <div className="space-y-3 px-2 text-center">
                                <span className="inline-block px-3 py-1 border border-forest/20 rounded-full text-[10px] font-subheading uppercase tracking-wide text-forest">{dish.tag}</span>
                                <h3 className="font-heading text-2xl text-charcoal">{dish.name}</h3>
                                <p className="font-body text-stone-muted text-sm">{dish.desc}</p>
                                <p className="font-subheading text-terracotta font-bold pt-2">{dish.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <Link href="/menu">
                        <Button variant="secondary">View Full Menu</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
