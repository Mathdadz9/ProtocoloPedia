import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    { name: "React & TypeScript", level: 95 },
    { name: "UI/UX Design", level: 88 },
    { name: "Supabase & APIs", level: 92 },
    { name: "Tailwind CSS", level: 90 },
  ];

  const stats = [
    { icon: <Code className="h-6 w-6" />, value: "50+", label: "Projetos Concluídos" },
    { icon: <Users className="h-6 w-6" />, value: "100+", label: "Clientes Satisfeitos" },
    { icon: <Rocket className="h-6 w-6" />, value: "3+", label: "Anos de Experiência" },
    { icon: <Palette className="h-6 w-6" />, value: "∞", label: "Criatividade" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Sobre Nós
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça mais sobre nossa jornada, valores e o que nos motiva a criar experiências digitais incríveis
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-gradient-to-br from-card/50 to-transparent backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4 group-hover:animate-float">
                  <div className="text-primary-foreground">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Story */}
          <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Começamos com uma visão simples: criar experiências digitais que realmente importam. 
                Nossa jornada começou há alguns anos, quando percebemos que a tecnologia deveria ser 
                mais do que apenas funcional - deveria ser inspiradora.
              </p>
              <p>
                Hoje, somos especialistas em criar aplicações web modernas que combinam design elegante 
                com funcionalidade poderosa. Cada projeto é uma oportunidade de superar expectativas e 
                entregar algo verdadeiramente especial.
              </p>
              <p>
                Nossa paixão por inovação nos leva a estar sempre na vanguarda das tecnologias mais 
                recentes, garantindo que nossos clientes sempre tenham acesso às melhores soluções.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl font-bold mb-6">Nossas Especialidades</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="secondary">{skill.level}%</Badge>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-gradient-primary/10 border border-primary/20">
              <h3 className="text-xl font-semibold mb-3 text-primary">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Transformar ideias em realidade digital, criando soluções que não apenas atendem às 
                necessidades dos nossos clientes, mas excedem suas expectativas através de design 
                inovador e tecnologia de ponta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;