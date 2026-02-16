"use client";

import React from "react";
import { MoveRight } from "lucide-react";

const team = [
    {
        name: "Chef Nimal",
        role: "Head Chef",
        bio: "With over 20 years of experience in traditional Sri Lankan cuisine, bringing authentic flavors from his grandmother's kitchen.",
        image: "[Chef Image]"
    },
    {
        name: "Aarya",
        role: "Restaurant Manager",
        bio: "Ensuring every guest feels the warmth of our hospitality. Aarya curates the dining experience with meticulous detail.",
        image: "[Manager Image]"
    },
    {
        name: "Chef Kumar",
        role: "Tandoor Specialist",
        bio: "Master of the clay oven. His naan breads and kebabs are legendary for their smoky perfection.",
        image: "[Tandoor Chef Image]"
    }
];

export default function Team() {
    return (
        <section className="py-24 bg-offwhite">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="font-subheading text-terracotta uppercase tracking-widest text-sm">The Hands Behind the Taste</span>
                        <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-3">Meet the Team</h2>
                        <p className="font-body text-stone-muted mt-4 text-lg">
                            We are a family of culinary artists, united by a passion for bringing you the most authentic flavors.
                        </p>
                    </div>
                    <button className="group flex items-center gap-2 font-subheading text-charcoal uppercase tracking-widest text-xs hover:text-terracotta transition-colors">
                        Join our family <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="group relative">
                            <div className="aspect-[3/4] bg-stone-300 rounded-lg overflow-hidden relative mb-6">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-display text-lg">
                                    {member.image}
                                </div>
                            </div>
                            <h3 className="font-heading text-2xl text-charcoal">{member.name}</h3>
                            <p className="font-subheading text-terracotta text-sm uppercase tracking-wider mt-1 mb-3">{member.role}</p>
                            <p className="font-body text-stone-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
