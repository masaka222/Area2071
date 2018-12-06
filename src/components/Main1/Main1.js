import React, { Component } from 'react';
import './Main1.css';
import Main1content from '../Main1content/Main1content';
import Main1picture from '../Main1picture/Main1picture';

class Main1 extends Component {
  render() {
    return (
      <div className="main1">
        <Main1content/>
        <Main1picture/>
      </div>
    );
  }
}

export default Main1;