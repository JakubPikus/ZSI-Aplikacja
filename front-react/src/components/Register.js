import React from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';




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
                Register<br></br><br></br>
                Username <input type="text" name="username" value={username} onChange={this.handleChange} /><br></br><br></br>
                Email <input type="text" name="email" value={email} onChange={this.handleChange} /><br></br><br></br>
                Password1<input type="text" name="password1" value={password1} onChange={this.handleChange} /><br></br><br></br>
                Password2<input type="text" name="password2" value={password2} onChange={this.handleChange} />
            </label>
            <Container className='mt-3'>
                <Button variant="light" type="submit">Zarejestruj się</Button>
            </Container>
            </form>
        </div>
        )
    }
}