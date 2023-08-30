import type { DefaultTheme } from 'vitepress'

const NavConfig: DefaultTheme.NavItem[] = [
  {
    text: 'jsWebApi',
    items: [
      {
        text: 'Worker',
        link: '/webApi/Worker'
      }
    ]
  },
  {
    text: 'mac',
    link: '/mac/app'
  },
  {
    text: 'github使用',
    items: [
      {
        text: '自动化部署',
        link: '/github/autoDeploy'
      }
    ]
  }
]

export default [...NavConfig]
