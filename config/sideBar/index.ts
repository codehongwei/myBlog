import type { DefaultTheme } from 'vitepress'

// const MacSideBarConfig: DefaultTheme.SidebarItem[] = [
//   {
//     text: '软件列表',
//     link: '/mac/app.md'
//   }
// ]

const githubConfig = {
  '/webApi/': [
    {
      text: 'webApi',
      items: [
        {
          text: 'Worker',
          link: '/webApi/worker'
        }
      ]
    }
  ],
  '/github/': [
    {
      text: 'github使用技巧',
      items: [
        {
          text: '自动化部署',
          link: '/github/autoDeploy'
        }
      ]
    }
  ],
  '/mac/': [
    {
      text: 'mac使用技巧',
      items: [
        {
          text: 'app',
          link: '/mac/app'
        }
      ]
    }
  ]
}
export default {
  ...githubConfig
}
