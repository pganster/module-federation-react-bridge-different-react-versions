import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {pluginModuleFederation} from "@module-federation/rsbuild-plugin";
import { dependencies } from './package.json';

export default defineConfig({
  plugins: [
    pluginReact({ splitChunks: { react: false } }),
    pluginModuleFederation({
      name: 'react18_consumer',
      remotes: {
        react19_producer: 'react19_producer@http://localhost:5001/mf-manifest.json',
      },
      shareStrategy: 'loaded-first',
      shared: {
        react: {
          requiredVersion: dependencies['react'].version,
        },
        'react-dom': {
          requiredVersion: dependencies['react-dom'].version,
        }
      },
    })
  ],
  server: {
    port: 4001,
    strictPort: true,
  },
});
