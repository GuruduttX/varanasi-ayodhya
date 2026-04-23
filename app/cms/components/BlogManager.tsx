'use client';

import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';
import { Loader } from 'lucide-react';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:17182';

interface Blog {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  date: string;
  thumbnailImage: string;
  content: string;
  tags: string[];
  quotes: string[];
  additionalImages: string[];
  coverImage: string;
  authorRole: string;
  readTime: string;
}

export default function BlogManager() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Fetch all blogs on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/admin/blogs`);
      const data = await response.json();

      if (data.success) {
        setBlogs(data.data);
      }
    } catch (error) {
      console.error('Connection error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBlogSelect = (blog: Blog) => {
    setSelectedBlog(blog);
    setShowCreateForm(false);
  };

  const handleBlogDeleted = () => {
    setSelectedBlog(null);
    fetchBlogs();
  };

  const handleBlogCreated = () => {
    setShowCreateForm(false);
    setSelectedBlog(null);
    fetchBlogs();
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-hidden flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative">
        {/* 
          Logic below is commented out to skip the 'Article List' page and go directly to the editor.
          To bring back the list view, uncomment the condition and the BlogList section.
        */}
        {/* {(showCreateForm || selectedBlog) ? ( */}
          <BlogDetail 
            blog={null} // Set to null to always show the 'Create New' form
            onDeleted={handleBlogDeleted} 
            onCreated={handleBlogCreated}
            onBack={() => {
              // Navigation back is currently disabled as the list is hidden
              console.log("Back clicked");
            }}
          />
        {/* ) : (
          <div className="h-full flex flex-col bg-white">
            <BlogList
              blogs={blogs}
              selectedBlog={selectedBlog}
              onSelectBlog={handleBlogSelect}
              onCreateNew={() => {
                setShowCreateForm(true);
                setSelectedBlog(null);
              }}
              loading={loading}
              onRefresh={fetchBlogs}
              fullWidth={true}
            />
          </div>
        )} */}
      </div>
    </div>
  );
}



