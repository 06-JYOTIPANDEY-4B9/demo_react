import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let data="new"
  function fun()
  {
    data="new value"
    alert(data)
  }
return(
  <>
  <h1>State of Variable</h1>
  <h1>{data}</h1>
  <button onClick={fun}>click</button>
  </>
)
}
export default App
