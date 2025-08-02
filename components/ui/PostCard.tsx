"use client";

import { Post } from "@/types/postTypes";
import { ThumbsUp, ThumbsDown, MessageCircle, Share } from "lucide-react";
import { useState } from "react";

export default function PostCard({ post }: { post: Post }) {
  const [postLikes, setPostLikes] = useState(post.likes);
  const [postDislikes, setPostDislikes] = useState(0);

  return (
    <div className="bg-slate-800 p-4 rounded-md w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-white">
      <div className="flex flex-col items-center justify-center gap-2 min-w-[100px]">
        <div className="bg-cyan-400 text-black font-bold text-center rounded-md py-2 px-4 capitalize text-sm">
          {post.userId}
        </div>
        <div className="bg-emerald-700 font-semibold text-center rounded-md px-3 py-1 text-xs">
          {post.type}
        </div>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-slate-600 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm leading-relaxed">{post.content}</p>
        <div className="flex flex-col md:flex-row gap-4">
            <button className="cursor-pointer mt-1 hover:text-cyan-400 text-cyan-200 text-sm flex items-center gap-1 select-none transition-all w-fit">
                <MessageCircle size={16} />
                {post.comments} Comments
            </button>
            <button className="cursor-pointer mt-1 hover:text-cyan-400 text-cyan-200 text-sm flex items-center gap-1 select-none transition-all w-fit">
                <Share size={16} />
                Share
            </button>
        </div>
      </div>

      <div className="flex items-center gap-4 self-end md:self-center">
        <button
          onClick={() => setPostLikes(postLikes + 1)}
          className="hover:text-cyan-400 text-cyan-200 transition-all flex items-center gap-1 select-none"
        >
          <ThumbsUp size={18} />
          {postLikes}
        </button>
        <button
          onClick={() => setPostDislikes(postDislikes - 1)}
          className="hover:text-red-400 text-red-200 transition-all flex items-center gap-1 select-none"
        >
          <ThumbsDown size={18} />
          {postDislikes}
        </button>
      </div>
    </div>
  );
}
