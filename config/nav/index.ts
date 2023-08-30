import type { DefaultTheme } from 'vitepress'

const NavConfig: DefaultTheme.NavItem[] = [
  {
    text: 'mac技巧',
    link: '/mac/'
  },
  {
    text: 'github使用技巧',
    // link: '/github/',
    items: [
      {
        text: '自动化部署',
        link: '/github/autoDeploy.md'
      }
    ]
  }
]

export default [...NavConfig]
