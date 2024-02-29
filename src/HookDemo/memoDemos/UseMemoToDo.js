import { useState ,useMemo} from "react";

export const TodoMemoized =()=>{
    const todo = ["Attend Meeting","Buy Flowers","Book Train Tickets"] ;

    const [items,setItems] = useState(todo) ;

    const [newItem,setNewItem] =useState('')
//useMemo to return li for each element in the array
    const itemsRendered = useMemo(() =>{
        return <> <h2>To do Items </h2>
        <ul>
            {items.map((item,i) => <li key={i}>{item}</li>)}
        </ul>
        </>
    },[items])
  const  onFormSubmit=(e)=>{
e.preventDefault () ;
//setItems(items =>items.concat([newItem]))   ;
setItems(items=>[...items,newItem])
setNewItem("")
  }

    return(<>
    {itemsRendered}
    <form onSubmit={onFormSubmit}>
        <input value={newItem} onChange={e=> setNewItem(e.target.value)}/>
<button type='submit'>Add</button>
    </form>
    </>)

}