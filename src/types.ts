import type { UserConfig } from "vite";

export type Handler = (config: UserConfig) => Promise<void>;

export type PluginOptions = Handler[] | Handler;
