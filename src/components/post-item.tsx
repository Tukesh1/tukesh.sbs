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
    }).replace(' ', '-').replace(',', '');
  };

  return (
    <Link 
      href={`/post/${post.slug}`}
      className="group flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-0 text-balance text-sm sm:text-base md:text-lg font-medium text-gray-900 dark:text-white py-2 sm:py-1"
    >
      <span className="mr-2 hidden h-1.5 w-1.5 bg-gray-900 dark:bg-white transition-all group-hover:h-5 group-hover:bg-yellow-400 sm:block"></span>
      <span className="mr-0 sm:mr-1.5 flex-shrink-0 underline decoration-2 underline-offset-2 transition-colors group-hover:text-yellow-400 leading-relaxed">
        {post.metadata.title}
      </span>
      <span className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-zinc-500 font-normal">
        ({formatDate(post.createdAt)})
      </span>
    </Link>
  );
}
