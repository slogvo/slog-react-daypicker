import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { dirname, resolve } from "path";
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      tailwindcss(),
      dts({
        insertTypesEntry: true, 
        outDir: "dist",
        include: ["src"],
        exclude: ["node_modules", "dist"], 
      }),
    ],
    server: {
      port: 3000,
      open: true,
      proxy: {
        "/api": {
          target: env.API_ENDPOINT || "http://localhost:3001",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        "@components": resolve(__dirname, "./src/components"),
        "@utils": resolve(__dirname, "./src/utils"),
        "@types": resolve(__dirname, "./src/types"),
      },
    },
    build: {
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "NotionMapper",
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'index.css';
            }
            return assetInfo.name || 'assets/[name]-[hash][extname]';
          },
        },
      },
      cssCodeSplit: false, // This ensures all CSS is bundled into a single file
    },
  };
});