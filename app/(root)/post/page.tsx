import React from "react";

const BlogPost = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 font-serif">
      <h1 className="text-4xl font-bold leading-tight">Creating Smooth Page<br />Transitions with Framer Motion</h1>
      <p className="text-sm text-gray-500 mt-2">April 8, 2025</p>

      <p className="mt-6 text-lg text-gray-700">
        Page transitions can significantly enhance the user experience of your React application. With
        Framer Motion, you can create beautiful, physics-based animations with minimal code. In this
        tutorial, we'll build a smooth page transition effect that you can easily integrate into your Next.js
        or React projects.
      </p>

      <h2 className="text-2xl font-semibold mt-10">See It In Action</h2>
      <div className="bg-gray-200 h-64 rounded-lg mt-4"></div>

      <div className="flex gap-4 mt-4">
        <button className="bg-gray-100 px-4 py-2 rounded text-sm font-medium">Live Demo</button>
        <button className="bg-gray-100 px-4 py-2 rounded text-sm font-medium">Source Code</button>
      </div>

      <h2 className="text-2xl font-semibold mt-10">Understanding Animation Basics</h2>
      <p className="mt-4 text-gray-700">
        Before diving into the code, let's understand the core concepts of animations in Framer Motion.
        The library is built around the motion component, which is a wrapper that enables animations
        for any HTML or SVG element.
      </p>
      <ul className="list-disc ml-5 mt-2 text-gray-700">
        <li>Access server-only resources (databases, file systems, etc.)</li>
        <li>Keep large dependencies on the server</li>
        <li>Automatically implement code-splitting</li>
        <li>Avoid sending unnecessary JavaScript to the client</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">Setting Up Framer Motion</h2>
      <p className="mt-4 text-gray-700">
        First, let's install Framer Motion in your React project:
      </p>
      <div className="border rounded p-4 bg-gray-50 mt-2">
        <code className="text-gray-800">&lt;&gt; components/page-transition.tsx</code>
      </div>

      <h2 className="text-xl font-semibold mt-10">We should have something like this:</h2>
      <div className="bg-gray-200 h-64 rounded-lg mt-4"></div>

      <div className="bg-gray-100 p-4 mt-8 rounded">
        <h3 className="font-semibold mb-1">Note</h3>
        <p className="text-gray-700 text-sm">
          Framer Motion handles all the complex animation logic under the hood, including
          physics-based transitions, gesture recognition, and accessibility features.
        </p>
      </div>

      <div className="bg-gray-100 p-4 mt-4 rounded">
        <h3 className="font-semibold mb-1">Tip</h3>
        <p className="text-gray-700 text-sm">
          When using Framer Motion with Tailwind, you can combine Tailwind's utility classes with
          Framer Motion's animation properties for powerful, customizable animations.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
