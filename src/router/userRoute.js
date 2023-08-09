import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const users = [
        {id: 1, name: "João"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Francisco"},
        ]
        res.json(users)
    } )
    
router.post('/', (req, res) => {
    // pegar os dados
    const dados = req.body

    res.json({
        message: "Usuário criado com sucesso",
        dados: dados
        })
} )

router.put('/', (req, res) => {
    // Update
    const dados = req.body

    res.json({
        message: "Usuário atualizado com sucesso",
        dados: dados
    })  
})
    
router.delete('/', (req, res) => { 
    // Delete
    res.json({message: "Usuário deletado com sucesso"})  
} )


export default router