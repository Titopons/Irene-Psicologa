import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import SocialFeed from "@/components/SocialFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { getSiteSettings } from "@/lib/siteData";

const Index = () => {
  useEffect(() => {
    const updateMetadata = () => {
      const settings = getSiteSettings();
      document.title = settings.seoTitle;
      let description = document.querySelector('meta[name="description"]');
      if (!description) { description = document.createElement('meta'); description.setAttribute('name', 'description'); document.head.appendChild(description); }
      description.setAttribute('content', settings.seoDescription);
    };
    updateMetadata();
    window.addEventListener('irene-psicologia-data-changed', updateMetadata);
    return () => window.removeEventListener('irene-psicologia-data-changed', updateMetadata);
  }, []);
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <SocialFeed />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
