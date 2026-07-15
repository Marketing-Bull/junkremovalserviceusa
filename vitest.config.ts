import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    // Node environment is enough for the pure-data / lib unit tests.
    // Switch to "jsdom" and add @testing-library if component tests are added.
    environment: "node",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
})
