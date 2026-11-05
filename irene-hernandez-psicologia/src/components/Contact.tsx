import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getRequests, saveRequests, getSiteSettings, SiteSettings } from "@/lib/siteData";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(getSiteSettings);
  useEffect(() => { const refresh = () => setSettings(getSiteSettings()); window.addEventListener("irene-psicologia-data-changed", refresh); window.addEventListener("storage", refresh); return () => { window.removeEventListener("irene-psicologia-data-changed", refresh); window.removeEventListener("storage", refresh); }; }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const current = getRequests();
    saveRequests([...current, {
      id: `request-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferredTime: formData.preferredTime,
      createdAt: new Date().toISOString(),
      status: 'Pendiente'
    }]);
    toast({
      title: "Solicitud guardada (demo)",
      description: settings.requestConfirmation + " (Demo: guardada solo en este navegador)."
    });
    setFormData({ name: "", email: "", phone: "", preferredTime: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    ...(settings.phone ? [{ icon: Phone, title: "Teléfono", info: settings.phone, description: settings.officeHours }] : []),
    ...(settings.email ? [{ icon: Mail, title: "Email", info: settings.email, description: "Canal de contacto" }] : []),
    ...(settings.address ? [{ icon: MapPin, title: "Ubicación", info: settings.address, description: "Ubicación de atención por confirmar" }] : []),
    ...(settings.officeHours ? [{ icon: Clock, title: "Horarios", info: settings.officeHours, description: settings.saturdayHours }] : []),
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trust mb-4">
              Contacto
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {settings.contactIntro}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-strong bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-trust flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Solicita información o consulta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-primary"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Teléfono (opcional)
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-background border-border focus:border-primary"
                        placeholder="Tu teléfono (opcional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-primary"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                      Horario preferido
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-md bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Selecciona un horario</option>
                      <option value="morning">Mañana (9:00 - 12:00)</option>
                      <option value="afternoon">Tarde (12:00 - 17:00)</option>
                      <option value="evening">Noche (17:00 - 20:00)</option>
                    </select>
                  </div>



                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-card hover:shadow-strong transition-all duration-300 py-6 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Enviar solicitud
                      </div>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obligatorios. El envío solo acredita la recepción de una solicitud; no confirma una cita.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid gap-6">
                {contactInfo.length === 0 && <p className="text-sm text-muted-foreground">Los datos de contacto se publicarán cuando estén confirmados.</p>}
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-card hover:shadow-strong transition-all duration-300 bg-gradient-card border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-hero rounded-lg shadow-soft flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-trust mb-1">{info.title}</h4>
                          <p className="text-foreground font-medium mb-1">{info.info}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Notice */}
              <Card className="border-2 border-destructive/20 bg-destructive/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <Phone className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-bold text-destructive mb-2">Emergencias</h4>
                      <p className="text-sm text-muted-foreground">
                        Si tienes una crisis emocional urgente, llama al teléfono de emergencias 
                        112 o acude al servicio de urgencias más cercano.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="bg-gradient-hero text-white border-0 shadow-strong">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2">Privacidad y confidencialidad</h4>
                  <p className="text-white/90 text-sm">
                    {settings.privacyNotice} En esta demo no introduzcas datos personales reales. La política de privacidad definitiva se publicará antes de producción.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;