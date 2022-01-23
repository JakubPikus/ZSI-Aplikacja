import React, { Component } from "react";
import './App.css';
import CommentList from './components/CommentList.js';
import CommentAdd from './components/CommentAdd.js';
import PostAdd from './components/PostAdd.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import { Button, Navbar, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component{

  componentDidMount(){
    const config = {
      headers: {
        "Authorization": 'Bearer ' + localStorage.getItem('token')
      }
    }
    console.log(config)
    
  }

  render(){
  
  return (
    <div className="App">
      <header className="App-header">
      <Container>
          <Navbar variant="dark" bg="dark" className="navbar-back" fixed="top">
          
            
                <Col>
                  <Button variant="light">Light</Button>
                  <Button className="ms-3" variant="light">Light</Button>

                </Col>
                <Col xs={6}>
                  <Navbar.Brand>
                    <a>Jakub Pikus</a>
                    <br>
                    </br>
                    <a>185IC_A1</a>
                  </Navbar.Brand>
                </Col>

                <Col>

                </Col>
          </Navbar>

          <CommentList></CommentList>

          <Container>
            <CommentAdd></CommentAdd>

          </Container>

          <Container>
            <PostAdd></PostAdd>
            
          </Container>

          <Container>
            <Login></Login>
            
          </Container>
          <Logout></Logout>






          

        </Container>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );}
}

export default App;
