import React, { useEffect, useState } from 'react'
import './Main.css'
import BigCard from './Cards/BigCard'
import SmallCard from './Cards/SmallCard'
import { useContext } from 'react'
import { ConterContext } from '../context/Counter'


const Main = () => {
  const counterState = useContext(ConterContext)

  const [data1, setdata1] = useState('')
  const [data2, setdata2] = useState('')
  const [data3, setdata3] = useState('')
  const [data4, setdata4] = useState('')
  const [data5, setdata5] = useState('')

  
  
  useEffect(() => {
    const FetchNews = async () => {
          let url = counterState.url
          const response = await fetch(url)
          const data = await response.json()
          setdata1(data.articles[0])
          console.log(data.articles[0]);
          
          setdata2(data.articles[1])
          setdata3(data.articles[2])
          setdata4(data.articles[3])
          setdata5(data.articles[4])
    }

    FetchNews()
  }, [counterState.url])

 
 
  



    return (
      <div className="Main">


        <div className="BigCardClass">

          <BigCard image={data1.urlToImage} content={data1.content} url={data1.url} />
          <BigCard image={data2.urlToImage} content={data2.content} url={data2.url} />
        </div>
        <div className="SmallCardClass">
          <SmallCard image={data3.urlToImage} content={data3.content} url={data3.url} />
          <SmallCard image={data4.urlToImage} content={data4.content} url={data4.url} />
          <SmallCard image={data5.urlToImage} content={data5.content} url={data5.url} />
        </div>
      </div>
    )
  



}

export default Main
