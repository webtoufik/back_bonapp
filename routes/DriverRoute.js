import express from 'express'
import { getDrivers, getDriverById, createDriver, updateDriver, deleteDriver } from '../controller/DriverController.js'

const router = express.Router()

router.get('/api/v1/drivers', getDrivers)
router.get('/api/v1/driver/:id', getDriverById)
router.post('/api/v1/addDriver', createDriver)
router.patch('/api/v1/editDriver/:id', updateDriver)
router.delete('/api/v1/deleteDriver/:id', deleteDriver)

export default router