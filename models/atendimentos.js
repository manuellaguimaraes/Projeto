const moment = require('moment')

const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss') //como está vazio, ele devolverá a data atual
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss') //data recebe a data que está no atendimento e a moment formata ela
        
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao) //validação da data, retorna true se a data for igual ou posterior à dataCriacao
        const clienteEhValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data', //nome do campo que estamos validando é data
                valido: dataEhValida,
                mensagem: 'Data deve ser igual ou posterior à data atual' //mensagem de erro

            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos 5 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido) //se não for válido, o campo será retornado e ficará salvo dentro dos erros
        const existemErros = erros.length

        if(existemErros) {
            res.status(400).json(erros)
        } else {
            const atendimentoDatado = {...atendimento, dataCriacao, data} //array com tudo que estiver dentro de atendimento e uma data de criação
       
            const sql = 'INSERT INTO Atendimentos SET ?'
    
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro) //alterando status HTTP
                } else {
                    res.status(201).json(resultados)
                }
            })
        }

    }
}

module.exports = new Atendimento