import RubyPlugin from "vite-plugin-ruby";
// @ts-ignore
import { mergeDeepRight } from "ramda";
// @ts-ignore
import svgr from "vite-plugin-svgr";
// @ts-ignore
import react from "@vitejs/plugin-react";
// @ts-ignore
import { alias } from "./config/build/config";
// @ts-ignore
import { define, extensions } from "./config/build/constants";

const baseConfig = {
  resolve: { alias, extensions },
  define,
  plugins: [
    RubyPlugin(),
    react(),
    svgr({ svgrOptions: { exportType: "default" }, include: "**/*.svg" }),
  ],
};

export default baseConfig;
