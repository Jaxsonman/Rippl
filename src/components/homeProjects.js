import React, { Component } from 'react';
import TextLink from './TextLinks';

class HomeProjects extends Component {
    render() {
        return(
            <div className="homeProject">
                <div className="homeProject__portfolio">
                    <div className="homeProject__portfolios">
                        Project 1
                    </div>
                    <div className="homeProject__portfolios">
                        Project 2
                    </div>
                    <div className="homeProject__portfolios">
                        Project 3
                    </div>
                </div>
                <TextLink 
                to='/projects'
                text="See More"
                />
            </div>
        )
  }
}
export default HomeProjects;