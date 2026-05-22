const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "moneytool.in",
          },
        ],
        destination: "https://www.moneytool.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;