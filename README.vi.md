# React Notion Blocks

**[English](#)** *(See [README.md](README.md) for English version)*

**React Notion Blocks** giúp bạn nhanh chóng chuyển đổi **Notion blocks** thành **React components**. Hoàn hảo cho **blog**, **portfolio**, hoặc dự án **build in public** tích hợp với **Notion API**. Hỗ trợ từ đoạn văn, tiêu đề, hình ảnh đến bảng và mã nguồn.

---
## [**DEMO**](https://logdevstories.vercel.app/en/demo)

## 🚀 Quickstart

### Cài đặt
```bash
pnpm add react-notion-blocks
```

### Cấu hình Tailwind CSS
Thêm dòng sau vào file `tailwind.config.ts` để không bị mất các style Tailwind được dùng trong thư viện này, khi mà ứng dụng của bạn có thể chưa dùng đến các lớp Class đó khi nào (do cơ chế Purge)

```typescript
content: [
  ...
  './node_modules/react-notion-blocks/**/*.{js,ts,jsx,tsx,css}',
],
Set up h-tag for your Global style `global.css` ( I am using Tailwind V3):
```

Thiết lập Global style cho thẻ h-{} trong file `global.css` (Tailwind V3):

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

## 🌟 Tại sao chọn thư viện này?

- **Tự động ánh xạ**: Chuyển Notion blocks thành React components chỉ với 1 dòng code.
- **Hỗ trợ đa dạng**: Gần như tất cả loại block của Notion (đoạn văn, tiêu đề, hình ảnh, v.v.).
- **Dễ tích hợp**: Phù hợp mọi dự án React, có hỗ trợ TypeScript.

### Tại sao dùng Notion làm CMS?
- **Miễn phí, dễ dùng**: Gói cá nhân miễn phí, giao diện kéo-thả.
- **Không cần server**: Lưu trữ trên đám mây.
- **API linh hoạt**: Truy xuất nội dung dạng JSON, tích hợp dễ dàng.

---

## 🛠️ Tùy chỉnh

### Dùng component riêng
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

## 📦 Dependencies

Thư viện tích hợp sẵn các dependencies sau:

- **better-react-mathjax** (`^2.1.0`) - Hỗ trợ hiển thị công thức toán học với MathJax.
- **prismjs** (`^1.29.0`) - Dùng để highlight code trong các block code.
---

## 🤝 Đóng góp

1. Fork repo trên GitHub.
2. Tạo branch: `git checkout -b feature/your-feature`.
3. Commit: `git commit -m "your-feature"`.
4. Gửi pull request về branch `main`.

