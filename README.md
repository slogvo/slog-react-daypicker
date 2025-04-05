# React Notion Blocks

**[Tiếng_Việt](#)** *(Xem tại [README.vi.md](README.vi.md) cho bản Tiếng Việt)*


**React Notion Blocks** helps you quickly convert **Notion blocks** into **React components**. Perfect for **blogs**, **portfolios**, or **build-in-public** projects integrated with **Notion API**. Supports everything from paragraphs, headings, and images to tables and code blocks.

---
## DEMO: [***Click to view***](https://logdevstories.vercel.app/en/demo)

## 🚀 Quickstart

### Installation
```bash
pnpm add react-notion-blocks
```

### Tailwind CSS Configuration
Add the following line to your `tailwind.config.ts` file to ensure Tailwind styles used in this library are not removed by PurgeCSS:

```typescript
content: [
  ...
  './node_modules/react-notion-blocks/**/*.{js,ts,jsx,tsx,css}',
],
```

Set up h-tag for your Global style `global.css` ( I am using Tailwind V3 now):

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* .... */

@layer base {
  h1 {
    @apply text-gray-900 mb-3 text-2xl font-bold tracking-tight sm:my-4 sm:text-3xl md:my-5  md:text-3xl 2xl:text-4xl dark:text-white md:!leading-[48px];
  }
  h2 {
    @apply text-gray-800 dark:text-gray-100 mb-2 text-3xl font-bold tracking-tight sm:my-3 md:my-4 md:text-3xl xl:my-5;
  }
  h3 {
    @apply text-gray-700 dark:text-gray-200 mb-2 text-2xl font-semibold tracking-tight md:mb-3 md:text-2xl xl:mb-4;
  }
  h4 {
    @apply text-gray-600 dark:text-gray-300 mb-3 text-xl font-semibold tracking-tight md:text-2xl;
  }
}
```

or: 
``` css
.notion-heading.notion-heading--h1 {
  /* your-class */ 
  /* F12 to view Class */
}
```

### Basic Usage
```typescript
"use client"; // Add this if using Next.js

import { blockMapper, type NotionBlock } from 'react-notion-blocks';

const MyPage = ({ blocks }: { blocks: NotionBlock[] }) => {
  return <div>{blocks.map((block) => blockMapper(block))}</div>;
};

export default MyPage;
```

**Note for Next.js users**: Add `"use client"` because this library runs on the client side.

### Real-world Example
```typescript
"use client";

import { useEffect, useState } from "react";
import { blockMapper, type NotionBlock } from 'react-notion-blocks';

interface PageData {
  id: string;
  title: string;
  content: NotionBlock[];
}

const ContentRenderer = ({ blocks }: { blocks: NotionBlock[] }) => {
  return (
    <>
      {blocks.map((block) => (
        <div key={block.id} className="text-black dark:text-white">
          {blockMapper(block)}
        </div>
      ))}
    </>
  );
};


const BlogPage = () => {
   const apiUrl = import.meta.env.VITE_API_ENDPOINT;
  const [page, setPage] = useState<PageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/api/posts/refactoring-ui`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: PageData = await response.json();
        setPage(data);
      } catch (err) {
        setError((err as Error).message);
        console.error("Fetch error:", err);
      }
    };

    fetchPost();
  }, [apiUrl]);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!page) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-5 font-sans">
      <h1 className="text-3xl font-bold mb-5">{page.title}</h1>
      <div className="content">
        <ContentRenderer blocks={page.content} />
      </div>
    </div>
  );
};

export default BlogPage;
```

---

## 📦 Dependencies

This library includes the following dependencies:

- **better-react-mathjax** (`^2.1.0`) - Supports rendering mathematical formulas using MathJax.
- **prismjs** (`^1.29.0`) - Used for syntax highlighting in code blocks.

---

## 🌟 Why Choose This Library?

- **Automatic Mapping**: Converts Notion blocks into React components with just one line of code.
- **Wide Support**: Supports almost all Notion block types (paragraphs, headings, images, etc.).
- **Easy Integration**: Suitable for any React project, with TypeScript support.

### Why Use Notion as a CMS?
- **Free & User-Friendly**: Free personal plan with an intuitive drag-and-drop interface.
- **No Server Required**: Cloud-based storage.
- **Flexible API**: Fetches content in JSON format, easy to integrate.

---

## 🛠️ Customization

### Using Custom Components
```typescript
"use client";

import { Paragraph, type NotionBlock } from 'react-notion-blocks';

const CustomParagraph = ({ block }: { block: NotionBlock }) => (
  <div className="custom-paragraph">
    <Paragraph block={block} />
  </div>
);

export default CustomParagraph;
```

---

## 🤝 Contributing

1. Fork the repository on GitHub.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "your-feature"`.
4. Submit a pull request to the `main` branch.

