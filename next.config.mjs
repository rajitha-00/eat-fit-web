// next.config.mjs
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.designnetrix.com"],
  },
};

export default bundleAnalyzer(nextConfig);
