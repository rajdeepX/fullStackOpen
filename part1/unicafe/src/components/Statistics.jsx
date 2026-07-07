
const Statistics = ({good, neutral, bad}) => {

  let total = good + neutral + bad;
  // let average = ((good*1) + (neutral*0) + (bad*-1))/total || 0
  let average = (good - bad)/total || 0;
  let percentPositive = (good/total)*100 || 0

  if (total === 0) {
    return (
      <>
        <p>No feedbacks given</p>
      </>
    )
  }

  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {percentPositive}%</p>
    </>
  )
}

export default Statistics
