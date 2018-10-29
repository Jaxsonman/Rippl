import React, { Component } from 'react';
import Button from './button';

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="footer__logo">
                    <img className="footer__logo__image" src='/assets/images/rippl.png' alt="logo" />
                </div>
                <div className="footer_icons">
                    <a href="#" className="icons" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="#" className="icons" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="icons" target="_blank"> <i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="icons" target="_blank"> <i className="fab fa-instagram"></i></a>
                </div>
                 
            </div>
        )
  }
}
export default Footer;