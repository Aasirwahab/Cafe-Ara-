import Team from "@/components/about/team";
import Community from "@/components/about/community";
import Story from "@/components/about/story";
import AboutHero from "@/components/about/about-hero";
import Philosophy from "@/components/about/philosophy";

export const metadata = {
    title: "About Us | Cafe Ara",
    description: "The story behind Cafe Ara's authentic cuisine.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-offwhite">
            <AboutHero />

            <Story />

            <Philosophy />

            <Team />

            <Community />

            {/* CTA */}
            <section className="py-24 text-center">
                <h2 className="font-display text-5xl md:text-6xl text-charcoal mb-8">Be Part of Our Story</h2>
                <p className="font-body text-stone-500 max-w-lg mx-auto mb-8">
                    Whether for a long lunch or an evening candlelight, there is a place waiting for you at our table.
                </p>
                {/* Add standard button or link here if needed */}
            </section>
        </main>
    );
}
