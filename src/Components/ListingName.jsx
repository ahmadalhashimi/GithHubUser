import React from 'react'
import Name from './Name'
 
const ListingName = (props)=>{
    console.log(props)
    return(
        <ul>
            {props.children}
        </ul>
    )
}

export default ListingName