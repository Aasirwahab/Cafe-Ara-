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
        <section className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-charcoal">Curiosities</h2>
                <p className="font-subheading text-[10px] uppercase tracking-widest text-stone-400 mt-2">Frequently Asked Questions</p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden border border-stone-100/50 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <span className="font-heading text-lg text-charcoal/90 flex gap-4 items-center">
                                {/* Decor Icon depending on content, or just a simple bullet/icon */}
                                {index === 0 && <span className="text-terracotta text-sm">❧</span>}
                                {index === 1 && <span className="text-terracotta text-sm">✦</span>}
                                {index === 2 && <span className="text-terracotta text-sm">❧</span>}
                                {index === 3 && <span className="text-terracotta text-sm">✦</span>}
                                {index >= 4 && <span className="text-terracotta text-sm">❧</span>}
                                {faq.question}
                            </span>
                            <span className={cn(
                                "text-terracotta transform transition-transform duration-300",
                                openIndex === index ? "rotate-180" : "rotate-0"
                            )}>
                                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                            </span>
                        </button>
                        <div
                            className={cn(
                                "grid transition-all duration-300 ease-in-out",
                                openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            )}
                        >
                            <div className="overflow-hidden">
                                <p className="p-6 pt-0 font-body text-stone-500 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
