const favicon = (page: string) => {
  return [
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: `/favicon/${page}/apple-icon-57x57.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: `/favicon/${page}/apple-icon-60x60.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: `/favicon/${page}/apple-icon-72x72.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: `/favicon/${page}/apple-icon-76x76.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: `/favicon/${page}/apple-icon-114x114.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: `/favicon/${page}/apple-icon-120x120.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: `/favicon/${page}/apple-icon-144x144.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: `/favicon/${page}/apple-icon-152x152.png`,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: `/favicon/${page}/apple-icon-180x180.png`,
    },
    {
      rel: 'icon',
      tyoe: 'image/png',
      sizes: '192x192',
      href: `/favicon/${page}/android-icon-192x192.png`,
    },
    {
      rel: 'icon',
      tyoe: 'image/png',
      sizes: '32x32',
      href: `/favicon/${page}/favicon-32x32.png`,
    },
    {
      rel: 'icon',
      tyoe: 'image/png',
      sizes: '96x96',
      href: `/favicon/${page}/favicon-96x96.png`,
    },
    {
      rel: 'icon',
      tyoe: 'image/png',
      sizes: '16x16',
      href: `/favicon/${page}/favicon-16x16.png`,
    },
    {
      rel: 'manifest',
      href: `/favicon/${page}/manifest.json`,
    },
    {
      name: 'msapplication-TileImage',
      href: `/favicon/${page}/ms-icon-144x144.png`,
    },
  ];
};

export default favicon;
