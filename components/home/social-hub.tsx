"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function SocialHub() {
    return (
        <section className="py-24 bg-offwhite">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <span className="font-subheading text-terracotta uppercase tracking-widest text-sm">Follow Us</span>
                    <h2 className="font-display text-4xl text-charcoal mt-2">@cafeara.lk</h2>
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-white rounded-full font-subheading text-xs uppercase tracking-wider hover:bg-terracotta hover:text-white transition-colors shadow-sm">
                        <Instagram size={16} /> Instagram
                    </Link>
                    <Link href="#" className="flex items-center gap-2 px-6 py-3 bg-white rounded-full font-subheading text-xs uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-colors shadow-sm">
                        <Facebook size={16} /> Facebook
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-96">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="group relative bg-stone-200 overflow-hidden">
                        <div className="absolute inset-0 bg-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Instagram className="text-white drop-shadow-md" size={32} />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-display text-xl pointer-events-none">
                            Post {i + 1}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
