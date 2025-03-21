import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Core from './assets/Core'

function App() {
  
 function handleClick() {
    alert('Button clicked')
  }
    function handleClick2() { 
      alert('Button two clicked')
    }
  return (
      <>
          <h3>React core Concept</h3>
          <button onClick={handleClick}>Clock me </button>
          <button onClick={handleClick2}>Clock two </button>
      </>
  )
} 

export default App
