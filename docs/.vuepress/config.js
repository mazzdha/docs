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

          {
            text: 'PJB UBJOM Indramayu',
            link: '/users/pjb-ubjom-indramayu',
        
          },
          
          {
            text: 'PJB UP Gresik',
            link: '/users/pjb-up-gresik',
        
          },

          {
            text: 'PJB UBJOM Tanjung Awar Awar',
            link: '/users/pjb-ubjom-tanjung-awar-awar',
        
          },

          {
            text: 'PJB UBJOM Paiton 9',
            link: '/users/pjb-ubjom-paiton-9',
        
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
