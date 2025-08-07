import React from "react";
import { ToolStack } from "./toolstack";
import { Github } from "./github";
import { Skills } from "./skills";
import { WorkExperience, Educations } from "./eduex";
import { Metadata } from "next";
import { siteMetadata } from "../../data/siteMetadata";

export const metadata: Metadata = {
  title: siteMetadata.pages.about.title,
  description: siteMetadata.pages.about.description,
  openGraph: {
    title: siteMetadata.pages.about.title,
    description: siteMetadata.pages.about.description,
    url: `${siteMetadata.siteUrl}/about`,
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}/about`,
  },
};

export default function About() {
  return (
    <React.Fragment>
      <section className="py-12">
        <div className="mx-[6%]">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <WorkExperience />
            <Educations />
          </div>

          {/* Skills Section */}
          <section className="mt-12 max-w-4xl mx-auto">
            <Skills />
          </section>

          {/* Tools Section */}
          <section className="mt-12 max-w-4xl mx-auto">
            <ToolStack />
          </section>

          {/* GitHub Section */}
          <section className="mt-12 max-w-4xl mx-auto">
            <Github />
          </section>
        </div>
      </section>
    </React.Fragment>
  );
}