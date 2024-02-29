import { useContext } from "react"
import { NameContext, ThemeContext } from "../../App"

export const ComponentD=(props) => {
    const name=useContext(NameContext) ;
    const color = useContext(ThemeContext)
    return <>
    <h1 style={{color:color}}>Welcome {name} From ComponentD</h1>
   
    </>
}