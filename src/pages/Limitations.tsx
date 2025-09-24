import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Video, Wifi, Building, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

const Limitations = () => {
  const limitations = [
    {
      title: "Transmitir vídeo em tempo real",
      description: "Nem o Bluetooth clássico nem o BLE têm largura de banda suficiente para vídeo HD.",
      solution: "Use Wi-Fi ou 5G para streaming de vídeo.",
      icon: <Video className="h-6 w-6" />,
      protocols: ["Bluetooth Clássico", "BLE"],
      severity: "high"
    },
    {
      title: "Comunicação a longas distâncias",
      description: "Mesmo com BLE 5.0+, obstáculos e interferências limitam o alcance em campo aberto (>100m).",
      solution: "Para sensores agrícolas em grandes áreas, prefira LoRaWAN ou NB-IoT.",
      icon: <Wifi className="h-6 w-6" />,
      protocols: ["Bluetooth Clássico", "BLE"],
      severity: "medium"
    },
    {
      title: "Ambientes com muitas paredes metálicas",
      description: "Estruturas metálicas bloqueiam significativamente o sinal, reduzindo drasticamente o alcance.",
      solution: "Use repetidores ou considere protocolos com maior potência como Wi-Fi.",
      icon: <Building className="h-6 w-6" />,
      protocols: ["BLE"],
      severity: "medium"
    }
  ];

  const specificLimitations = [
    {
      protocol: "Bluetooth Clássico",
      issues: [
        "Alto consumo de energia inviabiliza uso em sensores",
        "Alcance limitado a ~10 metros",
        "Não é eficiente para dados esporádicos",
        "Maior latência para estabelecer conexão"
      ],
      color: "bluetooth-blue"
    },
    {
      protocol: "BLE",
      issues: [
        "Não adequado para streaming de áudio contínuo", 
        "Menor largura de banda que Bluetooth clássico",
        "Conexões intermitentes podem causar atrasos",
        "Pode ter problemas em ambientes com muita interferência"
      ],
      color: "energy-green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <AlertTriangle className="h-12 w-12 text-warning-yellow animate-glow" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Alerta de Incompatibilidade
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seja honesto e técnico: conheça os cenários onde cada protocolo falha e as alternativas recomendadas
          </p>
        </div>

        {/* Main Limitations */}
        <div className="space-y-8 mb-16">
          {limitations.map((limitation, index) => (
            <Card key={index} className="bg-warning-yellow/5 border-warning-yellow/30 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  {/* Icon and Alert */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warning-yellow/10 mb-4">
                      <div className="text-warning-yellow">
                        {limitation.icon}
                      </div>
                    </div>
                    <Badge className="bg-warning-yellow text-black font-semibold">
                      ❗ NÃO USE
                    </Badge>
                  </div>

                  {/* Problem Description */}
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <X className="h-5 w-5 text-red-500" />
                      {limitation.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {limitation.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {limitation.protocols.map((protocol, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {protocol}
                        </Badge>
                      ))}
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-700">
                        <strong>💡 Alternativa:</strong> {limitation.solution}
                      </p>
                    </div>
                  </div>

                  {/* Severity */}
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                      limitation.severity === 'high' 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      <span className="text-2xl">
                        {limitation.severity === 'high' ? '🚫' : '⚠️'}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {limitation.severity === 'high' ? 'Crítico' : 'Atenção'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Protocol-Specific Limitations */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {specificLimitations.map((protocol, index) => (
            <Card key={index} className={`bg-${protocol.color}/5 border-${protocol.color}/20 shadow-card`}>
              <CardHeader>
                <CardTitle className={`text-${protocol.color} flex items-center gap-3`}>
                  <AlertTriangle className="h-6 w-6" />
                  Limitações - {protocol.protocol}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {protocol.issues.map((issue, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decision Matrix */}
        <Card className="bg-gradient-primary text-white shadow-elegant mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Matriz de Decisão Rápida</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  ❌ Evite Bluetooth/BLE se:
                </h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Precisa transmitir vídeo ou grandes arquivos</li>
                  <li>• Distância maior que 100 metros</li>
                  <li>• Ambiente com muita interferência metálica</li>
                  <li>• Necessita largura de banda &gt; 3 Mbps consistente</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  ✅ Alternativas recomendadas:
                </h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• <strong>Wi-Fi:</strong> Para vídeo e alta largura de banda</li>
                  <li>• <strong>LoRaWAN:</strong> Para longas distâncias (IoT)</li>
                  <li>• <strong>5G/4G:</strong> Para mobilidade e internet</li>
                  <li>• <strong>Zigbee:</strong> Para mesh networks domésticas</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real Example */}
        <Card className="bg-white/50 backdrop-blur-sm shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="text-2xl">📱</span>
              Exemplo Real: Por que o iPhone não usa BLE para AirDrop?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              A Apple usa <strong>Wi-Fi Direct</strong> no AirDrop porque precisa transferir fotos, vídeos e documentos rapidamente. 
              O BLE seria inadequado devido à baixa largura de banda (~2 Mbps vs ~50-100 Mbps do Wi-Fi). 
              O resultado? Transferências que levariam minutos com BLE acontecem em segundos com Wi-Fi.
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-bluetooth-blue hover:bg-bluetooth-blue/90 text-white">
            <Link to="/veja-em-acao">
              Ver Demonstração Prática
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Limitations;