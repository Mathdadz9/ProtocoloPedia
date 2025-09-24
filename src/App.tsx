import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WhatIs from "./pages/WhatIs";
import TechSpecs from "./pages/TechSpecs";
import UseCases from "./pages/UseCases";
import Limitations from "./pages/Limitations";
import SeeInAction from "./pages/SeeInAction";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-que-e" element={<WhatIs />} />
            <Route path="/ficha-tecnica" element={<TechSpecs />} />
            <Route path="/casos-de-uso" element={<UseCases />} />
            <Route path="/limitacoes" element={<Limitations />} />
            <Route path="/veja-em-acao" element={<SeeInAction />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
