import { defineConfig } from "vitepress";
import NavConfig from '../../config/nav'
import SideBarConfig from '../../config/sideBar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "阿一叁的博客小站",
  description: "分享和记录一些技术",
  base: '/myBlog/',
  themeConfig: {
    nav: NavConfig,
    sidebar: SideBarConfig,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/codehongwei?tab=repositories',
        ariaLabel: '个人主页'
      }
    ],
  },
});
