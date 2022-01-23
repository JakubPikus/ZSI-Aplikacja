import React from 'react';
import axios from 'axios';

export default class CommentAdd extends React.Component {
  
    constructor(props){
        super(props)

        this.state = {
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
        const { post, text } = this.state
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Comment add:
                <input type="text" name="post" value={post} onChange={this.handleChange} />
                <input type="text" name="text" value={text} onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
            </form>
        </div>
        )
    }
}