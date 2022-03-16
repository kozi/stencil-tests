import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-tests',
  buildEs5: 'prod',
  testing: {
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    reporters: ["default", "jest-junit"],
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
