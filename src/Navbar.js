import { useContext } from "react"
import { NamesContext } from "./context/NamesProvider"


export default function Navbar() {
  
  const { names, setNames } = useContext(NamesContext);
  
  return (
    <>
    
      <h2>Hello {names.name} from Navbar "useContext"</h2>

      <button onClick={() => setNames(prev => ({ ...prev, name: "Ahmed" }))}>
        Change Name
      </button>

    </>
  )
}
