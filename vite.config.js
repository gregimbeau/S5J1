import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Get the repository name from the package.json file
const pkg = require("./package.json");
const repoName = pkg.name;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: `/${S5J1}/`, // Set the base property to '/<REPO>/'
});
