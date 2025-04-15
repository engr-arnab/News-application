import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Categories from './components/Categories'
import Main from './components/Main'
import Weather from './components/RightSide/Weather'
import Calender from './components/RightSide/Calender'
import Clock from './components/RightSide/Clock'

function App() {
  const [count, setCount] = useState(0)
   
  return (


    <>
      <main>
        <nav><NavBar /></nav>
        <div className="mainContainer">
          <Categories />
          <Main />
          <div className="dateNtime">
            <Weather />
            <Calender />
            <Clock />
          </div>
        </div>
      </main>

    </>
  )
}

export default App
