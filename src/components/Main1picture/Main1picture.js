import React, { Component } from 'react';
import './Main1picture.css';
import imageSmall from './image-small.png';
import imageBig from './image-big.png';

class Main1picture extends Component {
  render() {
    return (
      <div className="main1picture">
        <img src={imageBig} alt="imageBig" className="main1picture-big"/>
        <img src={imageSmall} alt="imageSmall" className="main1picture-small"/>
      </div>
    );
  }
}

export default Main1picture;