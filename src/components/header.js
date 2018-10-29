import React, { Component } from 'react';

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
                            {/* <link>home</link>
                            <link>projects</link>
                            <link>contact</link> */}
                            <div>home</div>
                            <div>projects</div>
                            <div>contact</div>
                        </div>
                    </div>
                </div>

                <div className="contentSection">
                    <div className="contentSection__content">
                        <p>random text</p>
                    </div>
                    <button className="contactButton">contact</button>
                </div>




            </div>
        )
    }
}
export default Header;

