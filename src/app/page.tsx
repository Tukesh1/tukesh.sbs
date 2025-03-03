import Image from "next/image";
import { SOCIALS } from "../data/socials";
import React from "react";
import Link from "next/link";
import { SocialLink } from "../components/social-link";
export default function Home() {

  return (
    <React.Fragment>
      <section className="mb-5 flex flex-col font-sans lg:flex-row items-center lg:items-start">

        <div className="lg:w-2/3 text-center lg:text-left p-6">
          <h1 className="text-2xl font-bold ">Tukesh Kumar</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 ">
            I’m a software developer specializing in building scalable web applications with clean and intuitive user interfaces using <strong>React, TypeScript, and Node.js</strong>.
          </p>
          <br />
          <p className="mb-4 text-gray-700  dark:text-gray-300">
            Currently, I’m building innovative solutions to enhance developer tracking and engagement. If you’d like to collaborate, please&nbsp;
            <a href="mailto:tukeshkrraju1011@gmail.com" className="border-b inline-block">
              send me an email
            </a>
            &nbsp;or reach out on any of my social handles.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start md:items-center space-x-4 mb-2 mt-4">
            {SOCIALS.map((social) => (
              <SocialLink
                key={social.label}
                aria-label={`Follow on ${social.label}`}
                href={social.href}
                icon={social.icon}
              />
            ))}
          </div>
        </div>


        {/* Right: Image (1/3 width) */}
        <div className="lg:w-1/3 h-full flex justify-center lg:justify-end mt-6 lg:mt-0">
          <Image
            src="/assets/about1.png"
            width={300}
            height={600}
            alt="avatar"
            priority
            className="h-full w-auto max-h-screen object-cover shadow-lg"
          />
        </div>

      </section>


      <div className="my-8 w-full border-t border-gray-200 dark:border-gray-800" />

      <div>
        <h2 className="mb-6 text-2xl font-bold">Check Something Amazing </h2>
        <ul>
          <li className="py-1">
            <Link href="\tracode">
              <span className="text-blue-500 hover:underline font-mono">Tracode</span> - A platform for coding analytics and developer tracking.
            </Link>
          </li>
        </ul>

      </div>

    </React.Fragment>
  );
}
