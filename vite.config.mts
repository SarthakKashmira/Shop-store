import RubyPlugin from "vite-plugin-ruby";
// @ts-ignore
import { mergeDeepRight } from "ramda";
// @ts-ignore
import svgr from "vite-plugin-svgr";
// @ts-ignore
import { alias } from "./config/build/config";
// @ts-ignore
import { define, entryPoints, extensions } from "./config/build/constants";
// @ts-ignore
import postCssConfig from "./postcss.config";

// @ts-ignore
const port = process.env.DEVSERVER_PORT || 8000;

const baseConfig = {
  root: "app/frontend",
  server: { port, origin: `http://localhost:${port}` },
  css: { postcss: postCssConfig },
  resolve: { alias },
  build: { manifest: true, sourcemap: true, cssCodeSplit: false },
  define,
  plugins: [
    RubyPlugin(),
    svgr({ svgrOptions: { exportType: "default" }, include: "**/*.svg" }),
  ],
};

const viteConfig = mergeDeepRight(baseConfig, {
  resolve: { alias, extensions },
  build: { rollupOptions: { input: entryPoints } },
});

export default viteConfig;
