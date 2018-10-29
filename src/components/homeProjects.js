import React, { Component } from 'react';
import SeeMore from './SeeMore';

class HomeProjects extends Component {
    render() {
        return(
            <div className="homeProject">

                <div className="homeProject__portfolio">
                    <div className="homeProject__portfolios">
                        Project 1
                        <img className="projectOne" src="/assets/images/project-1.jpg" />
                        <div className="projectContent"> 
                            Built in React, SCSS, and HTML.
                        </div>
                        
                    </div>
                    <div className="homeProject__portfolios">
                        Project 2
                        <img className="projectOne" src="/assets/images/projectTwo.jpg" />
                        <div className="projectContent"> 
                            Built in Python, Flask, and SCSS.
                        </div>
                    </div>
                    <div className="homeProject__portfolios">
                        Project 3
                        <img className="projectOne" src="/assets/images/projectThree.jpg" />
                        <div className="projectContent"> 
                            Built in Ruby, Swift, and CSS.
                        </div>
                    </div>
                </div>

                <div className="seeMore">
                    <SeeMore 
                    to='/projects'
                    text="See More Projects "
                    />
                </div>
            </div>
        )
  }
}
export default HomeProjects;