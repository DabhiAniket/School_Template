import React from "react";
import { PencilLine, SlidersHorizontal } from "lucide-react";

// Images
import latestblog1 from "../assets/latestblog1.jpg";
import latestblog2 from "../assets/latestblog2.jpg";
import latestblog3 from "../assets/latestblog3.jpg";

const blogData = [
  {
    id: 1,
    image: latestblog1,
    date: "25th May 2016",
    author: "Methov jos",
    title: "Doloremque laudantium totam...",
    icon: <PencilLine size={18} className="text-gray-600" />,
  },
  {
    id: 2,
    image: latestblog2,
    date: "25th May 2016",
    author: "Jennu Doe",
    title: "Minim veniam quis nostrud...",
    icon: <SlidersHorizontal size={18} className="text-gray-600" />,
  },
  {
    id: 3,
    image: latestblog3,
    date: "25th May 2016",
    author: "Steave Smith",
    title: "Perspiciatis unde omnis iste...",
    icon: <PencilLine size={18} className="text-gray-600" />,
  },
];

const Blog = () => {
  return (
    <section className="bg-white py-20">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-amber-400">Education Events</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Achieving the desired success requires patience and persistence your
          goals need time
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 px-16">
        {blogData.map((post) => (
          <div key={post.id}>
            {/* Image */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[340px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute -bottom-6 left-0 right-0 flex">
                <div className="bg-white px-4 py-6 shadow-md flex-1 text-center">
                  <p className="text-amber-400 text-sm font-semibold mb-1">
                    {post.date}
                  </p>
                  <p className="text-gray-400 text-xs mb-3">
                    Posted by {post.author}
                  </p>
                  <div className="w-10 h-[2px] bg-amber-300 mx-auto"></div>
                </div>

                <div className="bg-gray-100 px-5 flex items-center justify-center border-l">
                  {post.icon}
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mt-16 text-center">
              <h3 className="text-gray-600 text-xl   font-medium hover:text-amber-400 transition">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="uppercase text-lg font-mono font-semibold text-gray-600 border-1 border-gray-300 px-10 py-5 hover:text-white hover:bg-gray-900 transition-colors duration-600 shadow-2xl hover:border-2">View All post</button>
      </div>
    </section>
  );
};

export default Blog;
 