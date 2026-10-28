/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Transpile the libraries from source. Next.js by default only transpiles
  // the app's own code; external packages need explicit opt-in if they
  // ship untranspiled modern syntax.
  transpilePackages: [
    'convenient-store-header-library',
    'convenient-store-enterprise-ui-library'
  ]
}