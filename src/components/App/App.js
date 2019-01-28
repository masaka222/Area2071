import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main1 from '../Main1/Main1';
import Main2 from '../Main2/Main2';
import Main3 from '../Main3/Main3';

class App extends Component {

  /* Parallax effect */
  componentDidMount(){
    window.addEventListener("DOMContentLoaded", scrollLoop, false);

    var xScrollPosition;
    var yScrollPosition;

    var mainText = document.querySelector("#main1content");
    var smallImage = document.querySelector('#imageSmall');

    function scrollLoop(e){
      xScrollPosition = window.scrollX;
      yScrollPosition = window.scrollY;

      setTranslate(0, yScrollPosition * -0.2, mainText);
      setTranslate(0, yScrollPosition * -0.3, smallImage);

      requestAnimationFrame(scrollLoop);
    }

    function setTranslate(xPos, yPos, el){
      el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
    }
  }
  

  render() {

    

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
