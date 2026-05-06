import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "The Frameworks That Actually Make Product Managers Better at Their Jobs",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@keerthivasan.chandrasekar100/the-frameworks-that-actually-make-product-managers-better-at-their-jobs-cc9f33f1af46",
    description: "The Frameworks That Actually Make Product Managers Better at Their Jobs",
  },
  {
    title: "AI Agent as my Job Hunting Assistant: A Game-Changer in the Job Search Process",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@keerthivasan.chandrasekar100/i-was-tired-of-job-hunting-so-i-built-an-ai-agent-to-do-it-for-me-582bcd3e997d",
    description: "I Was Tired of Job Hunting, So I Built an AI Agent to Do It For Me",
  },
  {
    title: "Grape Gem in Ruby on Rails: Handling User Model and API Endpoint",
    platform: "Dev.to",
    icon: <FaDev />,
    link: "https://dev.to/samalasumanth0262/grape-gem-in-ruby-on-rails-handling-user-model-and-api-endpoint-g6d",
    description: "A guide to using the Grape gem for API development in Ruby on Rails.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
