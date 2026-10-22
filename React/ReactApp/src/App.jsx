import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Car from './components/car'
import Food from './components/food'
import Cars from './components/cars'
import Todo from './components/todo'
import UseEffectt from './components/useEffectt'
import WindowResize from './components/windowResize'
import DigitalClock from './components/digitalClock'
import ComponentA from './components/UseContext'
import UseRef from './components/UseRef'
import StopWatch from './components/stopWatch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     

     <Food/>
     {/* <Cars/> */}
     {/* <Todo/> */}
     {/* <UseEffectt/> */}
     {/* <WindowResize/> */}
     {/* <DigitalClock/> */}
     {/* <ComponentA/> */}
     {/* <UseRef/> */}
     <StopWatch/>
    </>
  )
}

export default App
