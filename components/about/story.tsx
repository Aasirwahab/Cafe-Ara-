"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
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
        <section ref={containerRef} className="py-24 px-6 max-w-5xl mx-auto text-center">
            <div className="space-y-8">
                <p className="font-display text-3xl md:text-4xl leading-relaxed text-stone-800">
                    "Every cup tells a story of <span className="text-terracotta italic">patience</span> and <span className="text-terracotta italic">heritage</span>."
                </p>
                <div className="w-24 h-1 bg-terracotta/20 mx-auto rounded-full" />
                <p className="font-body text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-loose">
                    At Cafe Ara, we believe that food is not just sustenance—it is a memory.
                    Established in 2024, our journey began with a simple desire: to bring the authentic flavors
                    of our heritage to your table, crafted with the honesty of home cooking and the refinement of modern culinary art.
                </p>
            </div>
        </section>
    );
}
