import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllPosts } from "../../../data/post";
import { siteMetadata } from "../../../data/siteMetadata";
import { MDXContent } from "../../../components/mdx-content";

interface PostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

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
      url: `${siteMetadata.siteUrl}/post/${params.slug}`,
      type: "article",
      publishedTime: metadata.createdAt,
      modifiedTime: metadata.updatedAt,
      authors: [siteMetadata.author],
    },
    alternates: {
      canonical: `${siteMetadata.siteUrl}/post/${params.slug}`,
    },
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

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
    url: `${siteMetadata.siteUrl}/post/${params.slug}`,
  };

  return (
    <React.Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Clean Medium-style layout */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Back navigation - subtle and minimal */}
        <div className="mb-12">
          <Link
            href="/post"
            className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Posts
          </Link>
        </div>

        {/* Article header - clean and focused */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
            {post.metadata.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {post.metadata.description}
          </p>
        </header>

        {/* Article content - Medium-style typography */}
        <div className="prose prose-lg max-w-none">
          <MDXContent source={post.content} />
        </div>

        {/* Minimal footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
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
