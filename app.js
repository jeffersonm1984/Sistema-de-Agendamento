const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let agendamentos = [];

app.post('/agendar', (req, res) => {
  const { nome, telefone, dataHora } = req.body;
  if (!nome || !telefone || !dataHora) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }
  const novoAgendamento = { id: agendamentos.length + 1, nome, telefone, dataHora, status: 'pendente' };
  agendamentos.push(novoAgendamento);
  res.json({ success: true, agendamento: novoAgendamento });
});

app.get('/agendamentos', (req, res) => {
  res.json(agendamentos);
});

app.put('/agendamentos/:id/cancelar', (req, res) => {
  const id = parseInt(req.params.id);
  const agendamento = agendamentos.find(a => a.id === id);
  if (!agendamento) return res.status(404).json({ error: 'Agendamento não encontrado.' });
  agendamento.status = 'cancelado';
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});