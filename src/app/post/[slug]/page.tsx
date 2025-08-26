import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllPosts } from "../../../data/post";
import { siteMetadata } from "../../../data/siteMetadata";
import { MDXContent } from "../../../components/mdx-content";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const { metadata } = post;

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${siteMetadata.siteUrl}/post/${slug}`,
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [siteMetadata.author],
    },
    alternates: {
      canonical: `${siteMetadata.siteUrl}/post/${slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    description: post.metadata.description,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: siteMetadata.author,
      url: siteMetadata.siteUrl,
    },
    url: `${siteMetadata.siteUrl}/post/${slug}`,
  };

  return (
    <React.Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Clean Medium-style layout */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back navigation - subtle and minimal */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/post"
            className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Posts
          </Link>
        </div>

        {/* Article header - clean and focused */}
        <header className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-4 sm:mb-6">
            {post.metadata.title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {post.metadata.description}
          </p>
        </header>

        {/* Article content */}
        <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none prose-gray dark:prose-invert">
          <MDXContent source={post.content} />
        </div>

        {/* Minimal footer */}
        <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/post"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            ← More posts
          </Link>
        </footer>
      </article>
    </React.Fragment>
  );
}
