"use client";

import React from "react";
import { ChevronsUpDown, ChevronsDownUp, ExternalLink } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";

interface Project {
  id: string;
  title: string;
  period: {
    start: string;
    end?: string;
  };
  link?: string;
  skills: string[];
  description: string;
  thumbnail?: string;
  isExpanded?: boolean;
  logo?: string;
}

interface ProjectItemProps {
  project: Project;
  className?: string;
}

export function ProjectItem({ project, className }: ProjectItemProps) {
  const { start, end } = project.period;
  const isOngoing = !end;

  return (
    <Collapsible.Root defaultOpen={project.isExpanded} asChild>
      <div className={className}>
        <div className="flex items-center">
          {/* Project Icon */}
          <div className="mx-4 flex size-6 shrink-0 items-center justify-center text-gray-500 select-none" aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 256 256"
              className="size-5"
              aria-hidden="true"
            >
              <path
                d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Project Content */}
          <div className="flex-1 border-l border-dashed border-gray-300 dark:border-gray-600">
            <Collapsible.Trigger className="group/project flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {project.title}
                </h3>

                <dl className="text-sm text-gray-600 dark:text-gray-400">
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <>
                        <span>Present</span>
                      </>
                    ) : (
                      <span>{end}</span>
                    )}
                  </dd>
                </dl>
              </div>

              {/* External Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex size-6 shrink-0 items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 after:absolute after:-inset-2"
                  onClick={(e) => e.stopPropagation()}
                  title="View Project"
                >
                  <ExternalLink className="pointer-events-none size-4" />
                  <span className="sr-only">Open Project Link</span>
                </a>
              )}

              <div
                className="shrink-0 text-gray-500 [&_svg]:size-4"
                aria-hidden="true"
              >
                <ChevronsDownUp className="hidden group-data-[state=open]/project:block" />
                <ChevronsUpDown className="hidden group-data-[state=closed]/project:block" />
              </div>
            </Collapsible.Trigger>
          </div>
        </div>

        <Collapsible.Content className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="space-y-4 border-t border-dashed border-gray-300 dark:border-gray-600 p-4">
            {project.description && (
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            )}

            {project.skills && project.skills.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, index) => (
                  <li key={index} className="flex">
                    <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
}
