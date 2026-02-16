"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const interiorImages = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2547&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=2666&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2670&auto=format&fit=crop"
];

const detailImages = [
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507133750069-b6d338dd0974?q=80&w=2576&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2678&auto=format&fit=crop"
];

export default function AmbianceGallery() {
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Row 1: Moves Left
            gsap.to(row1Ref.current, {
                xPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: row1Ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            // Row 2: Moves Right
            gsap.to(row2Ref.current, {
                xPercent: 10,
                ease: "none",
                scrollTrigger: {
                    trigger: row2Ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 bg-charcoal overflow-hidden transform skew-y-0">
            <div className="text-center mb-16 px-6">
                <span className="font-subheading text-gold uppercase tracking-widest text-sm">The Atmosphere</span>
                <h2 className="font-display text-4xl md:text-5xl text-cream mt-3">A Place to Breathe</h2>
            </div>

            <div className="space-y-6">
                {/* Row 1 */}
                <div ref={row1Ref} className="flex gap-4 w-[150%] -ml-[25%]">
                    {interiorImages.map((src, i) => (
                        <div key={i} className="h-64 sm:h-80 w-1/4 bg-stone-800 rounded-lg overflow-hidden shrink-0 relative opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-[1.02] transform transition-transform">
                            <Image
                                src={src}
                                alt={`Interior ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="25vw"
                            />
                            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div ref={row2Ref} className="flex gap-4 w-[150%] -ml-[10%]">
                    {detailImages.map((src, i) => (
                        <div key={i} className="h-48 sm:h-64 w-1/5 bg-stone-700 rounded-lg overflow-hidden shrink-0 relative opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-[1.02] transform transition-transform">
                            <Image
                                src={src}
                                alt={`Detail ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="20vw"
                            />
                            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
