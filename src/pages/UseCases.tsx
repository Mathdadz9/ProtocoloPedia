import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Headphones, Heart, Store, ArrowRight, Music, Battery, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const UseCases = () => {
  const useCases = [
    {
      title: "Fones de Ouvido Sem Fio",
      protocol: "Bluetooth Clássico",
      icon: <Headphones className="h-8 w-8" />,
      color: "bluetooth-blue",
      reason: "Precisa de alta largura de banda para transmitir áudio em tempo real com qualidade.",
      details: [
        "Streaming de música contínuo",
        "Chamadas telefônicas",
        "Cancelamento ativo de ruído",
        "Codecs de alta qualidade (aptX, LDAC)"
      ],
      image: "🎧",
      animation: "🎵→📱→🎧"
    },
    {
      title: "Pulseira de Monitoramento de Saúde",
      protocol: "BLE",
      icon: <Heart className="h-8 w-8" />,
      color: "energy-green",
      reason: "Envia batimentos cardíacos a cada poucos segundos, economizando bateria por semanas.",
      details: [
        "Monitoramento contínuo de batimentos",
        "Contagem de passos",
        "Qualidade do sono",
        "Notificações ocasionais"
      ],
      image: "⌚",
      animation: "💓→⌚→📱"
    },
    {
      title: "Beacon em Lojas Inteligentes",
      protocol: "BLE",
      icon: <Store className="h-8 w-8" />,
      color: "bluetooth-cyan",
      reason: "Dispositivos pequenos em prateleiras enviam sinais para aplicativos de promoção — com bateria que dura 2+ anos.",
      details: [
        "Marketing por proximidade",
        "Promoções personalizadas", 
        "Navegação interna da loja",
        "Analytics de comportamento do cliente"
      ],
      image: "🏪",
      animation: "📱→🔔→💰"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Casos de Sucesso
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja exemplos reais onde cada protocolo brilha e descubra por que a escolha certa faz toda a diferença
          </p>
        </div>

        {/* Use Cases */}
        <div className="space-y-12 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Left - Icon and Title */}
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-${useCase.color}/10 mb-4 group-hover:animate-float`}>
                      <div className={`text-${useCase.color}`}>
                        {useCase.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <Badge 
                      className={`${
                        useCase.protocol === 'BLE' 
                          ? 'bg-energy-green text-white' 
                          : 'bg-bluetooth-blue text-white'
                      }`}
                    >
                      {useCase.protocol}
                    </Badge>
                  </div>

                  {/* Center - Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Por que essa escolha?</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {useCase.reason}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Características:</h4>
                      <ul className="space-y-1">
                        {useCase.details.map((detail, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${useCase.color}`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right - Visual */}
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-glow">
                      {useCase.image}
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-sm font-mono text-gray-600">{useCase.animation}</p>
                      <p className="text-xs text-gray-500 mt-1">Fluxo de dados</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-bluetooth-blue/5 border-bluetooth-blue/20 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-bluetooth-blue">
                <Music className="h-6 w-6" />
                Bluetooth Clássico - Ideal Para
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <Headphones className="h-5 w-5 text-bluetooth-blue" />
                  <span className="text-sm font-medium">Dispositivos de áudio</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <Music className="h-5 w-5 text-bluetooth-blue" />
                  <span className="text-sm font-medium">Streaming contínuo</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <ArrowRight className="h-5 w-5 text-bluetooth-blue" />
                  <span className="text-sm font-medium">Transferência de arquivos</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                💡 <strong>Dica:</strong> Use quando a largura de banda for prioridade sobre economia de energia
              </p>
            </CardContent>
          </Card>

          <Card className="bg-energy-green/5 border-energy-green/20 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-energy-green">
                <Battery className="h-6 w-6" />
                BLE - Ideal Para
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <Heart className="h-5 w-5 text-energy-green" />
                  <span className="text-sm font-medium">Sensores de saúde</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <MapPin className="h-5 w-5 text-energy-green" />
                  <span className="text-sm font-medium">Dispositivos IoT</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <Store className="h-5 w-5 text-energy-green" />
                  <span className="text-sm font-medium">Beacons e tags</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                💡 <strong>Dica:</strong> Use quando a duração da bateria for mais importante que velocidade
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Success Metrics */}
        <Card className="bg-gradient-primary text-white shadow-elegant mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Números Impressionantes</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2+ anos</div>
                <p className="text-sm opacity-90">Duração da bateria em beacons BLE</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100x</div>
                <p className="text-sm opacity-90">Menos energia que Bluetooth clássico</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">6ms</div>
                <p className="text-sm opacity-90">Latência mínima do BLE 5.2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-warning-yellow hover:bg-warning-yellow/90 text-black">
            <Link to="/limitacoes">
              Conhecer as Limitações
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UseCases;