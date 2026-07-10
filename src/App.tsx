import { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import Reservation from "@/components/sections/Reservation";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ParticleField from "@/components/ui/ParticleField";

const LoadingScreen = lazy(() => import("@/components/sections/LoadingScreen"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Best Unisex Salon in Barasat, Kolkata | Glass Shine Salon & Academy</title>
        <meta name="description" content="Award-winning unisex salon and beauty academy in Barasat, Kolkata. Hair styling, bridal makeup, skin & nail care. Book your appointment today." />
      </Helmet>
      {loading ? (
        <Suspense fallback={<div className="fixed inset-0 z-[100] bg-background" />}>
          <LoadingScreen />
        </Suspense>
      ) : (
        <>
          <ParticleField />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <ServicesMarquee />
            <About />
            <Services />
            <Portfolio />
            <Process />
            <Reservation />
            <Testimonials />
            <Team />
            <Pricing />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
