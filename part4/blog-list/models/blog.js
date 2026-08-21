const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const password = process.argv[2]

const mongoUrl = `mongodb://fullstackopen:${password}@ac-z8l1ddy-shard-00-00.hxndo4v.mongodb.net:27017,ac-z8l1ddy-shard-00-01.hxndo4v.mongodb.net:27017,ac-z8l1ddy-shard-00-02.hxndo4v.mongodb.net:27017/blogListApp?ssl=true&replicaSet=atlas-qqtb2i-shard-0&authSource=admin&appName=Cluster0`
mongoose.connect(mongoUrl, { family: 4 })

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)
