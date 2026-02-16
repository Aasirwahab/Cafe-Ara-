import ChefsSpecials from "@/components/menu/chefs-specials";
import Beverages from "@/components/menu/beverages";
import MenuGrid from "@/components/menu/menu-grid";

export const metadata = {
    title: "Menu | Cafe Ara",
    description: "Explore our authentic Sri Lankan and Indian cuisine.",
};

export default function MenuPage() {
    return (
        <main className="bg-cream min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16 space-y-4">
                <span className="font-subheading text-terracotta uppercase tracking-widest text-sm">Culinary Journey</span>
                <h1 className="font-display text-5xl md:text-6xl text-charcoal">Our Menu</h1>
                <p className="font-body text-lg text-stone-muted max-w-2xl mx-auto">
                    A curated selection of traditional flavors, prepared with patience and passion.
                </p>
            </div>

            <ChefsSpecials />

            <div className="py-20">
                <MenuGrid />
            </div>

            <Beverages />
        </main>
    );
}
