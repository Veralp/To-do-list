const con = require('../dao/connect')
const Tarefa = require('../models/tarefa')

const teste = (req, res) => {
    res.json("API respondendo").end()
}
const criar = (req, res) => {
    let tarefa = new Tarefa(req.body)
    con.query(tarefa.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}
const listar = (req, res) => {
    let tarefa = new Tarefa(req.params)
    con.query(tarefa.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}
const alterar = (req, res) => {
    let tarefa = new Tarefa (req.body)
    con.query(tarefa.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let tarefa = new Tarefa(req.params)
    con.query(tarefa.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
}