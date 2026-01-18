# README

详见: https://github.com/any-block/any-block

这里是上述仓库的markdown-it版本在vitepress上部署的项目demo

## 构建该demo项目

```typescript
$ pnpm install
$ pnpm docs:dev
```

## 从零创建该项目

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

2. 添加示例内容 (方便查看是否成功)

```shell
$ echo -e "\n[list2table]\n\n- 1\n- 2\n  - 3\n  - 4\n" >> ./docs/README.md
```

3. 安装使用AnyBlock

就像使用普通的mdit插件那样使用，参考： https://vitepress.dev/zh/guide/markdown#advanced-configuration

3.1. 安装依赖

```bash
$ pnpm install -D markdown-it-any-block@latest
```

3.2. 使用插件

在 vitepress 项目中的 `.vitepress/config.mts` 文件中，添加：

```typescript
import { ab_mdit, jsdom_init } from "markdown-it-any-block"
jsdom_init(false)

...

export default defineConfig({
  // base: "/VitePressDemo/", // 该仓库由于部署在组织子项目中，所以还有这行的变动，你的项目不一定要加
  markdown: {
    config: (md) => {
      md.use(ab_mdit)
    }
  }
})
```

3.3. 使用样式文件

> [!WARNING]
> 
> 注意，构建出来的只有对应的dom结构，而没有样式。因为纯markdown-it插件是不含样式的（除非用内联样式），自己引用一下就好
> 
> 例如vuepress中可以创建/修改 `src/.vuepress/styles/index.scss`
> 并添加: `@import '../../../node_modules/markdown-it-any-block/styles';`
> 
> 例如vitepress可以添加 [theme](https://github.com/any-block/VitePressDemo/blob/main/.vitepress/theme) 文件夹及里面的内容

4. 检查

```bash
$ pnpm docs:dev
# 此时也可打开 http://localhost:8080/ 查看渲染是否正常
# pnpm docs:build # 也可以进行编译检查
```
