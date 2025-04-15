import React from 'react'
import './Weather.css'
import { useState, useEffect } from 'react'



const Weather = () => {

  const [city, setCity] = useState('Bengaluru')
  const [weatherData, setWeatherData] = useState()
  const [cityName, setCityName] = useState('')
  const [count, setcount] = useState(0)


  const onSubmit = (e) => {
    e.preventDefault()
    console.log(city)

    setcount(count + 1)
  }

  const onChangeInput = (e) => {
    setCity(e.target.value)

  }

  useEffect(() => {

    const getWeatherData = async () => {


      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8def6dedcc27cd1658294f848af25531&units=metric`
      const response = await fetch(url)
      const data = await response.json()



      setWeatherData(data.main.temp)
      setCityName(data.name)
      setCity('')

    }

    getWeatherData()

  }, [count])

  return (
    <div className='Weather'>

      <div className="searchBox">
        <form onSubmit={onSubmit} >
          <input value={city} onChange={(e) => { onChangeInput(e) }} type="text" placeholder='Enter city name' />

        </form>
      </div>
      <div className="otherInfo">
        <div className="cityName">
          <h2>{cityName}</h2>
        </div>
        <div className="info">
          <div className="tempInfo">
            <h1> {weatherData} °C</h1>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Weather
