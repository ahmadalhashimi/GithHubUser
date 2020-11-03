import React from 'react'
import Footers from './Footers'
import Nav from './Nav'

 
const Layout = (props) => {
    console.log(props.listData)
    const list = props.listData
    return(
        <div>
            <Nav title={props.title}/>
                   {props.childern}
                    <ol>
                        {list && list.map(value=>{
                            return(
                                <li>
                                    {value.title}
                                </li>
                                       
                            )
                        })}        
                    </ol> 
            <Footers />
        </div>
    )
}

export default Layout