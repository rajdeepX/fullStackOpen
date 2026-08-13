const express = require("express");
const morgan = require("morgan")
const generateRandomId = require("./utils/generateRandomId");
const app = express();

app.use(express.json())

morgan.token("body", (req)=> {
  return req.method === "POST" ? JSON.stringify(req.body) : ""
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    {
      "id": "1",
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": "2",
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": "3",
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": "4",
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]

app.get("/api/info", (req, res) => {
  const entries = persons.length
  const message = `Phonebook has info for ${entries} ${entries === 1 ? "person" : "people"}.`
  const time = new Date()
  res.send(`
    <div>
      <p>${message}</p>
      <p>${time}</p>
    </div>
    `);
})

app.get("/api/persons", (req, res) => {
  res.json(persons).end();
})

app.get("/api/person/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find(person => person.id === id);
  if(person) {
    res.json(person)
  }

  if(!person) {
    res.status(404).end();
  }
})

app.delete("/api/person/:id", (req, res) => {
  const id = req.params.id;
  persons = persons.filter(person => person.id !== id)

  res.status(204).end();
})

app.post("/api/persons", (req, res) => {
  const existingIds = persons.map(person => person.id);
  // console.log(existingIds);
  const randomId = generateRandomId(10, 1000, existingIds);
  // console.log(randomId);

  const body = req.body;

  if(!body.name || !body.number) {
    return res.status(400).json({"error": "Must contain both name and number"})
  }

  const existingNames = persons.some(person => person.name === body.name)
  // console.log(existingNames);
  if(existingNames) {
    return res.status(409).json({"error": "name must be unique"})
  }


  const newPerson = {
    "id": `${randomId}`,
    "name": `${body.name}`,
    "number": `${body.number}`
  }

  persons = persons.concat(newPerson)
  res.json(newPerson)

})

const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`Server is running a port ${PORT}`);
})
