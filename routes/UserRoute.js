import express from 'express'
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controller/UserController.js'

const router = express.Router()

router.get('/api/v1/users', getUsers)
router.get('/api/v1/user/:id', getUserById)
router.post('/api/v1/addUser', createUser)
router.patch('/api/v1/editUser/:id', updateUser)
router.delete('/api/v1/deleteUser/:id', deleteUser)

export default router