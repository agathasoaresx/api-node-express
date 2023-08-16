const createUser = (req, res) => {
    // pegar os dados
    const dados = req.body

    res.json({
        message: "Usuário criado com sucesso",
        dados: dados
        })
}

export default createUser