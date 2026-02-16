"use client";

import React from "react";

export default function ContactForm() {
    return (
        <div className="p-8 md:p-16 bg-white h-full flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">Inquire Within</h2>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-stone-400 font-subheading">Full Name</label>
                        <input
                            type="text"
                            className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-terracotta transition-colors font-body text-charcoal bg-transparent placeholder-stone-300"
                            placeholder="Elias Thorne"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-stone-400 font-subheading">Email Address</label>
                        <input
                            type="email"
                            className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-terracotta transition-colors font-body text-charcoal bg-transparent placeholder-stone-300"
                            placeholder="elias@heritage.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject-select" className="text-xs uppercase tracking-widest text-stone-400 font-subheading">Subject</label>
                    <div className="relative">
                        <select
                            id="subject-select"
                            title="Inquiry Subject"
                            aria-label="Inquiry Subject"
                            className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-terracotta transition-colors font-body text-charcoal bg-transparent appearance-none rounded-none cursor-pointer"
                        >
                            <option>Dining Experience Inquiry</option>
                            <option>Private Event</option>
                            <option>Press & Media</option>
                            <option>Other</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                            {/* Chevron Icon */}
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-stone-400 font-subheading">Message</label>
                    <textarea
                        className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-terracotta transition-colors font-body text-charcoal bg-transparent h-24 resize-none placeholder-stone-300"
                        placeholder="How may we assist you?"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="mt-8 bg-terracotta hover:bg-terracotta-dark text-white font-subheading uppercase tracking-widest text-xs py-4 px-8 rounded-full transition-all duration-500 shadow-md hover:shadow-lg w-full md:w-auto"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
