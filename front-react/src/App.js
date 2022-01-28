import React, { Component } from "react";
import './App.css';
import PostList from './components/PostList.js';
import CommentAdd from './components/CommentAdd.js';
import PostAdd from './components/PostAdd.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Register from './components/Register.js';
import { Button, Navbar, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";



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
      <Router>
      <Container>
          <Navbar variant="dark" bg="dark" className="navbar-back" fixed="top">
          
            
                <Col>
                  
                    <Link to="/registration"><Button variant="light">Zarejestruj się</Button></Link>
                    <Link className="ms-3" to="/login"><Button variant="light">Zaloguj się</Button></Link>
                    <Logout></Logout>
                  
                </Col>
                <Col xs={5}>
                  <Navbar.Brand>
                    <a>Jakub Pikus</a>
                    <br>
                    </br>
                    <a>185IC_A1</a>
                  </Navbar.Brand>
                </Col>

                <Col>
                  <Link to="/postadd"><Button variant="light">Wstaw post</Button></Link>

                  <Link className="ms-3" to="/"><Button variant="light">Strona główna</Button></Link>
                
                      
                     
                    
                  
                </Col>
          </Navbar>


          
            <Switch>
               <Route exact path="/">
                 <PostList></PostList>
               </Route>

               <Route path="/registration">
                 <Register></Register>
               </Route>

               <Route path="/login">
                 <Login></Login>
               </Route>


               <Route path="/postadd">
                 <PostAdd></PostAdd>
               </Route>

            </Switch>

          





          

         

        </Container>

        </Router>
      </header>
    </div>
  );}
}

export default App;
