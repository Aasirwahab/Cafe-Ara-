"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Do you have vegetarian and vegan options?",
        answer: "Yes! A large portion of our Sri Lankan and Indian menu is naturally vegetarian. We also have dedicated vegan options clearly marked on the menu."
    },
    {
        question: "Is there parking available?",
        answer: "We have a dedicated car park for up to 15 vehicles right in front of the cafe. Street parking is also available on the side road."
    },
    {
        question: "Do you accept credit cards?",
        answer: "We accept all major credit and debit cards (Visa, Mastercard, Amex) as well as cash payments."
    },
    {
        question: "Can I host a private event?",
        answer: "Absolutely. Our upper deck is perfect for private gatherings of up to 40 guests. Please contact us via the form above or call us to discuss packages."
    },
    {
        question: "Do you serve alcohol?",
        answer: "We focus on a curated selection of non-alcoholic beverages, fresh juices, and specialty coffees. We do not serve alcohol."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-cream border-t border-terracotta/10">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-subheading text-terracotta uppercase tracking-widest text-sm">Good to Know</span>
                    <h2 className="font-display text-4xl text-charcoal mt-2">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border border-terracotta/20 rounded-lg overflow-hidden bg-white transition-colors hover:border-terracotta/40"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-heading text-lg text-charcoal">{faq.question}</span>
                                <span className="text-terracotta">
                                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <div
                                className={cn(
                                    "transition-all duration-300 ease-in-out overflow-hidden",
                                    openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <p className="px-6 pb-6 font-body text-stone-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
