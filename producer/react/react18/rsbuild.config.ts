import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {pluginModuleFederation} from "@module-federation/rsbuild-plugin";
import { pluginSass } from '@rsbuild/plugin-sass';
import { dependencies } from './package.json';

export default defineConfig({
  plugins: [
    pluginSass(),
    pluginReact({ splitChunks: { react: false } }),
    pluginModuleFederation({
      name: 'react18_producer',
      exposes: {
        './UiButton': './src/export-uibutton',
      },
      shareStrategy: 'loaded-first',
      shareScope: 'react18',
      shared: {
        react: {
          singleton: true,
          strictVersion: true,
          requiredVersion: dependencies['react'].version,
        },
        'react-dom': {
          singleton: true,
          strictVersion: true,
          requiredVersion: dependencies['react-dom'].version,
        }
      },
    })
  ],
  server: {
    port: 5003,
    strictPort: true,
  },
});
