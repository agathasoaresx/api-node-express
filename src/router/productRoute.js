import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const products = [
        {id: 1, name: "Produto 1"},
        {id: 2, name: "Produto 2"},
        {id: 3, name: "Produto 3"},
        ]
        res.json(products)
    } )

router.post('/', (req, res) => {
    const dados = req.body
    // pegar os dados
    res.json({
        message: "Produto criado com sucesso",
        dados: dados
    })
})

router.put('/', (req, res) => {
    // Update
    const dados = req.body

    res.json({
        message: "Produto atualizado com sucesso",
        dados: dados})  
})

router.delete('/', (req, res) => { 
    // Delete
    res.json({message: "Produto deletado com sucesso"})  
})

export default router