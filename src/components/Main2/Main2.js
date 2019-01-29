import React, { Component } from 'react';
import './Main2.css';
import Main2content from '../Main2content/Main2content';
import Main2picture from '../Main2picture/Main2picture';

class Main2 extends Component {
  render() {
    return (
      <div className="main2">
        <Main2picture/>
        <Main2content/>
      </div>
    );
  }
}

export default Main2;