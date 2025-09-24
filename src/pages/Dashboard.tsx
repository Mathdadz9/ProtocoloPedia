import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  Eye,
  Download,
  BarChart3,
  PieChart,
  Calendar,
  Bell
} from "lucide-react";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  const stats = [
    {
      title: "Receita Total",
      value: "R$ 45.231",
      change: "+20.1%",
      icon: <DollarSign className="h-5 w-5" />,
      positive: true
    },
    {
      title: "Usuários Ativos",
      value: "2.350",
      change: "+180.1%",
      icon: <Users className="h-5 w-5" />,
      positive: true
    },
    {
      title: "Taxa de Conversão",
      value: "12.5%",
      change: "+19%",
      icon: <TrendingUp className="h-5 w-5" />,
      positive: true
    },
    {
      title: "Visualizações",
      value: "89.412",
      change: "-2.5%",
      icon: <Eye className="h-5 w-5" />,
      positive: false
    },
  ];

  const projects = [
    { name: "Website Redesign", progress: 85, status: "Em andamento", team: 4 },
    { name: "Mobile App", progress: 92, status: "Quase finalizado", team: 6 },
    { name: "Dashboard v2", progress: 45, status: "Em desenvolvimento", team: 3 },
    { name: "API Integration", progress: 78, status: "Em andamento", team: 2 },
  ];

  const activities = [
    { action: "Novo usuário registrado", time: "2 min atrás", type: "user" },
    { action: "Projeto atualizado", time: "15 min atrás", type: "project" },
    { action: "Relatório gerado", time: "1 hora atrás", type: "report" },
    { action: "Deploy realizado", time: "2 horas atrás", type: "deploy" },
    { action: "Backup completado", time: "4 horas atrás", type: "system" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-slide-in">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Acompanhe suas métricas e projetos em tempo real
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex bg-muted rounded-lg p-1">
              {["7d", "30d", "90d"].map((period) => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedPeriod(period)}
                  className={selectedPeriod === period ? "bg-gradient-primary shadow-sm" : ""}
                >
                  {period}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="p-2 rounded-full bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors">
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <p className={`text-xs flex items-center ${
                  stat.positive ? 'text-green-400' : 'text-red-400'
                }`}>
                  <TrendingUp className={`h-3 w-3 mr-1 ${stat.positive ? '' : 'rotate-180'}`} />
                  {stat.change} em relação ao período anterior
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Projects Progress */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Projetos em Andamento
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    Ver todos
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{project.name}</h4>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {project.status}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {project.team} membros
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{project.progress}%</div>
                      </div>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Activity Feed */}
          <div>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-slide-in" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Atividades Recentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="p-1.5 rounded-full bg-gradient-primary/20 mt-0.5">
                      <Bell className="h-3 w-3" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-slide-in" style={{ animationDelay: '0.8s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Distribuição de Tráfego
              </CardTitle>
            </CardHeader>
            <CardContent className="h-64 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-gradient-primary/20 flex items-center justify-center mx-auto">
                  <PieChart className="h-12 w-12 text-primary animate-glow" />
                </div>
                <p className="text-muted-foreground">Gráfico interativo em breve</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-slide-in" style={{ animationDelay: '1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Próximos Eventos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-primary/10">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div>
                    <p className="text-sm font-medium">Reunião com cliente</p>
                    <p className="text-xs text-muted-foreground">Hoje, 14:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                  <div>
                    <p className="text-sm font-medium">Deploy da aplicação</p>
                    <p className="text-xs text-muted-foreground">Amanhã, 09:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                  <div>
                    <p className="text-sm font-medium">Revisão de código</p>
                    <p className="text-xs text-muted-foreground">Sex, 15:30</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;