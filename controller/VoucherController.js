import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getVouchers = async (req, res) => {
    try {
        const response = await prisma.vouchers.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getVoucherById = async (req, res) => {
    try {
        const response = await prisma.vouchers.findUnique({
            where: {
                voucher_id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createVoucher = async (req, res) => {
    const { number, date, placestart, placeend, timestart, timeend, comments, users_id, drivers_id, trucks_id, customers_id, created_at } = req.body
    try {
        const voucher = await prisma.vouchers.create({
            data: {
                number: number,
                date: new Date(date),
                placestart: placestart,
                placeend: placeend,
                timestart: timestart,
                timeend: timeend,
                comments: comments,
                users_id: users_id,
                drivers_id: drivers_id,
                trucks_id: trucks_id,
                customers_id: customers_id,
                created_at: new Date(),
            },
        })
        res.status(201).json(voucher)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateVoucher = async (req, res) => {
    const { number, date, placestart, placeend, timestart, timeend, comments, users_id, drivers_id, trucks_id, customers_id } = req.body
    try {
        const voucher = await prisma.vouchers.update({
            where: {
                voucher_id: Number(req.params.id),
            },
            data: {
                number: number,
                date: new Date(date),
                placestart: placestart,
                placeend: placeend,
                timestart: timestart,
                timeend: timeend,
                comments: comments,
                users_id: users_id,
                drivers_id: drivers_id,
                trucks_id: trucks_id,
                customers_id: customers_id,
            },
        })
        res.status(200).json(voucher)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteVoucher = async (req, res) => {
    try {
        const voucher = await prisma.vouchers.delete({
            where: {
                voucher_id: Number(req.params.id),
            },
        })
        res.status(200).json(voucher)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}