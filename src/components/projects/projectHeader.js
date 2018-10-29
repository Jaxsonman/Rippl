import React, { Component } from 'react';



class ProjectHeader extends Component {
    render() {
        const {title} = this.props;
        return(
            <div>
            <h2 className="projects__head">{title}</h2>
            <div className="projects__bar"></div>
            </div>
        )
    }
}
export default ProjectHeader;