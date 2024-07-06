const withTM = require('next-transpile-modules')(['@programmerExamApp/uikit']);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    modularizeImports: {
      '@programmerExamApp/uikit': {
        transform: '@programmerExamApp/uikit',
        preventFullImport: true,
        skipDefaultConversion: true,
      },
    },
  },
};

module.exports = withBundleAnalyzer(withTM(config));
