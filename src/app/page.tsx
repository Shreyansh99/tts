import Hero from "@/components/home/Hero";
import GridCollage from "@/components/home/GridCollage";
import QuickLinks from "@/components/home/QuickLinks";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <GridCollage />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}
