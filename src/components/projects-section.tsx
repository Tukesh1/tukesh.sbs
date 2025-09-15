"use client";
import React from "react";
import { WEB_APPS, AI_ML_PROJECTS, CLI_PROJECTS } from "@/data/projects";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import { CollapsibleList } from "./collapsible-list";
import { ProjectItem } from "./project-item";

// Helper to normalize project objects coming from different groups
const normalize = (project: any) => ({
  id: project.title.toLowerCase().replace(/\s+/g, "-"),
  title: project.title,
  period: project.period,
  link: project.repo,
  skills: project.tags,
  description: project.description,
  thumbnail: project.thumbnail,
  isExpanded: false
});

const transformedProjects = [
  ...WEB_APPS.map(normalize),
  ...AI_ML_PROJECTS.map(normalize),
  ...CLI_PROJECTS.map(normalize)
];

export function ProjectsSection() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none" />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={transformedProjects}
        max={6}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
