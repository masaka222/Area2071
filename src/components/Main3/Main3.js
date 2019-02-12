import React, { Component } from 'react';
import './Main3.css';
import Main3content from '../Main3content/Main3content';
import Main3picture from '../Main3picture/Main3picture';

class Main3 extends Component {
  render() {
    return (
      <div className="main3">
        <Main3picture/>
        <Main3content/>
      </div>
    );
  }
}

export default Main3;