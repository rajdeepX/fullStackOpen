import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const create = (newContact) => {
  const request = axios.post(baseUrl, newContact)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const update = (id, updateContact) => {
  const request = axios.put(`${baseUrl}/${id}`, updateContact)
  return request.then(response => response.data)
}

export default { create, remove, update }
