module.exports = {
  lang: 'id-ID',
  title: 'Panduan',
  description: 'Dokumentasi aplikasi CEMS Online berbasis hawa',

  themeConfig: {
    logo: '/cems-online-light.png',

    // // search: false,
    // searchMaxSuggestions: 10,
    searchPlaceholder: 'Search...',

    navbar: [
      {
        text: 'Setting',
        link: '/setting/telegram/',
      },
      {
        text: 'Dukungan teknis',
        children: [
          { text: 'GRC Teknik', link: 'https://grcteknik.com/contact-us/' },
        ],
      },
    ],
    docsDir: 'docs',
    sidebar: {
      '/petunjuk-pengoperasian/': [
        {
          text: 'Petunjuk Pengoperasian',
          sidebarDepth: 2,
          collapsable: true,

          children: [
            '/petunjuk-pengoperasian/membuka-hawa.md',
            '/petunjuk-pengoperasian/report.md',
            '/petunjuk-pengoperasian/historycal-trend.md',
            '/petunjuk-pengoperasian/alarm.md',
            '/petunjuk-pengoperasian/sync-logs.md',
          ],
        },
      ],
      '/panduan-installasi/': [
        {
          text: 'Panduan Installasi',
          sidebarDepth: 2,
          collapsable: true,
          children: [
            '/petunjuk-pengoperasian/membuka-hawa.md',
            '/petunjuk-pengoperasian/historycal-trend.md',
            '/petunjuk-pengoperasian/sync-logs.md',
            '/petunjuk-pengoperasian/report.md',
          ],
        },
      ],

      '/setting/': [
        {
          text: 'Setting',
          sidebarDepth: 3,
          collapsable: true,

          children: [
            {
              text: 'Chimney',
              sidebarDepth: 3,
              collapsable: true,
              link: '/setting/chimney/parameter.html',
              children: ['/setting/chimney/parameter.md'],
            },
            '/setting/telegram/readme.md',
          ],
        },
      ],

      '/users/': [''],
    },
  },
}
