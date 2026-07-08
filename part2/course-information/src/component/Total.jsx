
const Total = ({course}) => {

  const total = course.parts.reduce((sum, curr) => sum + curr.exercises, 0)

  return (
    <h4>Total of {total} exercises</h4>
  )
}

export default Total
