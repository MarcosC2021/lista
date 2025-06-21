# Lista de Tarefas

Aplicação full stack para gerenciar tarefas, composta por um frontend em React e um backend em Node.js/Express.

## Estrutura do projeto

- `frontend/` – aplicação React responsável pela interface.
- `backend/` – API construída com Express para gerenciar os dados.
- `docker-compose.yml` – configuração para executar os serviços com Docker.

## Como executar

É possível iniciar a aplicação utilizando o Docker Compose:

```bash
docker-compose up
```

A interface ficará disponível em `http://localhost:3000` e a API em
`http://localhost:5000`. O banco de dados PostgreSQL será iniciado no contêiner
`db` na porta `5432`.
