# Divine Journeys - Full Stack CMS Setup

A complete CMS system for managing blog content with a Next.js frontend, Node.js backend, and admin panel.

## 🎯 Architecture Overview

```
Frontend (Next.js)
    ↓
    ├─→ Blog Listing Page (fetches from /blogs)
    └─→ Blog Detail Page (fetches from /blogs/:slug)

Backend (Node.js + Express) [Port 17182]
    ├─→ GET /blogs - List all blogs
    ├─→ GET /blogs/:id - Get single blog
    ├─→ POST /blogs - Create new blog
    ├─→ PUT /blogs/:id - Update blog
    ├─→ DELETE /blogs/:id - Delete blog
    └─→ GET /admin/blogs - Get all blogs (admin)

CMS Admin Panel (React/Next.js)
    └─→ Create & Manage blog posts
    └─→ Submit to Backend API
```

---

## 🚀 Quick Start

### Step 1: Start the Backend Server

```bash
cd backend
npm install
npm start
```

The backend will run on **http://localhost:17182**

Output:
```
✅ Divine Journeys Backend running on http://localhost:17182
📝 API Docs:
   GET  http://localhost:17182/blogs                - List all blogs
   GET  http://localhost:17182/blogs/:id            - Get blog details
   POST http://localhost:17182/blogs                - Create new blog
   ...
```

### Step 2: Start the Frontend

```bash
npm install
npm run dev
```

Access:
- **Frontend**: http://localhost:3000
- **Blog List**: http://localhost:3000/blog
- **Blog Detail**: http://localhost:3000/blog/[slug]

### Step 3: Access the CMS Admin Panel

Navigate to **http://localhost:3000/cms** to access the admin panel

---

## 📋 CMS Admin Panel Features

### Create Blog Card (Listing Page)

Fill in basic blog information:
- **Title** - Blog post title
- **Subtitle** - Short description (appears on listing)
- **Category** - Blog category (e.g., "Varanasi", "Spirituality")
- **Author** - Author name
- **Date** - Publish date
- **Thumbnail Image** - URL to thumbnail image

### Create Blog Details (Full Article)

Complete blog post with full content:
- All fields from Blog Card
- **Author Role** - e.g., "Spiritual Travel Expert"
- **Read Time** - e.g., "5 min read"
- **Cover Image** - Hero image for blog detail page
- **Content** - Full blog text (use double line breaks to separate paragraphs)
- **Tags** - Comma-separated tags
- **Quotes** - One quote per line (shown in blockquote format)
- **Additional Images** - One URL per line

### Manage Blogs

View all created blogs:
- See blog thumbnails, titles, and metadata
- Click "View" to see blog on frontend
- Click "Delete" to remove blogs
- Auto-refresh to see newly created blogs

---

## 🔄 Data Flow

### Creating a Blog

1. **CMS Admin Panel** → Fill form
2. **POST /blogs** → Send to backend
3. **Backend** → Store in in-memory array
4. **Frontend** → Auto-fetches updated list (every 30 seconds)
5. **Blog appears** on listing and detail pages

### Viewing Blogs

1. User visits **http://localhost:3000/blog**
2. Frontend **GET /blogs** → Fetch all blog cards
3. Display featured post + blog grid
4. User clicks blog → Navigate to **/blog/[slug]**
5. Frontend **GET /blogs/:slug** → Fetch full blog details
6. Display complete blog post

---

## 📦 API Endpoints Reference

### Blog Listing API

```bash
GET /blogs
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "slug": "ganga-aarti-guide",
      "title": "The Mystical Ganga Aarti",
      "subtitle": "A complete guide...",
      "preview": "Discover the...",
      "category": "Varanasi",
      "author": "Divine Journeys",
      "date": "2024-10-15",
      "thumbnailImage": "https://..."
    }
  ],
  "count": 1
}
```

### Blog Details API

```bash
GET /blogs/:slug
```

Response:
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "slug": "ganga-aarti-guide",
    "title": "...",
    "content": "...",
    "tags": ["Spirituality", "Ghats"],
    "quotes": ["..."],
    "additionalImages": ["..."],
    ...
  }
}
```

### Create Blog API

```bash
POST /blogs
Content-Type: application/json

{
  "title": "Blog Title",
  "subtitle": "Short description",
  "category": "Varanasi",
  "author": "Author Name",
  "date": "2024-10-15",
  "thumbnailImage": "https://...",
  "coverImage": "https://...",
  "content": "Full blog content...",
  "tags": ["tag1", "tag2"],
  "quotes": ["quote1", "quote2"],
  "additionalImages": ["image1", "image2"]
}
```

### Update Blog API

```bash
PUT /blogs/:id
Content-Type: application/json

{ ...updated fields... }
```

### Delete Blog API

```bash
DELETE /blogs/:id
```

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` in the Next.js root:

