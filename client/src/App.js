import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

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
