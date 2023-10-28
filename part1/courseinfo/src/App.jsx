const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content exercises={[part1, part2, part3]} numbers={[exercises1, exercises2, exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App

const Header = (props) => {
 return (
   <h1>{props.course}</h1>
 )
}

const Content = (props) => {
  return (
    <ul>
      {props.exercises.map((exercise, index) => {
        return <Part key={index} exercise={exercise} number={props.numbers[index]}/>
      })}
    </ul>
  )
}

const Part = (props) => {
  return (
    <li>{props.exercise}: {props.number}</li>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}