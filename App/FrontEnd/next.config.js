/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    forceSwcTransforms: false,
  },
  env: {
    myRuntimeEnvVar: process.env.NEXT_PUBLIC_APP_NAME,
  },
};
