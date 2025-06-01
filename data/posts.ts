export const posts = [
  {
    id: "framer-motion-transition",
    slug: "framer-motion-transition",
    title: "Creating Smooth Page Transitions with Framer Motion.",
    date: "April 8, 2025",
    author: "Gaurav Kumar",
    description:
      "Page transitions can significantly enhance the user experience of your React application. With Framer Motion, you can create beautiful, physics-based animations with minimal code. In this tutorial, we'll build a smooth page transition effect that you can easily integrate into your Next.js or React projects.",
    tags: ["framer-motion", "parallax", "scroll"],
    img: "/img/post.png",
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Text Parallax Demo",
          previewUrl: "/img/post.png", //instead of image use video for demo
          links: [
            { label: "Live Demo", url: "/demo/text-parallax" },
            { label: "Source Code", url: "https://github.com/..." },
          ],
        },
      },
      {
        type: "CodeExplanation",
        props: {
          heading: "Understanding Animation Basics",
          explanation:
            "Before diving into the code, let's understand the core concepts of animations in Framer Motion. The library is built around the motion component, which is a wrapper that enables animations for any HTML or SVG element.",
          list: [
            "Access server-only resources (databases, file systems, etc.).",
            "Keep large dependencies on the server.",
            "Automatically implement code-splitting.",
            "Avoid sending unnecessary JavaScript to the client.",
          ],
        },
      },
      {
        type: "CodeExplanation",
        props: {
          heading: "Setting Up Framer Motion:",
          explanation:
            "First, let's install Framer Motion in your React project.",
        },
      },
      {
        type: "CodeCard",
        props: {
          path: " components/page-transition.tsx",
          code: `useEffect(() => {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}, [])`,
          language: "tsx",
        },
      },
      {
        type: "OutPutCard",
        props: {
          alt: "Preview of scrolling text",
          img: "/img/post.png",
        },
      },
      {
        type: "Note",
        props: {
          text: "Framer Motion's scroll hooks work best with container elements.",
        },
      },
      {
        type: "Tip",
        props: {
          text: "Use useTransform to map scroll progress to transform values.",
        },
      },
    ],
  },
  {
    id: "glassmorphism-cards-ui",
    slug: "glassmorphism-cards-ui",
    title: "Designing Glassmorphism Cards Using Tailwind CSS",
    date: "April 12, 2025",
    author: "Gaurav Kumar",
    description:
      "Glassmorphism creates a beautiful frosted glass look that's trending in modern UI design. In this tutorial, you'll learn how to create reusable glassmorphism card components using Tailwind CSS.",
    tags: ["tailwind", "glassmorphism", "ui"],
    img: "/img/post.png",
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Glassmorphism Card Demo",
          previewUrl: "/video/glassmorphism.mp4",
        },
      },
      {
        type: "LinkBlock",
        props: {
          links: [
            { label: "Live Demo", url: "/demo/glass-cards" },
            { label: "Source Code", url: "https://github.com/..." },
          ],
        },
      },
      {
        type: "CodeExplanation",
        props: {
          heading: "Setting Up Tailwind for Glassmorphism",
          explanation:
            "We'll use Tailwind's backdrop utilities and custom colors to create the blur and transparency effect.",
        },
      },
      {
        type: "CodeCard",
        props: {
          path: "components/GlassCard.tsx",
          code: `<div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl shadow-lg">...</div>`,
          language: "tsx",
        },
      },
      {
        type: "Tip",
        props: {
          text: "Use a semi-transparent white with `bg-white/10` for the frosted effect.",
        },
      },
    ],
  },
  {
    id: "hover-reveal-effect",
    slug: "hover-reveal-effect",
    title: "Creating a Hover Reveal Effect with Tailwind and Framer Motion",
    date: "April 15, 2025",
    author: "Gaurav Kumar",
    description:
      "Hover effects bring interactivity to UI components. This post shows how to create a modern reveal animation on hover using Tailwind and Framer Motion.",
    tags: ["framer-motion", "tailwind", "hover-effect"],
    img: "/img/post.png",
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Hover Reveal Demo",
          previewUrl: "/video/hover-reveal.mp4",
        },
      },
      {
        type: "CodeExplanation",
        props: {
          heading: "Hover Reveal Concept",
          explanation:
            "We animate an overlay from bottom to top on hover using Framer Motion's `whileHover` feature.",
        },
      },
      {
        type: "CodeCard",
        props: {
          path: "components/HoverReveal.tsx",
          code: `<motion.div whileHover={{ y: -10 }} className="transition-all duration-300">...</motion.div>`,
          language: "tsx",
        },
      },
      {
        type: "Note",
        props: {
          text: "Ensure the parent container has `relative` positioning for overlays.",
        },
      },
    ],
  },
  {
    id: "text-typing-effect",
    slug: "text-typing-effect",
    title: "Typing Animation Effect Using JavaScript and Tailwind",
    date: "April 18, 2025",
    author: "Gaurav Kumar",
    description:
      "Typing effects can bring life to headers and hero sections. Learn how to implement a customizable typing animation with vanilla JavaScript and Tailwind CSS.",
    tags: ["javascript", "animation", "typing-effect"],
    img: "/img/post.png",
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Typing Effect Demo",
          previewUrl: "/video/typing-effect.mp4",
        },
      },
      {
        type: "CodeCard",
        props: {
          path: "utils/typingEffect.js",
          code: `function typeText(el, text, speed = 100) {
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}`,
          language: "js",
        },
      },
      {
        type: "Note",
        props: {
          text: "Use `setTimeout` instead of `setInterval` for more control over complex sequences.",
        },
      },
    ],
  },
  {
    id: "sticky-navbar-tailwind",
    slug: "sticky-navbar-tailwind",
    title: "Building a Sticky Navigation Bar with Tailwind CSS",
    date: "April 21, 2025",
    author: "Gaurav Kumar",
    description:
      "Sticky navbars are essential for improving UX, especially in long-scroll websites. Learn how to build a responsive sticky navbar using just Tailwind classes.",
    tags: ["tailwind", "navbar", "responsive"],
    img: "/img/post.png",
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Sticky Navbar Demo",
          previewUrl: "/video/sticky-navbar.mp4",
        },
      },
      {
        type: "CodeCard",
        props: {
          path: "components/Navbar.tsx",
          code: `<nav className="sticky top-0 bg-white z-50 shadow-md p-4">...</nav>`,
          language: "tsx",
        },
      },
      {
        type: "Tip",
        props: {
          text: "Use `z-50` and `shadow-md` to ensure visibility above other components.",
        },
      },
    ],
  },
  {
    id: "custom-scrollbar-styling",
    slug: "custom-scrollbar-styling",
    title: "Styling Scrollbars with Tailwind CSS and CSS Variables",
    date: "April 25, 2025",
    author: "Gaurav Kumar",
    description:
      "Default scrollbars can look outdated. This guide shows how to create modern, minimal scrollbar styles using Tailwind and CSS variables.",
    tags: ["tailwind", "scrollbar", "css"],
    img: "/img/post.png",
    content: [
      {
        type: "CodeExplanation",
        props: {
          heading: "Using Custom Scrollbar Styles",
          explanation:
            "We use pseudo-elements `::-webkit-scrollbar` and set custom widths, colors, and shadows.",
        },
      },
      {
        type: "CodeCard",
        props: {
          path: "styles/global.css",
          code: `::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}`,
          language: "css",
        },
      },
      {
        type: "Note",
        props: {
          text: "These styles work in WebKit-based browsers like Chrome and Safari.",
        },
      },
    ],
  },
];
