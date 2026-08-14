const mongoose = require("mongoose")

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb://fullstackopen:${password}@ac-z8l1ddy-shard-00-00.hxndo4v.mongodb.net:27017,ac-z8l1ddy-shard-00-01.hxndo4v.mongodb.net:27017,ac-z8l1ddy-shard-00-02.hxndo4v.mongodb.net:27017/phoneBookApp?ssl=true&replicaSet=atlas-qqtb2i-shard-0&authSource=admin&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model("Person", personSchema)

if (name && number) {
  const person = new Person({
    name: name,
    number: number,
  })

  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  })
} else {
  Person.find().then(result => {
    result.forEach(person => {
      console.log(person);
    })
    mongoose.connection.close();
  })
}


