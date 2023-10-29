const Course = ({course}) => {
    return (
        <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </>
    )
}

export default Course

const Header = ({name}) => {
    return (
        <h2>{name}</h2>
    )
}

const Content = ({parts}) => {
    return (
        <>
        {parts.map(part =>
         <Part key={part.id} name={part.name} exercises={part.exercises}/>
        )}
        </>
      )
}

const Part = ({name, exercises}) => {
    return (
    <li>
    {name} {exercises}
    </li>
    )
  }

  const Total = ({parts}) => {
    const sum = parts.reduce((total, part) =>total + part.exercises, 0);
    return (
      <p><b>total of {sum} exercises</b></p>
    )
  }