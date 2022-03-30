import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import tailwindcss from 'tailwindcss';
import purgecss from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'design-system',
  outputTargets: [
    react({
      componentCorePackage: 'design-system',
      proxiesFile: '../design-system-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
  plugins: [
    tailwind({
      tailwindCssPath: './src/styles/tailwind.css',
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer(),
          purgecss({
            content: ['./**/*.tsx'],
            safelist: [':root', ':host', ':shadow', '/deep/', '::part', '::theme'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
          }),
        ],
      },
    }),
    tailwindHMR(),
  ],
};
