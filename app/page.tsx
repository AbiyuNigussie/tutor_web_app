import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Intro from "@/components/Intro";
import TwoCards from "@/components/TwoCards";
import ProgramHighlights from "@/components/ProgramHighlights";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Header />
      <Hero
        title="Empowering Excellence through Training and Consulting"
        description="Transform your organization with expert-led training programs and strategic consulting designed to accelerate growth, enhance performance, and drive sustainable success in today&#39;s competitive landscape."
      />
      <TrustedBy />
      <Intro
        title="Comprehensive Training and Consulting Solutions Tailored to Your Needs"
        blurb="Our proven methodologies and expert guidance help organizations unlock their full potential through strategic development and targeted skill enhancement."
      />
      <TwoCards />
      <ProgramHighlights />
      <FeaturedPrograms />
      <WhyChoose />
      <CTA />
      <Newsletter />
      <Footer />
    </main>
  );
}
