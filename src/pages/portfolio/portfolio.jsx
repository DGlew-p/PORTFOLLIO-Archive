import React from "react";
import Slide from "../../components/slide/slide";
import { projects } from "../../assets/models/projects";
import ProjectCard from "../../components/projectCard/projectCard.jsx";
export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects,
    };
  }
  render() {
    return (
      <div>
        {this.state.projects.map((project) => (
          <ProjectCard
            key={project.id}
            props={this.state.projects}
            {...project}
          />
        ))}
      </div>
    );
  }
}
