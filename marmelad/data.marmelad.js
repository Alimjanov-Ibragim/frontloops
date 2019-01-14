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
  deviceL1S1 : [
    {
      "img" : "img/device.svg",
      "name" : "Mobile",
      "desc" : "Get notifications about new releases in our mobile app.",
      "cur" : "$",
      "price" : "10",
      "month" : "/ month"
    },
    {
      "img" : "img/laptop.svg",
      "name" : "Desktop",
      "desc" : "Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms.",
      "cur" : "$",
      "price" : "15",
      "month" : "/ month"
    },
    {
      "img" : "img/monitor.svg",
      "name" : "Tv",
      "desc" : "Watch your favorite series at home on large screen with our TV application.",
      "cur" : "$",
      "price" : "20",
      "month" : "/ month"
    }
  ],
  pageTitle: 'marmelad',
};
