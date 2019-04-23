import React from 'react';
import './App.css';
import Header from './Components/Header';
import PageHeader from './Components/PageHeader';
import LoginArea from './Components/LoginArea';
import BuildingSearch from './Components/BuildingSearch'

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
      <div className="App">
        <Header />
        <PageHeader />
        <div className="main-area">
          <LoginArea
            state={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <BuildingSearch />
        </div>
      </div>
    );
  }
}


export default App;
