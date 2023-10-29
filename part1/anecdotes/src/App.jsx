import { useState } from 'react'

const createInitialObject = (length) => {
  const obj = {};
  for (let i = 0; i < length; i++) {
    obj[i] = 0;
  }
  return obj;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(createInitialObject(anecdotes.length))

  const generateNumber = () => {
    let number = selected;
    while (number === selected) {
      number = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(number);
  }

  const vote = () => {
    const copy = { ...points }
    copy[selected] += 1  
    setPoints(copy)
  }
  
  const getMostVoted = () => {
    let highestKey = null;
    let highestValue = 0;

    for (const [key, value] of Object.entries(points)) {
      if (value > highestValue) {
        highestValue = value;
        highestKey = key;
      }
    }

    return highestValue > 0 ? anecdotes[highestKey] : 'No votes yet';
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={generateNumber}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{getMostVoted()}</p>
    </div>
  )
}

export default App