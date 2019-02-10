import React, { Component } from 'react';
import './Main2picture.css';
import imageEye from './vision-eye.png';

class Main2picture extends Component {
  render() {
    return (
      <div className="main2picture">
        <div className="hiddenShape" style={{width:'30rem', height: "40rem"}}>
          <img src={imageEye} alt="imageEye" id = "imageEye" className="hiddenImage"/>
        </div>
      </div>
    );
  }
}

export default Main2picture;