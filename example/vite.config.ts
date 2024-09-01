import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { instrumentationPlugin } from "vite-plugin-instrumentation";

/**
 * NOTE
 * - A function that retrieves environment variables and secrets such as those from Secret Manager
 */
const fetchEnv = async () => {
  return {
    message: "MESSAGE",
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    instrumentationPlugin([
      async () => {
        console.log("Hello World!!");
      },
      async (config) => {
        const env = await fetchEnv();

        config.define = {
          ...config.define,
          __MESSAGE__: JSON.stringify(env.message),
        };
      },
    ]),
    react(),
  ],
});
