import express from 'express'
import { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer } from '../controller/CustomerController.js'

const router = express.Router()

router.get('/api/v1/customers', getCustomers)
router.get('/api/v1/customer/:id', getCustomerById)
router.post('/api/v1/addCustomer', createCustomer)
router.patch('/api/v1/editCustomer/:id', updateCustomer)
router.delete('/api/v1/deleteCustomer/:id', deleteCustomer)

export default router