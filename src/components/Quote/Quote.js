import React, { Component } from 'react';
import './Quote.css';
import chevrons from './chevrons.png';

class Quote extends Component {
  render() {
    return (
      <div className="quote">
        <img src={chevrons} alt="chevrons" className="quote__logo"/>
        <p className="quote__maintext1"> 
            "We are building a new reality for our people, a new future
        </p>
        <p className="quote__maintext1">
            for our children, and a new model of development."
        </p>
        <p className="quote__subtext">
            - Sheikh Mohammed bin Rashid al Maktoum
        </p>
      </div>
    );
  }
}

export default Quote;