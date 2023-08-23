import product from '../../models/productModel.js'

const getProduct = async (req, res) => {
    try{
        const [rows, fields] = await product.get(req.body.id)
        if(rows.length === 0) {
            res.status(404).json({message: `Product id: ${req.body.id} Not Found!`})
        } else {
            res.json(rows[0])
        }

    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
    
    res.json(products)
}

export default getProduct