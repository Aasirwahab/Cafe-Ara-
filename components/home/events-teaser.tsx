import React from "react";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function EventsTeaser() {
    return (
        <section className="py-24 bg-forest text-cream relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-6">
                    <span className="font-subheading text-gold uppercase tracking-widest text-sm">Celebrations</span>
                    <h2 className="font-display text-4xl md:text-5xl text-cream">
                        Make Memories <br /> <span className="italic text-gold">With Us</span>
                    </h2>
                    <p className="font-body text-lg text-cream/80 leading-relaxed">
                        From intimate birthday dinners to grand family reunions, Cafe Ara provides the perfect
                        backdrop for your special moments. Let us handle the details while you enjoy the company.
                    </p>
                    <ul className="space-y-2 font-body text-cream/70">
                        <li className="flex items-center gap-2">✓ Private Dining Area</li>
                        <li className="flex items-center gap-2">✓ Custom Set Menus</li>
                        <li className="flex items-center gap-2">✓ Decor & Cake Arrangements</li>
                    </ul>
                    <div className="pt-6">
                        <Link href="/reservations">
                            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-forest">
                                Inquire for Events
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="relative h-[400px] w-full">
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-stone-700/50 rounded-lg transform rotate-3" />
                    <div className="absolute bottom-0 left-4 w-3/4 h-3/4 bg-stone-600 rounded-lg transform -rotate-2 border-4 border-forest shadow-2xl flex items-center justify-center text-white/20 font-display text-3xl">
                        [Party Image]
                    </div>
                </div>
            </div>
        </section>
    );
}
