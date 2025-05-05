"use client"
import React from "react";
import { ToolStack } from "./toolstack";
import { Github } from "./github";
import { Skills } from "./skills";
import { WorkExperience, Educations } from "./eduex";

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