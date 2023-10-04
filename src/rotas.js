const express = require('express')
const { listarContas, addConta, atualizarDados, excluirConta, consultarSaldo, consultarExtrato } = require('./controladores/contas')
const { saldoDepositos, saquesRealizados, fazerTransferencias } = require('./controladores/transacoes')

const rotas = express()

rotas.get('/contas', listarContas)
rotas.post('/contas', addConta)
rotas.put('/contas/:numeroConta/usuario', atualizarDados)
rotas.delete('/contas/:numeroConta', excluirConta)

rotas.post('/transacoes/depositar', saldoDepositos)
rotas.post('/transacoes/sacar', saquesRealizados)
rotas.post('/transacoes/transferir', fazerTransferencias)

rotas.get('/contas/saldo', consultarSaldo)
rotas.get('/contas/extrato', consultarExtrato)


module.exports = rotas