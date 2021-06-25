const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body //conteúdo do body é um atendimento

        Atendimento.adiciona(atendimento)
        res.send("Post atendimento") //para criar um novo atendimento e consumir essa rota usando o Postman
    })

}

