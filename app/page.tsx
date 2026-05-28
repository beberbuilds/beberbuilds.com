import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MarqueeStrip from "@/components/marquee-strip";
import Services from "@/components/services";

const Projects     = dynamic(() => import("@/components/projects"));
const About        = dynamic(() => import("@/components/about"));
const Process      = dynamic(() => import("@/components/process"));
const Testimonials = dynamic(() => import("@/components/testimonials"));
const FAQ          = dynamic(() => import("@/components/faq"));
const CTABanner    = dynamic(() => import("@/components/cta-banner"));
const Contact      = dynamic(() => import("@/components/contact"));
const Footer       = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MarqueeStrip />
        <Services />
        <Projects />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
