/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    forceSwcTransforms: false,
  },
  publicRuntimeConfig: {
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    nodeName: process.env.NEXT_PUBLIC_NODE_NAME,
    podName: process.env.NEXT_PUBLIC_POD_NAME,
    podNamespace: process.env.NEXT_PUBLIC_POD_NAMESPACE,
    podIp: process.env.NEXT_PUBLIC_POD_IP,
    env: process.env.NODE_ENV,
  },
};
