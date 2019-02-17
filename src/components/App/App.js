import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main1 from '../Main1/Main1';
import Main2 from '../Main2/Main2';
import Quote from '../Quote/Quote';
import Main3 from '../Main3/Main3';

class App extends Component {

  componentDidMount(){

    /* Parallax effect */
    window.addEventListener("DOMContentLoaded", scrollLoop, false);

    var xScrollPosition;
    var yScrollPosition;

    var mainText = document.querySelector("#main1content");
    var smallImage = document.querySelector('#imageSmall');
    var main2Text = document.querySelector("#main2content");
    var main3Text = document.querySelector("#main3content");
    var orangeLeaf = document.querySelector("#orangeLeaf");
    var redLeaf = document.querySelector("#redLeaf");

    function scrollLoop(e){
      xScrollPosition = window.scrollX;
      yScrollPosition = window.scrollY;

      setTranslate(0, yScrollPosition * -0.2, mainText);
      setTranslate(0, yScrollPosition * -0.3, smallImage);
      setTranslate(0, yScrollPosition * -0.3, main2Text);
      setTranslate(0, yScrollPosition * -0.3, main3Text);
      setTranslate(0, yScrollPosition * -0.1, orangeLeaf);
      setTranslate(0, yScrollPosition * -0.1, redLeaf);

      requestAnimationFrame(scrollLoop);
    }

    function setTranslate(xPos, yPos, el){
      el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
    }

    /* Functions to Animate pictures when they are in our viewpoint */

    /* What the code is doing: 
        1. Getting every element that has the class hiddenShape and hiddenImage
        2. Running a function when the window is scrolled</li>
        3. Inside the function, calculating the height relative to the viewport
        4. If the element is inside the viewport, add the classes pictureShape and pictureImage.
    */
    var animateHTML = function() {
      var elems1;
      var elems2;
      var windowHeight;

      function init() {
        elems1 = document.querySelectorAll('.hiddenShape');
        elems2 = document.querySelectorAll('.hiddenImage');
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
      }

      function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
      }

      function checkPosition() {
        for (var i = 0; i < elems1.length; i++) {
          var positionFromTop = elems1[i].getBoundingClientRect().top;
          if (positionFromTop - windowHeight <= 0) {
            elems1[i].className = elems1[i].className.replace(
              'hiddenShape',
              'picture-shape'
            );
            elems2[i].className = elems2[i].className.replace(
              'hiddenImage',
              'picture-image'
            );
          }
        }
      }
      
      return {
        init: init
      };
    };
    animateHTML().init();
  }

  render() {
    return (
      <div className="App" id ="app">
        <Header/>
        <Main1/>
        <Main2/>
        <Quote/>
        <Main3/>
      </div>
    );
  }
}

export default App;
