import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bluetooth, Phone, MessageCircle, Battery, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhatIs = () => {
  return (
    <div className="min-h-screen bg-gradient-card">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            O que é Bluetooth e BLE?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entenda de forma simples as diferenças entre os dois protocolos de comunicação sem fio mais usados no mundo
          </p>
        </div>

        {/* Main Explanation */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/50 backdrop-blur-sm border-bluetooth-blue/20 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Bluetooth className="h-8 w-8 text-bluetooth-blue" />
                <h2 className="text-2xl font-semibold">Explicação Clara</h2>
              </div>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                O <strong>Bluetooth</strong> é um protocolo sem fio que permite que dispositivos troquem dados por curta distância. 
                O <strong>Bluetooth Low Energy (BLE)</strong>, lançado em 2010, é uma versão otimizada para consumo mínimo de energia, 
                ideal para dispositivos pequenos e com bateria limitada — como sensores, pulseiras e beacons.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ambos operam na mesma frequência (2.4 GHz), mas com estratégias completamente diferentes de comunicação.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Creative Analogy */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-primary text-white shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
                <h2 className="text-2xl font-semibold">Analogia Criativa</h2>
              </div>
              <div className="text-lg leading-relaxed">
                <p className="mb-4">
                  💬 <strong>Pense no Bluetooth clássico como um telefonema:</strong> você mantém a linha aberta enquanto conversa, 
                  gastando energia continuamente para manter a conexão ativa.
                </p>
                <p>
                  📱 <strong>Já o BLE é como enviar mensagens no WhatsApp:</strong> envia a mensagem e "desliga". 
                  Rápido, eficiente e econômico — só consome energia quando realmente precisa transmitir algo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Bluetooth Classic */}
          <Card className="bg-white/50 backdrop-blur-sm border-bluetooth-blue/20 shadow-card group hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-bluetooth-blue/10">
                  <Phone className="h-6 w-6 text-bluetooth-blue" />
                </div>
                <h3 className="text-xl font-semibold">Bluetooth Clássico</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-bluetooth-blue animate-pulse" />
                  <span className="text-sm">Conexão contínua ativa</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-bluetooth-blue rounded border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">📱</span>
                    </div>
                    <div className="flex-1 h-1 bg-bluetooth-blue animate-pulse" />
                    <div className="w-8 h-8 bg-bluetooth-blue rounded border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">🎧</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Transmissão de áudio contínua</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BLE */}
          <Card className="bg-white/50 backdrop-blur-sm border-energy-green/20 shadow-card group hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-energy-green/10">
                  <Zap className="h-6 w-6 text-energy-green" />
                </div>
                <h3 className="text-xl font-semibold">Bluetooth Low Energy</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-energy-green animate-ping" />
                  <span className="text-sm">Conexão esporádica</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-energy-green rounded border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">📱</span>
                    </div>
                    <div className="flex-1 h-1 bg-gray-300 relative">
                      <div className="absolute left-0 w-2 h-1 bg-energy-green animate-ping" />
                    </div>
                    <div className="w-8 h-8 bg-energy-green rounded border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">🌡️</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Dados de sensor a cada 10 segundos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Differences */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-white/50 backdrop-blur-sm shadow-card">
            <CardContent className="p-6 text-center">
              <Battery className="h-12 w-12 text-energy-green mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Consumo de Energia</h3>
              <p className="text-sm text-muted-foreground">BLE usa até 100x menos energia que Bluetooth clássico</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/50 backdrop-blur-sm shadow-card">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-bluetooth-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Velocidade</h3>
              <p className="text-sm text-muted-foreground">Bluetooth clássico: até 3 Mbps<br />BLE: até 2 Mbps</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/50 backdrop-blur-sm shadow-card">
            <CardContent className="p-6 text-center">
              <Bluetooth className="h-12 w-12 text-bluetooth-cyan mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Alcance</h3>
              <p className="text-sm text-muted-foreground">Clássico: até 10m<br />BLE 5.0+: até 100m</p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-bluetooth-blue hover:bg-bluetooth-blue/90 text-white">
            <Link to="/ficha-tecnica">
              Ver Ficha Técnica Completa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;