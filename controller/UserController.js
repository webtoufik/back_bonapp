import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt';
const saltRounds = 10;

export const getUsers = async (req, res) => {
    try {
        const response = await prisma.users.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await prisma.users.findUnique({
            where: {
                user_id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createUser = async (req, res) => {
    const { firstname, lastname, email, password, role, created_at } = req.body

    try {

        // Verification de l'existence de l'email
        let userEmail = await prisma.users.findUnique({
            where: {
                email: (req.body.email)
            }
        })
    
        // Gestion d'erreur si l'email est déjà utilisé
        if (userEmail) {
            return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
        }
    
        // Hachage du password
        let hash = await bcrypt.hash(req.body.password, saltRounds);
        
        const user = await prisma.users.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hash,
                role: role,
                created_at: new Date(),
            },
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateUser = async (req, res) => {
    const { firstname, lastname, email, role } = req.body
    try {

         // Verification de l'existence de l'email
         let userEmail = await prisma.users.findUnique({
            where: {
                email: (req.body.email)
            }
        })
    
        // Gestion d'erreur si l'email est déjà utilisé
        if (userEmail) {
            return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
        }

        const user = await prisma.users.update({
            where: {
                user_id: Number(req.params.id),
            },
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                role: role,
            },
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await prisma.users.delete({
            where: {
                user_id: Number(req.params.id),
            },
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}