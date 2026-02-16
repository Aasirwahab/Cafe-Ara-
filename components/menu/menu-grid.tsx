"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Sri Lankan", "Indian", "Noodles", "Beverages", "Desserts"];

const menuItems = [
    { id: 1, name: "Jaffna Crab Curry", category: "Sri Lankan", price: "RS. 3800", desc: "Wild-caught lagoon crab, roasted spices, murunga leaves.", spice: 3, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2671&auto=format&fit=crop" },
    { id: 2, name: "Mutton Biryani", category: "Indian", price: "RS. 2600", desc: "Goat meat, aromatic basmati, saffron, mint raita.", spice: 2, image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2574&auto=format&fit=crop" },
    { id: 3, name: "Black Mutton Curry", category: "Sri Lankan", price: "RS. 2400", desc: "Slow-cooked mutton in roasted coconut paste.", spice: 3, image: "https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=2670&auto=format&fit=crop" },
    { id: 4, name: "Butter Chicken", category: "Indian", price: "RS. 1800", desc: "Tandoori chicken, creamy tomato gravy, fenugreek.", spice: 1, image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=2674&auto=format&fit=crop" },
    { id: 5, name: "Seafood Kothu", category: "Sri Lankan", price: "RS. 1900", desc: "Chopped roti, mixed seafood, egg, vegetables, gravy.", spice: 2, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2672&auto=format&fit=crop" },
    { id: 6, name: "Garlic Prawn Noodles", category: "Noodles", price: "RS. 2100", desc: "Hand-pulled noodles, garlic butter prawns, chilli flakes.", spice: 2, image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2670&auto=format&fit=crop" },
    { id: 7, name: "Mango Lassi", category: "Beverages", price: "RS. 800", desc: "Fresh alphonso mango, yogurt, cardamom.", spice: 0, image: "https://images.unsplash.com/photo-1606277083073-7c372b6b0266?q=80&w=2574&auto=format&fit=crop" },
    { id: 8, name: "Watalappam", category: "Desserts", price: "RS. 600", desc: "Coconut custard, jaggery, cashew nuts, spices.", spice: 0, image: "https://images.unsplash.com/photo-1616031036688-662580795493?q=80&w=2670&auto=format&fit=crop" },
];

export default function MenuGrid() {
    const [activeCategory, setActiveCategory] = useState("All");
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement>(null);

    const filteredItems = activeCategory === "All"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    // Animate items when category changes
    useEffect(() => {
        if (!itemsRef.current) return;

        // Clear previous animations/state if needed

        const ctx = gsap.context(() => {
            // Simple fade in for now to avoid layout thrashing
            gsap.fromTo(
                itemsRef.current!.children,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: "power2.out",
                    overwrite: true
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [activeCategory]);

    return (
        <div ref={containerRef} className="max-w-7xl mx-auto px-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 sticky top-24 z-30 py-4 bg-cream/95 backdrop-blur-sm -mx-6 px-6 border-b border-stone-200/50">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                            "px-6 py-2 rounded-full font-subheading text-sm uppercase tracking-wide transition-all duration-300 border",
                            activeCategory === cat
                                ? "bg-terracotta text-white border-terracotta shadow-md"
                                : "bg-transparent text-stone-muted border-transparent hover:border-terracotta/30 hover:text-terracotta"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div ref={itemsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 pb-20">
                {filteredItems.map((item) => (
                    <div key={item.id} className="group flex flex-col sm:flex-row gap-6 items-start p-6 rounded-2xl hover:bg-white transition-colors duration-300 border border-transparent hover:border-stone-100 hover:shadow-sm">
                        {/* Image Placeholder */}
                        <div className="w-full sm:w-32 h-32 bg-stone-200 rounded-lg shrink-0 overflow-hidden relative self-start ring-1 ring-stone-900/5">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-forest/5 group-hover:bg-transparent transition-colors" />
                        </div>

                        <div className="flex-1 w-full space-y-2">
                            <div className="flex justify-between items-baseline border-b border-dashed border-stone-300 pb-2">
                                <h3 className="font-heading text-xl text-charcoal group-hover:text-terracotta transition-colors">{item.name}</h3>
                                <span className="font-subheading text-terracotta font-bold text-lg whitespace-nowrap ml-4">{item.price}</span>
                            </div>
                            <p className="font-body text-stone-muted text-sm leading-relaxed pt-1">{item.desc}</p>
                            <div className="flex gap-2 pt-2">
                                {item.spice > 0 && (
                                    <div className="flex items-center gap-0.5" title={`Spice Level: ${item.spice}`}>
                                        {Array.from({ length: item.spice }).map((_, i) => (
                                            <span key={i} className="text-xs">🌶️</span>
                                        ))}
                                    </div>
                                )}
                                {item.spice === 0 && <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider py-0.5">Mild</span>}
                            </div>
                        </div>
                    </div>
                ))}

                {filteredItems.length === 0 && (
                    <div className="col-span-full text-center py-20 text-stone-400 font-body italic">
                        No items found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
