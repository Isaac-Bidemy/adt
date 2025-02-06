import React from "react";

export default function Post({ post }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:h-full md:w-48"
          src={post.image}
          alt={post.title}
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {post.category}
        </div>
        <a
          href={post.url}
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          {post.title}
        </a>
        <p className="mt-2 text-gray-500">{post.description}</p>
      </div>
    </div>
  );
}