export default function AnimalContainer(){

    const animals=[
        {name:'Tiger',
        count: 500,
        isEndangered:true,
        photo: 'https://source.unsplash.com/gRB4Euk4BYQ/200x100'
    },
    {name:'Brown Bear',
        count: 1500,
        isEndangered:false,
        photo: 'https://source.unsplash.com/c8XlAc1akIU/200x100'
    },
    {name:'Red Panda',
        count: 50,
        isEndangered:true,
        photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100'
    },
    ] ;



    const animal = {name:'Tiger', count: 500, isEndangered:true}

const fruits =['Apple', 'Orange' , 'Mango']


const fruitList = fruits.map( (fr,i) => (<li key={i}> {fr} </li>))

return (<> 

           

    <Animal  animalObject ={animals} >
        <h1 style={{color:'blue'}}> List of Endangered Animals</h1>
    </Animal>
    </>
)

} //end of AnimalContainer function
//  Child of Container----------------------------------------------------------------

function Animal(props){
    
    const  details =props.animalObject

    return (
        <>
        <h1>Animal Details</h1>
        {props.children}

        <div>
<ul>
    {details.map( (detail, index) => (<AnimalDetails    key={index} 
     detail={detail} 
     image={<Photo  path={detail.photo}  title= {detail.name}  />}
    
    
    /> )  )}
  
</ul>
       </div>
    </> 
    )
}  //End of Animal Component

//A component to return the li 

function AnimalDetails(props) {

    const {name,count,isEndangered} = props.detail;

    return (
        <li> 
            <p>{props.image}</p>
            <p>Name : {name}</p>
            <p>Count : {count}</p>
            <p>Endangered : {isEndangered ? 'Yes' :'No'} </p>
        
         </li>

    )
} //End of Animal Details

//A component to render a image 

function Photo(props) {
    return <img   src={props.path} alt= {props.title}/>
}
