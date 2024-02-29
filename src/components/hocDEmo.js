// EnhancedComponent = higherOrderFUnction(Component)

import { useState } from "react"

function DisplayList(props){
    const  listItems =
     props.values.map((x,i) => <li  key={i}>{x}</li>)
    return <ul>{listItems}</ul>
}

//The Higher order function
function withTitle(WrappedComponent){
    return( (props) => {
        return <div>
            <h3>{props.title}</h3>
            <WrappedComponent {...props} />
        </div>

    })
}

//Enhanced Component
const RenderWithTitle =withTitle(DisplayList)

export default function RenderList () {
    const fruits = 
    ['Pear','Apple', 'Orange' , 'Mango']

    return <>
 <RenderWithTitle  title="Fruit List"  
 values= {fruits}/> 

    {/* <DisplayList values={fruits} /> */}
  <SortedList values = {fruits}/> 
    </>
    }
//*************** */
function SortedList(props){
    const [sort, setSort] = useState(false) ;


    function getSortedList() {
        return sort ? [...props.values].sort() : props.values
    }

    const toggleSort =() => setSort(!sort) 
    return <>
    <DisplayList values = {getSortedList()} />
    <button onClick={toggleSort}>Sort </button>
    </>

}