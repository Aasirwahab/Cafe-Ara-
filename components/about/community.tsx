"use client";

import React from "react";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function Community() {
    return (
        <section className="py-24 bg-forest text-cream relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 mt-8">
                            <div className="h-48 bg-stone-600 rounded-lg w-full flex items-center justify-center text-white/20">[Event 1]</div>
                            <div className="h-64 bg-stone-700 rounded-lg w-full flex items-center justify-center text-white/20">[Event 2]</div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-64 bg-stone-700 rounded-lg w-full flex items-center justify-center text-white/20">[Event 3]</div>
                            <div className="h-48 bg-stone-600 rounded-lg w-full flex items-center justify-center text-white/20">[Event 4]</div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                    <span className="font-subheading text-gold uppercase tracking-widest text-sm">Community</span>
                    <h2 className="font-display text-4xl md:text-5xl text-cream">
                        More Than Just <br /> <span className="text-gold italic">A Cafe</span>
                    </h2>
                    <p className="font-body text-lg text-cream/80 leading-relaxed">
                        Cafe Ara is a gathering place. From weekend markets featuring local artisans to intimate poetry nights and festive celebrations, we are proud to be a vibrant part of our neighborhood.
                    </p>
                    <div className="pt-4">
                        <Link href="/contact">
                            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-forest">
                                Host Your Event
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
