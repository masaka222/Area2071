import React, { Component } from 'react';
import './Main1content.css';

class Main1content extends Component {
  render() {
    return (
      <div className="main1content">
        <p className="main1content__title" id = 'explore'>Explore</p>
        <p className="main1content__title" id = 'newWays'>new ways</p>
        <p className="main1content__title" id = 'toGarden'>to garden.</p>
      </div>
    );
  }
}

export default Main1content;