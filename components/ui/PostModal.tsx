type Props = {
  newPost: {
    title: string;
    content: string;
    tags: string[];
  };
  setNewPost: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
      tags: string[];
    }>
  >;
  setShowCreatePost: React.Dispatch<React.SetStateAction<boolean>>;
  setPosts: React.Dispatch<
    React.SetStateAction<
      {
        user: {
          name: string;
          avatar: string;
        };
        title: string;
        content: string;
        tags: string[];
        postedAt: string;
      }[]
    >
  >;
};

export default function PostModal({
  newPost,
  setNewPost,
  setShowCreatePost,
  setPosts,
}: Props) {
  const handleSubmit = () => {
    if (!newPost.title || !newPost.content) return;
    const newEntry = {
      user: {
        name: "John Doe",
        avatar: "/placeholder.png",
      },
      title: newPost.title,
      content: newPost.content,
      tags: newPost.tags,
      postedAt: new Date().toISOString(),
    };
    setPosts(prev => [...prev, newEntry]);
    setNewPost({ title: "", content: "", tags: [] });
    setShowCreatePost(false);
  };

  return (
    <div className="p-4 border rounded bg-white shadow">
      <input
        placeholder="Title"
        value={newPost.title}
        onChange={e => setNewPost(p => ({ ...p, title: e.target.value }))}
        className="w-full p-2 border mb-2"
      />
      <textarea
        placeholder="Content"
        value={newPost.content}
        onChange={e => setNewPost(p => ({ ...p, content: e.target.value }))}
        className="w-full p-2 border mb-2"
      />
      <input
        placeholder="Tags (comma separated)"
        value={newPost.tags.join(", ")}
        onChange={e =>
          setNewPost(p => ({ ...p, tags: e.target.value.split(",").map(t => t.trim()) }))
        }
        className="w-full p-2 border mb-2"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Post
      </button>
    </div>
  );
}
