import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMetadata {
  title: string;
  description: string;
  image?: string;
  createdAt?: string; // Made optional since we'll auto-generate
  updatedAt?: string; // Made optional since we'll auto-generate
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
  createdAt: string; // Always available after processing
  updatedAt: string; // Always available after processing
}

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/post');

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(POSTS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const fileStat = fs.statSync(fullPath);
      const { data, content } = matter(fileContents);

      // Auto-generate dates if not provided
      const createdAt = data.createdAt || fileStat.birthtime.toISOString().split('T')[0];
      const updatedAt = data.updatedAt || fileStat.mtime.toISOString().split('T')[0];

      return {
        slug,
        metadata: data as PostMetadata,
        content,
        createdAt,
        updatedAt,
      };
    })
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const fileStat = fs.statSync(fullPath);
    const { data, content } = matter(fileContents);

    // Auto-generate dates if not provided
    const createdAt = data.createdAt || fileStat.birthtime.toISOString().split('T')[0];
    const updatedAt = data.updatedAt || fileStat.mtime.toISOString().split('T')[0];

    return {
      slug,
      metadata: data as PostMetadata,
      content,
      createdAt,
      updatedAt,
    };
  } catch (error) {
    return null;
  }
}

export function getRecentPosts(limit: number = 3): Post[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
}
