const express = require('express')
const blogsRouter = require('./controllers/blogs.js')
const mongoose = require('mongoose')
const config = require('./utils/config.js')

const app = express()
app.use(express.json())
app.use('/api/blogs', blogsRouter)

mongoose.connect(config.MONGODB_URI, { family: 4 })

module.exports = app
