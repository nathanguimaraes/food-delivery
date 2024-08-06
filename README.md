# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- # Full Stack Food Ordering Website

Este é um projeto de website de pedidos de comida desenvolvido utilizando React JS, MongoDB, Express, Node JS e Stripe. O objetivo deste projeto é fornecer uma plataforma onde os usuários possam visualizar, selecionar e pedir comida online, enquanto os administradores podem gerenciar os itens do menu e os pedidos.

## Tecnologias Utilizadas

- **Frontend**: React JS
- **Backend**: Node JS, Express
- **Banco de Dados**: MongoDB
- **Pagamento**: Stripe

## Funcionalidades

### Usuários
- Registro e Login
- Visualização do menu de comida
- Adição de itens ao carrinho
- Finalização de pedidos com pagamento via Stripe
- Histórico de pedidos

### Administradores
- Gerenciamento de itens do menu (adicionar, editar, remover)
- Visualização e atualização de pedidos

## Requisitos

- Node JS
- MongoDB
- Conta no Stripe

## Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

    Instale as dependências do backend

    bash

cd backend
npm install

Instale as dependências do frontend

bash

cd ../frontend
npm install

Configure as variáveis de ambiente

Crie um arquivo .env na pasta backend com as seguintes variáveis:

env

MONGO_URI=sua-url-mongodb
STRIPE_SECRET_KEY=sua-chave-secreta-stripe

Crie um arquivo .env na pasta frontend com as seguintes variáveis (se necessário):

env

REACT_APP_STRIPE_PUBLIC_KEY=sua-chave-publica-stripe

Inicie o servidor backend

bash

cd backend
npm start

Inicie o servidor frontend

bash

    cd ../frontend
    npm start

Estrutura do Projeto

bash

.
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── .env
│   ├── server.js
│   └── ...
└── frontend
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── App.js
    │   └── ...
    ├── public
    ├── .env
    └── ...
Toggle all file notes
Toggle all file annotations
0 comments on commit 815f271
