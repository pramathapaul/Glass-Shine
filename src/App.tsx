import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

import LoadingScreen from "@/components/sections/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingFinish = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Helmet>
        <title>Best Unisex Salon in Barasat, Kolkata | Glass Shine Salon & Academy</title>
        <meta name="description" content="Award-winning unisex salon and beauty academy in Barasat, Kolkata. Hair styling, bridal makeup, skin & nail care. Book your appointment today." />
      </Helmet>

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onFinish={handleLoadingFinish} />
        ) : (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
