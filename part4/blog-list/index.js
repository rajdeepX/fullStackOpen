const express = require('express')
const mongoose = require('mongoose')

const app = express()

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const password = process.argv[2]

const mongoUrl = `mongodb://fullstackopen:${password}@ac-z8l1ddy-shard-00-00.hxndo4v.mongodb.net:27017,ac-z8l1ddy-shard-00-01.hxndo4v.mongodb.net:27017,ac-z8l1ddy-shard-00-02.hxndo4v.mongodb.net:27017/blogListApp?ssl=true&replicaSet=atlas-qqtb2i-shard-0&authSource=admin&appName=Cluster0`
mongoose.connect(mongoUrl, { family: 4 })

app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog.save().then((result) => {
    console.log(result);

    response.status(201).json(result)
  })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
