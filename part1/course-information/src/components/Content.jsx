import Part from "./Part"

function Content({course}) {

  return (
    <>
      {
        course.parts.map((part, i)=>{
          return <Part key={i} name={part.name} exercises={part.exercises} />
        })
      }
    </>
  )
}

export default Content
