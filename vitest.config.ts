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
    // `globals` enables @testing-library/react's automatic DOM cleanup between
    // tests (via the global afterEach), preventing component trees from leaking.
    globals: true,
    // Default to Node for pure data/lib/route tests. Component tests opt into
    // jsdom per-file via `// @vitest-environment jsdom`.
    environment: "node",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
})
