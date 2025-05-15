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
      name: 'react19_2_producer',
      exposes: {
        './UiButton': './src/export-uibutton',
      },
      shareStrategy: 'loaded-first',
      shared: {
        react: {
          singleton: true,
          shareScope: 'react19',
          requiredVersion: dependencies['react'].version,
        },
        'react-dom': {
          singleton: true,
          shareScope: 'react19',
          requiredVersion: dependencies['react-dom'].version,
        }
      },
    })
  ],
  server: {
    port: 5002,
    strictPort: true,
  },
});
