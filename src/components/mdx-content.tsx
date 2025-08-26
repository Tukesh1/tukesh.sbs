"use client";

import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mt-8 sm:mt-12 mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight first:mt-0 text-gray-900 dark:text-gray-100" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-6 sm:mt-10 mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 sm:mt-8 mb-3 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 sm:mb-6 leading-6 sm:leading-7 md:leading-8 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-gray-700 dark:text-gray-300 leading-6 sm:leading-7 md:leading-8 ml-4 sm:ml-6 list-disc" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className="my-6 sm:my-8 border-l-4 border-gray-300 dark:border-gray-600 pl-4 sm:pl-6 italic text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-6 sm:leading-7 md:leading-8" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="my-6 sm:my-8 overflow-x-auto rounded-lg bg-gray-50 dark:bg-gray-900 p-3 sm:p-4 md:p-6 text-xs sm:text-sm border border-gray-200 dark:border-gray-800" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-gray-100 dark:bg-gray-800 px-1 sm:px-2 py-0.5 sm:py-1 text-xs sm:text-sm md:text-base font-mono text-gray-800 dark:text-gray-200" {...props} />
  ),
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || ""}
      className="my-6 sm:my-8 rounded-lg max-w-full h-auto shadow-lg mx-auto"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-2 underline-offset-2 break-words" 
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props} 
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-gray-900 dark:text-gray-100" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-gray-800 dark:text-gray-200" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 sm:my-8 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm sm:text-base" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="border-b border-gray-200 dark:border-gray-700" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="border border-gray-300 dark:border-gray-600 px-3 sm:px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border border-gray-300 dark:border-gray-600 px-3 sm:px-4 py-2 text-gray-700 dark:text-gray-300" {...props} />
  ),
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="mdx-content w-full overflow-hidden">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
