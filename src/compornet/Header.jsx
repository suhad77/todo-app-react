import React from 'react'
import bgImg from '../images/bg-desktop-dark.jpg';
import bgIcon from '../images/icon-sun.svg';

const  Header = () =>  {
  return (
    <header style={{backgroundImage:`url(${bgImg})`}}>
    <div className="container">
      <div className="header-wrapper">
        <div className="logo">
          <a href="index.html">
            <h1>TODO</h1>
          </a>
        </div>
        <div className="theme-icon">
          <img src={bgIcon} />
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header