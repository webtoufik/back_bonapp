import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getTrucks = async (req, res) => {
    try {
        const response = await prisma.trucks.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getTruckById = async (req, res) => {
    try {
        const response = await prisma.trucks.findUnique({
            where: {
                truck_id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createTruck = async (req, res) => {
    const { name, immat, trailer, created_at } = req.body
    try {
        const truck = await prisma.trucks.create({
            data: {
                name: name,
                immat: immat,
                trailer: trailer,
                created_at: new Date(),
            },
        })
        res.status(201).json(truck)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateTruck = async (req, res) => {
    const { name, immat, trailer } = req.body
    try {
        const truck = await prisma.trucks.update({
            where: {
                truck_id: Number(req.params.id),
            },
            data: {
                name: name,
                immat: immat,
                trailer: trailer,
            },
        })
        res.status(200).json(truck)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteTruck = async (req, res) => {
    try {
        const truck = await prisma.trucks.delete({
            where: {
                truck_id: Number(req.params.id),
            },
        })
        res.status(200).json(truck)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}