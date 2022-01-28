import React from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';
import CommentAdd from './CommentAdd.js';


export default class PostList extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`posts/`, {
      headers: {
                    'Authorization': ''
                }
    })
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    return (
    <div>
      <ul>
        {
          this.state.posts
            .map(posts =>
              <div>
                <li key={posts.id}>


                  <Card className="text-center mt-5">
                    <Card.Body>
                      <Card.Text>
                        <div style={{ color: 'black' }}>
                          <Container>

                          <Container className='mt-4'><h1> {posts.title}</h1></Container>
                          <Container className='mt-4'><h2> {posts.description}</h2></Container>
                          <Container className='mt-4'><img src={posts.image} alt="Responsive image"></img></Container>
                          <Container className='mt-4'><h4> {posts.status}</h4></Container>

                            
                            
                            {posts.created_date}<br></br>

                            <Container>
                              <CommentAdd></CommentAdd>

                            </Container>
                          </Container>


                        </div>

                        
                        
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  
                  
                  

                  </li>
                <br></br>
                <br></br>
              </div>
            )
        }
      </ul>

      
    </div>
    )
  }
}