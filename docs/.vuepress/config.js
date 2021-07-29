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
      // NavbarItem
      {
        text: 'Dukungan teknis',
        children: ['/system-requirements/hardware.md'],
      },
    ],
    docsDir: 'docs',
    // sidebar: {
    //   '/petunjuk-pengoperasian/': [
    //     '',
    //     { text: 'Menampilkan trend', link: 'historycal-trend.html' },
    //     { text: 'Riwayat sinkronisasi', link: 'sync-logs.html' },
    //     { text: 'Membuat laporan', link: 'report.html' },
    //     { text: 'Pengaturan', link: 'setting/README.html' },
    //   ],

    //   '/': ['', '/petunjuk-pengoperasian/', 'README.md'],
    // },
    sidebar: [
      {
        title: 'Panduan installasi',
        sidebarDepth: 3,
        children: ['/panduan-installasi/'],
      },
      {
        title: 'Petunjuk pengoperasian',
        sidebarDepth: 2,
        collapsable: false, // optional, defaults to true
        path: '/petunjuk-pengoperasian/',

        children: [
          '/petunjuk-pengoperasian/membuka-hawa.md',
          '/petunjuk-pengoperasian/historycal-trend.md',
          '/petunjuk-pengoperasian/sync-logs.md',
          '/petunjuk-pengoperasian/report.md',
        ],
      },
    ],
  },
}
