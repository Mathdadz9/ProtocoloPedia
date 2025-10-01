import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Lightbulb, Smartphone, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SeeInAction = () => {
  const videos = [
    {
      title: "Como funciona o Bluetooth Low Energy",
      description: "Explicação visual clara de como o BLE funciona na prática",
      channel: "Andreas Spiess",
      duration: "12:34",
      embedId: "k6S0NeYiVzo", // Real BLE video ID
      thumbnail: "https://copilot.microsoft.com/th/id/BCO.8c5813f7-11af-4c5f-be23-dfddf28cae2c.png",
      topics: ["BLE Basics", "Power Consumption", "Real Examples"]
    },
    {
      title: "Bluetooth Classic vs BLE Explained",
      description: "Comparação prática entre os dois protocolos",
      channel: "EEVblog",
      duration: "15:22",
      embedId: "oCBhT6cWPQ8", // Example Bluetooth comparison video
      thumbnail: "https://copilot.microsoft.com/th/id/BCO.0700ed03-e7dc-4318-9f3d-8da6f888365a.png",
      topics: ["Comparison", "Use Cases", "Technical Details"]
    }
  ];

  const practicalExamples = [
    {
      title: "Monitor de Batimentos Cardíacos",
      description: "Veja como um sensor BLE pode monitorar batimentos cardíacos e enviar dados para seu smartphone.",
      icon: <Heart className="h-8 w-8" />,
      color: "energy-green",
      steps: [
        "Sensor coleta batimento cardíaco",
        "BLE transmite dados a cada 1 segundo",
        "Smartphone recebe e processa",
        "Aplicativo exibe em tempo real"
      ],
      batteryLife: "6-12 meses",
      dataSize: "2-4 bytes por transmissão"
    },
    {
      title: "Conexão de Fones Bluetooth",
      description: "Entenda o processo de pareamento e streaming de áudio contínuo via Bluetooth clássico.",
      icon: <Smartphone className="h-8 w-8" />,
      color: "bluetooth-blue",
      steps: [
        "Dispositivos se descobrem mutuamente",
        "Processo de pareamento seguro",
        "Estabelece conexão contínua",
        "Stream de áudio em alta qualidade"
      ],
      batteryLife: "8-30 horas",
      dataSize: "1.4 Mbps (áudio comprimido)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Play className="h-12 w-12 text-bluetooth-blue animate-glow" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Veja em Ação
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Assista demonstrações práticas e veja como Bluetooth e BLE funcionam no mundo real
          </p>
        </div>

        {/* Introduction */}
        <Card className="bg-gradient-primary text-white shadow-elegant mb-12">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-8 w-8" />
              <h2 className="text-2xl font-bold">Demonstração Interativa</h2>
            </div>
            <p className="text-lg opacity-90 leading-relaxed">
              Assista como engenheiros usam BLE para salvar vidas em fazendas remotas, 
              monitorando sensores de temperatura de vacinas durante o transporte — 
              enviando alertas em tempo real para o smartphone!
            </p>
          </CardContent>
        </Card>

        {/* Video Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videos.map((video, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="lg"
                      className="bg-white/90 text-black hover:bg-white"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=V4u6Wxa2Cqs}`, '_blank')}
                    >
                      <Play className="h-5 w-5 mr-2" />
                      Assistir
                    </Button>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-black/70 text-white">
                    {video.duration}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                <p className="text-xs text-muted-foreground mb-4">Canal: {video.channel}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.topics.map((topic, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=SynyKRkbLh8}`, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Assistir no YouTube
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Practical Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Exemplos Práticos em Funcionamento
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {practicalExamples.map((example, index) => (
              <Card key={index} className={`bg-${example.color}/5 border-${example.color}/20 shadow-card hover:shadow-elegant transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-3 text-${example.color}`}>
                    <div className={`p-2 rounded-full bg-${example.color}/10`}>
                      {example.icon}
                    </div>
                    {example.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{example.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Fluxo de Funcionamento:</h4>
                    <div className="space-y-2">
                      {example.steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full bg-${example.color} text-white text-xs flex items-center justify-center font-bold`}>
                            {i + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">Duração da Bateria</p>
                      <p className="font-semibold">{example.batteryLife}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Taxa de Dados</p>
                      <p className="font-semibold">{example.dataSize}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Embedded Video */}
        <Card className="bg-white/50 backdrop-blur-sm shadow-elegant mb-12">
          <CardHeader>
            <CardTitle className="text-center">
              🎥 Demonstração: BLE em Ação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://copilot.microsoft.com/th/id/BCO.f181408c-f710-499c-ac7c-6877d4026cfd.png"
                title="BLE em Ação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Vídeo: Como o BLE funciona na prática com exemplos reais de IoT
            </p>
          </CardContent>
        </Card>

        {/* Fun Facts */}
        <Card className="bg-gradient-primary text-white shadow-elegant mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🤓 Fatos Surpreendentes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  🏷️ Seu AirTag usa BLE:
                </h4>
                <p className="text-sm opacity-90">
                  E consegue durar mais de 1 ano com uma única pilha CR2032, 
                  enviando sinais de localização para a rede "Find My" da Apple!
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  💡 Lâmpadas inteligentes:
                </h4>
                <p className="text-sm opacity-90">
                  Usam BLE para configuração inicial, mas depois migram para Wi-Fi 
                  para controle em tempo real - o melhor dos dois mundos!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Parabéns! 🎉</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Você agora conhece as diferenças, usos e limitações do Bluetooth clássico e BLE. 
            Está pronto para escolher a tecnologia certa para qualquer projeto!
          </p>
          <Button asChild size="lg" className="bg-bluetooth-blue hover:bg-bluetooth-blue/90 text-white">
            <Link to="/">
              <ArrowRight className="mr-2 h-5 w-5" />
              Voltar ao Início
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeeInAction;