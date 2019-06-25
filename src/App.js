import React, {Component} from 'react';
import Header from './components/Header';
import SendMessageForm from './components/SendMessageForm';
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending';

import './App.css';

export default class App extends Component {
  render() {
    return (
    <div className="container">
      <div>
        <Header title="Touiteur" para="Let chat Bro!"/>  
      </div>

      <div className="">
      <div className="">
        <form id="touiteur">
          <SendMessageForm/>
        </form>
      </div>
      </div>
      <div className="affiche">
        <TouitContainer/>
      </div>
      <div className="affiche">
        <Trending/>
      </div >
    </div>





    );
  }
};


