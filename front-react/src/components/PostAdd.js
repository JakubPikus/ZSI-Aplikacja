import React from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';

export default class PostAdd extends React.Component {
  
    constructor(props){
        super(props)

        this.state = {
            post_author: null,
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
        form_data.append('post_author', this.state.post_author);
        form_data.append('title', this.state.title);
        form_data.append('description', this.state.description);
        form_data.append('image', this.state.image, this.state.image.name);
        console.log(form_data.data)

        

        
        axios.post(`posts/`, form_data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
        }).catch(err => console.log(err.data));
        }

    render() {
        const { post_author, title, description } = this.state
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Post add<br></br><br></br>
                Author profile <input type="text" name="post_author" value={post_author} onChange={this.handleChange} /><br></br><br></br>
                Title <input type="text" name="title" value={title} onChange={this.handleChange} /><br></br><br></br>
                Description <input type="text" name="description" value={description} onChange={this.handleChange} /><br></br><br></br>
                <input type="file" name="image" onChange={this.handleImageChange} />
          
            </label>
            <Container className='mt-3'>
                <Button variant="light" type="submit">Dodaj post</Button>
            </Container>
            
            </form>
        </div>
        )
    }
}