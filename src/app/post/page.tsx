import React from "react";
import { Metadata } from "next";
import { siteMetadata } from "../../data/siteMetadata";
import { getAllPosts } from "../../data/post";
import { PostItem } from "../../components/post-item";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../../components/panel";

export const metadata: Metadata = {
  title: "Post",
  description: "A collection of articles about web development, AI/ML, and my coding journey.",
  openGraph: {
    title: "Post | Tukesh Kumar",
    description: "A collection of articles about web development, AI/ML, and my coding journey.",
    url: `${siteMetadata.siteUrl}/post`,
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}/post`,
  },
};

export default function PostPage() {
  const posts = getAllPosts();

  return (
    <React.Fragment>
      <Panel className="mt-6">
        <PanelHeader>
          <PanelTitle className="text-2xl font-bold">Post</PanelTitle>
        </PanelHeader>
        <PanelContent>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            A collection of articles about web development, AI/ML, and my coding journey.
          </p>
          
          {posts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">
                No posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              {posts.map((post) => (
                <PostItem key={post.slug} post={post} />
              ))}
            </div>
          )}
        </PanelContent>
      </Panel>
    </React.Fragment>
  );
}