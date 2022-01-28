import React from 'react';
import axios from 'axios';
import { Button  } from 'react-bootstrap';

export default class CommentAdd extends React.Component {
  
    constructor(props){
        super(props)

    }

   
    handleSubmit = event => {
        event.preventDefault();
        axios.post(`auth/logout/`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
            localStorage.setItem('token', '')
        }).catch(err => console.log(err));
        }
    

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
            </label>
            <Button variant="light" type="submit">Wyloguj się</Button>
            </form>
        </div>
        )
    }
}
