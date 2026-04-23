# Quick Start Guide - Divine Journeys CMS

## 🎯 Goal
Create blogs from CMS admin panel → Store in backend → Display on frontend

---

## 📋 Prerequisites

- Node.js installed
- Terminal/Command prompt
- Web browser

---

## 🚀 3-Step Startup

### Step 1: Start Backend (in one terminal)

```bash
cd backend
npm install
npm start
```

✅ Backend ready on http://localhost:17182

### Step 2: Start Frontend (in another terminal)

```bash
npm install
npm run dev
```

✅ Frontend ready on http://localhost:3000

### Step 3: Open CMS Admin Panel

Visit: **http://localhost:3000/cms**

---

## 📝 Create Your First Blog

1. **Go to CMS** → http://localhost:3000/cms
2. **Click "Create Blog"** tab
3. **Fill the form:**
   - Title: "My First Blog"
   - Subtitle: "A short description"
   - Author: "Your Name"
   - Date: Today's date
   - Category: "Travel"
4. **Click "Create Blog Card"**
5. ✅ Success message appears!

---

## 👀 View Your Blog

### Blog Listing Page
Visit: **http://localhost:3000/blog**

Your blog will appear in the grid.

**Note**: If not visible immediately, wait 30 seconds or refresh the page.

### Blog Detail Page
Click on any blog card to see the full post.

URL will be: `http://localhost:3000/blog/my-first-blog`

---

## 🎨 Create Full Blog with Content

For a complete blog with content, images, tags, etc:

1. **Go to CMS** → http://localhost:3000/cms
2. **Click "Blog Details (Full Article)"** tab
3. **Fill in all fields:**
   - Title
   - Subtitle
   - Author
   - Category
   - Date
   - Read Time (e.g., "5 min read")
   - Cover Image (URL)
   - Content (write or paste your text)
   - Tags (comma-separated)
   - Quotes (one per line)
   - Additional Images (one URL per line)
4. **Click "Create Blog Post"**
5. ✅ Blog created with full content!

---

## 📚 Manage Blogs

1. **Go to CMS** → http://localhost:3000/cms
2. **Click "Manage Blogs"** tab
3. **View all blogs:**
   - See thumbnails
   - Click "View" to see on frontend
   - Click "Delete" to remove
   - Click "Refresh" to update list

---

## 🔄 How It Works

```
CMS Admin Panel (http://localhost:3000/cms)
        ↓
   Fill Form
        ↓
  Click Submit
        ↓
  POST to Backend
        ↓
Backend Store in Memory
        ↓
Frontend Auto-Refresh
        ↓
Blog Appears on Listing (http://localhost:3000/blog)
```

---

## 🖼️ URL Formats

- **Frontend Home**: http://localhost:3000
- **Blog Listing**: http://localhost:3000/blog
- **Blog Detail**: http://localhost:3000/blog/your-blog-slug
- **CMS Admin**: http://localhost:3000/cms
- **Backend API**: http://localhost:17182
- **Backend Health**: http://localhost:17182/health

---

## ⚡ Features

✅ Create blogs from admin panel
✅ Full content support (text, images, quotes)
✅ Dynamic URL generation
✅ Auto-refresh on frontend
✅ Delete blogs
✅ View in-memory storage

---

## 📝 Content Tips

### Title
- Clear and descriptive
- 5-10 words ideal
- Auto-converted to URL slug

### Content
- Use double line breaks to separate paragraphs
- Can be plain text or formatted

### Images
- Use full URLs (https://...)
- Format: `https://example.com/image.jpg`

### Tags
- Separate with commas
- Example: `Spirituality, Varanasi, Travel`

### Quotes
- One per line
- Will show in highlighted blockquote format

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Connection error" | Make sure backend is running on port 17182 |
| Blog not appearing | Wait 30 seconds, then refresh page |
| Images not showing | Use valid image URLs (check accessibility) |
| Port 17182 in use | Change port in `backend/server.js` |
| Form won't submit | Check backend is running |

---

## 💾 Data Persistence

**Important**: Data is stored in memory and lost when backend restarts.

To keep data:
1. Restart backend before checking data
2. Or add database (MongoDB, PostgreSQL)

---

## 🎉 You're All Set!

Your CMS system is ready to use. Start creating blogs! 🚀

For detailed documentation, see [CMS-SETUP.md](./CMS-SETUP.md)
