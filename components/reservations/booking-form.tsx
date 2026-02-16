"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        occasion: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Connect to backend
        console.log("Reservation Submitted:", formData);
        alert("Reservation functionality coming soon!");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2 text-center md:text-left">
                <h3 className="font-display text-3xl text-charcoal">Your Details</h3>
                <p className="font-body text-sm text-stone-500">Please provide your contact information so we can confirm your reservation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {/* Name */}
                <div className="group relative z-0 w-full mb-2">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block py-2.5 px-0 w-full text-lg font-body text-charcoal bg-transparent border-0 border-b-2 border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-terracotta peer transition-colors"
                        placeholder=" "
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="name" className="peer-focus:font-heading absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terracotta peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                </div>

                {/* Phone */}
                <div className="group relative z-0 w-full mb-2">
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="block py-2.5 px-0 w-full text-lg font-body text-charcoal bg-transparent border-0 border-b-2 border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-terracotta peer transition-colors"
                        placeholder=" "
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="phone" className="peer-focus:font-heading absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terracotta peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                </div>

                {/* Email */}
                <div className="group relative z-0 w-full mb-2 md:col-span-2">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-lg font-body text-charcoal bg-transparent border-0 border-b-2 border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-terracotta peer transition-colors"
                        placeholder=" "
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="email" className="peer-focus:font-heading absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terracotta peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                </div>

                {/* Date */}
                <div className="group relative z-0 w-full mb-2">
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="block py-2.5 px-0 w-full text-lg font-body text-charcoal bg-transparent border-0 border-b-2 border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-terracotta peer transition-colors min-h-[50px]"
                        placeholder=" "
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="date" className="peer-focus:font-heading absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terracotta peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
                </div>

                {/* Time */}
                <div className="group relative z-0 w-full mb-2">
                    <select
                        name="time"
                        id="time"
                        className="block py-2.5 px-0 w-full text-lg font-body text-charcoal bg-transparent border-0 border-b-2 border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-terracotta peer transition-colors"
                        required
                        onChange={handleChange}
                    >
                        <option value="" disabled selected className="text-stone-400"></option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                    </select>
                    <label htmlFor="time" className="peer-focus:font-heading absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terracotta peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Time</label>
                </div>

                {/* Guests */}
                <div className="group relative z-0 w-full mb-2 md:col-span-2">
                    <select
                        name="guests"
                        id="guests"
                        className="block py-2.5 px-0 w-full text-lg font-body text-charcoal bg-transparent border-0 border-b-2 border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-terracotta peer transition-colors"
                        required
                        onChange={handleChange}
                        value={formData.guests}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                    </select>
                    <label htmlFor="guests" className="peer-focus:font-heading absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terracotta peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Party Size</label>
                </div>

                {/* Occasion */}
                <div className="group relative z-0 w-full mb-2 md:col-span-2">
                    <textarea
                        name="occasion"
                        id="occasion"
                        rows={2}
                        className="block py-2.5 px-0 w-full text-lg font-body text-charcoal bg-transparent border-0 border-b-2 border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-terracotta peer transition-colors resize-none"
                        placeholder=" "
                        onChange={handleChange}
                    />
                    <label htmlFor="occasion" className="peer-focus:font-heading absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terracotta peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Special Requests (Allergies, Occasions)</label>
                </div>
            </div>

            <div className="pt-8 flex justify-end">
                <Button type="submit" variant="primary" className="w-full md:w-auto px-8 py-4 text-sm font-subheading tracking-widest uppercase">
                    Confirm Reservation
                </Button>
            </div>
        </form>
    );
}
