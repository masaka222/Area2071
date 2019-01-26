import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main1 from '../Main1/Main1';
import Main2 from '../Main2/Main2';
import Main3 from '../Main3/Main3';

class App extends Component {
  render() {

    window.addEventListener('scroll', function (e) {
      // will not work on IE < 9
      var scrolled = window.pageYOffset;
      // will not work on IE < 8
      const background = document.querySelector('.main1');
      background.style.top = - (scrolled * 0.2) + 'px';
    });

    return (
      <div className="App" id ="app">
        <Header/>
        <Main1/>
        <Main2/>
        <Main3/>
      </div>
    );
  }
}

export default App;
