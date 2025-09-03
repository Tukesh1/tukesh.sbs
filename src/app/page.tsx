import Image from "next/image";
import { SOCIALS } from "../data/socials";
import React from "react";
import Link from "next/link";
import { SocialLink } from "../components/social-link";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../components/panel";
import { Metadata } from "next";
import { siteMetadata } from "../data/siteMetadata";
import { VerifiedIcon } from "../components/icons";
import { Typewriter } from "@/components/typewriter";
export const metadata: Metadata = {
  title: siteMetadata.pages.home.title,
  description: siteMetadata.pages.home.description,
  openGraph: {
    title: siteMetadata.pages.home.title,
    description: siteMetadata.pages.home.description,
    url: siteMetadata.siteUrl,
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
};

export default function Home() {

  return (
    <React.Fragment>
      {/* Hero Panel */}
      <Panel className="mt-6">
        <PanelHeader className="lg:flex lg:items-start lg:gap-10">
          <div className="lg:w-2/3">
            <PanelTitle className="text-2xl font-bold flex items-center gap-2">
              Tukesh Kumar
              <VerifiedIcon className="inline-block size-[0.8em] translate-y-px text-sky-500 select-none" aria-hidden="true" />
            </PanelTitle>
            <p className=" text-sm text-balance text-muted-foreground dark:text-gray-400 select-none">
              <Typewriter
                phrases={["Open Source Contributor", "Software Engineer", "Always learning, always shipping."]}
              />
            </p>
          </div>
        </PanelHeader>
        <PanelContent className="lg:flex lg:flex-row lg:items-start gap-10">
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              I’m a software developer specializing in building scalable web applications with clean and intuitive user interfaces using <strong>React, TypeScript, and Node.js</strong>.
            </p>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Currently, I’m building{' '}
              <a
                href="https://github.com/Tukesh1/codexp-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                codexp-ai
              </a>{' '} an AI-powered platform that explains, documents, and visualizes source code, helping developers understand and onboard to codebases faster. If you’d like to collaborate, please{' '}
              <a
                href="mailto:tukeshkrraju1011@gmail.com"
                className="border-b inline-block"
              >
                send me an email
              </a>{' '}or reach out on any of my social handles.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start md:items-center gap-4 mb-4 mt-6">
              {SOCIALS.map((social) => (
                <SocialLink
                  key={social.label}
                  aria-label={`Follow on ${social.label}`}
                  href={social.href}
                  icon={social.icon}
                />
              ))}
            </div>
            <div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold border-b inline-block transition-all text-gray-400 dark:text-gray-300 hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                Resume
              </a>

            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/assets/profile.png"
              width={300}
              height={600}
              alt="avatar"
              priority
              className="h-full w-auto max-h-[420px] object-cover shadow-lg rounded-md"
            />
          </div>
        </PanelContent>
      </Panel>

      {/* Projects / Work Panel */}
      <Panel id="work" className="mt-12">
        <PanelHeader>
          <PanelTitle className="text-xl font-bold flex items-center gap-2">
            <span>Cool Stuff I’m Working On</span>
          </PanelTitle>
        </PanelHeader>
        <PanelContent>
          <ul className="space-y-3">
            <li>
              <Link
                href="https://github.com/tukesh1/codexp-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-md p-3 -m-3 hover:bg-gray-50 dark:hover:bg-dark-bg/40 transition"
              >
                <span className="text-gray-400 dark:text-gray-300 font-mono group-hover:underline">codexp-ai</span>
                <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">Explain, document, and visualize codebases with instant docs, diagrams, and Q&A for any repo.</span>
              </Link>
            </li>
          </ul>
        </PanelContent>
      </Panel>
    </React.Fragment>
  );
}
