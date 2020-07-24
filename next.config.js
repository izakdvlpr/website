const bundleAnalyzer = require("@next/bundle-analyzer");
const sourceMaps = require("@zeit/next-source-maps");
const composePlugins = require("next-compose-plugins");

module.exports = composePlugins(
  [
    [sourceMaps],
    [
      bundleAnalyzer,
      {
        enabled: !!process.env.ANALYZE,
      },
    ],
  ],
  {
    distDir: "__next",
    devIndicators: {
      autoPrerender: false,
    },
    experimental: {
      jsconfigPaths: true,
    },
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif']
  }
);