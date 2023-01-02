
import { useRecoilState } from "recoil";
import { nameState } from "./atom/namesAtom";





export default function Footer() {

    const [data, setData] = useRecoilState(nameState)

  return (

    <div>
        <h1>Hello {data.name} from Footer "Recoil"</h1>
    </div>

  )
}