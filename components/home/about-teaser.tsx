"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTeaser() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image Parallax/Reveal
            gsap.fromTo(
                imageRef.current,
                { clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)" },
                {
                    clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
                    duration: 1.5,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            );

            // Text Stagger
            gsap.fromTo(
                textRef.current?.children || [],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Text Side */}
                <div ref={textRef} className="space-y-6 order-2 md:order-1">
                    <h2 className="font-display text-4xl md:text-5xl text-charcoal">
                        A Story of <span className="text-terracotta italic">Spice & Soul</span>
                    </h2>
                    <p className="font-body text-body text-lg leading-relaxed text-balance">
                        Cafe Ara wasn't just built; it was cultivated. Inspired by the
                        terracotta earth of Sri Lanka and the vibrant street markets of
                        India, we bring you a dining experience that honors tradition while
                        embracing modern elegance.
                    </p>
                    <p className="font-body text-body text-lg leading-relaxed text-balance">
                        From our hand-ground spices to our slow-cooked curries, every dish
                        is a tribute to the warmth of home.
                    </p>
                    <div className="pt-4">
                        <Link href="/about">
                            <Button variant="outline">Read Our Story</Button>
                        </Link>
                    </div>
                </div>

                {/* Image Side */}
                <div className="relative order-1 md:order-2">
                    <div ref={imageRef} className="aspect-[4/5] bg-stone-200 w-full relative overflow-hidden">
                        {/* Placeholder for Image */}
                        <div className="absolute inset-0 bg-terracotta/10" />
                        <div className="absolute inset-0 flex items-center justify-center text-terracotta/20 font-display text-4xl">
                            [Atmosphere Image]
                        </div>
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-golden-wheat/20 rounded-full blur-3xl z-[-1]" />
                </div>
            </div>
        </section>
    );
}
