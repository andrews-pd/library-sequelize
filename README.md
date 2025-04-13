# library-sequelize

Um repositório contendo um projeto de estudo utilizando Sequelize.

## Features

- API construída com Node.js e Express.
- Banco de dados MySQL gerenciado com Sequelize.
- Suporte a migrações e seeders.
- Configuração de ambiente com Docker e Docker Compose.
- Versionamento de código com Git.

## Requisitos

- **Node.js** 20+
- **Docker** e **Docker Compose**
- **MySQL**

## Estrutura do Projeto

```plaintext
├── src/
│   ├── app.ts                # Configuração do servidor Express
│   ├── server.ts             # Inicialização do servidor
│   ├── controllers/          # Controladores para gerenciar as requisições
│   ├── services/             # Lógica de negócios e integração com os modelos
│   │   └── validations/      # Validações específicas da aplicação
│   ├── database/
│   │   ├── config/           # Configurações do banco de dados
│   │   ├── migrations/       # Arquivos de migração
│   │   ├── models/           # Definições de modelos Sequelize
│   │   └── seeders/          # Seeders para popular o banco
│   ├── interfaces/           # Definições de tipos e interfaces TypeScript
│   ├── jwt/                  # Configuração e gerenciamento de tokens JWT
│   ├── routes/               # Definição das rotas da aplicação
├── build/                    # Código transpilado
├── docker-compose.yaml       # Configuração do Docker Compose
├── Dockerfile                # Configuração do Docker
├── package.json              # Dependências e scripts do projeto
└── tsconfig.json             # Configuração do TypeScript
```

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/library-sequelize.git
   cd library-sequelize
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```env
   DB_USER=root
   DB_PASS=password
   DB_NAME=library
   DB_HOST=db
   JWT_SECRET=sua-chave-secreta
   PORT=3000
   ```

4. **Inicie o ambiente com Docker Compose**:
   ```bash
   docker-compose up
   ```

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento.
- **`npm run lint`**: Verifica o código com ESLint.
- **`npm run lint:fix`**: Corrige automaticamente problemas detectados pelo ESLint.