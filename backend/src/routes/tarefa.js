const express = require("express");
const router = express.Router();

const Tarefa = require('../controllers/tarefa');

router.get('/', Tarefa.teste);
router.post('/tarefa/criar', Tarefa.criar);
router.get('/tarefa/listar', Tarefa.listar);
router.get('/tarefa/listar/:tarefa', Tarefa.listar);
router.put('/tarefa/alterar', Tarefa.alterar);
router.delete('/tarefa/excluir/:id', Tarefa.excluir);

module.exports = router