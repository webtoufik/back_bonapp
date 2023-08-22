import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import TruckRoute from './routes/TruckRoute.js'
import DriverRoute from './routes/DriverRoute.js'
import CustomerRoute from './routes/CustomerRoute.js'
import UserRoute from './routes/UserRoute.js'
import VoucherRoute from './routes/VoucherRoute.js'
dotenv.config()

const app = express()
const port = process.env.APP_PORT || 9500

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(TruckRoute)
app.use(DriverRoute)
app.use(CustomerRoute)
app.use(UserRoute)
app.use(VoucherRoute)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

export default app