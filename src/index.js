import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

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
  	  <Card name="Paul O'Shannessy"
  	    avatar_url="https://avatars2.githubusercontent.com/u/8445?v=3"
  	    company="facebook"
  	    />
	</div>
);
	

ReactDOM.render(
  <CardList/>,
  document.getElementById('root')
);
