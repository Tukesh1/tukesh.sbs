import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMetadata {
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
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
      const { data, content } = matter(fileContents);

      return {
        slug,
        metadata: data as PostMetadata,
        content,
      };
    })
    .sort((a, b) => {
      return new Date(b.metadata.createdAt).getTime() - new Date(a.metadata.createdAt).getTime();
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
    const { data, content } = matter(fileContents);

    return {
      slug,
      metadata: data as PostMetadata,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getRecentPosts(limit: number = 3): Post[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
}
