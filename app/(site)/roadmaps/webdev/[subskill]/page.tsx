import { Forum } from "@/components/shared/SubSkillForum";
import { ForumPost } from "@/types/postTypes";

export default function subskillpagePage() {
     const samplePosts: ForumPost[] = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "SC",
      timestamp: "2 hours ago",
      title: "Best practices for React optimization",
      content: "I've been working on optimizing our React app and found some great techniques. Here's a useful guide I found:",
      links: [
        { url: "https://react.dev/learn", title: "React Documentation" }
      ],
      files: [
        { name: "optimization-checklist.pdf", size: "245 KB", type: "pdf" }
      ],
      likes: 12,
      replies: 5,
      tags: ["react", "performance"]
    },
    {
      id: 2,
      author: "Alex Rodriguez", 
      avatar: "AR",
      timestamp: "5 hours ago",
      title: "Database migration scripts",
      content: "Sharing some migration scripts that helped with our latest deployment. These should work for most PostgreSQL setups.",
      links: [],
      files: [
        { name: "migration-v2.sql", size: "12 KB", type: "sql" },
        { name: "rollback-script.sql", size: "8 KB", type: "sql" }
      ],
      likes: 8,
      replies: 3,
      tags: ["database", "postgresql"]
    }
  ];

  const handlePostCreate = (post: ForumPost): void => {
    console.log('New post created:', post);
  };

  const handlePostLike = (postId: number | string): void => {
    console.log('Post liked:', postId);
  };

  const handlePostReply = (postId: number | string): void => {
    console.log('Reply to post:', postId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Forum 
        posts={samplePosts}
        onPostCreate={handlePostCreate}
        onPostLike={handlePostLike}
        onPostReply={handlePostReply}
        allowNewPosts={true}
        showUserAvatars={true}
        className="container mx-auto"
      />
    </div>
  );
}