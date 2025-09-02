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
        react18_producer: {
          external: 'react18_producer@http://localhost:5003/mf-manifest.json',
          shareScope: 'react18'
        },
        react19_producer: {
          external: 'react19_producer@http://localhost:5001/mf-manifest.json',
          shareScope: 'react19'
        },
        react19_2_producer: {
          external: 'react19_2_producer@http://localhost:5002/mf-manifest.json',
          shareScope: 'react19'
        },
      },
      shareStrategy: 'loaded-first',
      shareScope: 'react18',
      shared: {
        react: {
          singleton: true,
          shareScope: 'react18',
          strictVersion: true,
          requiredVersion: dependencies['react'].version,
        },
        'react-dom': {
          singleton: true,
          shareScope: 'react18',
          strictVersion: true,
          requiredVersion: dependencies['react-dom'].version,
        },
      },
    })
  ],
  server: {
    port: 4001,
    strictPort: true,
  },
});
