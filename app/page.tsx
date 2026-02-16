import Hero from "@/components/home/hero";
import AboutTeaser from "@/components/home/about-teaser";
import SignatureDishes from "@/components/home/signature-dishes";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutTeaser />
      <SignatureDishes />
    </div>
  );
}
