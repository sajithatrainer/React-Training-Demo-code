import axios from "axios"
import { useCallback, useEffect, useState } from "react"
const FetchAPIData=() => {
    const [id, setId] =useState("Loading....")
    const [name, setName] =useState("Loading....")

    const [error,setError] = useState('')
    const [post,setPost]=useState([])
  const fetchUser = () => {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve({id:1, name:'Alice'})
            },1000)
        })
    }
    
    // useEffect(() =>{
    //     fetchUser().then((user) => {
    //         setId(user.id);
    //         setName(user.name)
    //     })
    // })

 const fetchPostFromApi = useCallback( async ()=>{ 
        try{
    let res =  await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    if(res.status == 200)
   { let data= await  res.data
    console.log(data)
    setPost(data) ;
   }
   else{
    setError("Problem fetching data")
   }
    }
    catch(e){
        setError(e.message)
    }
} , []  )

    useEffect(() => {
        fetchPostFromApi() ;
    },[])

return (

    <>
        {error.length> 0 ? <p> {error}</p>: null}
   {post.map(x => <li> {x.id}  
    <p>Title: {x.title}  </p> 
    <p>Post: {x.body} </p> </li>)}

    </>
)
    


}


export default  FetchAPIData ;