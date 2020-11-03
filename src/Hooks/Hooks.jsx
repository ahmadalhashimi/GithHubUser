import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Hooks =()=> {
    const [number , setNumber]= useState(1)
    const [data , setData] = useState(null)
    const onClick =()=> setNumber(number +1)

    useEffect(()=>{

        axios.get(`https://jsonplaceholder.typicode.com/todos/${number}`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))

        
        return ()=>{
            console.log("will update, will unmount")
            setData(null)



        }

    },[number])
    console.log(data)
    return (
         <div>
             <h1>{data?.title}</h1>
             <p>{number}</p>
             <button onClick={onClick}>Click me</button>
         </div>
     )

 }

export default Hooks