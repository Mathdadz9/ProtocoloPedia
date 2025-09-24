import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Battery, Radio, Zap, ArrowRight, Wifi } from "lucide-react";
import { Link } from "react-router-dom";

const TechSpecs = () => {
  const specifications = [
    {
      category: "Alcance",
      icon: <Radio className="h-6 w-6" />,
      bluetooth: "Até 10 metros",
      ble: "Até 100 metros (BLE 5.0+)",
      winner: "ble"
    },
    {
      category: "Consumo de Energia",
      icon: <Battery className="h-6 w-6" />,
      bluetooth: "Alto (ideal para dispositivos com fonte contínua)",
      ble: "Ultra-baixo (meses ou anos com uma pilha)",
      winner: "ble"
    },
    {
      category: "Largura de Banda",
      icon: <Zap className="h-6 w-6" />,
      bluetooth: "Até 3 Mbps (áudio, arquivos)",
      ble: "Até 2 Mbps (mensagens curtas, sensores)",
      winner: "bluetooth"
    },
    {
      category: "Latência",
      icon: <Wifi className="h-6 w-6" />,
      bluetooth: "100-200ms",
      ble: "6ms (BLE 5.2+)",
      winner: "ble"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Ficha Técnica Comparativa
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare lado a lado as especificações técnicas do Bluetooth clássico e BLE
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid gap-6">
            {/* Header Row */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="hidden md:block" /> {/* Empty space for category column */}
              <Card className="bg-bluetooth-blue text-white shadow-elegant">
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-lg">Bluetooth Clássico</h3>
                  <p className="text-sm opacity-80">Protocolo original</p>
                </CardContent>
              </Card>
              <Card className="bg-energy-green text-white shadow-elegant">
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-lg">Bluetooth Low Energy</h3>
                  <p className="text-sm opacity-80">Versão otimizada</p>
                </CardContent>
              </Card>
              <div className="hidden md:block" /> {/* Empty space for winner column */}
            </div>

            {/* Specification Rows */}
            {specifications.map((spec, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-4 items-center">
                {/* Category */}
                <Card className="bg-white/50 backdrop-blur-sm shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        {spec.icon}
                      </div>
                      <h3 className="font-semibold">{spec.category}</h3>
                    </div>
                  </CardContent>
                </Card>

                {/* Bluetooth Classic */}
                <Card className={`shadow-card transition-all duration-300 ${
                  spec.winner === 'bluetooth' 
                    ? 'bg-bluetooth-blue/10 border-bluetooth-blue/30 shadow-glow' 
                    : 'bg-white/50 backdrop-blur-sm'
                }`}>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">{spec.bluetooth}</p>
                    {spec.winner === 'bluetooth' && (
                      <Badge className="mt-2 bg-bluetooth-blue text-white">Vencedor</Badge>
                    )}
                  </CardContent>
                </Card>

                {/* BLE */}
                <Card className={`shadow-card transition-all duration-300 ${
                  spec.winner === 'ble' 
                    ? 'bg-energy-green/10 border-energy-green/30 shadow-glow' 
                    : 'bg-white/50 backdrop-blur-sm'
                }`}>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">{spec.ble}</p>
                    {spec.winner === 'ble' && (
                      <Badge className="mt-2 bg-energy-green text-white">Vencedor</Badge>
                    )}
                  </CardContent>
                </Card>

                {/* Winner Indicator */}
                <div className="hidden md:flex justify-center">
                  {spec.winner === 'bluetooth' ? (
                    <div className="w-8 h-8 rounded-full bg-bluetooth-blue flex items-center justify-center">
                      <span className="text-white text-xs">🏆</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-energy-green flex items-center justify-center">
                      <span className="text-white text-xs">🏆</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Technical Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/50 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-bluetooth-blue/10">
                  <Wifi className="h-6 w-6 text-bluetooth-blue" />
                </div>
                Bluetooth Clássico - Detalhes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Vantagens:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Alta taxa de transferência</li>
                  <li>• Ótimo para streaming de áudio</li>
                  <li>• Protocolo maduro e estável</li>
                  <li>• Suporte amplo em dispositivos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Limitações:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Alto consumo de energia</li>
                  <li>• Alcance limitado (10m)</li>
                  <li>• Não ideal para IoT</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/50 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-energy-green/10">
                  <Battery className="h-6 w-6 text-energy-green" />
                </div>
                Bluetooth Low Energy - Detalhes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Vantagens:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Consumo ultra-baixo de energia</li>
                  <li>• Maior alcance (até 100m)</li>
                  <li>• Ideal para dispositivos IoT</li>
                  <li>• Latência extremamente baixa</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Limitações:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Menor largura de banda</li>
                  <li>• Não ideal para áudio contínuo</li>
                  <li>• Conexões intermitentes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Card */}
        <Card className="bg-gradient-primary text-white shadow-elegant mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Resumo Executivo</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🎧 Use Bluetooth Clássico para:</h4>
                <ul className="space-y-1 text-sm opacity-90">
                  <li>• Fones de ouvido e alto-falantes</li>
                  <li>• Transferência de arquivos</li>
                  <li>• Aplicações que precisam de alta largura de banda</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔋 Use BLE para:</h4>
                <ul className="space-y-1 text-sm opacity-90">
                  <li>• Sensores e wearables</li>
                  <li>• Dispositivos alimentados por bateria</li>
                  <li>• Aplicações IoT e automação</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-bluetooth-blue hover:bg-bluetooth-blue/90 text-white">
            <Link to="/casos-de-uso">
              Ver Casos de Uso Práticos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TechSpecs;