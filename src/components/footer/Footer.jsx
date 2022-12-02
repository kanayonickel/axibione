import React from 'react'
import './Footer.css';
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
    <div className="Footer-container">
      <hr/>
      <div className="footer">
        {/* <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div> */}
     
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
        <hr className="line" />
        <span className="kanayo">Designed by Maduka Kanayo Kene</span>
      </div>
        {/* <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div> */}
    </div>
    );
  };

export default Footer