import { defineConfig } from "vitest/config"
import { fileURLToPath } from "node:url"

export default defineConfig({
  resolve: {
    // Mirror the "@/*" -> "src/*" path alias from tsconfig.json.
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    // Default to Node for pure data/lib/route tests. Component tests opt into
    // jsdom per-file via `// @vitest-environment jsdom`.
    environment: "node",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
})
