import React from "react";
import { Metadata } from "next";
import { siteMetadata } from "../../data/siteMetadata";
import { ProjectsSection } from "../../components/projects-section";

export const metadata: Metadata = {
  title: siteMetadata.pages.projects.title,
  description: siteMetadata.pages.projects.description,
  openGraph: {
    title: siteMetadata.pages.projects.title,
    description: siteMetadata.pages.projects.description,
    url: `${siteMetadata.siteUrl}/projects`,
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}/projects`,
  },
};

export default function Projects() {
  return (
    <React.Fragment>
      <ProjectsSection />
    </React.Fragment>
  );
}
