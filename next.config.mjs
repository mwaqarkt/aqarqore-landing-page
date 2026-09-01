import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — every route is pre-rendered to real HTML at build time.
  // Crawlers and AI bots receive full content without executing JavaScript.
  output: 'export',

  // Emits directory-style output (out/ar/index.html) so every static host
  // serves /ar/ natively without rewrite rules. Canonicals match exactly.
  trailingSlash: true,

  images: {
    // Required for static export. Images are pre-optimised in /public instead.
    unoptimized: true,
  },

  // This repo sits inside a parent folder that also has a lockfile.
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
