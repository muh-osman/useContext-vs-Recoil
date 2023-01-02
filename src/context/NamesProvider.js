// useContext
import { createContext, useState } from "react"




export const NamesContext = createContext()


export default function NamesProvider(props) {

const [names, setNames] = useState({
    name: "Muhammed"
})

  return (
    <>
    <NamesContext.Provider value={names}>
        {props.children}
    </NamesContext.Provider>
    
    </>
  )
}
