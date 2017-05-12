import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Card = (props) => (
    <div style={{margin: '1em'}}>
    <img width="75" alt="card Profile Pic" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
);

const CardList = (props) => (
  <div>
    {props.cards.map((card, index) => (
      <Card {...card}
        key={index}
        />
      ))}
      
  </div>
);
  
class Form extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: FormSubmit', this.userNameInput.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          ref={(input) => this.userNameInput = input}
          placeholder="Github username"
          required />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

class App extends Component {
  state = {
    cards: [{
        name: "Paul O'Shannessy",
        avatar_url: "https://avatars2.githubusercontent.com/u/8445?v=3",
        company: "Facebook"
      }, {
        name: "Ben Alpert",
        avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=3",
        company: "Facebook"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Form/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
