import React from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';




export default class Login extends React.Component {
  
    constructor(props){
        super(props)

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    

    handleChange = event => {
        this.setState( {
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        
        

        axios.post(`auth/login/`, this.state , {
            headers: {
                'Authorization': ''
            }
        })
        .then(res => {
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('usero', res.data.user)
            console.log(localStorage.getItem('usero'))
            
            console.log(res.data.access_token)
            console.log(localStorage.getItem('token'))

            console.log(res.data)
            console.log(res)
         
        })
        .catch(err => {
            console.log(err)
        })
    }
        

       
    

    render() {
        const { username, email, password } = this.state
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
               
            <label>
                Login<br></br><br></br>
                Username <input type="text" name="username" value={username} onChange={this.handleChange} /><br></br><br></br>
                Email <input type="text" name="email" value={email} onChange={this.handleChange} /><br></br><br></br>
                Password<input type="text" name="password" value={password} onChange={this.handleChange} />
            </label>
            <Container className='mt-3'>
                <Button variant="light" type="submit">Zaloguj się</Button>
            </Container>
            </form>
        </div>
        )
    }
}