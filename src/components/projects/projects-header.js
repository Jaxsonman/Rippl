import React, { Component } from 'react';
import TextLink from '../TextLinks';

class HeaderP extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-wrapper">
                    <div className="header__left">
                        <div className="header__logo">
                            <img className="header__left__logo" src='/assets/images/rippl.png' alt="logo" />
                        </div>
                    </div>

                    <div className="header-right">
                        <div className="header-right-links">
                            <div className="header-right-links__home">
                                <TextLink
                                    to="/home"
                                    text="Home"
                                />

                                <TextLink
                                    to="/projects"
                                    text="Projects"
                                />

                                <TextLink
                                    to="/contact"
                                    text="Contact"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HeaderP;