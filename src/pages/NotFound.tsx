import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center py-20">
      <div className="text-center max-w-md mx-auto animate-slide-in">
        <div className="text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
          404
        </div>
        <h1 className="text-2xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-muted-foreground mb-8">
          Oops! A página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="gradient">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Voltar ao Início
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/projetos">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Ver Projetos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
