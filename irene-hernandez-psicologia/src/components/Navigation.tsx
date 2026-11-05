import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">I</span>
            </div>
            <span className="text-xl font-bold text-trust">Irene Hernández Ponce</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('redes-sociales')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Blog
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-card hover:shadow-strong transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Sobre mí
              </button>
              <button 
                onClick={() => scrollToSection('redes-sociales')}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Blog
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-primary hover:bg-primary-dark text-primary-foreground w-full justify-start"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contactar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;