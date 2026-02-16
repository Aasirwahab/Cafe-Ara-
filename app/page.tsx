import Hero from "@/components/home/hero";
import OffersBanner from "@/components/home/offers-banner";
import AboutTeaser from "@/components/home/about-teaser";
import SignatureDishes from "@/components/home/signature-dishes";
import AmbianceGallery from "@/components/home/ambiance-gallery";
import Testimonials from "@/components/home/testimonials";
import EventsTeaser from "@/components/home/events-teaser";
import SocialHub from "@/components/home/social-hub";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <OffersBanner />
      <AboutTeaser />
      <SignatureDishes />
      <AmbianceGallery />
      <Testimonials />
      <EventsTeaser />
      <SocialHub />
    </main>
  );
}
