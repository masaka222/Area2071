import React, { Component } from 'react';
import './Main3picture.css';
import imageEye from './lounge.jpg';

class Main3picture extends Component {
  render() {
    return (
      <div className="main3picture">
        <div className="hiddenShape" style={{width:'50vw', height: "75vh"}}>
          <img src={imageEye} alt="imageEye" id = "imageEye" className="hiddenImage"/>
        </div>
      </div>
    );
  }
}

export default Main3picture;