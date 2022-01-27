import React, { Component } from "react";
import './App.css';
import CommentList from './components/CommentList.js';
import CommentAdd from './components/CommentAdd.js';
import PostAdd from './components/PostAdd.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Register from './components/Register.js';
import { Button, Navbar, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



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
                  <Router>
                    <Link to="/registration"><Button variant="light">Zarejestruj się</Button></Link>
                    <Link to="/login"><Button className="ms-3" variant="light">Zaloguj się</Button></Link>
                    <Link to="/logout"><Button className="ms-3" variant="light">Wyloguj</Button></Link>
                  </Router>

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
                  <Router> 
                    <Link to="/post"><Button variant="light">Wstaw post</Button></Link>
                    <Link to="/"><Button className="ms-3" variant="light">Strona główna</Button></Link>
                  </Router>
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

          <Container>
            <Register></Register>
            
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
