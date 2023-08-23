import express from 'express'
import createProduct from '../controllers/Product/createProduct.js'
import getProduct from '../controllers/Product/getProduct.js'
import updateProduct from '../controllers/Product/updateProduct.js'
import deleteProduct from '../controllers/Product/deleteProduct.js'

const router = express.Router()

router.get('/', getProduct)
router.post('/', createProduct)
router.put('/', updateProduct)
router.delete('/', deleteProduct)

export default router