import React from "react";

export default function MapSection() {
    return (
        <section className="w-full h-[60vh] bg-stone-200 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out relative group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-xl">
                    <span className="font-display text-xl text-terracotta">Cafe Ara</span>
                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9167733446974!2d79.86877002012053!3d6.892591632007827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bd6f12285ed%3A0x6e9a6534579d46f3!2sCafe%20Ara!5e0!3m2!1sen!2slk!4v1707923456789!5m2!1sen!2slk"
                width="100%"
                height="100%"
                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cafe Ara Location"
            />
        </section>
    );
}
