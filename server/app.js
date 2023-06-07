import express from 'express'
const app = express()
import cors from 'cors'

import scoreRoutes from './routes/scoreRoutes.js'

// CORS middleware
app.use(cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    allowedHeaders: ["Origin", "X-API-Key", "X-Requested-With", "Content-Type", "Authorization"],
}))

// Parse json in request body
app.use(express.json())

// Redirect requests to endpoint
app.use('/scores/', scoreRoutes)

// Global error handler
app.use((err, req, res, next) => {
    console.log("ERROR:")
    console.log(err)

    res.status(500).json({
        message: "Something went really wrong", stack: err.stack, name: err.name, code: err.code
    })
})

// Start api
const PORT = 3000
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))