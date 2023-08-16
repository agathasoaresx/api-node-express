import express from 'express'
import listUsers from '../controllers/User/listUsers.js'
import getUser from '../controllers/User/getUser.js'
import createUser from '../controllers/User/createUser.js'
import updateUser from '../controllers/User/updateUser.js'
import deleteUser from '../controllers/User/deleteUser.js'

const router = express.Router()

router.get('/', getUser)
router.get('/list', listUsers)
router.post('/', createUser)
router.put('/', updateUser)
router.delete('/', deleteUser)


export default router