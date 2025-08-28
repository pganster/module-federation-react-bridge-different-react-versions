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
        react18_producer: 'react18_producer@http://localhost:5003/mf-manifest.json',
        react19_producer: 'react19_producer@http://localhost:5001/mf-manifest.json',
        react19_2_producer: 'react19_2_producer@http://localhost:5002/mf-manifest.json',
      },
      shareStrategy: 'loaded-first',
      shareScope: 'react18',
      shared: {
        react: {
          singleton: true,
          shareScope: 'react18',
          requiredVersion: dependencies['react'].version,
        },
        'react-dom': {
          singleton: true,
          shareScope: 'react18',
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
