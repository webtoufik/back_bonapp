import express from 'express'
import { getTrucks, getTruckById, createTruck, updateTruck, deleteTruck } from '../controller/TruckController.js'

const router = express.Router()

router.get('/api/v1/trucks', getTrucks)
router.get('/api/v1/truck/:truck_id', getTruckById)
router.post('/api/v1/addTruck', createTruck)
router.patch('/api/v1/editTruck/:id', updateTruck)
router.delete('/api/v1/deleteTruck/:truck_id', deleteTruck)

export default router