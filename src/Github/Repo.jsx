import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
 
export default class Repo extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            myInfo: null,
             repos:[]
        }
    }
    onRequest=()=>{
        axios.get(`https://api.github.com/users/${this.props.input}/repos`)
        .then( res =>
            this.setState({    
                repos : res.data,
                input:'',
            }))
        .catch(err => console.log(err))
    }

    componentDidMount =()=>{
        this.onRequest()
    }
    componentDidUpdate=(repos,state)=>{
        if(this.props.input !=repos.input){
           this.onRequest()
        }
        console.log(repos,state)
    }
    

    render(){
        return(
            <div className="div-card2 card-body">
                <h4 style={{textAlign: 'center'}}>User Repositories</h4>
                {this.state.repos.map(value => { 
                    return (
                <div className="card" id="reposCard" style={{width: "50%"}}key={value.id}>
                        <div className="card-header">
                            <Link to ='#'>{ value.clone_url }</Link>
                        </div>
                        <ul className="list-group list-group-flush" >
                            <li className="list-group-item">Name of project : {value.name}</li>
                            <li className="list-group-item">Description : { value.description }</li>
                            <li className="list-group-item">language :  {value.language}</li>
                            <li className="list-group-item">Created At :  {value.created_at}</li>
                        </ul>
                    </div>
                    )})}
            </div>
        )
    }
}