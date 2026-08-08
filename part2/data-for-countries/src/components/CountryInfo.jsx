
const CountryInfo = ({countriesToShow}) => {
  return (
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
      <img width={250} src={countriesToShow[0].flags.svg} alt={countriesToShow[0].flags.alt} />
    </>
  )
}

export default CountryInfo
