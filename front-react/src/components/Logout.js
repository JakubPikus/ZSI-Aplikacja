import React from 'react';
import axios from 'axios';

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
                Logout:
                
            </label>
            <button type="submit">Add</button>
            </form>
        </div>
        )
    }
}
