import StatisticLine from "./StatisticLine";

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
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={percentPositive} unit="%"/>
    </>
  )
}

export default Statistics
