const mongoose = require('mongoose')

// const password = process.argv[2]
// const name = process.argv[3]
// const number = process.argv[4]

const url = process.env.MONGODB_URI

mongoose.set('strictQuery',false)

console.log('connecting to', url)
mongoose.connect(url, { family: 4 })
  .then(() => {
    console.log('connected to mongoDb', url)
  }).catch(error => {
    console.log('failed to connect to mongodb:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{2}-\d{5}/.test(v)
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    minLength: 8,
    required: true
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)
