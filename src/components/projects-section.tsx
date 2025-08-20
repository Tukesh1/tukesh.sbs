"use client";

import React from "react";
import { WEB_APPS, AI_ML_PROJECTS, CLI_PROJECTS } from "@/data/projects";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import { CollapsibleList } from "./collapsible-list";
import { ProjectItem } from "./project-item";

// Transform your existing project data to match chanhdai.com structure
const transformedProjects = [
  ...WEB_APPS.map(project => ({
    id: project.title.toLowerCase().replace(/\s+/g, '-'),
    title: project.title,
    period: {
      start: "2024",
      end: undefined
    },
    link: project.repo,
    skills: project.tags,
    description: project.description,
    thumbnail: project.thumbnail,
    isExpanded: false,
    logo: undefined
  })),
  ...AI_ML_PROJECTS.map(project => ({
    id: project.title.toLowerCase().replace(/\s+/g, '-'),
    title: project.title,
    period: {
      start: "2024",
      end: undefined
    },
    link: project.repo,
    skills: project.tags,
    description: project.description,
    thumbnail: project.thumbnail,
    isExpanded: false,
    logo: undefined
  })),
  ...CLI_PROJECTS.map(project => ({
    id: project.title.toLowerCase().replace(/\s+/g, '-'),
    title: project.title,
    period: {
      start: "2024",
      end: undefined
    },
    link: project.repo,
    skills: project.tags,
    description: project.description,
    thumbnail: project.thumbnail,
    isExpanded: false,
    logo: undefined
  }))
];

export function ProjectsSection() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
           {/* projects */}
          <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
            {/* ({transformedProjects.length}) */}
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={transformedProjects}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
