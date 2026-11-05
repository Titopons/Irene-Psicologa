import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Facebook, ExternalLink, Heart, MessageCircle, Share } from "lucide-react";
import { getLinks, getPosts, SocialPlatform, SocialPost, SocialLink } from "@/lib/siteData";

const platformIcon = (platform: string) => platform === 'instagram' || platform === 'Instagram' ? Instagram : platform === 'linkedin' || platform === 'LinkedIn' ? Linkedin : Facebook;
const SocialFeed = () => {
  const [posts, setPosts] = useState<SocialPost[]>(getPosts);
  const [links, setLinks] = useState<SocialLink[]>(getLinks);
  useEffect(() => {
    const refresh = () => { setPosts(getPosts()); setLinks(getLinks()); };
    window.addEventListener('irene-psicologia-data-changed', refresh);
    window.addEventListener('storage', refresh);
    return () => { window.removeEventListener('irene-psicologia-data-changed', refresh); window.removeEventListener('storage', refresh); };
  }, []);
  return (
    <section id="redes-sociales" className="py-20 bg-background">
      <div className="container mx-auto px-4"><div className="max-w-6xl mx-auto">
        <div className="text-center mb-8"><h2 className="text-4xl md:text-5xl font-bold text-trust mb-4">Blog y Redes Sociales</h2><p className="text-xl text-muted-foreground max-w-2xl mx-auto">Contenido educativo y recursos de interés.</p><p className="mt-3 text-xs text-muted-foreground">Publicaciones y métricas de muestra para la demostración; se sustituirán por contenido real antes de publicar.</p></div>
        <div className="flex flex-wrap justify-center gap-6 mb-12">{links.map((social, index) => { const Icon = platformIcon(social.platform); return <Button key={index} variant="outline" size="lg" className="flex items-center gap-3 px-6 py-4 hover:shadow-card transition-all duration-300" onClick={() => social.url !== '#' && window.open(social.url, '_blank', 'noopener,noreferrer')}><div className="p-2 bg-primary rounded-lg"><Icon className="w-5 h-5 text-white" /></div><div className="text-left"><div className="font-semibold text-foreground">{social.platform}</div><div className="text-sm text-muted-foreground">{social.followers} seguidores</div></div><ExternalLink className="w-4 h-4" /></Button>; })}</div>
        <div className="grid md:grid-cols-2 gap-6">{posts.map((post) => { const Icon = platformIcon(post.platform); return <Card key={post.id} className="shadow-card hover:shadow-strong transition-all duration-300 bg-gradient-card border-0"><CardHeader className="pb-4"><div className="flex items-center gap-3"><div className="p-2 bg-muted rounded-lg"><Icon className="w-5 h-5 text-primary" /></div><div><CardTitle className="text-lg capitalize text-trust">{post.platform}</CardTitle><p className="text-sm text-muted-foreground">{post.date}</p></div></div></CardHeader><CardContent className="space-y-4"><p className="text-foreground leading-relaxed whitespace-pre-line">{post.content}</p><div className="flex items-center gap-6 pt-4 border-t border-border"><div className="flex items-center gap-2 text-muted-foreground"><Heart className="w-4 h-4" /><span className="text-sm font-medium">{post.likes}</span></div><div className="flex items-center gap-2 text-muted-foreground"><MessageCircle className="w-4 h-4" /><span className="text-sm font-medium">{post.comments}</span></div><div className="flex items-center gap-2 text-muted-foreground"><Share className="w-4 h-4" /><span className="text-sm font-medium">{post.shares}</span></div></div></CardContent></Card>; })}</div>
        <div className="text-center mt-12"><Card className="max-w-2xl mx-auto shadow-strong bg-gradient-hero text-white border-0"><CardContent className="p-8"><h3 className="text-2xl font-bold mb-4">Sígueme para más contenido</h3><p className="text-white/90 mb-6">Comparto regularmente tips de salud mental, técnicas de bienestar y recursos útiles para tu crecimiento personal.</p><div className="flex flex-wrap justify-center gap-3">{links.map((social, index) => { const Icon = platformIcon(social.platform); return <Button key={index} variant="outline" className="border-white text-white hover:bg-white hover:text-trust" onClick={() => social.url !== '#' && window.open(social.url, '_blank', 'noopener,noreferrer')}><Icon className="w-4 h-4 mr-2" />{social.platform}</Button>; })}</div></CardContent></Card></div>
      </div></div>
    </section>
  );
};
export default SocialFeed;
