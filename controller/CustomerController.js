import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getCustomers = async (req, res) => {
    try {
        const response = await prisma.customers.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getCustomerById = async (req, res) => {
    try {
        const response = await prisma.customers.findUnique({
            where: {
                customer_id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createCustomer = async (req, res) => {
    const { name, address, zipcode, city, country, phone, email, contact, comments, created_at } = req.body
    try {
        const customer = await prisma.customers.create({
            data: {
                name: name,
                address: address,
                zipcode: zipcode,
                city: city,
                country: country,
                phone: phone,
                email: email,
                contact: contact,
                comments: comments,
                created_at: new Date(),
            },
        })
        res.status(201).json(customer)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateCustomer = async (req, res) => {
    const { name, address, zipcode, city, country, phone, email, contact, comments, created_at } = req.body
    try {
        const customer = await prisma.costumers.update({
            where: {
                customer_id: Number(req.params.id),
            },
            data: {
                name: name,
                address: address,
                zipcode: zipcode,
                city: city,
                country: country,
                phone: phone,
                email: email,
                contact: contact,
                comments: comments,
                created_at: new Date(),
            },
        })
        res.status(200).json(customer)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteCustomer = async (req, res) => {
    try {
        const customer = await prisma.customers.delete({
            where: {
                customer_id: Number(req.params.id),
            },
        })
        res.status(200).json(customer)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}