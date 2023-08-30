import { defineConfig } from 'vitepress'
import NavConfig from './nav'
import SideBarConfig from './sideBar'

export default defineConfig({
  title: '阿一叁的博客小站',
  description: '分享和记录一些技术',
  base: '/myBlog/',
  outDir: '../dist',
  lang: 'zh-CN',
  themeConfig: {
    nav: NavConfig,
    sidebar: SideBarConfig,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/codehongwei?tab=repositories',
        ariaLabel: '个人主页'
      }
    ]
  }
})
