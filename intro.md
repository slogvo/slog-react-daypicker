# Notion Mapper

**Notion Mapper** is a lightweight, reusable React component library built with Vite and TypeScript to map and render Notion API blocks into a beautiful, customizable UI. Whether you're building a blog, documentation site, or any content-driven application using Notion as a CMS, this package simplifies the process of transforming Notion block data into responsive, Tailwind CSS-styled components.

## Features

- <strong>Full Notion Block Support</strong>: Render all Notion block types (paragraphs, headings, images, code, tables, callouts, and more).
- <strong>TypeScript Ready</strong>: Fully typed with comprehensive interfaces for Notion blocks.
- <strong>Tailwind CSS Styling</strong>: Modern, responsive design out of the box with Tailwind CSS.
- <strong>Vite-Powered</strong>: Fast development and optimized production builds.
- <strong>Modular Architecture</strong>: Easily extendable and reusable components.
- <strong>SEO Optimized</strong>: Clean, semantic HTML output for better search engine visibility.

## Installation

Install `react-notion-blocks` via npm:

npm install react-notion-blocks

Or with Yarn:

```bash
yarn add react-notion-blocks
```

## Usage

### Basic Example

```typescript
import { useEffect, useState } from "react";
import { NotionBlock, blockMapper } from "react-notion-blocks";

interface PageData {
  id: string;
  title: string;
  content: NotionBlock[];
}

function App() {
  const [page, setPage] = useState<PageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("YOUR_NOTION_API_ENDPOINT");
      // Example:
      // const response = await fetch(
      //   "/api/posts/19f9c9aa356180358b65fe657f6ed700"
      // );
      const data: PageData = await response.json();
      setPage(data);
    };
    fetchData();
  }, []);

  if (!page) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-5 font-sans">
      <h1 className="text-3xl font-bold mb-5">{page.title}</h1>
      <div>{page.content.map((block) => blockMapper(block))}</div>
    </div>
  );
}

export default App;
```

### Prerequisites

- Node.js >= 18.x
- React >= 18.x
- Vite >= 4.x
- Tailwind CSS (optional, for styling)

## Setup

1. **Initialize a Vite + React + TypeScript project**:

   ```bash
   npm create vite@latest my-notion-app -- --template react-ts
   cd my-notion-app
   npm install
   ```

2. **Install Tailwind CSS** (if not already installed):

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   Configure `tailwind.config.js`:

   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: { extend: {} },
     plugins: [],
   };
   ```

   Add to `src/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. **Install Notion Mapper**:

   ```bash
   npm install react-notion-blocks
   ```

4. **Fetch Notion Data**: Integrate with your Notion API backend to retrieve block data.

## Supported Notion Blocks

| Block Type           | Description                      |
| -------------------- | -------------------------------- |
| Paragraph            | Text paragraphs                  |
| Heading (1, 2, 3)    | Headings of different levels     |
| Divider              | Horizontal divider               |
| Image                | Embedded images                  |
| Code                 | Code snippets                    |
| Quote                | Blockquotes                      |
| Bulleted List        | Unordered lists                  |
| Numbered List        | Ordered lists                    |
| To-Do                | Checkboxes                       |
| Table                | Tables with rows                 |
| Callout              | Notices with icons               |
| Embed                | Embedded content (e.g., iframes) |
| Bookmark             | Links with previews              |
| File/Video/Audio/PDF | Media files                      |
| Equation             | Mathematical expressions         |
| Child Page/Database  | Nested pages or databases        |
| And more...          | Full Notion API block support    |

## Configuration

### Vite Proxy (Development)

To fetch data from a backend (e.g., `http://localhost:3001`), configure a proxy in `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Keywords

- Notion API
- React Component Library
- Vite
- TypeScript
- Tailwind CSS
- Notion Blocks Renderer

## Contact

For issues or suggestions, please open an issue on our [GitHub repository](https://github.com/slogvo/react-notion-blocks).
