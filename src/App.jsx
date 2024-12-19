
import { useEffect, useState } from 'react'
import './App.css'
import { Attribution } from './components/Attribution'
import { Result } from './components/Result'
import { Summary } from './components/Summary'

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() =>{
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setInfo(data))
  },[]);

  return (
    <>
      <main>
        <Result data={info}/>
        <Summary data={info}/>
      </main>
      <Attribution/>
    </>
  )
}

export default App
