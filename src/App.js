import './App.css';
import React, {useEffect, useState} from 'react'
import {Game} from './Components/Game'

function App() {
  const [score, setScore] = useState(0)
  const [hiScore,setHiScore] = useState(0)
  const [words, trackWords] = useState([])
  let list=['shout','scream','shriek','start','strike','shore','shorn','shade','shale','shell']
  list=shuffleArray(list)

  useEffect(()=> {
    if (score>=hiScore) {setHiScore(score)}
  },[score,hiScore])

  return (
    <div className="App">
      <Header score={score} hiScore={hiScore}/>
      <Game onClick={(e)=>cardClick(e)} words={list}/>
    </div>
  );


  function cardClick(e) {
    const word=e.target.innerHTML
    console.log(word)
    console.log(words)
    if (words.includes(word)) {
      setScore(0) 
      trackWords([])
      return
    }
    setScore(score+1)
    trackWords(words.concat(word))
  
  }
}

export default App;


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}


function Header(props) {
  return (
    <div id='header'>Score: {props.score}<br/>High Score: {props.hiScore}
    </div>
  )
}

