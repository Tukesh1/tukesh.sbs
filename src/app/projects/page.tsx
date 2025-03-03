import { ProjectCard } from "../../components/project-card";
import React from "react";
import { WEB_APPS, AI_ML_PROJECTS, CLI_PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <React.Fragment>
      {/* Web Apps Section */}
      <section>
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">Web Apps</h1>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
        >
          {WEB_APPS.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </section>

      {/* AI/ML Projects Section */}
      <section className="py-10">
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">
          AI/ML Projects
        </h1>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
        >
          {AI_ML_PROJECTS.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </section>

      {/* CLI Projects Section */}
      <section className="py-10">
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">
          CLI Projects
        </h1>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
        >
          {CLI_PROJECTS.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </section>

  
    </React.Fragment>
  );
}
