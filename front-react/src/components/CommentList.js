import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';


export default class CommentList extends React.Component {
  state = {
    comments: []
  }

  componentDidMount() {
    axios.get(`posts/`, {
      headers: {
                    'Authorization': ''
                }
    })
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
  }

  render() {
    return (
    <div>
      <ul>
        {
          this.state.comments
            .map(comments =>
              <div>
                <li key={comments.id}>


                  <Card className="text-center mt-5">
                    <Card.Body>
                      <Card.Title>Special title treatment</Card.Title>
                      <Card.Text>
                        <div style={{ color: 'red' }}>

                          {comments.title}<br></br>
                          {comments.description}<br></br>
                          {comments.image}<br></br>
                          {comments.image_ftp}<br></br>
                          {comments.status}<br></br>
                          {comments.created_date}<br></br>


                        </div>

                        <img src={comments.image} alt="Responsive image"></img>
                        
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
      <a>test</a>

      
    </div>
    )
  }
}