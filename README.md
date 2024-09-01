# vite-plugin-instrumentation

Inspired from [NEXT.JS Instrumentation](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation)

This plugin is useful for performing asynchronous processing at the time the server starts up or during the build process.

ex: Injecting environment variables or secrets via [Secret Manager](https://cloud.google.com/secret-manager?hl=ja)

## Installation

```sh
npm install -D vite-plugin-instrumentation
```

## Usage

```js
// vite.config.js
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
  ],
});
```

More details can be found [here](./example/vite.config.ts).
