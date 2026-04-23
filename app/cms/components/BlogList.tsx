'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader, Plus, RefreshCw, Search } from 'lucide-react';

interface Blog {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  date: string;
  thumbnailImage: string;
}

interface BlogListProps {
  blogs: Blog[];
  selectedBlog: Blog | null;
  onSelectBlog: (blog: Blog) => void;
  onCreateNew: () => void;
  loading: boolean;
  onRefresh: () => void;
  fullWidth?: boolean;
}

export default function BlogList({
  blogs,
  selectedBlog,
  onSelectBlog,
  onCreateNew,
  loading,
  onRefresh,
  fullWidth = false,
}: BlogListProps) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`h-full flex flex-col bg-white ${fullWidth ? 'max-w-[1200px] mx-auto w-full' : ''}`}>
      {/* Header */}
      <div className={`p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 ${fullWidth ? 'mt-8' : ''}`}>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Blog Articles</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and edit your travel stories</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search stories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent rounded-xl text-sm focus:bg-white focus:border-orange-200 transition-all outline-none"
            />
          </div>
          <button 
            onClick={onRefresh} 
            disabled={loading}
            className="p-2.5 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all disabled:opacity-50 border border-transparent hover:border-orange-100"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <Button 
            onClick={onCreateNew} 
            className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-100 px-6 h-11 rounded-xl font-bold uppercase tracking-wider text-[10px]"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New
          </Button>
        </div>
      </div>

      {/* Blog List/Grid */}
      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Loader className="w-10 h-10 animate-spin mb-4 text-orange-500" />
            <p className="text-xs font-bold uppercase tracking-widest">Syncing Articles...</p>
          </div>
        )}

        {!loading && filteredBlogs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100">
            <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center mb-6 shadow-sm">
              <Search className="w-8 h-8 text-gray-200" />
            </div>
            <p className="text-gray-900 font-bold text-lg">No articles found</p>
            <p className="text-gray-400 text-sm mt-2 max-w-xs mx-auto">We couldn't find any stories matching your search. Try a different keyword or create a new post.</p>
            <Button onClick={onCreateNew} variant="outline" className="mt-8 rounded-xl border-orange-200 text-orange-500 hover:bg-orange-50">
              Create New Article
            </Button>
          </div>
        )}

        {!loading && filteredBlogs.length > 0 && (
          <div className={fullWidth ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-4"}>
            {filteredBlogs.map((blog) => (
              <button
                key={blog.id}
                onClick={() => onSelectBlog(blog)}
                className={`text-left transition-all relative group ${
                  fullWidth 
                    ? 'bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1' 
                    : `w-full p-4 rounded-2xl border ${selectedBlog?.id === blog.id ? 'bg-orange-50 border-orange-200' : 'bg-white border-transparent hover:bg-gray-50'}`
                }`}
              >
                <div className={fullWidth ? "flex flex-col" : "flex gap-4 items-center"}>
                  <div className={fullWidth ? "aspect-[16/9] w-full relative bg-gray-100" : "w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0"}>
                    {blog.thumbnailImage ? (
                      <img
                        src={blog.thumbnailImage}
                        alt=""
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://placehold.co/800x450/f3f4f6/9ca3af?text=No+Image';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 uppercase text-[10px] font-bold">No Image</div>
                    )}
                  </div>
                  
                  <div className={fullWidth ? "p-6" : "flex-1 min-w-0"}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-bold text-orange-500 uppercase tracking-[0.2em]">{blog.category}</span>
                    </div>
                    <h3 className={`font-bold text-gray-900 leading-tight ${fullWidth ? 'text-lg line-clamp-2' : 'text-sm truncate'} group-hover:text-orange-600 transition-colors`}>
                      {blog.title}
                    </h3>
                    {fullWidth && (
                      <p className="text-gray-500 text-xs mt-3 line-clamp-2 leading-relaxed">
                        {blog.subtitle}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600">
                        {blog.author.charAt(0)}
                      </div>
                      <span className="text-[10px] font-semibold text-gray-400 truncate uppercase tracking-widest">{blog.author}</span>
                      <span className="ml-auto text-[10px] font-medium text-gray-400">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


