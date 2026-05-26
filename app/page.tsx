import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustedBrands from "@/components/trusted-brands";
import MarqueeStrip from "@/components/marquee-strip";
import Stats from "@/components/stats";
import Services from "@/components/services";
import Projects from "@/components/projects";
import About from "@/components/about";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import CTABanner from "@/components/cta-banner";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBrands />
        <MarqueeStrip />
        <Stats />
        <Services />
        <Projects />
        <About />
        <Process />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
