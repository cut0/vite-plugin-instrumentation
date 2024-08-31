import type { UserConfig } from "vite";
import type { PluginOptions } from "./types";

export const dispatch = async (handlers: PluginOptions, config: UserConfig) => {
  if (handlers instanceof Function) {
    await handlers(config);
  } else if (Array.isArray(handlers)) {
    for (const handler of handlers) {
      await handler(config);
    }
  }
};
