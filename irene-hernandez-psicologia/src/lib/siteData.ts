export type SocialPlatform = 'instagram' | 'linkedin' | 'facebook';
export type SocialPost = { id: string; platform: SocialPlatform; date: string; content: string; likes: number; comments: number; shares: number };
export type SocialLink = { platform: string; url: string; followers: string };
export type DemoRequest = { id: string; name: string; email: string; phone: string; preferredTime: string; createdAt: string; status: 'Pendiente' | 'Contactada' | 'Aceptada' | 'Descartada' };
export type SiteService = { title: string; description: string; duration: string; type: string; price: string; features: string[] };
export type SiteSettings = {
  brandName: string; profession: string; heroSubtitle: string; heroDescription: string; aboutHeading: string; aboutIntro: string; aboutApproach: string; approachHeading: string;
  servicesHeading: string; servicesIntro: string; specialtiesHeading: string; specialties: string[]; services: SiteService[];
  phone: string; email: string; address: string; officeHours: string; saturdayHours: string; contactIntro: string;
  cancellationHours: number; requestConfirmation: string; privacyNotice: string; seoTitle: string; seoDescription: string;
  instagramUrl: string; linkedinUrl: string; facebookUrl: string; profileImageUrl: string;
};

export const initialPosts: SocialPost[] = [
  { id: 'post-1', platform: 'instagram', date: 'Hace 2 días', content: '🧠 ¿Sabías que la ansiedad es una respuesta natural de nuestro cuerpo? En mi última entrada del blog hablo sobre técnicas de respiración que pueden ayudarte a gestionarla mejor. #SaludMental #Ansiedad #Psicologia', likes: 45, comments: 12, shares: 8 },
  { id: 'post-2', platform: 'linkedin', date: 'Hace 1 semana', content: 'La importancia de la inteligencia emocional en el ámbito laboral. He publicado un artículo sobre cómo desarrollar esta habilidad clave para el éxito profesional y personal. ¿Qué opinas?', likes: 78, comments: 23, shares: 15 },
  { id: 'post-3', platform: 'facebook', date: 'Hace 3 días', content: '💙 Recordatorio: Cuidar tu salud mental es tan importante como cuidar tu salud física. Si necesitas hablar con alguien, recuerda que pedir ayuda es un acto de valentía, no de debilidad.', likes: 92, comments: 18, shares: 31 },
  { id: 'post-4', platform: 'instagram', date: 'Hace 5 días', content: '🌱 5 hábitos diarios para mejorar tu bienestar mental:\n1. Practica la gratitud\n2. Dedica tiempo a la naturaleza\n3. Conecta con personas queridas\n4. Practica mindfulness\n5. Cuida tu descanso\n¿Cuál practicas tú?', likes: 67, comments: 34, shares: 22 },
];
export const initialLinks: SocialLink[] = [
  { platform: 'Instagram', url: '#', followers: '2.1K' },
  { platform: 'LinkedIn', url: '#', followers: '1.5K' },
  { platform: 'Facebook', url: '#', followers: '890' },
];
export const initialSettings: SiteSettings = {
  brandName: 'Irene Hernández Ponce', profession: 'Psicología',
  heroSubtitle: 'Psicóloga', heroDescription: 'Un espacio de escucha y acompañamiento. Ponte en contacto para solicitar información sobre las consultas.',
  aboutHeading: 'Sobre mí', aboutIntro: 'Aquí podrás conocer la trayectoria, formación y manera de trabajar de Irene Hernández Ponce. Este texto se podrá personalizar desde el panel de administración.',
  aboutApproach: 'La descripción del enfoque profesional se añadirá cuando Irene confirme la información que desea publicar.', approachHeading: 'Mi enfoque',
  servicesHeading: 'Servicios', servicesIntro: 'Información sobre las modalidades de atención disponibles. Los servicios y sus descripciones se pueden editar desde administración.',
  specialtiesHeading: 'Áreas de trabajo', specialties: [],
  services: [
    { title: 'Consulta individual', description: 'Añade aquí una descripción verificada del servicio.', duration: 'Por definir', type: 'Individual', price: 'Consultar', features: ['Información pendiente de confirmar'] },
    { title: 'Consulta de pareja', description: 'Añade aquí una descripción verificada del servicio.', duration: 'Por definir', type: 'Pareja', price: 'Consultar', features: ['Información pendiente de confirmar'] },
    { title: 'Consulta online', description: 'Añade aquí una descripción verificada del servicio.', duration: 'Por definir', type: 'Online', price: 'Consultar', features: ['Información pendiente de confirmar'] },
  ],
  phone: '', email: '', address: '', officeHours: '', saturdayHours: '', contactIntro: 'Solicita información y nos pondremos en contacto contigo para comentar los siguientes pasos.',
  cancellationHours: 48, requestConfirmation: 'Hemos recibido tu solicitud. Nos pondremos en contacto contigo para acordar los siguientes pasos. El envío no confirma una cita.',
  privacyNotice: 'No incluyas información sobre tu salud, diagnósticos ni otros datos sensibles en este formulario.',
  seoTitle: 'Irene Hernández Ponce | Psicología', seoDescription: 'Información profesional y contacto de Irene Hernández Ponce.',
  instagramUrl: '#', linkedinUrl: '#', facebookUrl: '#', profileImageUrl: '',
};

const read = <T,>(key: string, fallback: T): T => { try { const raw = localStorage.getItem(key); if (!raw) return fallback; const parsed = JSON.parse(raw); return Array.isArray(fallback) ? parsed as T : { ...(fallback as object), ...(parsed as object) } as T; } catch { return fallback; } };
const changed = () => window.dispatchEvent(new Event('irene-psicologia-data-changed'));
export const getPosts = () => read<SocialPost[]>('irene-psicologia-demo-posts', initialPosts);
export const savePosts = (value: SocialPost[]) => { localStorage.setItem('irene-psicologia-demo-posts', JSON.stringify(value)); changed(); };
export const getLinks = () => read<SocialLink[]>('irene-psicologia-demo-links', initialLinks);
export const saveLinks = (value: SocialLink[]) => { localStorage.setItem('irene-psicologia-demo-links', JSON.stringify(value)); changed(); };
export const getRequests = () => read<DemoRequest[]>('irene-psicologia-demo-requests', []);
export const saveRequests = (value: DemoRequest[]) => { localStorage.setItem('irene-psicologia-demo-requests', JSON.stringify(value)); changed(); };
export const getSiteSettings = () => read<SiteSettings>('irene-psicologia-demo-settings', initialSettings);
export const saveSiteSettings = (value: SiteSettings) => { localStorage.setItem('irene-psicologia-demo-settings', JSON.stringify(value)); changed(); };
