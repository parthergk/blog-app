import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const frauncesSerif = Fraunces({
  variable: "--font-fraunces-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Parther Blog - Creative UI Components with Tailwind CSS & Framer Motion",
  description:
    "Explore beautifully crafted UI components and blog articles on Tailwind CSS, Framer Motion, React, and modern web design techniques. Perfect for developers who love animations and clean design.",
  keywords: [
    "Tailwind CSS",
    "Framer Motion",
    "UI Components",
    "React Components",
    "Frontend Development",
    "Web Design",
    "Creative UI",
    "CSS Grid",
    "Animations",
    "Next.js",
    "Blog for Developers",
    "CSS Tips",
    "React UI",
    "Design Systems",
  ],
  robots: "index, follow",
  authors: [{ name: "Parther", url: "https://parther.in" }],
  creator: "Parther",

  openGraph: {
    title: "Creative UI Components with Tailwind CSS & Framer Motion",
    description:
      "Browse stunning UI elements and learn to create them using Tailwind CSS & Framer Motion. Ideal for frontend developers looking to level up their design game.",
    url: "https://blog.parther.in",
    siteName: "Parther Blog",
    images: [
      {
        url: "https://blog.parther.in/partherblog.png",
        width: 1200,
        height: 630,
        alt: "Creative UI Components Screenshot",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Creative UI Components Blog",
    description:
      "Learn to build animated and responsive UI components using Tailwind CSS & Framer Motion.",
    creator: "@parther_gk",
    images: ["https://blog.parther.in/partherblog.png"],
  },

  metadataBase: new URL("https://blog.parther.in"),

  alternates: {
    canonical: "https://blog.parther.in",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Parther",
  description:
    "Frontend development blog focusing on Tailwind CSS, Framer Motion, and UI animation techniques.",
  url: "https://blog.parther.in",
  logo: "https://blog.parther.in/partherblog.png",
  image: "https://blog.parther.in/partherblog.png",
  sameAs: [
    "https://parther.in",
    "https://github.com/parthergk",
    "https://www.instagram.com/parther_gk",
    "https://x.com/parther_gk",
    "https://www.linkedin.com/in/gaurav-kumar-b5a76626b",
  ],
  publisher: {
    "@type": "Organization",
    name: "Parther",
    logo: {
      "@type": "ImageObject",
      url: "https://blog.parther.in/partherblog.png",
      width: 1200,
      height: 630,
    },
  },
  author: {
    "@type": "Person",
    name: "Parther",
    url: "https://blog.parther.in",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://blog.parther.in/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  operatingSystem: "All",
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="xeE6RJLQ8uDj1hX8plqKs_n0j32IaEzOm1Qq6QTMDX0" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${frauncesSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
