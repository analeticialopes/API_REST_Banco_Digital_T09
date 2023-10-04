
const { contas, depositos, saques, transferencias } = require('../bancodedados');

let novaContaCriada = 1;

const listarContas = (req, res) => {
    return res.json(contas)
}

const addConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: "Preencher campos obrigatórios" })
    }

    const cpfCadastrado = contas.some(elemento => elemento.usuario.cpf === cpf)
    const emailCadastrado = contas.some(elemento => elemento.usuario.email === email)

    if (cpfCadastrado || emailCadastrado) {
        return res.status(400).json({ mensagem: 'CPF ou e-mail já cadastrados.' })
    }
    const novaConta = {
        numero: String(novaContaCriada),
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    }

    contas.push(novaConta)
    novaContaCriada++
    return res.status(201).send()

}

const atualizarDados = (req, res) => {
    const numero = req.params.numeroConta

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: "Preencher campos obrigatórios" })
    }

    const cpfCadastrado = contas.some(elemento => elemento.numero !== numero && elemento.usuario.cpf === cpf)
    const emailCadastrado = contas.some(elemento => elemento.numero !== numero && elemento.usuario.email === email)


    if (cpfCadastrado || emailCadastrado) {
        return res.status(400).json({ mensagem: 'CPF ou e-mail já cadastrados.' })
    }

    const alterarDados = contas.find(conta => conta.numero === numero)

    alterarDados.usuario.nome = nome
    alterarDados.usuario.cpf = cpf
    alterarDados.usuario.data_nascimento = data_nascimento
    alterarDados.usuario.telefone = telefone
    alterarDados.usuario.email = email
    alterarDados.usuario.senha = senha

    return res.status(200).json()
}

const excluirConta = (req, res) => {
    const numero = req.params.numeroConta

    const indiceContaExclusao = contas.findIndex(elemento => elemento.numero === numero)

    if (indiceContaExclusao < 0) {
        return res.status(404).json({ messagem: 'Conta não encontrada' })
    }
    if (contas[indiceContaExclusao].saldo === 0) {
        contas.splice(indiceContaExclusao, 1)
        return res.status(200).json()
    }
    return res.status(400).json({ mensagem: "A conta só pode ser removida se o saldo for zero!" })
}

const consultarSaldo = (req, res) => {

    const { numero_conta, senha } = req.query;

    if (!numero_conta || !senha) {
        return res.status(401).json({ mensagem: "Conta bancária ou Senha não encontrada!" })
    }

    const contaEncontrada = contas.find((conta) => conta.numero === numero_conta)

    if (!contaEncontrada) {
        res.status(404).json({ message: "Conta bancária não encontrada!" })
    }

    if (contaEncontrada.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: "Senha incorreta" })
    }

    const exibirSaldo = { "saldo": contaEncontrada.saldo };

    return res.status(200).json(exibirSaldo)
}

const consultarExtrato = (req, res) => {

    const { numero_conta, senha } = req.query;

    if (!numero_conta || !senha) {
        return res.status(401).json({ mensagem: "Conta bancária ou Senha não encontrada!" })
    }

    const contaEncontrada = contas.find((conta) => conta.numero === numero_conta)

    if (!contaEncontrada) {
        res.status(404).json({ message: "Conta bancária não encontrada!" })
    }

    if (contaEncontrada.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: "Senha incorreta" })
    }

    const depositosEncontrados = depositos.filter((movimento) => {
        return movimento.numero_conta === numero_conta
    })

    const saquesEncontrados = saques.filter((movimento) => {
        return movimento.numero_conta === numero_conta
    })

    const transfRecebidasEncontradas = transferencias.filter((movimento) => {
        return movimento.numero_conta_destino === numero_conta
    })

    const transfEnviadasEncontradas = transferencias.filter((movimento) => {
        return movimento.numero_conta_origem === numero_conta
    })

    const exibirExtrato = {
        depositos: depositosEncontrados,
        saques: saquesEncontrados,
        transferenciasEnviadas: transfEnviadasEncontradas,
        transferenciasRecebidas: transfRecebidasEncontradas
    }
    return res.status(200).json(exibirExtrato)
}

module.exports = {
    listarContas,
    addConta,
    atualizarDados,
    excluirConta,
    consultarSaldo,
    consultarExtrato
}
