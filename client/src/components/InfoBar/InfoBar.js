import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

import './InfoBar.css';

// line 15 is when the user leaves the chat
const InfoBar = ({ school }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online" />
      <h3>{school}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close" /></a>
    </div>
  </div>
);

export default InfoBar;