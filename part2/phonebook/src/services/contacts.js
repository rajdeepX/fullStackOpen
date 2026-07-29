import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const create = (newContact) => {
  const request = axios.post(baseUrl, newContact)
  return request.then(response => response.data)
}

export default { create }
