module.exports = {
  lang: 'id-ID',
  title: 'Panduan',
  description: 'Dokumentasi aplikasi CEMS Online berbasis hawa',

  themeConfig: {
    logo: '/cems-online-light.png',

    // // search: false,
    // searchMaxSuggestions: 10,
    searchPlaceholder: 'Search...',

    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'cems-online/cems-online.github.io',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'cems-online/docs',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'dev',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Bantu kami memperbaiki halaman ini!',

    navbar: [
      {
        text: 'Setting',
        link: '/setting/telegram/',
      },
      {
        text: 'API',
        link: '/api/',
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
          children: ['/dev.md'],
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

      '/api/': [
        {
          text: 'Hawa Web API',
          sidebarDepth: 3,
          collapsable: true,

          children: [
            '/api/index.md',
            '/api/getting-started.md',

            {
              text: 'Referensi API',
              sidebarDepth: 2,
              collapsable: true,
              children: [
                '/api/controllers/cerobong.md',
                '/api/controllers/parameter.md',
              ],
            },
          ],
        },
      ],

      '/users/': [''],
    },
  },
}
