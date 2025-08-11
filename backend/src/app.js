const express = require('express')
const authRoutes = require('./routes/auth.route')
const cookieParser = require('cookie-parser')
const promptRoutes = require('./routes/prompt.route');

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/prompts', promptRoutes);


module.exports = app;