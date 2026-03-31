import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  function abc() {
    alert("function called")
  }
  function apple() {
    alert("YOU CLICKED ON APPLE")
  }
  function banana() {
    alert("YOU CLICKED ON BANANA")
  }
  return (
    <div>
      <button onClick={abc}>click</button>
      <button onClick={banana}>click</button>
      <button onClick={apple}>click</button>
    </div>
  )
}
export default App
