import React from 'react'
 
const StateNumber= (props)=>{
    console.log(props)
    return(
        <div>
        <h1>{props.num}</h1>     
        <h1>{props.name}</h1>
        </div>
    )
}

export default StateNumber