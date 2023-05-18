/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    forceSwcTransforms: false,
  },
  publicRuntimeConfig: {
    APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NODE_NAME: process.env.NEXT_PUBLIC_NODE_NAME,
    NODE_ENV: process.env.NODE_ENV,
  },
};
