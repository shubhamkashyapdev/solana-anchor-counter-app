import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)

// Polyfils
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

const __dirname = path.dirname(__filename)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {

    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layout": path.resolve(__dirname, "./src/components/layout"),
      assert: 'rollup-plugin-node-polyfills/polyfills/assert',

    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,
            buffer: true
          }),
          NodeModulesPolyfillPlugin()
        ]
      }
    },
  },
})
