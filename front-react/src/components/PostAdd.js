import React from 'react';
import axios from 'axios';

export default class PostAdd extends React.Component {
  
    constructor(props){
        super(props)

        this.state = {
            title: '',
            description: '',
            image: null
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleImageChange = event => {
        this.setState({
          image: event.target.files[0]
        })
      };

    handleSubmit = event => {
        event.preventDefault();
        let form_data = new FormData();
        
        form_data.append('title', this.state.title);
        form_data.append('description', this.state.description);
        form_data.append('image', this.state.image, this.state.image.name);
        
        axios.post(`posts/`, form_data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
        }).catch(err => console.log(err));
        }

    render() {
        const { title, description } = this.state
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Post add:
                <input type="text" name="title" value={title} onChange={this.handleChange} />
                <input type="text" name="description" value={description} onChange={this.handleChange} />
                <input type="file" name="image" onChange={this.handleImageChange} />
          
            </label>
            <button type="submit">Add</button>
            </form>
        </div>
        )
    }
}