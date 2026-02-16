"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

const socialPosts = [
    { image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop", link: "https://instagram.com" },
    { image: "https://images.unsplash.com/photo-1509482560494-4126f8225994?q=80&w=2574&auto=format&fit=crop", link: "https://instagram.com" },
    { image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop", link: "https://instagram.com" },
    { image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop", link: "https://instagram.com" },
    { image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2574&auto=format&fit=crop", link: "https://instagram.com" },
    { image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2670&auto=format&fit=crop", link: "https://instagram.com" }
];

export default function SocialHub() {
    return (
        <section className="py-24 bg-offwhite">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <span className="font-subheading text-terracotta uppercase tracking-widest text-sm">Follow Us</span>
                    <h2 className="font-display text-4xl text-charcoal mt-2">@cafeara.lk</h2>
                </div>
                <div className="flex gap-4">
                    <Link href="https://instagram.com" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white rounded-full font-subheading text-xs uppercase tracking-wider hover:bg-terracotta hover:text-white transition-colors shadow-sm">
                        <Instagram size={16} /> Instagram
                    </Link>
                    <Link href="https://facebook.com" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white rounded-full font-subheading text-xs uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-colors shadow-sm">
                        <Facebook size={16} /> Facebook
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-96">
                {socialPosts.map((post, i) => (
                    <Link
                        href={post.link}
                        key={i}
                        target="_blank"
                        className="group relative bg-stone-200 overflow-hidden cursor-pointer block h-full w-full"
                    >
                        <Image
                            src={post.image}
                            alt={`Social post ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-terracotta/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Instagram className="text-white drop-shadow-md" size={32} />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
