import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import obfuscator from "vite-plugin-javascript-obfuscator";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    // Production-only obfuscation: applied to bundled JS after build.
    mode === "production" &&
      obfuscator({
        include: ["**/*.js"],
        exclude: [/node_modules/],
        apply: "build",
        debugger: false,
        options: {
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.6,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 0.2,
          identifierNamesGenerator: "hexadecimal",
          renameGlobals: false,
          selfDefending: true,
          stringArray: true,
          stringArrayEncoding: ["base64"],
          stringArrayThreshold: 0.75,
          transformObjectKeys: true,
          unicodeEscapeSequence: false,
          disableConsoleOutput: false, // keep so the protect-source warnings still show
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
        passes: 2,
      },
      format: {
        comments: false,
      },
      mangle: {
        toplevel: true,
      },
    },
    rollupOptions: {
      output: {
        // Hide original chunk names
        chunkFileNames: "assets/[hash].js",
        entryFileNames: "assets/[hash].js",
        assetFileNames: "assets/[hash][extname]",
      },
    },
  },
}));
