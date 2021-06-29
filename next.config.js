module.exports = {
  i18n: {
    locales: ['hu', 'en'],
    defaultLocale: 'hu',
    localeDetection: false
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/
      },
      use: ['@svgr/webpack']
    });
    return config;
  }
};
