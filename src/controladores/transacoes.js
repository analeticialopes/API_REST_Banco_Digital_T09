const { contas, depositos, saques, transferencias } = require('../bancodedados');

const { format } = require('date-fns')

const saldoDepositos = (req, res) => {

    const { numero_conta, valor } = req.body

    if (!numero_conta || !valor) {
        return res.status(400).json({ mensagem: "O número da conta e o valor são obrigatórios!" })
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: "O valor do depósito deve ser maior que zero." })
    }
    const contaEncontrada = contas.find((conta) => conta.numero === numero_conta);

    if (!contaEncontrada) {
        res.status(404).json({ message: "Conta não encontrada." })
    }

    contaEncontrada.saldo += valor

    const deposito = {
        "data": format(new Date(), 'yyyy/MM/dd HH:mm:ss'),
        "numero_conta": numero_conta,
        "valor": valor
    }
    depositos.push(deposito)

    return res.status(200).json()
}

const saquesRealizados = (req, res) => {

    const { numero_conta, valor, senha } = req.body

    if (!numero_conta || !valor || !senha) {
        return res.status(400).json({ mensagem: "O número da conta, o valor e a senha são obrigatórios!" })
    }

    const contaEncontrada = contas.find((conta) => conta.numero === numero_conta);

    if (contaEncontrada.saldo < valor) {
        return res.status(400).json({ mensagem: "O valor não pode ser menor que zero!" })
    }

    if (contaEncontrada.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: "Senha incorreta" })
    }

    if (!contaEncontrada) {
        res.status(404).json({ message: "Conta não encontrada." })
    }

    contaEncontrada.saldo -= valor

    const saque = {
        "data": format(new Date(), 'yyyy/MM/dd HH:mm:ss'),
        "numero_conta": numero_conta,
        "valor": valor
    }
    saques.push(saque)
    return res.status(200).json()
}

const fazerTransferencias = (req, res) => {

    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body

    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
        return res.status(400).json({ mensagem: "O número da conta origem, número da conta destino, o valor e a senha são obrigatórios!" })
    }

    const contaEncontradaOrigem = contas.find((conta) => conta.numero === numero_conta_origem);
    const contaEncontradaDestino = contas.find((conta) => conta.numero === numero_conta_destino);

    if (contaEncontradaOrigem.saldo < valor) {
        return res.status(400).json({ mensagem: "O valor não pode ser menor que zero!" })
    }

    if (contaEncontradaOrigem.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: "Senha incorreta" })
    }

    if (!contaEncontradaOrigem) {
        return res.status(404).json({ message: "Conta não encontrada." })
    }

    contaEncontradaOrigem.saldo -= valor
    contaEncontradaDestino.saldo += valor

    const transferencia = {
        "data": format(new Date(), 'yyyy/MM/dd HH:mm:ss'),
        "numero_conta_origem": numero_conta_origem,
        "numero_conta_destino": numero_conta_destino,
        "valor": valor
    }
    transferencias.push(transferencia)
    return res.status(200).json()
}

module.exports = {
    saldoDepositos,
    saquesRealizados,
    fazerTransferencias
}