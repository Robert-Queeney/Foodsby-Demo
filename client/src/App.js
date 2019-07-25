import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
const key = process.env.REACT_APP_API_KEY

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

 
  handleChange = (event) => {
    const value = event.target.value
    if(value.length >= 0){
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    return fetch(`${fetchUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"search": this.state.text}), 
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ suggestions: data.predictions})
        console.log(this.state, key)
      })
  }

  //functions to render and choose the suggestions

  suggestionSelected  (value) {
    this.setState(() => ({
        text: value, 
        suggestions: [],
    }))
}

  renderSuggestions = () => {
    const { suggestions } = this.state
      if(suggestions.length === 0){
        return null
      }
        return (
          <div className="ul__div">
            <ul>
              {suggestions.map((suggestion => <li onClick={() => this.suggestionSelected(suggestion.description)} >{suggestion.description}</li>))}
            </ul>
          </div>
        )

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
                  renderSuggestions={this.renderSuggestions}
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
