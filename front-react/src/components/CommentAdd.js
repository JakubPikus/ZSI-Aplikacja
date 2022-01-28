import React from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';

export default class CommentAdd extends React.Component {
  
    constructor(props){
        super(props)

        this.state = {
            comment_author: null,
            post: '',
            text: ''
        }
    }

    handleChange = event => {
        this.setState( {
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post(`comments/`, this.state)
        .then(res => {
            console.log(res)
            console.log(res.data)
        }).catch(err => console.log(err));
        }
    render() {
        const { comment_author, post, text } = this.state
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Comment add
                <br></br>
                Author profile <input type="text" name="comment_author" value={comment_author} onChange={this.handleChange} /><br></br>
                Post <input type="text" name="post" value={post} onChange={this.handleChange} />
                <br></br>
                Text <input type="text" name="text" value={text} onChange={this.handleChange} />
                
            </label>
            <Button variant="dark" type="submit">Skomentuj</Button>
            </form>
        </div>
        )
    }
}