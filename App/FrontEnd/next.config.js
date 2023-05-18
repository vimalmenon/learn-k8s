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
    POD_NAME: process.env.NEXT_PUBLIC_POD_NAME,
    POD_NAMESPACE: process.env.NEXT_PUBLIC_POD_NAMESPACE,
    NODE_ENV: process.env.NODE_ENV,
  },
};
