import { useEffect, useState } from "react"
import axios from "axios"
import CountryInfo from "./components/CountryInfo"

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchVal, setSearchVal] = useState("")

  const url = `https://studies.cs.helsinki.fi/restcountries/api/all`
  useEffect(()=>{
    const fetchData = async () => {
      const res = await axios.get(url)
      const data = await res.data
      setCountries(data)
      // console.log(data)
    }
    fetchData();
  }, [])

  const handleInput = (e) => {
    setSearchVal(e.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(searchVal.toLowerCase()))

  if(countries.length === 0) return <p>Loading...</p>


  return (
    <>
      <p>Find countries</p>
      <input type="text" value={searchVal} onChange={handleInput} />
      {searchVal && (
        countriesToShow.length > 10 ? (
          <p>Too many matches.</p>
        ) : countriesToShow.length > 1 ? (
          countriesToShow.map((country) => (
          <div key={country.cca2}>
            <span>
              {country.name.common}
            </span>
            <button onClick={()=> setSearchVal(country.name.common)}>Show</button>
          </div>
        ))
        ) : countriesToShow.length === 1 ? (
          <CountryInfo countriesToShow={countriesToShow} />
        ) : (<p>No matches</p>)
      )}
    </>
  )
}

export default App
