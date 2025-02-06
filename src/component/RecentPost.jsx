import React from 'react'
import { recentPostsData } from '../datas/recentPostData';
export default function RecentPost() {
    return (
        <div className="w-4/5 mx-auto p-3 flex flex-col gap-8 py-7">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {recentPostsData.map((post) => (
                <div
                  key={post.id}
                  className="group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all"
                >
                  <a href={post.link}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
                    />
                  </a>
                  <div className="p-3 flex flex-col gap-2">
                    <p className="text-lg font-semibold line-clamp-2 text-left">{post.title}</p>
                    <span className="italic text-sm text-left">{post.category}</span>
                    <a
                      href={post.link}
                      className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-d rounded-tl-none m-2"
                    >
                      Read article
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    