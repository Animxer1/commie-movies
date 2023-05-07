module.exports = {
  images: {
    domains: ["image.tmdb.org", "imgur.com", "arc.io", "i.imgur.com"],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/movie/popular/page/1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/movie/popular/page",
        destination: "/",
        permanent: true,
      },
      {
        source: "/movie/top/page",
        destination: "/movie/top/page/1",
        permanent: true,
      },
      {
        source: "/movie/top",
        destination: "/movie/top/page/1",
        permanent: true,
      },
      {
        source: "/movie",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
