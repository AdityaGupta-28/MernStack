import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Car from './components/car'
import Food from './components/food'
import Cars from './components/cars'
import Todo from './components/todo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     

     {/* <Food/> */}
     {/* <Cars/> */}
     <Todo/>
    </>
  )
}

export default App
