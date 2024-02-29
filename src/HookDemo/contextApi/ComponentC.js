import { useContext } from "react"
import { NameContext, ThemeContext } from "../../App"

export const ComponentC =()=>{

    const color = useContext(ThemeContext)
    const name=useContext(NameContext)
    return <>
    <h1 style={{color:color}}>From ComponentC </h1>
    <h2>Name : {name}</h2>
    </>
} 