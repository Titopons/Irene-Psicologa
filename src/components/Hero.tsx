import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-psychology.jpg";
import { useEffect, useState } from "react";
import { getSiteSettings, SiteSettings } from "@/lib/siteData";

const Hero = () => {
  const [settings, setSettings] = useState<SiteSettings>(getSiteSettings);
  useEffect(() => { const refresh = () => setSettings(getSiteSettings()); window.addEventListener('irene-psicologia-data-changed', refresh); window.addEventListener('storage', refresh); return () => { window.removeEventListener('irene-psicologia-data-changed', refresh); window.removeEventListener('storage', refresh); }; }, []);
  const scrollToSection = (sectionId: string) => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0"><img src={heroImage} alt="Imagen de ambiente para la web profesional" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-r from-trust/80 to-primary/60"/></div>
    <div className="relative z-10 container mx-auto px-4 text-center text-white"><div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">{settings.brandName}</h1>
      <p className="text-xl md:text-2xl mb-4 opacity-90 font-light">{settings.heroSubtitle}</p>
      <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed">{settings.heroDescription}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"><Button size="lg" onClick={() => scrollToSection('contacto')} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-strong px-8 py-6 text-lg font-semibold"><Calendar className="w-5 h-5 mr-2"/>Solicitar información</Button><Button size="lg" variant="outline" onClick={() => scrollToSection('sobre-mi')} className="border-2 border-white text-white hover:bg-white hover:text-trust px-8 py-6 text-lg font-semibold"><MessageCircle className="w-5 h-5 mr-2"/>Conoce mi perfil</Button></div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90"><span>{settings.phone || 'Datos de contacto pendientes de confirmar'}</span><span className="hidden sm:block">•</span><span>Consultas presenciales y online: disponibilidad por confirmar</span></div>
    </div></div><div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"><div className="w-6 h-10 border-2 border-white rounded-full flex justify-center"><div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"/></div></div>
  </section>;
};
export default Hero;
