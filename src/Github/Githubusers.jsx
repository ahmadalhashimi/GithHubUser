import React, { Component } from 'react'
import axios from 'axios';
import Repo from './Repo';


export default class Githubusers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user : {},
             input:'ahmadalhashimi',
             repos:[],
        }
    }
    componentDidMount =() => {
        this.onClick()
    }



    onClick = ()=>{
        const { input } = this.state
       
        axios.get(`https://api.github.com/users/${input}?client_id=cddb030db81bcd9034db&client_secret=644b5b0155e6404a9cc4bd9d8b1ae730&sort=created`)
        .then( res => 
            this.setState({ 
                user : res.data,
               
            }))
        .catch(err => console.log(err))
        
    }

    onChange=(e)=>{
        this.setState({input : e.target.value})
    }
    
        render() {
            const { user , input, repos } = this.state
            console.log(repos)
        return (
            
            <div>
                <label> Searsh For New User </label><br/>
                <input name='input' value={input} onChange={ this.onChange} /> {' '}
                <button type="button" onClick={this.onClick}  className="btn btn-primary">
                    Searsh For User
                    </button><br/>
                <div className="card" style={{width: "100%"}} key={user.id}>
                        <div className='div-card1 '>
                            <img src={user.avatar_url } className="card-img-top" style={{width: "25%"}} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{ user.name } </h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">User : { user.login }</li>
                                <li className="list-group-item">User Location : { user.location}</li>
                                <li className="list-group-item">User email : {user.email}</li>
                                <li className="list-group-item">Start with GitHub  : {user.created_at}</li>
                                <li className="list-group-item">Company  : {user.company}</li>
                            </ul>
                        </div>
                        <Repo input={input}/>
                        
                  </div>
            </div>
            
     
        )
    }
}
