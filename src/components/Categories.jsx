import React from 'react'
import './Categories.css'
import { useContext } from 'react'
import { ConterContext } from '../context/Counter'


const Categories = () => {
  const counterState = useContext(ConterContext)

  return (
    <div className="Categories">
      <div className="CategoriesHeader">Categories</div>
      <div className="CategoriesLists">
        <button onClick={() => { counterState.setUrl("https://newsapi.org/v2/everything?q=general&apiKey=72fff377b7ce49f88e34a2312fddf9d0") }} >GENERAL</button>

        <button onClick={() => { counterState.setUrl("https://newsapi.org/v2/everything?q=World&apiKey=72fff377b7ce49f88e34a2312fddf9d0") }} >World</button>

        <button onClick={() => { counterState.setUrl("https://newsapi.org/v2/everything?q=Defence&apiKey=72fff377b7ce49f88e34a2312fddf9d0") }} >Defence</button>

        <button onClick={() => { counterState.setUrl("https://newsapi.org/v2/everything?q=Business&apiKey=72fff377b7ce49f88e34a2312fddf9d0") }} >Business</button>

        <button onClick={() => { counterState.setUrl("https://newsapi.org/v2/everything?q=Technology&apiKey=72fff377b7ce49f88e34a2312fddf9d0") }} >Technology</button>

        <button onClick={() => { counterState.setUrl("https://newsapi.org/v2/everything?q=Stock+Market&apiKey=72fff377b7ce49f88e34a2312fddf9d0") }} >Stock Market</button>

        <button onClick={() => { counterState.setUrl("https://newsapi.org/v2/everything?q=Sports&apiKey=72fff377b7ce49f88e34a2312fddf9d0") }} >Sports</button>

        <button onClick={() => { counterState.setUrl("https://newsapi.org/v2/everything?q=Science&apiKey=72fff377b7ce49f88e34a2312fddf9d0") }} >Science</button>

        <button onClick={() => { counterState.setUrl("https://newsapi.org/v2/everything?q=Health&apiKey=72fff377b7ce49f88e34a2312fddf9d0") }} >Health</button>

        <button onClick={() => { counterState.setUrl("https://newsapi.org/v2/everything?q=War&apiKey=72fff377b7ce49f88e34a2312fddf9d0") }} >War</button>
      </div>
    </div>
  )
}

export default Categories
