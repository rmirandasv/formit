import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/ts/app.tsx"],
      refresh: true,
      resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
        return pages[`./pages/${name}.tsx`];
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/resources/ts",
    },
  },
});
