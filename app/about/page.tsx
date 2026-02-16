import React from "react";
import Story from "@/components/about/story";

export const metadata = {
    title: "About Us | Cafe Ara",
    description: "The story behind Cafe Ara's authentic cuisine.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-offwhite pt-32">
            <div className="text-center mb-16 px-6">
                <h1 className="font-display text-5xl md:text-7xl text-terracotta">Our Story</h1>
            </div>
            <Story />

            {/* Philosophy Section */}
            <section className="bg-terracotta text-cream py-24 px-6 text-center mt-12">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h3 className="font-display text-4xl">Honest Food, Warm Hearts</h3>
                    <p className="font-body text-xl leading-relaxed opacity-90">
                        We believe in the power of a shared meal. Our philosophy is simple: use the best ingredients,
                        honor traditional methods, and serve every dish with a genuine smile.
                    </p>
                </div>
            </section>
        </div>
    );
}
