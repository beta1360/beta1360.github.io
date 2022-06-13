import { defineConfig } from 'vuepress/config'

export default defineConfig({
  title: "Geonhee's Blog.",
  description: "Geonhee's development blog!",
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    sidebar: 'auto',
    smoothScroll: true
  }
})
