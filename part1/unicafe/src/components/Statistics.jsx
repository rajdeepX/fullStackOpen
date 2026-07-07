import TableRow from "./TableRow";

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
      <table>
        <tbody>
          <TableRow text="Good" value={good} />
          <TableRow text="Neutral" value={neutral} />
          <TableRow text="Bad" value={bad} />
          <TableRow text="All" value={total} />
          <TableRow text="Average" value={average} />
          <TableRow text="Positive" value={percentPositive} unit="%"/>
        </tbody>
      </table>
    </>
  )
}

export default Statistics
