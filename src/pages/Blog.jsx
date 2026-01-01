import React, { useState } from 'react';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "Ranthambore Safari Guide 2025: Best Zones, Timing & Booking",
    excerpt: "Ranthambore National Park in Rajasthan is one of India's most iconic tiger reserves, famed for frequent sightings and breathtaking landscapes.",
    date: "October 5, 2025",
    readTime: "8 min read",
    author: "Sarah Johnson",
    category: "Travel Guide",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80"
  },
  {
    id: 2,
    title: "Hidden Gems of Rajasthan: Off The Beaten Path Destinations",
    excerpt: "Discover the lesser-known treasures of Rajasthan that offer authentic experiences away from tourist crowds and into local culture.",
    date: "September 28, 2025",
    readTime: "6 min read",
    author: "Raj Malhotra",
    category: "Exploration",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80"
  },
  {
    id: 3,
    title: "Complete Guide to Jaipur City Palace: History & Architecture",
    excerpt: "Explore the magnificent City Palace of Jaipur, a stunning blend of Rajasthani and Mughal architecture with centuries of royal heritage.",
    date: "September 15, 2025",
    readTime: "10 min read",
    author: "Priya Sharma",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80"
  }
];

const Blog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="blog-section">
      {/* Animated Background */}
      <div className="blog-bg-shapes">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <div className="blog-tag">
            <span>LATEST INSIGHTS</span>
          </div>

          <h2 className="blog-title">
            Latest Blog <span className="blog-title-accent">Posts</span>
          </h2>

          <p className="blog-subtitle">
            Discover our latest insights, tips, and stories. Stay updated with the
            newest trends and valuable content crafted just for you.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`blog-card ${hoveredCard === post.id ? 'blog-card-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-image-overlay"></div>
                
                {/* Category Badge */}
                <div className="blog-category">{post.category}</div>
                
                {/* Gradient Overlay */}
                <div className="blog-gradient"></div>
              </div>

              {/* Content */}
              <div className="blog-content">
                {/* Meta Info */}
                <div className="blog-meta">
                  <div className="blog-meta-item">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="blog-meta-item">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="blog-card-title">{post.title}</h3>

                {/* Excerpt */}
                <p className="blog-excerpt">{post.excerpt}</p>

                {/* Footer */}
                <div className="blog-footer">
                  <div className="blog-author">
                    <div className="blog-author-avatar">
                      <User size={18} />
                    </div>
                    <span>{post.author}</span>
                  </div>

                  <button className="blog-read-btn">
                    <span>Read More</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="blog-card-glow"></div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="blog-cta-wrapper">
          <button className="blog-cta-btn">
            <span>Explore All Articles</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;