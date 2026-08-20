const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const cors = require('cors')
const Person = require('./models/person.js')
// const generateRandomId = require('./utils/generateRandomId')
const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())

morgan.token('body', (req) => {
  return req.method === 'POST' ? JSON.stringify(req.body) : ''
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// let persons = [
//   {
//     'id': '1',
//     'name': 'Arto Hellas',
//     'number': '040-123456'
//   },
//   {
//     'id': '2',
//     'name': 'Ada Lovelace',
//     'number': '39-44-5323523'
//   },
//   {
//     'id': '3',
//     'name': 'Dan Abramov',
//     'number': '12-43-234345'
//   },
//   {
//     'id': '4',
//     'name': 'Mary Poppendieck',
//     'number': '39-23-6423122'
//   }
// ]

app.get('/api/info', (req, res) => {
  Person.find({}).then(persons => {
    console.log(persons.length)
    const entries = persons.length
    const message = `Phonebook has info for ${entries} ${entries === 1 ? 'person' : 'people'}.`
    const time = new Date()
    res.send(`
      <div>
        <p>${message}</p>
        <p>${time}</p>
      </div>
    `)
  })
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id
  Person.findById(id).then(person => {
    if(person) {
      res.json(person)
    }

    if(!person) {
      res.status(404).end()
    }
  })
})

app.delete('/api/persons/:id', (req, res, next) => {
  const id = req.params.id
  Person.findByIdAndDelete(id).then(person => {
    res.json(person)
  }).catch(error => {
    next(error)
  })
})

app.post('/api/persons', (req, res, next) => {

  const body = req.body

  if(!body.name || !body.number) {
    return res.status(400).json({ 'error': 'Must contain both name and number' })
  }

  // const existingNames = persons.some(person => person.name === body.name)
  // // console.log(existingNames);
  // if(existingNames) {
  //   return res.status(409).json({"error": "name must be unique"})
  // }

  const person = new Person({
    'name': body.name,
    'number': body.number
  })

  person.save().then(savedPerson => {
    res.json(savedPerson)
  }).catch(error => {
    next(error)
  })

})

app.put('/api/persons/:id', (req, res, next) => {
  const id = req.params.id
  const { name, number } = req.body
  // console.log(name, number);

  Person.findById(id).then(person => {
    // console.log(person);

    if(!person){
      res.status(404).end()
    }

    if(person.name === name){
      person.number = number

      return person.save().then(savedContact => {
        res.json(savedContact)
      }).catch(error => {
        next(error)
      })
    }
  })
})

const errorHandler = (error, req, res, next) => {
  console.log(error.message)
  if(error.name === 'CastError'){
    return res.status(400).send({ error: 'malformatted id' })
  }else if (error.name === 'ValidationError'){
    return res.status(400).send({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running a port ${PORT}`)
})
