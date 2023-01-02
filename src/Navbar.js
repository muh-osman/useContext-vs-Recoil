import { useContext } from "react"
import { NamesContext } from "./context/NamesProvider"







export default function Navbar() {
  
  const names = useContext(NamesContext)
  
  return (
    <div>
      <h2>Hello {names.name} from Navbar "useContext"</h2>
    </div>
  )
}
