import React, { Component } from 'react';
import TeamMembers from './projects-team';
import ProjectHeader from './projectHeader';
import Project from './projectsProjects';

class Projects extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         team: [
    //             {
    //                 title: 'joseph',
    //                 description: "team member text"
    //             },
    //             {
    //                 title: 'john',
    //                 description: "team member text again"
    //             }
    //         ]
    //     }
    // }


    render() {

        // const TeamMap = {
        //     {TeamMembers }
        // }

        return(
            <div className="projects">
                <ProjectHeader title="Team Header"/>
                <div className="projects__team">
                <TeamMembers imgSrc="/assets/pic.jpg"  name="charles1" text="This is a team member description"/>
                <TeamMembers imgSrc="/assets/pic2.jpg"  name="charles2" text="This is a team member description" />
                <TeamMembers imgSrc="/assets/pic3.jpg"  name="charles3" text="This is a team member description" />
                <TeamMembers imgSrc="/assets/pic.jpg"  name="charles4" text="This is a team member description" />
                <TeamMembers imgSrc="/assets/pic2.jpg"  name="charles5" text="This is a team member description" />
                <TeamMembers imgSrc="/assets/pic3.jpg"  name="charles6" text="This is a team member description" />
                </div>
                <ProjectHeader title="Projects"/>
                <div className="project">
                    <Project imgSrc="/assets/sensuous-sandwich.png" text="project content for the projects on our project page"/>
                    <Project imgSrc="/assets/Capture.png" text="project content for the projects on our project page"/>
                    <Project imgSrc="/assets/Capture.png" text="project content for the projects on our project page"/>
                    <Project imgSrc="/assets/sensuous-sandwich.png" text="project content for the projects on our project page"/>
                    
                </div>
            </div>
        )
    }
}
export default Projects;