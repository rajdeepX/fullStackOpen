const generateRandomId = (min, max, existingId) => {
  let id
  do {
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min
    id = String(randomId)
  } while (existingId.includes(id))

  return id
}

module.exports = generateRandomId
