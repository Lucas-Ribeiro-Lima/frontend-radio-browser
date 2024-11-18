# 🎵 Rádio Nostalgia Web

Uma aplicação moderna que resgata a magia das rádios tradicionais, permitindo que os usuários escutem suas rádios favoritas diretamente do navegador. Redescubra a nostalgia da rádio com funcionalidades inovadoras, como streaming ao vivo e criação de listas de favoritos.

---

## ✨ Descrição do Projeto

A Rádio Nostalgia Web é uma aplicação projetada para oferecer uma experiência simples e imersiva. Com foco na acessibilidade e usabilidade, os usuários podem:

- Explorar rádios por país e idioma.
- Criar e gerenciar uma lista de rádios favoritas.
- Ouvir rádios via streaming diretamente no navegador.

---

## 🚀 Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Frameworks**: Next.js, React
- **Estilização**: Tailwind CSS
- **Componentes**: Shadcn/UI
- **Gerenciamento de Estado**: Custom Hooks e LocalStorage
- **Player de Áudio**: Howler.js
- **HTTP Client**: Axios
- **Containerização**: Docker
- **Hospedagem**: Vercel

---

## 🔍 Fases do Desenvolvimento

### 1. Leitura da Documentação da API

O primeiro passo foi entender a API fornecida, que pode ser encontrada [aqui](https://de1.api.radio-browser.info/#General). A API oferece suporte para:
- Paginação de dados.
- Listagem de países e idiomas para filtragem.

Essa estrutura simplifica a implementação de funcionalidades como filtros e paginação, garantindo um desenvolvimento eficiente.

---

### 2. Arquitetura e Ferramentas

Adotei a **arquitetura hexagonal**, separando as responsabilidades em camadas:
- **Serviços**: Comunicação direta com a API.
- **Adapters**: Abstrações para manter o desacoplamento.
- **Hooks**: Gerenciamento de estados e ciclos de vida no React.
- **Componentes**: Modularização de partes reutilizáveis, seguindo padrões de composição e princípios do SOLID.

#### Ferramentas-chave:
- **TailwindCSS**: Escolhido por sua compatibilidade, performance e facilidade de manutenção.
- **Shadcn/UI**: Componentes preestilizados altamente customizáveis para desenvolvimento ágil.

---

### 3. Serviços e Consumo da API

- **Interfaces** para os objetos de cliente HTTP e serviços, seguindo os princípios de:
- **Inversão de Dependência**: Facilita a substituição do cliente HTTP, como Axios, por outras opções futuramente.
- **Testabilidade**: Estrutura modular que facilita testes unitários e de integração.

---

### 4. Design e Estilização

O desenvolvimento começou pelas telas **mobile-first**, garantindo:
- Maior facilidade na transição para layouts desktop.
- Redução da complexidade ao ajustar propriedades CSS para diferentes tamanhos de tela.

---

### 5. Gerenciamento de Estado

Para a funcionalidade de favoritos:
- Optei por armazenar os dados no **LocalStorage** e gerenciar o estado com React.
- Usei **hooks personalizados** para separar lógica de negócio, renderização e serviços.

---

### 6. Player de Rádio

O player foi desenvolvido com **Howler.js**, escolhido por sua:
- Flexibilidade e customização.
- Eficiência no gerenciamento de áudio para aplicações modernas.

---
## 🛠️ DevOps

Utilizei uma abordagem **Docker Multistage** para otimizar o processo de build e garantir segurança. A imagem final inclui apenas os artefatos necessários para produção.

### Dockerfile:
```dockerfile
# Etapa 1: Builder
FROM node:23-alpine3.20 as builder

# Criar usuário e grupo
RUN addgroup -S coodesh && adduser -S coodesh -G coodesh

# Configurar diretório de trabalho
WORKDIR /coodesh

# Copiar e instalar dependências
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copiar código-fonte e realizar build
COPY . .
RUN yarn build

# Etapa 2: Final
FROM node:23-alpine3.20

# Criar usuário e grupo
RUN addgroup -S coodesh && adduser -S coodesh -G coodesh

# Configurar diretório de trabalho
WORKDIR /coodesh

# Copiar arquivos essenciais
COPY --from=builder /coodesh/node_modules ./node_modules
COPY --from=builder /coodesh/.next ./.next
COPY --from=builder /coodesh/package.json ./

# Definir a URL da API (Dado não sensivel)
ENV NEXT_PUBLIC_API_URL=https://de1.api.radio-browser.info/json/

# Definir usuário e expor porta
USER coodesh
EXPOSE 3000

# Comando para iniciar o container
CMD ["yarn", "start"]
```

### Vercel

[Link do projeto em produção na vercel](https://frontend-radio-browser-mu.vercel.app)