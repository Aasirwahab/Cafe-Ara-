"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import Button from "@/components/ui/button";

export default function PrivateDining() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-cream text-charcoal overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Image Composition */}
                <div className="relative h-[500px] w-full hidden md:block group">
                    <div className="absolute inset-0 z-10">
                        <Image
                            src="https://images.unsplash.com/photo-1519671482538-30f9807030fa?q=80&w=2670&auto=format&fit=crop"
                            alt="Private Dining Room"
                            fill
                            className="object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-full h-full border border-terracotta/30 rounded-sm z-0" />
                </div>

                {/* Content */}
                <div ref={contentRef} className="space-y-8">
                    <div className="space-y-4">
                        <span className="font-subheading text-terracotta uppercase tracking-widest text-sm">Celebrations & Events</span>
                        <h2 className="font-display text-5xl md:text-6xl text-charcoal">
                            Private <span className="italic text-terracotta">Dining</span>
                        </h2>
                    </div>

                    <p className="font-body text-lg text-stone-600 leading-relaxed">
                        Host your next intimate gathering or grand celebration in one of our exclusive private dining spaces.
                        From custom menus curated by our executive chef to personalized service, we ensure every detail is perfect.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 border border-stone-200 rounded-lg hover:border-terracotta/50 transition-colors">
                            <div className="mt-1 min-w-fit">
                                <span className="font-heading text-lg text-terracotta">The Arra Room</span>
                            </div>
                            <div>
                                <p className="font-body text-stone-600 text-sm">Seating for up to 14 guests. Intimate, enclosed, perfect for family dinners.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 border border-stone-200 rounded-lg hover:border-terracotta/50 transition-colors">
                            <div className="mt-1 min-w-fit">
                                <span className="font-heading text-lg text-terracotta">The Garden Terrace</span>
                            </div>
                            <div>
                                <p className="font-body text-stone-600 text-sm">Seating for up to 40 guests. Open-air, lush greenery, ideal for cocktail parties.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <a href="mailto:events@cafeara.lk" className="inline-block">
                            <Button variant="outline" className="group">
                                Inquire for Events <MoveRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
