module.exports = {
  lang: 'id-ID',
  // title: 'petunjuk',
  description: 'Dokumentasi aplikasi CEMS Online berbasis hawa',

  themeConfig: {
    logo: '/cems-online-light.png',

    // // search: false,
    // searchMaxSuggestions: 10,
    // searchPlaceholder: 'Search...',

    navbar: [
      {
        text: 'Dukungan teknis',
        children: ['/system-requirements/hardware.md'],
      },

      //---------------------------------------------------------------------------------------
      // Users
      //
      // Tambahkan menu untuk user pada field children, polanya mengikuti yang sudah ada
      //---------------------------------------------------------------------------------------
      {
        text: 'Users',
        children: [
          {
            text: 'PJB UBJOM Rembang',
            link: '/users/pjb-ubjom-rembang',
          },

          {
            text: 'PJB UBJOM Pacitan',
            link: '/users/pjb-ubjom-pacitan',
        
          },
          {
            text: 'PJB UP Paiton',
            link: '/users/pjb-up-paiton',
          },
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
            '/petunjuk-pengoperasian/historycal-trend.md',
            '/petunjuk-pengoperasian/sync-logs.md',
            '/petunjuk-pengoperasian/report.md',
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

      '/users/': [''],
    },
  },
}
