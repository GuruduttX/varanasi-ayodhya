import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { connectToDatabase, closeDatabase, getDb } from './db.js';
import { ObjectId } from 'mongodb';

const app = express();
const PORT = 17182;

// Middleware
app.use(cors());
// Increase payload size limit to 50MB to handle base64 encoded images
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

// ============ DATABASE CONNECTION ============
// Initialize database connection on server start
let db = null;

async function initializeDatabase() {
  try {
    const { db: database } = await connectToDatabase();
    db = database;
    
    // Create collections if they don't exist
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);
    
    if (!collectionNames.includes('blogs')) {
      await db.createCollection('blogs');
      console.log('✅ Created "blogs" collection');
      
      // Insert sample blog if collection is empty
      const blogsCollection = db.collection('blogs');
      await blogsCollection.insertOne({
        id: 'blog-1',
        slug: 'ganga-aarti-guide',
        title: 'The Mystical Ganga Aarti: A Complete Guide to the Evening Ritual',
        subtitle: 'Discover the centuries-old evening ritual that transforms the banks of Varanasi',
        preview: 'Discover the centuries-old evening ritual that transforms the banks of Varanasi into a realm of divine light and spiritual awakening.',
        category: 'Varanasi',
        author: 'Divine Journeys Editorial',
        authorRole: 'Spiritual Travel Expert',
        date: 'October 15, 2024',
        readTime: '5 min read',
        thumbnailImage: 'https://images.unsplash.com/photo-1599299810694-b5ac2dd579c0?w=500&h=300',
        coverImage: 'https://images.unsplash.com/photo-1599299810694-b5ac2dd579c0?w=1200&h=600',
        tags: ['Spirituality', 'Ghats', 'Evening Ritual', 'Varanasi'],
        content: `As the sun begins to set over the ancient city of Varanasi, a profound transformation takes place along the banks of the sacred river.

The Ganga Aarti is not merely a visual spectacle; it is a meticulously choreographed sequence of offerings. Young priests, draped in traditional saffron and white silks, take their positions on elevated wooden platforms facing the river.

The ritual begins with the blowing of a conch shell, a sound that cuts through the chatter of the crowd and signals the start of the divine communion. What follows is an offering of the five elements to the river goddess: space, wind, fire, water, and earth.

To witness the Aarti is to see devotion made visible. It is the moment when the eternal soul of India speaks through fire and water.`,
        quotes: [
          'To witness the Aarti is to see devotion made visible. It is the moment when the eternal soul of India speaks through fire and water.'
        ],
        additionalImages: [
          'https://images.unsplash.com/photo-1599299810694-b5ac2dd579c0?w=800&h=600'
        ],
        createdAt: new Date().toISOString()
      });
      console.log('✅ Inserted sample blog');
    }
  } catch (error) {
    console.error('❌ Error initializing database:', error.message);
    throw error;
  }
}

// Sample blogs data (replace with MongoDB in next step)
let blogs = [];

