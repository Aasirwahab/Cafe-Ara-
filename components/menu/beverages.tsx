"use client";

import React from "react";
import { Coffee, GlassWater, Wine } from "lucide-react";

const drinks = {
    "Refreshers": [
        { name: "Passion Fruit Mojito", price: "750", desc: "Fresh passion fruit, mint, lime, soda." },
        { name: "Ginger Beer (EGB)", price: "350", desc: "Classic Sri Lankan ginger beer." },
        { name: "King Coconut", price: "250", desc: "Fresh thambili from the tree." },
    ],
    "Hot Brews": [
        { name: "Masala Chai", price: "450", desc: "Spiced tea with cardamom and cinnamon." },
        { name: "Ceylon Black Tea", price: "300", desc: "Premium BOPF served black or with milk." },
        { name: "Filter Coffee", price: "550", desc: "South Indian style drip coffee." },
    ]
};

export default function Beverages() {
    return (
        <section className="py-20 bg-cream">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-subheading text-forest uppercase tracking-widest text-sm">Thirst Quenchers</span>
                    <h2 className="font-display text-4xl text-charcoal mt-2">Beverages</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Refreshers */}
                    <div>
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-terracotta/20">
                            <GlassWater className="text-terracotta" size={24} />
                            <h3 className="font-heading text-2xl text-charcoal">Coolers & Juices</h3>
                        </div>
                        <div className="space-y-8">
                            {drinks["Refreshers"].map((drink, i) => (
                                <div key={i} className="flex justify-between items-start group">
                                    <div>
                                        <h4 className="font-subheading font-bold text-charcoal group-hover:text-terracotta transition-colors">{drink.name}</h4>
                                        <p className="font-body text-xs text-stone-500 mt-1">{drink.desc}</p>
                                    </div>
                                    <span className="font-display text-lg text-terracotta">RS. {drink.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hot Brews */}
                    <div>
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-terracotta/20">
                            <Coffee className="text-terracotta" size={24} />
                            <h3 className="font-heading text-2xl text-charcoal">Hot Brews</h3>
                        </div>
                        <div className="space-y-8">
                            {drinks["Hot Brews"].map((drink, i) => (
                                <div key={i} className="flex justify-between items-start group">
                                    <div>
                                        <h4 className="font-subheading font-bold text-charcoal group-hover:text-terracotta transition-colors">{drink.name}</h4>
                                        <p className="font-body text-xs text-stone-500 mt-1">{drink.desc}</p>
                                    </div>
                                    <span className="font-display text-lg text-terracotta">RS. {drink.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
