import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todos" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
  ];

  const projects = [
    {
      id: 1,
      title: "Dashboard Analytics",
      description: "Dashboard completo para análise de dados com gráficos interativos e métricas em tempo real.",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb",
      tags: ["React", "TypeScript", "Charts"],
      status: "Concluído",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Plataforma de e-commerce moderna com carrinho de compras, pagamentos e gestão de produtos.",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb",
      tags: ["Next.js", "Stripe", "Supabase"],
      status: "Em desenvolvimento",
      featured: true
    },
    {
      id: 3,
      title: "Mobile Task Manager",
      description: "Aplicativo móvel para gestão de tarefas com sincronização em nuvem e notificações.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb",
      tags: ["React Native", "Firebase", "Redux"],
      status: "Concluído",
      featured: false
    },
    {
      id: 4,
      title: "Brand Identity Design",
      description: "Sistema completo de identidade visual para startup de tecnologia com manual de marca.",
      category: "design",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb",
      tags: ["Branding", "Logo", "UI Design"],
      status: "Concluído",
      featured: false
    },
    {
      id: 5,
      title: "Social Media App",
      description: "Rede social com feed em tempo real, stories e sistema de mensagens instantâneas.",
      category: "web",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb",
      tags: ["React", "Socket.io", "Node.js"],
      status: "Em desenvolvimento",
      featured: true
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Website responsivo de portfolio com animações suaves e otimização para SEO.",
      category: "web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb",
      tags: ["Vite", "Tailwind", "Framer Motion"],
      status: "Concluído",
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Nossos Projetos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção de projetos inovadores que demonstram nossa expertise em desenvolvimento e design
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="bg-gradient-primary bg-clip-text text-transparent">✨ Projetos em Destaque</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === "Concluído" ? "default" : "secondary"}
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                    <Button size="sm" variant="gradient" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-4 mb-8">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-gradient-primary" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Concluído" ? "default" : "secondary"}
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm" variant="gradient" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;