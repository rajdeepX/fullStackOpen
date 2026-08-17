const mongoose = require("mongoose")

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
// const name = process.argv[3]
// const number = process.argv[4]

const url = `mongodb://fullstackopen:${password}@ac-z8l1ddy-shard-00-00.hxndo4v.mongodb.net:27017,ac-z8l1ddy-shard-00-01.hxndo4v.mongodb.net:27017,ac-z8l1ddy-shard-00-02.hxndo4v.mongodb.net:27017/phoneBookApp?ssl=true&replicaSet=atlas-qqtb2i-shard-0&authSource=admin&appName=Cluster0`

mongoose.set('strictQuery',false)

console.log('connecting to', url)
mongoose.connect(url, { family: 4 })
  .then(result => {
    console.log("connected to mongoDb", url);
  }).catch(error => {
    console.log("failed to connect to mongodb:", error.message);
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model("Person", personSchema)
