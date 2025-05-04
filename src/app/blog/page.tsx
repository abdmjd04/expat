import React from "react";
import { Clock } from "lucide-react";
import Image from "next/image";
const blogPosts = [
  {
    id: 1,
    title: "Moving to Portugal? Start Here",
    excerpt:
      "Everything you need to know about relocating to Portugal, from visa requirements to finding housing and setting up utilities.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Relocation",
  },
  {
    id: 2,
    title: "5 Essential Health Tips for Expats",
    excerpt:
      "Stay healthy during and after your move with these important health considerations for expats living abroad.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80",
    date: "May 22, 2023",
    readTime: "6 min read",
    category: "Health",
  },
  {
    id: 3,
    title: "Post-Flight Recovery: Exercises to Combat Jet Lag",
    excerpt:
      "Simple but effective exercises to help your body recover after long flights and minimize the effects of jet lag.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    date: "April 10, 2023",
    readTime: "5 min read",
    category: "Physiotherapy",
  },
  {
    id: 4,
    title: "The Ultimate Packing List for Long-Term Travel",
    excerpt:
      "What to pack (and what to leave behind) when you're relocating or traveling for an extended period.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "March 5, 2023",
    readTime: "7 min read",
    category: "Travel",
  },
  {
    id: 5,
    title: "Expat Story: From London to Lisbon",
    excerpt:
      "Sarah shares her experience moving from the UK to Portugal, including challenges, surprises, and advice for others considering the move.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "February 18, 2023",
    readTime: "10 min read",
    category: "Expat Stories",
  },
  {
    id: 6,
    title: "Understanding Healthcare Systems Abroad: A Comparison",
    excerpt:
      "An overview of healthcare systems in popular expat destinations, including insurance requirements and accessing medical care.",
    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    date: "January 30, 2023",
    readTime: "9 min read",
    category: "Healthcare",
  },
];
const BlogCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {post.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm ml-auto">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">{post.date}</span>
          <a
            href="#"
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};
const Blog = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-gray-600 text-xl">
            Helpful articles, guides, and resources for expats and travelers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        {/* <div className="mt-12 text-center">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
            Load More Articles
          </button>
        </div> */}
        <div className="mt-16 bg-blue-600 text-white rounded-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Free Relocation Guide</h2>
            <p className="text-blue-100 mt-2">
              Download our comprehensive guide to make your move smoother.
            </p>
          </div>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Get Free Guide
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Blog;
