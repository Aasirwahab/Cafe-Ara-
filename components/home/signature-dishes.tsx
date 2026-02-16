"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
    {
        name: "Jaffna Crab Curry",
        desc: "Wild-caught lagoon crab cooked in varied roasted spices.",
        price: "RS. 3800",
        tag: "Sri Lankan",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2671&auto=format&fit=crop"
    },
    {
        name: "Mutton Biryani",
        desc: "Slow-cooked goat meat layered with fragrant basmati rice.",
        price: "RS. 2600",
        tag: "Indian",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2670&auto=format&fit=crop"
    },
    {
        name: "Hot Butter Cuttlefish",
        desc: "Crispy battered cuttlefish tossed in chili garlic butter.",
        price: "RS. 2200",
        tag: "Specialty",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2670&auto=format&fit=crop"
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
                        <div key={idx} className="group relative bg-cream p-4 pb-8 transition-transform duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl rounded-xl">
                            {/* Image Placeholder */}
                            <div className="aspect-[4/3] bg-stone-200 w-full mb-6 relative overflow-hidden rounded-lg">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
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
