const express = require('express') //para chamar módulos
const consign = require('consign') //para agrupar todas as rotas que formos criando dentro do app
const bodyParser = require('body-parser') //para conseguir ler os dados que estamos recebendo no body

module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true})) //lendo dados urlenconded
    app.use(bodyParser.json()) //lendo dados json

    consign()
        .include('controllers')
        .into(app)

    return app
}
