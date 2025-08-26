import React from "react";
import { Metadata } from "next";
import { siteMetadata } from "../../data/siteMetadata";
import { getAllPosts } from "../../data/post";
import { PostItem } from "../../components/post-item";
import { Panel, PanelContent, PanelHeader } from "../../components/panel";

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
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">I do not write a lot but do share my learnings and thoughts from time to time.</p>
                </PanelHeader>
                <PanelContent>
                    <div className="mt-4 sm:mt-7 flex flex-col gap-3 sm:gap-5">
                        <div className="flex flex-col gap-2 sm:gap-1 md:gap-2">
                            {posts.length === 0 ? (
                                <div className="text-center py-8 sm:py-4">
                                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                                        No posts yet. Check back soon!
                                    </p>
                                </div>
                            ) : (
                                posts.map((post) => (
                                    <PostItem key={post.slug} post={post} />
                                ))
                            )}
                        </div>
                    </div>
                </PanelContent>
            </Panel>
        </React.Fragment>
    );
}