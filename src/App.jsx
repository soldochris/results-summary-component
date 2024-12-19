
import './App.css'
import { Attribution } from './components/Attribution'
import { Result } from './components/Result'
import { Summary } from './components/Summary'

function App() {

  return (
    <>
      <main>
        <Result/>
        <Summary/>
      </main>
      <Attribution/>
    </>
  )
}

export default App
