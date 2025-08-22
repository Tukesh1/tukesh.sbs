import React from "react";
import Link from "next/link";
import { getRecentPosts } from "../data/post";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function BlogSection() {
  const recentPosts = getRecentPosts(2);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <Panel id="blog" className="mt-12">
      <PanelHeader>
        <PanelTitle className="text-xl font-bold">Recent Posts</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/post/${post.slug}`}
                className="group block rounded-md p-3 -m-3 hover:bg-gray-50 dark:hover:bg-dark-bg/40 transition"
              >
                <span className="text-gray-400 dark:text-gray-300 font-mono group-hover:underline">
                  {post.metadata.title}
                </span>
                <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {post.metadata.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
