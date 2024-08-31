import type { Plugin } from "vite";
import type { PluginOptions } from "./types";
import { dispatch } from "./utils";

export const instrumentationPlugin = (handlers: PluginOptions): Plugin => {
  return {
    name: "vite-plugin-instrumentation",
    enforce: "pre",
    config: async (config) => {
      console.log("Start instrumentation !!!");
      await dispatch(handlers, config);
    },
  };
};
