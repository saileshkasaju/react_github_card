import React, { Component } from 'react';
import axios from 'axios';
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
    {props.cards.map(card => (
      <Card {...card}
        key={card.id}
        />
      ))}
      
  </div>
);
  
class Form extends Component {
  state = { userName: '' };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: FormSubmit', this.state.userName);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(res => {
      this.props.onSubmit(res.data);
      this.setState({ userName: '' });
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({userName: event.target.value})}
          placeholder="Github username"
          required />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    this.setState(previousState => ({
      cards: previousState.cards.concat(cardInfo)
    }))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
