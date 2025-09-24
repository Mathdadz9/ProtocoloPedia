import { Button } from "@/components/ui/button";
import { ArrowRight, Bluetooth, Zap, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import bluetoothHero from "@/assets/bluetooth-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${bluetoothHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6 animate-slide-in">
              <Bluetooth className="h-12 w-12 text-bluetooth-blue animate-glow" />
              <Zap className="h-8 w-8 text-bluetooth-cyan" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground animate-slide-in">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Bluetooth & BLE
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground">
                Conectando o Mundo com Menos Energia
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: '0.2s' }}>
              Do fone de ouvido ao sensor médico: comunicação sem fio, feita para durar. 
              Descubra as diferenças entre Bluetooth clássico e BLE de forma simples e visual.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="bg-bluetooth-blue hover:bg-bluetooth-blue/90 text-white">
                <Link to="/o-que-e">
                  Começar Exploração
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-bluetooth-blue/30 hover:bg-bluetooth-light">
                <Link to="/ficha-tecnica">
                  Ver Comparação
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bluetooth-light mb-4 group-hover:animate-float">
                <Bluetooth className="h-8 w-8 text-bluetooth-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Bluetooth Clássico</h3>
              <p className="text-muted-foreground">Ideal para áudio contínuo e transferência de arquivos</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-energy-green/10 mb-4 group-hover:animate-float">
                <Zap className="h-8 w-8 text-energy-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Bluetooth Low Energy</h3>
              <p className="text-muted-foreground">Perfeito para sensores e dispositivos com bateria</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bluetooth-cyan/10 mb-4 group-hover:animate-float">
                <Wifi className="h-8 w-8 text-bluetooth-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Conectividade Inteligente</h3>
              <p className="text-muted-foreground">Cada protocolo tem seu propósito específico</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para mergulhar na tecnologia?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Explore todos os aspectos do Bluetooth e BLE de forma didática e visual
          </p>
          <Button asChild size="lg" className="bg-white text-bluetooth-blue hover:bg-white/90">
            <Link to="/o-que-e">
              Começar Jornada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;