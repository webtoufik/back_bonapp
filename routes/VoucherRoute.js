import express from 'express'
import { getVouchers, getVoucherById, createVoucher, updateVoucher, deleteVoucher } from '../controller/VoucherController.js'

const router = express.Router()

router.get('/api/v1/vouchers', getVouchers)
router.get('/api/v1/voucher/:id', getVoucherById)
router.post('/api/v1/voucher/add', createVoucher)
router.patch('/api/v1/voucher/edit/:id', updateVoucher)
router.delete('/api/v1/voucher/delete/:id', deleteVoucher)

export default router