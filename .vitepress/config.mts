import { defineConfig } from 'vitepress'

import ab_mdit from "any-block-converter-markdown-it" // +

// + 这里需要自 pnpm install jsdom，不知道为什么这部分不能在模块里依赖，会有bug......
import jsdom from "jsdom"
const { JSDOM } = jsdom
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
  url: 'http://localhost/', // @warn 若缺少该行，则在mdit+build环境下，编译报错
});
// @ts-ignore 不能将类型“DOMWindow”分配给类型“Window & typeof globalThis”
global.window = dom.window
global.history = dom.window.history // @warn 若缺少该行，则在mdit+build环境下，编译报错：ReferenceError: history is not defined
global.document = dom.window.document
global.NodeList = dom.window.NodeList
global.HTMLElement = dom.window.HTMLElement
global.HTMLDivElement = dom.window.HTMLDivElement
global.HTMLPreElement = dom.window.HTMLPreElement
global.HTMLQuoteElement = dom.window.HTMLQuoteElement
global.HTMLTableElement = dom.window.HTMLTableElement
global.HTMLUListElement = dom.window.HTMLUListElement
global.HTMLScriptElement = dom.window.HTMLScriptElement
dom.window.scrollTo = ()=>{} // @warn 若缺少该行，编译警告：Error: Not implemented: window.scrollTo*/

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  markdown: {
    config: (md) => {
      md.use(ab_mdit)
    }
  }
})
