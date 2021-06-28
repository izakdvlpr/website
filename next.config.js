const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  distDir: 'dist',
  devIndicators: {
    autoPrerender: false,
  },
  experimental: {
    jsconfigPaths: true,
  },
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
};
