import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      info: "contato@portfolioapp.com",
      description: "Resposta em até 24 horas"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      info: "+55 (11) 99999-9999",
      description: "Seg-Sex: 9h às 18h"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Endereço",
      info: "São Paulo, SP",
      description: "Brasil"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Horário",
      info: "9:00 - 18:00",
      description: "Horário comercial"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Entre em Contato
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco e vamos conversar sobre seu próximo projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Como podemos ajudar?"
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos mais sobre seu projeto ou dúvida..."
                      required
                      rows={6}
                      className="border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full"
                    variant="gradient"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-colors">
                          <div className="text-primary">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {info.title}
                          </h3>
                          <p className="font-medium">{info.info}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Qual o prazo médio dos projetos?</h4>
                      <p className="text-sm text-muted-foreground">
                        Depende da complexidade, mas geralmente entre 2-8 semanas.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Fazem manutenção pós-entrega?</h4>
                      <p className="text-sm text-muted-foreground">
                        Sim! Oferecemos suporte e manutenção contínua.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Trabalham com qualquer tecnologia?</h4>
                      <p className="text-sm text-muted-foreground">
                        Especializados em React, TypeScript e tecnologias modernas.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Call */}
            <Card className="border-border/50 bg-gradient-primary/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Agende uma Conversa</h3>
                <p className="text-muted-foreground mb-4">
                  Prefere conversar? Agende uma call gratuita de 30 minutos
                </p>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;