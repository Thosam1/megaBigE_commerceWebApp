import React from 'react';
import { withRouter } from 'react-router-dom'; // to empower the MenuItem component to get access to router

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

    <div className='background-image' style={{ // dynamically
      backgroundImage: `url(${imageUrl})`
    }} />
      
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
  
);

export default withRouter(MenuItem); // now have access to "history"