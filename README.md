# Sistema de Agendamento para Corte de Cabelo

## Estrutura

- backend/: código do servidor Node.js com Express
- frontend/: site responsivo com formulário e lista de agendamentos

## Como rodar localmente

1. Instale o Node.js ([nodejs.org](https://nodejs.org/))
2. No terminal, acesse a pasta `backend` e rode:
   ```
   npm install express cors
   node app.js
   ```
3. Abra o arquivo `frontend/index.html` no navegador
4. O backend estará rodando no `http://localhost:3000`

## Funcionalidades

- Agendar corte informando nome, telefone e data/hora
- Listar agendamentos pendentes e cancelados
- Cancelar agendamento