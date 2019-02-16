import React, { Component } from 'react';
import './Main1picture.css';
import imageSmall from './image-small.png';
import imageBig from './image-big.png';
import orangeLeaf from './orange-leaf.png'
import redLeaf from './red-leaf.png'

class Main1picture extends Component {
  render() {
    return (
      <div className="main1picture">
        <img src={imageBig} alt="imageBig" id = "imageBig" className="main1picture-big"/>
        <img src={imageSmall} alt="imageSmall" id="imageSmall" className="main1picture-small"/>
        <img src={orangeLeaf} alt="orangeLeaf" id="orangeLeaf" className="main1picture-orangeLeaf"/>
        <img src={redLeaf} alt="redLeaf" id="redLeaf" className="main1picture-redLeaf"/>
      </div>
    );
  }
}

export default Main1picture;