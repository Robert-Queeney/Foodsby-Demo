import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

const fetchUrl = 'http://localhost:3001/geosearch'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "", 
      text: "",
      suggestions: [] 
    }
  }

  componentDidUpdate = () => {
   
    return fetch(`${fetchUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {"search": this.state.text}, 
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.predictions)
      })
  }

  // onTextChange = (e) => {
  //   const value = e.target.value
  //   console.log(value, "value")
  // }

  handleChange = (event) => {
    const value = event.target.value
    if(value.length > 0){
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  // autoComplete = () => {
    
  // }

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route
                exact path="/"
                render={(props) => <HomePage
                  {...props}
                  state={this.state}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  // onTextChange={this.onTextChange}
                />}
              />
              <Route
                path="/login"
                render={(props) => <LoginPage
                  {...props}
                  state={this.state}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
                }
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
