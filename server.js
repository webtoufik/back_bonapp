import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import TruckRoute from './routes/TruckRoute.js'
dotenv.config()

const app = express()
const port = process.env.APP_PORT || 9500

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(TruckRoute)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

export default app