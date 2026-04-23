'use client';

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import BlogManager from './components/BlogManager';

export default function CMSPage() {
  const [activePage, setActivePage] = useState('blogs');

  return (
    <div className="flex min-h-screen bg-[#fcfbf9]">
      {/* Left Sidebar Navigation */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content */}
      <main className="flex-1">
        {activePage === 'blogs' && <BlogManager />}
      </main>
    </div>
  );
}
