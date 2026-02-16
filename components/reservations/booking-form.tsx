"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button";
import { Calendar, User, Clock, Mail, Phone, MessageSquare } from "lucide-react";

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
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-stone-200/50">
            <div className="text-center mb-8">
                <h3 className="font-heading text-2xl text-charcoal mb-2">Secure Your Table</h3>
                <p className="font-body text-sm text-stone-muted">Bookings are essential for dinner service.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative group">
                    <div className="absolute left-4 top-3.5 text-stone-400 group-focus-within:text-terracotta transition-colors">
                        <User size={18} />
                    </div>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        aria-label="Full Name"
                        className="w-full pl-12 pr-4 py-3 bg-offwhite rounded-lg border border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-all outline-none font-body text-charcoal placeholder:text-stone-400"
                        onChange={handleChange}
                    />
                </div>

                {/* Phone */}
                <div className="relative group">
                    <div className="absolute left-4 top-3.5 text-stone-400 group-focus-within:text-terracotta transition-colors">
                        <Phone size={18} />
                    </div>
                    <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        className="w-full pl-12 pr-4 py-3 bg-offwhite rounded-lg border border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-all outline-none font-body text-charcoal placeholder:text-stone-400"
                        onChange={handleChange}
                    />
                </div>

                {/* Email */}
                <div className="relative group md:col-span-2">
                    <div className="absolute left-4 top-3.5 text-stone-400 group-focus-within:text-terracotta transition-colors">
                        <Mail size={18} />
                    </div>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        aria-label="Email Address"
                        className="w-full pl-12 pr-4 py-3 bg-offwhite rounded-lg border border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-all outline-none font-body text-charcoal placeholder:text-stone-400"
                        onChange={handleChange}
                    />
                </div>

                {/* Date */}
                <div className="relative group">
                    <div className="absolute left-4 top-3.5 text-stone-400 group-focus-within:text-terracotta transition-colors">
                        <Calendar size={18} />
                    </div>
                    <input
                        type="date"
                        name="date"
                        required
                        aria-label="Date of Reservation"
                        className="w-full pl-12 pr-4 py-3 bg-offwhite rounded-lg border border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-all outline-none font-body text-charcoal placeholder:text-stone-400 appearance-none" // appearance-none to normalize
                        onChange={handleChange}
                    />
                </div>

                {/* Time */}
                <div className="relative group">
                    <div className="absolute left-4 top-3.5 text-stone-400 group-focus-within:text-terracotta transition-colors">
                        <Clock size={18} />
                    </div>
                    <select
                        name="time"
                        required
                        aria-label="Time of Reservation"
                        className="w-full pl-12 pr-4 py-3 bg-offwhite rounded-lg border border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-all outline-none font-body text-charcoal placeholder:text-stone-400 appearance-none"
                        onChange={handleChange}
                    >
                        <option value="" disabled selected>Select Time</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                    </select>
                </div>

                {/* Guests */}
                <div className="relative group md:col-span-2">
                    <div className="absolute left-4 top-3.5 text-stone-400 group-focus-within:text-terracotta transition-colors">
                        <User size={18} />
                    </div>
                    <select
                        name="guests"
                        required
                        aria-label="Number of Guests"
                        className="w-full pl-12 pr-4 py-3 bg-offwhite rounded-lg border border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-all outline-none font-body text-charcoal placeholder:text-stone-400 appearance-none"
                        onChange={handleChange}
                        value={formData.guests}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                    </select>
                </div>

                {/* Texture/Occasion */}
                <div className="relative group md:col-span-2">
                    <div className="absolute left-4 top-3.5 text-stone-400 group-focus-within:text-terracotta transition-colors">
                        <MessageSquare size={18} />
                    </div>
                    <textarea
                        name="occasion"
                        placeholder="Special Request (optional)"
                        rows={3}
                        className="w-full pl-12 pr-4 py-3 bg-offwhite rounded-lg border border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-all outline-none font-body text-charcoal placeholder:text-stone-400 resize-none"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="pt-4 flex justify-center">
                <Button type="submit" variant="primary" className="w-full md:w-auto">Confirm Request</Button>
            </div>
        </form>
    );
}
