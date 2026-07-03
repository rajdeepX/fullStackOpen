const Total = ({course}) => {

  // let total = 0;
  // parts.forEach((part)=>{
  //   total += part.exercises
  // })

  const total = course.parts.reduce((sum, part)=> {return (sum + part.exercises)}, 0)

  return (
    <p>Number of exercises {total}</p>
  )
}

export default Total
