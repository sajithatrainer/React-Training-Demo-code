import { useState,useMemo } from "react";

export const MemoizedRender =() =>{
    const [text,setText] = useState("")
    const fruits = ['Apple','Pear','Water Apple' ,'PineApple','Mango','Orange'];

    const [query,setQuery] =useState("") 

    const matched = useMemo(() => {
        return fruits.filter(x=> x.includes(query))
    } ,[query])

    const onInput =(e) =>{
    setText(e.target.value)
    setQuery(text) ;
}

return (<>
<input value={text} onChange={onInput} />

<h3>{matched.join(',')}</h3> 
</>)

}



