import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const About = dynamic(() => import("@/components/About").then((m) => m.About), { ssr: true });
const Services = dynamic(() => import("@/components/Services").then((m) => m.Services), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects").then((m) => m.Projects), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs").then((m) => m.WhyChooseUs), { ssr: true });
const Process = dynamic(() => import("@/components/Process").then((m) => m.Process), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials").then((m) => m.Testimonials), { ssr: true });
const TrustBadges = dynamic(() => import("@/components/TrustBadges").then((m) => m.TrustBadges), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact").then((m) => m.Contact), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer").then((m) => m.Footer), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <TrustBadges />
      <Contact />
      <Footer />
    </main>
  );
}
