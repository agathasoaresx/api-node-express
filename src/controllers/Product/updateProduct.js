import product from '../../models/productModel.js'

const updateProduct = async (req, res) => {
    try{
        const id = req.body.id
        const [result] = await product.update(req.body)
        if(result.affectedRows === 1) {
            res.status(200).json({message: `Product id: ${id} Updated Successfully!`,
                product:{
                    ...req.body
                }  
                
                })
        } else {
            res.status(404).json({message: `Product id: ${id} Not Found!`})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
}

export default updateProduct