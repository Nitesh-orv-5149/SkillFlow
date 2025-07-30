"use client"

import React, { useState } from 'react';
import { MessageCircle, Heart, Share2, Paperclip, ExternalLink, Download, User, Plus } from 'lucide-react';
import { ForumProps, NewPostData, ForumLink, ForumFile, ForumPostProps, NewPostFormProps, ForumPost } from '@/types/postTypes';

export const Forum: React.FC<ForumProps> = ({ 
  posts = [], 
  onPostCreate, 
  onPostLike, 
  onPostReply,
  allowNewPosts = true,
  showUserAvatars = true,
  className = ""
}) => {
  const [localPosts, setLocalPosts] = useState<ForumPost[]>(posts);
  const [showNewPost, setShowNewPost] = useState<boolean>(false);

  const handleLike = (postId: number | string): void => {
    const updatedPosts = localPosts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    );
    setLocalPosts(updatedPosts);
    onPostLike?.(postId);
  };

  const handleNewPost = (postData: NewPostData): void => {
    const newPost: ForumPost = {
      id: Date.now(),
      timestamp: 'Just now',
      likes: 0,
      replies: 0,
      ...postData
    };
    setLocalPosts([newPost, ...localPosts]);
    onPostCreate?.(newPost);
    setShowNewPost(false);
  };

  return (
    <div className={`max-w-4xl mx-auto p-4 ${className}`}>
      {allowNewPosts && (
        <div className="mb-6">
          {!showNewPost ? (
            <button
              onClick={() => setShowNewPost(true)}
              className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-gray-600"
            >
              <Plus size={20} />
              Create New Post
            </button>
          ) : (
            <NewPostForm 
              onSubmit={handleNewPost}
              onCancel={() => setShowNewPost(false)}
            />
          )}
        </div>
      )}

      <div className="space-y-6">
        {localPosts.map(post => (
          <ForumPost 
            key={post.id}
            post={post}
            onLike={handleLike}
            onReply={onPostReply}
            showAvatar={showUserAvatars}
          />
        ))}
      </div>
    </div>
  );
};

// Reusable ForumPost component
const ForumPost: React.FC<ForumPostProps> = ({ post, onLike, onReply, showAvatar = true }) => {
  const handleLinkClick = (url: string): void => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFileDownload = (file: ForumFile): void => {
    console.log('Download file:', file.name);
    // Implement actual download logic here
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          {showAvatar && (
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
              {post.avatar || post.author?.charAt(0) || 'U'}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-gray-900 mb-1">{post.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="text-gray-700 leading-relaxed">{post.content}</p>
        </div>

        {/* Links */}
        {post.links && post.links.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Links:</h4>
            <div className="space-y-2">
              {post.links.map((link: ForumLink, index: number) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.url)}
                  className="flex items-center gap-2 p-2 bg-blue-50 rounded border hover:bg-blue-100 transition-colors w-full text-left"
                >
                  <ExternalLink size={16} className="text-blue-600 flex-shrink-0" />
                  <span className="text-blue-700 text-sm truncate">{link.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Files */}
        {post.files && post.files.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Files:</h4>
            <div className="space-y-2">
              {post.files.map((file: ForumFile, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded border"
                >
                  <Paperclip size={16} className="text-gray-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">{file.name}</div>
                    <div className="text-xs text-gray-500">{file.size}</div>
                  </div>
                  <button 
                    onClick={() => handleFileDownload(file)}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    <Download size={16} className="text-gray-600" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
          <button
            onClick={() => onLike(post.id)}
            className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-red-50 transition-colors group"
          >
            <Heart size={16} className="group-hover:text-red-500" />
            <span className="text-sm text-gray-600 group-hover:text-red-500">{post.likes}</span>
          </button>
          
          <button
            onClick={() => onReply?.(post.id)}
            className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-blue-50 transition-colors group"
          >
            <MessageCircle size={16} className="group-hover:text-blue-500" />
            <span className="text-sm text-gray-600 group-hover:text-blue-500">{post.replies}</span>
          </button>

          <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-gray-50 transition-colors group">
            <Share2 size={16} className="group-hover:text-gray-700" />
            <span className="text-sm text-gray-600 group-hover:text-gray-700">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable NewPostForm component
const NewPostForm: React.FC<NewPostFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<NewPostData>({
    title: '',
    content: '',
    author: 'Current User',
    avatar: 'CU',
    links: [],
    files: [],
    tags: []
  });

  const addLink = (): void => {
    const url = prompt('Enter URL:');
    const title = prompt('Enter link title:');
    if (url && title) {
      setFormData(prev => ({
        ...prev,
        links: [...(prev.links || []), { url, title }]
      }));
    }
  };

  const addFile = (): void => {
    const name = prompt('Enter file name:');
    const size = prompt('Enter file size (e.g., "125 KB"):');
    if (name && size) {
      setFormData(prev => ({
        ...prev,
        files: [...(prev.files || []), { name, size }]
      }));
    }
  };

  const removeLink = (index: number): void => {
    setFormData(prev => ({
      ...prev,
      links: prev.links?.filter((_, i) => i !== index) || []
    }));
  };

  const removeFile = (index: number): void => {
    setFormData(prev => ({
      ...prev,
      files: prev.files?.filter((_, i) => i !== index) || []
    }));
  };

  const handleSubmit = (): void => {
    if (formData.title.trim() && formData.content.trim()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof NewPostData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Create New Post</h3>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Post title..."
          value={formData.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            handleInputChange('title', e.target.value)
          }
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        
        <textarea
          placeholder="What's on your mind?"
          value={formData.content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
            handleInputChange('content', e.target.value)
          }
          className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <div className="flex gap-2">
          <button
            onClick={addLink}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50"
          >
            <ExternalLink size={16} />
            Add Link
          </button>
          <button
            onClick={addFile}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50"
          >
            <Paperclip size={16} />
            Add File
          </button>
        </div>

        {/* Display added links */}
        {formData.links && formData.links.length > 0 && (
          <div className="space-y-2">
            <h5 className="text-sm font-medium text-gray-600">Added Links:</h5>
            {formData.links.map((link: ForumLink, index: number) => (
              <div key={index} className="flex items-center justify-between p-2 bg-blue-50 rounded">
                <span className="text-sm text-blue-700 truncate">{link.title}</span>
                <button
                  onClick={() => removeLink(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Display added files */}
        {formData.files && formData.files.length > 0 && (
          <div className="space-y-2">
            <h5 className="text-sm font-medium text-gray-600">Added Files:</h5>
            {formData.files.map((file: ForumFile, index: number) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-700 truncate">{file.name} ({file.size})</span>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            disabled={!formData.title.trim() || !formData.content.trim()}
          >
            Post
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
