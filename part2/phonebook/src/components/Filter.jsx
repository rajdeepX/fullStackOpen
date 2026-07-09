
const Filter = ({searchQuery, setSearchQuery}) => {

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <>
      Filter shown with : <input onChange={handleSearch} value={searchQuery} />
    </>
  )
}

export default Filter
