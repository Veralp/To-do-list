class Tarefa {

    constructor(i) {
        this.id = i.id
        this.tarefa = i.tarefa
        this.data = i.data
        this.status = i.status
    }

    create() {
        return `INSERT INTO task VALUE(default,'${this.tarefa}','${this.data}','${this.status}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM task`
        else
            return `SELECT * FROM task WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE task SET tarefa = '${this.tarefa}', data = '${this.data}', status = '${this.status}' WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM task WHERE id = ${this.id}`
    }
}

module.exports = Tarefa 