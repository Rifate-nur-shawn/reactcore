
import './App.css'
import Core from './assets/Core'
import Count from './assets/Count'
import Team from './assets/Team'

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
          <Count ></Count>
          <Team ></Team>
          <button onClick={handleClick}>Clock me </button>
          <button onClick={handleClick2}>Clock two </button>
      </>
  )
} 

export default App
