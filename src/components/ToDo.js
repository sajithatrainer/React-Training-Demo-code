import { useState } from "react";

export default function ToDo () {

  const [userName , setUserName] =useState('Alice') ;

  const todoArray = [
    {action: "Attend Meeting", done: false},
    {action: "Buy Flowersg" ,done: true},
    {action: "Book Train Tickets", done: false}, {action: "Go to Gym", done: true},
  ]

  const [todoItems , setTodoItems] =useState(todoArray)

  //insert the new item to array if it does not exist 
  const createNewTodoItem =(task) => {
    if(!todoItems.find(item => item.action ===task)){
        setTodoItems([...todoItems ,  {action:task, done:false}])
    }

  }
  
  //to toggle done status 

  const toggleTodo =(item) => setTodoItems(
    todoItems.map( x => x.action === item.action ? {...x, done:!x.done}  : x  )   
  )
  //iterate through the todoItem arry and return rows for each element 
  
    const todoTableRows = todoItems.map( (x,i) =>
   <TodoRow key={i} item= {x}  callback={toggleTodo} />)

    return (
        <>
<Banner name={userName}  tasks={todoItems}/>

<table className="table table-striped table-bordered">
    <thead><tr><th>Description</th><th>Done</th></tr></thead>
    <tbody>{todoTableRows}</tbody>
</table>

<TodoCreator  callback={createNewTodoItem}/>

        </>
    )



} //end of container

//********Banner************** */
function Banner(props){
    return <h2 className="bg-primary text-center text-white m-2 p-2">
        {props.name}'s  Todo List  {props.tasks.filter( x => !x.done).length}  items to do 
    </h2>
}
//************Table Row Creator */

const TodoRow =(props) => <tr>
<td>{props.item.action}</td>
<td>
    <input  type ='checkbox' checked={props.item.done}
      onChange={() =>props.callback(props.item) }/>
</td>

</tr>

//***********Todo Creator Text box */

function TodoCreator (props) {
    const [newItemText, setNewItemText] =useState("") ;
    const createNewTodo =() =>{
        props.callback(newItemText) ;
        setNewItemText("")
    }
    return(<>
        <input className="form-control"  value ={newItemText} onChange={(e) => setNewItemText(e.target.value)}/>
        <button className="btn btn-primary m-2" onClick={createNewTodo}>Add New</button>
        </>
    )

}


