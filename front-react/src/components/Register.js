import React from 'react';
import axios from 'axios';




export default class Register extends React.Component {
  
    constructor(props){
        super(props)

        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: ''
        }
    }

    

    handleChange = event => {
        this.setState( {
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        
        

        axios.post(`auth/registration/`, this.state , {
            headers: {
                'Authorization': ''
            }
        })
        .then(res => {
            
            console.log(res)
         
        })
        .catch(err => {
            console.log(err)
        })
    }
        

       
    

    render() {
        const { username, email, password1, password2 } = this.state
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
               
            <label>
                Register:
                <input type="text" name="username" value={username} onChange={this.handleChange} />
                <input type="text" name="email" value={email} onChange={this.handleChange} />
                <input type="text" name="password1" value={password1} onChange={this.handleChange} />
                <input type="text" name="password2" value={password2} onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
            </form>
        </div>
        )
    }
}