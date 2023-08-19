import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getDrivers = async (req, res) => {
    try {
        const response = await prisma.drivers.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getDriverById = async (req, res) => {
    try {
        const response = await prisma.drivers.findUnique({
            where: {
                driver_id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createDriver = async (req, res) => {
    const { firstname, lastname, dateofbirth, phone, created_at } = req.body
    try {
        const driver = await prisma.drivers.create({
            data: {
                firstname: firstname,
                lastname: lastname, 
                dateofbirth: new Date(dateofbirth),
                phone: parseInt(phone), 
                created_at: new Date(),
            },
        })
        res.status(201).json(driver)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateDriver = async (req, res) => {
    const { firstname, lastname, dateofbirth, phone, created_at } = req.body
    try {
        const driver = await prisma.drivers.update({
            where: {
                driver_id: Number(req.params.id),
            },
            data: {
                firstname: firstname,
                lastname: lastname,
                dateofbirth: new Date(dateofbirth),
                phone: parseInt(phone),
            },
        })
        res.status(200).json(driver)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteDriver = async (req, res) => {
    try {
        const driver = await prisma.drivers.delete({
            where: {
                driver_id: Number(req.params.id),
            },
        })
        res.status(200).json(driver)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}