// ============ BLOG LISTING API ============
// GET /blogs - Return all blog cards
app.get('/blogs', async (req, res) => {
  try {
    const blogsCollection = db.collection('blogs');
    const blogs = await blogsCollection.find().toArray();
    
    // Return only card data (without full content)
    const blogCards = blogs.map(blog => ({
      id: blog.id,
      slug: blog.slug,
      title: blog.title,
      subtitle: blog.subtitle,
      preview: blog.preview,
      category: blog.category,
      author: blog.author,
      date: blog.date,
      thumbnailImage: blog.thumbnailImage
    }));
    
    res.json({
      success: true,
      data: blogCards,
      count: blogCards.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============ BLOG DETAIL API ============
// GET /blogs/:id - Return full blog details
app.get('/blogs/:id', async (req, res) => {
  try {
    const blogsCollection = db.collection('blogs');
    const blog = await blogsCollection.findOne({
      $or: [
        { id: req.params.id },
        { slug: req.params.id }
      ]
    });
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found'
      });
    }
    
    res.json({
      success: true,
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============ CREATE BLOG API ============
// POST /blogs - Add new blog (card + details)
app.post('/blogs', async (req, res) => {
  try {
    const {
      title,
      subtitle,
      preview,
      category,
      author,
      authorRole = 'Travel Expert',
      date,
      readTime = '5 min read',
      thumbnailImage,
      coverImage,
      content,
      tags = [],
      quotes = [],
      additionalImages = []
    } = req.body;

    // Validation
    if (!title || !subtitle || !author || !date) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: title, subtitle, author, date'
      });
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const newBlog = {
      id: uuidv4(),
      slug,
      title,
      subtitle,
      preview: preview || subtitle,
      category: category || 'Travel',
      author,
      authorRole,
      date,
      readTime,
      thumbnailImage: thumbnailImage || coverImage || 'https://via.placeholder.com/500x300',
      coverImage: coverImage || thumbnailImage || 'https://via.placeholder.com/1200x600',
      content: content || '',
      tags: tags || [],
      quotes: quotes || [],
      additionalImages: additionalImages || [],
      createdAt: new Date().toISOString()
    };

    const blogsCollection = db.collection('blogs');
    const result = await blogsCollection.insertOne(newBlog);

    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: newBlog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============ UPDATE BLOG API ============
// PUT /blogs/:id - Update existing blog
app.put('/blogs/:id', async (req, res) => {
  try {
    const blogsCollection = db.collection('blogs');
    const existingBlog = await blogsCollection.findOne({ id: req.params.id });
    
    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found'
      });
    }

    const updatedBlog = {
      ...existingBlog,
      ...req.body,
      id: req.params.id, // Don't allow ID change
      createdAt: existingBlog.createdAt, // Don't allow createdAt change
      updatedAt: new Date().toISOString()
    };

    await blogsCollection.updateOne(
      { id: req.params.id },
      { $set: updatedBlog }
    );

    res.json({
      success: true,
      message: 'Blog updated successfully',
      data: updatedBlog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============ DELETE BLOG API ============
// DELETE /blogs/:id - Delete blog
app.delete('/blogs/:id', async (req, res) => {
  try {
    const blogsCollection = db.collection('blogs');
    const deletedBlog = await blogsCollection.findOne({ id: req.params.id });
    
    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        error: 'Blog not found'
      });
    }

    await blogsCollection.deleteOne({ id: req.params.id });

    res.json({
      success: true,
      message: 'Blog deleted successfully',
      data: deletedBlog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============ GET ALL BLOGS WITH DETAILS ============
// GET /admin/blogs - Return all blogs including content (for admin)
app.get('/admin/blogs', async (req, res) => {
  try {
    const blogsCollection = db.collection('blogs');
    const blogs = await blogsCollection.find().toArray();
    
    res.json({
      success: true,
      data: blogs,
      count: blogs.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============ HEALTH CHECK ============
app.get('/health', async (req, res) => {
  try {
    const blogsCollection = db.collection('blogs');
    const blogsCount = await blogsCollection.countDocuments();
    
    res.json({ 
      success: true, 
      message: 'Server is running',
      port: PORT,
      database: 'connected',
      blogsCount
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Health check failed',
      error: error.message
    });
  }
});

// ============ SERVER STARTUP ============
async function startServer() {
  try {
    // Initialize database connection
    await initializeDatabase();
    
    // Start Express server
    const server = app.listen(PORT, () => {
      console.log(`\n✅ Divine Journeys Backend running on http://localhost:${PORT}`);
      console.log(`📝 API Docs:`);
      console.log(`   GET  http://localhost:${PORT}/blogs                - List all blogs`);
      console.log(`   GET  http://localhost:${PORT}/blogs/:id            - Get blog details`);
      console.log(`   POST http://localhost:${PORT}/blogs                - Create new blog`);
      console.log(`   PUT  http://localhost:${PORT}/blogs/:id            - Update blog`);
      console.log(`   DELETE http://localhost:${PORT}/blogs/:id          - Delete blog`);
      console.log(`   GET  http://localhost:${PORT}/admin/blogs          - Get all blogs (admin)`);
      console.log(`   GET  http://localhost:${PORT}/health               - Health check\n`);
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
      console.log('\n\n🛑 Shutting down gracefully...');
      server.close(async () => {
        await closeDatabase();
        process.exit(0);
      });
    });

    process.on('SIGTERM', async () => {
      console.log('\n\n🛑 Shutting down gracefully...');
      server.close(async () => {
        await closeDatabase();
        process.exit(0);
      });
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();
