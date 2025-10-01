# 📘 ProtocoloPedia

O **ProtocoloPedia** é uma plataforma interativa voltada para o estudo, consulta e documentação de protocolos de comunicação e redes.  
A proposta é oferecer uma forma clara e organizada de visualizar informações técnicas, fluxos de comunicação e conceitos de redes.  

---

## 🚀 Funcionalidades

- 📑 **Documentação organizada** por tópicos de protocolos.  
- 🔍 **Busca rápida** por termos e conceitos.  
- 📊 **Diagramas explicativos** em tempo real (usando Mermaid).  
- 🖥️ **Interface limpa e responsiva**.  

---

## 📂 Estrutura do Projeto

```bash
ProtocoloPedia/
│── assets/          # Imagens, ícones e arquivos estáticos
│── src/             # Código-fonte principal
│   ├── components/  # Componentes reutilizáveis
│   ├── pages/       # Páginas principais do sistema
│   └── utils/       # Funções auxiliares
│── README.md        # Documentação do projeto
│── package.json     # Dependências e scripts

## 🛠️ Tecnologias Utilizadas
 HTML5 / CSS3 / JavaScript

 Framework Frontend (React ou similar)

 TailwindCSS para estilização moderna

 Mermaid.js para geração de diagramas

## 📊 Diagramas (Mermaid)
    1. Fluxo de Usuário
```mermaid

flowchart TD
    A[Usuário acessa o ProtocoloPedia] --> B[Busca protocolo ou termo]
    B --> C{Protocolo encontrado?}
    C -->|Sim| D[Exibe documentação detalhada]
    C -->|Não| E[Mensagem: Não encontrado]
    D --> F[Usuário pode salvar ou compartilhar]
```

## 2. Estrutura de Páginas
 ``` mermaid

graph LR
    Home[🏠 Página Inicial] --> Search[🔍 Busca de Protocolos]
    Home --> Docs[📑 Documentação]
    Docs --> TCP[🔗 Protocolo TCP]
    Docs --> UDP[📡 Protocolo UDP]
    Docs --> HTTP[🌐 Protocolo HTTP]
    Docs --> HTTPS[🔒 Protocolo HTTPS]

```

3. Arquitetura do Sistema
``` mermaid

flowchart TB
    subgraph Frontend
        UI[Interface do Usuário] --> Components[Componentes React]
    end

    subgraph Backend
        API[API REST] --> DB[(Banco de Dados)]
    end

    UI --> API
    Components --> API
    API --> DB
```

4. Modelo OSI
```mermaid

graph TD
    Fisico[Camada Física] --> Enlace[Camada de Enlace]
    Enlace --> Rede[Camada de Rede]
    Rede --> Transporte[Camada de Transporte]
    Transporte --> Sessao[Camada de Sessão]
    Sessao --> Apresentacao[Camada de Apresentação]
    Apresentacao --> Aplicacao[Camada de Aplicação]
5. Comunicação TCP vs UDP
``` 
```mermaid

flowchart LR
    ClienteTCP[Cliente TCP] -->|Conexão estabelecida| ServidorTCP[Servidor TCP]
    ClienteUDP[Cliente UDP] -->|Sem conexão direta| ServidorUDP[Servidor UDP]

    ServidorTCP -->|Entrega confiável| DadosTCP[Dados recebidos em ordem]
    ServidorUDP -->|Entrega rápida, sem garantia| DadosUDP[Dados recebidos possivelmente fora de ordem]
```

6. Fluxo de Requisição HTTP
```mermaid

sequenceDiagram
    participant U as Usuário
    participant N as Navegador
    participant S as Servidor Web

    U->>N: Digita URL e pressiona Enter
    N->>S: Envia requisição HTTP GET
    S-->>N: Responde com código 200 OK + conteúdo
    N-->>U: Renderiza a página no navegador
```

7. Fluxo de Requisição HTTPS (com TLS/SSL)
```mermaid

sequenceDiagram
    participant U as Usuário
    participant B as Navegador
    participant S as Servidor Seguro

    U->>B: Digita https:// e pressiona Enter
    B->>S: Inicia handshake TLS
    S-->>B: Envia certificado digital
    B->>S: Verifica autenticidade e cria chave de sessão
    S-->>B: Conexão segura estabelecida
    B->>S: Envia requisição HTTP criptografada
    S-->>B: Responde com conteúdo criptografado
    B-->>U: Renderiza a página de forma segura
```
## 📦 Instalação e Uso
bash

# Clone este repositório
git clone https://github.com/seu-usuario/ProtocoloPedia.git

# Acesse a pasta
cd ProtocoloPedia

# Instale as dependências
npm install

# Execute o projeto
npm run dev
