import Part from "./Part"

function Content({course}) {

  return (
    <>
      {
        course.parts.map((part)=>{
          return <Part key={part.id} name={part.name} exercises={part.exercises} />
        })
      }
    </>
  )
}

export default Content
