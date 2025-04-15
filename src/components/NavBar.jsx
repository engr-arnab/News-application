import React from 'react'
import './NavBar.css'
import { useContext } from 'react'
import {ConterContext} from '../context/Counter'


const NavBar = () => {
  const counterState = useContext(ConterContext)
  // console.log(counterState.search)
  
  let abc = counterState.search.replaceAll(" ",'+')
  // console.log(abc)
  
  const onSubmit = (e) => {

    e.preventDefault()
    counterState.setUrl(`https://newsapi.org/v2/everything?q=${abc}&apiKey=72fff377b7ce49f88e34a2312fddf9d0`)
    // console.log(counterState.url)
   
  }
  
  return (
    <div className='NavBar'>
      <div className="logo">
        <h1>NEWS</h1>
      </div>
      <div className="searchBar">
        <form onSubmit={onSubmit} >
          <input type="text" value={counterState.search} placeholder='Search news...' onChange={(e)=>{counterState.setSearch(e.target.value)}} />
          </form>
        
      </div>
    </div>
  )
}

export default NavBar
