import Link from 'next/link';
import { Post } from '../data/post';

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Link 
      href={`/post/${post.slug}`}
      className="block rounded-md p-3 -m-3 hover:bg-gray-50 dark:hover:bg-dark-bg/40 transition"
    >
      <div className="space-y-1">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {formatDate(post.metadata.createdAt)}
        </div>
        <h3 className="text-gray-400 dark:text-gray-300 font-mono group-hover:underline">
          {post.metadata.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {post.metadata.description}
        </p>
      </div>
    </Link>
  );
}
