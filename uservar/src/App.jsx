import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const name="abcd";
  let x=10;
  let y=20;
function detail()
{
  return "JYOTI PANDEY";
}
function sum(a,b)
{
  return a+b;
}
   return (
     <div>
     <h1>user variable with jsx</h1>
     <h2>value of variable is [name]</h2>
     <h3>{x+y}</h3>
     <h3>use of fuctions with jsx</h3>
     <h3>{detail()}</h3>
     <h3>operations with jsx</h3>
     <h3>parameter function {sum(12,13)}</h3>
     </div>
  )
}
export default App
