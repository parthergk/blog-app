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
    videoUrl: "/img/videoBg.mov",
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Text Parallax Demo",
          previewUrl: "/img/videoBg.mov",
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
          path: "components/page-transition.tsx",
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
        type: "Note",
        props: {
          text: "Framer Motion's scroll hooks work best with container elements.",
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
        type: "CodeExplanation",
        props: {
          heading: "Card Flip CSS Logic",
          explanation:
            "We use `transform: rotateY(180deg)` and `backface-visibility: hidden` to create the 3D flip effect.",
        },
      },
      {
        type: "CodeCard",
        props: {
          path: "components/FlipCard.css",
          code: `.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}`,
          language: "css",
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
        videoUrl: "/img/videoBg.mov",
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Glassmorphism Card Demo",
          previewUrl: "/img/videoBg.mov",
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
            videoUrl: "/img/videoBg.mov",
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Hover Reveal Demo",
          previewUrl: "/img/videoBg.mov",
          links: [
            { label: "Live Demo", url: "/demo/hover-reveal" },
            { label: "Source Code", url: "https://github.com/..." },
          ],
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
            videoUrl: "/img/videoBg.mov",
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Typing Effect Demo",
          previewUrl: "/img/videoBg.mov",
          links: [
            { label: "Live Demo", url: "/demo/typing-text" },
            { label: "Source Code", url: "https://github.com/..." },
          ],
        },
      },
      {
        type: "CodeExplanation",
        props: {
          heading: "Typing Animation Logic",
          explanation:
            "We use `setTimeout` to display each character in sequence, creating a typing effect.",
        },
      },
      {
        type: "CodeCard",
        props: {
          path: "components/TypingEffect.tsx",
          code: `const typing = (text, index = 0) => {
  if (index < text.length) {
    document.getElementById("typed").innerHTML += text.charAt(index);
    setTimeout(() => typing(text, index + 1), 100);
  }
};`,
          language: "tsx",
        },
      },
    ],
  },
  {
    id: "scroll-based-progress",
    slug: "scroll-based-progress",
    title: "Building a Scroll-Based Progress Bar in React",
    date: "April 20, 2025",
    author: "Gaurav Kumar",
    description:
      "Learn how to create a scroll indicator at the top of the page that tracks user progress using React hooks and a bit of CSS.",
    tags: ["react", "scroll", "progress-bar"],
    img: "/img/post.png",
            videoUrl: "/img/videoBg.mov",
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Scroll Progress Bar Demo",
          previewUrl: "/img/videoBg.mov",
          links: [
            { label: "Live Demo", url: "/demo/scroll-progress" },
            { label: "Source Code", url: "https://github.com/..." },
          ],
        },
      },
      {
        type: "CodeExplanation",
        props: {
          heading: "Tracking Scroll Progress",
          explanation:
            "Use `window.scrollY` and `document.body.scrollHeight` to calculate scroll progress percentage.",
        },
      },
      {
        type: "CodeCard",
        props: {
          path: "components/ScrollProgress.tsx",
          code: `const progress = (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;`,
          language: "tsx",
        },
      },
    ],
  },
  {
    id: "card-flip-on-hover",
    slug: "card-flip-on-hover",
    title: "Card Flip Animation on Hover Using Tailwind and CSS",
    date: "April 25, 2025",
    author: "Gaurav Kumar",
    description:
      "Card flip animations are popular for interactive portfolios and product showcases. Here’s how to implement one using Tailwind CSS and plain CSS.",
    tags: ["css", "animation", "tailwind"],
    img: "/img/post.png",
            videoUrl: "/img/videoBg.mov",
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Flip Card Demo",
          previewUrl: "/img/videoBg.mov",
          links: [
            { label: "Live Demo", url: "/demo/flip-card" },
            { label: "Source Code", url: "https://github.com/..." },
          ],
        },
      },
      {
        type: "CodeExplanation",
        props: {
          heading: "Card Flip CSS Logic",
          explanation:
            "We use `transform: rotateY(180deg)` and `backface-visibility: hidden` to create the 3D flip effect.",
        },
      },
      {
        type: "CodeCard",
        props: {
          path: "components/FlipCard.css",
          code: `.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}`,
          language: "css",
        },
      },
    ],
  },
];
