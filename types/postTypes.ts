export interface ForumProps {
    posts: Post[]
}

export type Post = {
  id: string;
  userId: string;
  content: string;
  tags: string[];
  type: "progress" | "question" | "project" | "resource";
  createdAt: string;
  likes: number;
  comments: number;
};

