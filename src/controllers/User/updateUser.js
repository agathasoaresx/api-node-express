const updateUser = (req, res) => {
    // Update
    const dados = req.body

    res.json({
        message: "Usuário atualizado com sucesso",
        dados: dados
    })  
}

export default updateUser