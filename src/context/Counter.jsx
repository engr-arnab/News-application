import { createContext, useState } from "react"

export const ConterContext = createContext(null);

export const CounterProvider = (props) => {
    const [search, setSearch] = useState('')
    const [url, setUrl] = useState('https://newsapi.org/v2/everything?q=india&apiKey=72fff377b7ce49f88e34a2312fddf9d0')
    return(
        <ConterContext.Provider value={{search, setSearch, url, setUrl}} >
            {props.children}
        </ConterContext.Provider>
    )
}