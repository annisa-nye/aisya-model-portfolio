import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
    assetsInlineLimit: 0, // This ensures all assets are copied rather than inlined
    chunkSizeWarningLimit: 1500, // Adjust if you get warnings about large chunks
  },
  publicDir: "public",
  base: "/", // This is important for routing in single-page applications
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // Add any other major dependencies here
  },
});
