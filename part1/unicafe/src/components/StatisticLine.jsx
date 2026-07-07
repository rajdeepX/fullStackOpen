
const StatisticLine = ({text, value, unit=""}) => {
  return (
    <p>{text}:{value} {unit}</p>
  )
}

export default StatisticLine
