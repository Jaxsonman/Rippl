import React, { Component } from 'react';

class TeamMembers extends Component {
    render() {

        const { imgSrc, text, name } = this.props;

        return(
            <div className="projects__members">
                <img className="projects__teamImage" src={imgSrc} alt="teamMember" />
                {name}
                <div className="projects__bar"></div>
                <div className="projects__text">
                    {text}
                </div>
            </div>
        )
    }
}
export default TeamMembers;