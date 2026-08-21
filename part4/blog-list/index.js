const express = require('express')
const blogsRouter = require('./controllers/blogs.js')

const app = express()
app.use(express.json())
app.use('/api/blogs', blogsRouter)


const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
