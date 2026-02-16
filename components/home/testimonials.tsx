"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Food Blogger",
        content: "The Jaffna Crab Curry is a revelation. I've traveled all over Sri Lanka, and this takes me right back to the northern coast. Absolutely authentic and full of soul.",
        rating: 5,
    },
    {
        id: 2,
        name: "David Chen",
        role: "Regular Guest",
        content: "Cafe Ara has become our Friday night ritual. The ambiance is unmatched—so calm and earthy. And the staff treats you like family.",
        rating: 5,
    },
    {
        id: 3,
        name: "Priya De Silva",
        role: "Local Guide",
        content: "A hidden gem in Colombo. The fusion of traditional flavors with modern presentation is just perfect. Highly recommend the Watalappam for dessert!",
        rating: 5,
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-cream relative overflow-hidden">
            {/* Background Decorative Quote */}
            <div className="absolute top-10 left-10 text-terracotta/5 pointer-events-none">
                <Quote size={300} />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <span className="font-subheading text-terracotta uppercase tracking-widest text-sm">Guest Love</span>

                <div className="mt-12 min-h-[300px] relative">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.id}
                            className={cn(
                                "absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out",
                                i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                            )}
                        >
                            <div className="flex gap-1 text-gold mb-6">
                                {Array.from({ length: t.rating }).map((_, idx) => <Star key={idx} fill="currentColor" size={20} />)}
                            </div>
                            <p className="font-display text-2xl md:text-4xl text-charcoal leading-relaxed italic">
                                "{t.content}"
                            </p>
                            <div className="mt-8">
                                <cite className="font-heading text-xl not-italic text-terracotta">{t.name}</cite>
                                <p className="font-subheading text-xs text-stone-500 uppercase tracking-widest mt-1">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                i === active ? "bg-terracotta w-6" : "bg-terracotta/20 hover:bg-terracotta/50"
                            )}
                            aria-label={`View testimonial ${i + 1}`}
                            title={`View testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
