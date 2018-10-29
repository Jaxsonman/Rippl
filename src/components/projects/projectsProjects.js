import React, { Component } from 'react';

class Project extends Component {
    render() {

        const { imgSrc, text } = this.props;

        return(
            <div className="projectPage">
            <img className="projectPage__image" src={imgSrc} alt="teamMember" />
            <div className="projectPage__text">
                { text }
            </div>
            </div>
        )
    }
}
export default Project;