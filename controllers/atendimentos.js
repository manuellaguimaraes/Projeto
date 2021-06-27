const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentoS/:id', (req, res) => {
        const id = parseInt(req.params.id) //convertenco o parâmetro id para inteiro (era string)

        Atendimento.buscaPorId(id, res)
    }) //parâmentro id
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body //atendimento recebe o conteúdo do body

        Atendimento.adiciona(atendimento, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body //não é o aatendimento completo, só alguns valores

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })

}

