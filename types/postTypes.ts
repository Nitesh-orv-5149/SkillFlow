export interface ForumLink {
  url: string;
  title: string;
}

export interface ForumFile {
  name: string;
  size: string;
  type?: string;
}

export type ForumPost = {
  id: number | string;
  author: string;
  avatar?: string;
  timestamp: string;
  title: string;
  content: string;
  links?: ForumLink[];
  files?: ForumFile[];
  likes: number;
  replies: number;
  tags?: string[];
}

export interface NewPostData {
  title: string;
  content: string;
  author: string;
  avatar?: string;
  links?: ForumLink[];
  files?: ForumFile[];
  tags?: string[];
}

export interface ForumProps {
  posts?: ForumPost[];
  onPostCreate?: (post: ForumPost) => void;
  onPostLike?: (postId: number | string) => void;
  onPostReply?: (postId: number | string) => void;
  allowNewPosts?: boolean;
  showUserAvatars?: boolean;
  className?: string;
}

export interface ForumPostProps {
  post: ForumPost;
  onLike: (postId: number | string) => void;
  onReply?: (postId: number | string) => void;
  showAvatar?: boolean;
}

export interface NewPostFormProps {
  onSubmit: (postData: NewPostData) => void;
  onCancel: () => void;
}