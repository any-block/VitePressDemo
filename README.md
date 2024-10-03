# README

1. 先搭建vitepress项目

```bash
$ pnpm add -D vitepress
$ pnpm vitepress init # 基本上是默认
./
My Awesome Project
AVitePress Site
Default Theme
Yes
Yes
$ pnpm docs:dev # 测试一下
```

(由于我是用的虚拟机，为了让主机访问，这里额外多做一步：package.json scripts 中增加: ` --host 0.0.0.0 --port 8080`)

2. 修改文档内容

```shell
$ echo -e "\n[list2table]\n\n- 1\n- 2\n  - 3\n  - 4\n" >> ./docs/README.md
```

3. 安装AnyBlock

就像使用普通的mdit插件那样使用，参考： https://vitepress.dev/zh/guide/markdown#advanced-configuration

```bash
$ pnpm install -D jsdom
$ pnpm install -D any-block-converter-markdown-it@3.1.3-beta11 # 不能低于这个版本，否则不可用
```

在 vuepress 项目中的 `.vuepress/config.ts` 文件中，添加：

```typescript
import ab_mdit from "any-block-converter-markdown-it" // [!code ++]

// [!code ++] 这里需要自 pnpm install jsdom，不知道为什么这部分不能在模块里依赖，会有bug......
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

export default defineConfig({
  markdown: {
    config: (md) => {  // [!code ++]
      md.use(ab_mdit)  // [!code ++]
    }                  // [!code ++]
  }
})
```

4. 检查

```typescript
$ pnpm docs:dev
```
