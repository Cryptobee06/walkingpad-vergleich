module.exports = {
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
    localePath: './public/locales',
    localeDetection: false
  },
  fallbackLng: 'de',
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  saveMissing: false,
  strictMode: true,
  serializeConfig: false,
  react: {
    useSuspense: false
  }
}
