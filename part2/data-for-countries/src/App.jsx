import { useEffect, useState } from "react"
import axios from "axios"

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
          <p key={country.name.common}>
            {country.name.common}
          </p>
        ))
        ) : countriesToShow.length === 1 ? (
          <>
            <h2>{countriesToShow[0].name.common}</h2>
            <p>Capital: {countriesToShow[0].capital}</p>
            <p>Area: {countriesToShow[0].area}</p>
            <h3>Languages</h3>
            <ul>
              {Object.entries(countriesToShow[0].languages).map(([key, val])=>(
                <li key={key}>{val}</li>
              ))}
            </ul>
            <img className="flag" src={countriesToShow[0].flags.svg} alt={countriesToShow[0].flags.alt} />
          </>
        ) : (<p>No matches</p>)
      )}
    </>
  )
}

export default App
