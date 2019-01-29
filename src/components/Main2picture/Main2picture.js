import React, { Component } from 'react';
import './Main2picture.css';
import imageEye from './vision-eye.png';

class Main2picture extends Component {
  render() {
    return (
      <div className="main2picture">
        <img src={imageEye} alt="imageEye" id = "imageEye" className="main2picture-eye"/>
      </div>
    );
  }
}

export default Main2picture;