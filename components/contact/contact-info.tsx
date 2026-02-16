import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
    return (
        <div className="p-8 md:p-16 bg-cream h-full flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-10">Find Us</h2>

            <div className="space-y-10">
                <div className="flex gap-6 items-start group">
                    <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta shrink-0 mt-1">
                        <MapPin size={18} />
                    </div>
                    <div>
                        <span className="block font-subheading text-[10px] uppercase tracking-widest text-terracotta mb-1">The Heritage House</span>
                        <p className="font-body text-stone-600 leading-relaxed group-hover:text-charcoal transition-colors">
                            123 Heritage Lane, Old Town District<br />
                            Istanbul, Turkey
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 items-start group">
                    <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta shrink-0 mt-1">
                        <Phone size={18} />
                    </div>
                    <div>
                        <span className="block font-subheading text-[10px] uppercase tracking-widest text-terracotta mb-1">Direct Line</span>
                        <p className="font-body text-stone-600 leading-relaxed group-hover:text-charcoal transition-colors">
                            +90 212 555 0198
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 items-start group">
                    <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta shrink-0 mt-1">
                        <Mail size={18} />
                    </div>
                    <div>
                        <span className="block font-subheading text-[10px] uppercase tracking-widest text-terracotta mb-1">Digital Pigeons</span>
                        <p className="font-body text-stone-600 leading-relaxed group-hover:text-charcoal transition-colors">
                            concierge@cafeara.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
