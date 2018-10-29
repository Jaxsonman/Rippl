import React, { Component } from 'react';
import TextLink from './TextLinks';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header__left">
                    <div className="logo">
                        <img src='/assets/images/rippl.png' alt="logo" />
                    </div>
                </div>
                <div className="header__center">
                
                </div>
                <div className="header__right">
                    <div className="links">
                        <div className="links__home">
                            <TextLink
                            to="/home"
                            text="Home"
                            />

                            <TextLink
                            to="/projects"
                            text="Projects"
                            />
                            
                            <TextLink
                            to="contact"
                            text="Contact"
                            />

                        </div>
                    </div>
                </div>

                <div className="contentSection">
                    <div className="contentSection__content">
                        <p>We Deliver High Quality Applications That Convert</p>
                        <p>Websites, IOS, Android</p>
                    </div>
                    <button className="contactButton">Contact Us</button>
                </div>




            </div>
        )
    }
}
export default Header;

