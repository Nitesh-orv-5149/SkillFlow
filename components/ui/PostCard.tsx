import React from "react";

type Post = {
  id: number;
  content: string;
  createdAt: Date;
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="p-4 rounded-xl bg-white border shadow-sm">
      <p className="text-gray-800">{post.content}</p>
      <p className="text-xs text-gray-400 mt-2">
        {post.createdAt.toLocaleString()}
      </p>
    </div>
  );
};

export default PostCard;
