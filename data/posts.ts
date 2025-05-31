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
    content: [
      {
        type: "DemoCard",
        props: {
          title: "Text Parallax Demo",
          previewUrl: "/img/post.png", //instead of image use video for demo
        },
      },
      {
        type: "LinkBlock",
        props: {
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
          explanation: "Before diving into the code, let's understand the core concepts of animations in Framer Motion. The library is built around the motion component, which is a wrapper that enables animations for any HTML or SVG element.",
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
          output: "We should have something like this.",
          alt:"Preview of scrolling text",
          img: "/img/post.png"
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
          text: "Use `useTransform` to map scroll progress to transform values.",
        },
      },
    ],
  },
];
