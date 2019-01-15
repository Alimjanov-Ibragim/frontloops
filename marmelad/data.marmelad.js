module.exports = {
  app: {
    lang: 'ru',
    stylus: {
      theme_color: '#3E50B4',
    },
    GA: false, // Google Analytics site's ID
    package: 'ключ перезаписывается значениями из package.json marmelad-сборщика',
    settings: 'ключ перезаписывается значениями из файла настроек settings.marmelad.js',
    storage: 'ключ перезаписывается значениями из файла настроек settings.marmelad.js',
    buildTime: '',
    controls: [
      'default',
      'brand',
      'success',
      'info',
      'warning',
      'danger',
    ],
  },
  payment : [
    {
      'img' : 'img/visa.svg',
      'name' : 'visa'
    },
    {
      'img' : 'img/mastercard.svg',
      'name' : 'mastercard'
    },
    {
      'img' : 'img/maestro.svg',
      'name' : 'maestro'
    }
  ],
  pageTitle: 'marmelad',
};