```env
# Backend API URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:17182
```

### Backend Configuration

In `backend/server.js`:

```javascript
const PORT = 17182; // Change port here if needed
```

---

## 📝 Blog Data Structure

```typescript
interface Blog {
  id: string;                    // UUID
  slug: string;                  // Auto-generated from title
  title: string;                 // Blog title
  subtitle: string;              // Short description
  preview: string;               // Preview text (same as subtitle)
  category: string;              // Blog category
  author: string;                // Author name
  authorRole: string;            // Author role (e.g., "Expert")
  date: string;                  // ISO date string
  readTime: string;              // e.g., "5 min read"
  thumbnailImage: string;        // Listing page image
  coverImage: string;            // Detail page hero image
  content: string;               // Full blog content
  tags: string[];                // Array of tags
  quotes: string[];              // Array of quotes
  additionalImages: string[];    // Array of image URLs
  createdAt: string;             // ISO timestamp
  updatedAt?: string;            // ISO timestamp (for updates)
}
```

---

## 🎨 Frontend Pages Updated

### Blog Listing Page
- **Route**: `/blog`
- **Component**: `app/blog/page.tsx`
- **Features**:
  - Fetches from `GET /blogs`
  - Shows featured blog + blog grid
  - Auto-refresh every 30 seconds
  - Dynamic links using `blog.slug`

### Blog Detail Page
- **Route**: `/blog/[slug]`
- **Component**: `app/blog/[slug]/page.tsx`
- **Features**:
  - Fetches from `GET /blogs/:slug`
  - Displays full content, quotes, images
  - Shows author info
  - Share buttons
  - Error handling & loading states

---

## 🔍 How Auto-Refresh Works

**Frontend Blog Listing**:
```javascript
useEffect(() => {
  fetchBlogs();
  // Auto-refresh every 30 seconds
  const interval = setInterval(fetchBlogs, 30000);
  return () => clearInterval(interval);
}, []);
```

New blogs created in CMS will appear automatically after ~30 seconds.

---

## 💾 In-Memory Storage

**⚠️ Important**: Data is stored in memory and will be lost when the server restarts.

To persist data, you can:
1. Add a database (MongoDB, PostgreSQL, etc.)
2. Save data to JSON file
3. Export/import blog data

---

## 🧪 Testing the System

### Test 1: Create Blog from CMS

1. Go to http://localhost:3000/cms
2. Click "Create Blog" tab
3. Fill in form and submit
4. Check success message
5. Go to http://localhost:3000/blog
6. Blog should appear after ~30 seconds

### Test 2: View Blog Details

1. Go to http://localhost:3000/blog
2. Click on any blog card
3. Should navigate to `/blog/[slug]`
4. Full blog content should load

### Test 3: Manage Blogs

1. Go to http://localhost:3000/cms
2. Click "Manage Blogs" tab
3. View all created blogs
4. Click "Delete" to remove a blog
5. Refresh page to see updates

---

## 🐛 Troubleshooting

### Backend Connection Error

**Error**: "Connection error: Failed to fetch"

**Solution**:
1. Ensure backend is running: `npm start` in `/backend`
2. Check backend is on port 17182
3. Verify NEXT_PUBLIC_BACKEND_URL in `.env.local`

### Blog Not Showing

**Error**: "No blogs found" on listing page

**Solution**:
1. Create a blog from CMS admin panel
2. Wait up to 30 seconds for auto-refresh
3. Manually refresh the page

### Images Not Loading

**Solution**:
- Use valid image URLs
- Check image permissions
- Backend logs any image errors

### CORS Errors

**Solution**: Backend already has CORS enabled for all origins (in production, restrict this)

---

## 📚 Files Structure

```
divine-journeys-next/
├── backend/
│   ├── package.json
│   └── server.js (main API)
│
├── CMS/
│   ├── BlogForm.tsx (create blogs)
│   ├── BlogList.tsx (manage blogs)
│   └── page.tsx (main CMS page)
│
├── app/
│   ├── blog/
│   │   ├── page.tsx (listing - UPDATED)
│   │   └── [slug]/
│   │       └── page.tsx (detail - UPDATED)
│   └── ...
│
└── .env.local (backend URL)
```

---

## 🚀 Next Steps (Optional Enhancements)

- [ ] Add database (MongoDB/PostgreSQL)
- [ ] Add authentication to CMS
- [ ] Image upload instead of URL
- [ ] Rich text editor for content
- [ ] SEO optimization
- [ ] Blog search functionality
- [ ] Comment system
- [ ] Draft/Published states
- [ ] Scheduled publishing
- [ ] Analytics tracking

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review backend logs on http://localhost:17182/health
3. Check frontend console for errors

---

Happy blogging! 🎉
