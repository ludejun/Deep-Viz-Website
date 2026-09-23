<p align="center">
  <img src="logo.png" width="96" alt="Deep-Viz" />
</p>

<h1 align="center">Deep-Viz Website</h1>

<p align="center">
  <a href="https://github.com/ludejun/Deep-Viz">Deep-Viz</a> 组件库展示网站的源码。
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-15-61dafb?logo=react&logoColor=white" alt="react 15" />
  <img src="https://img.shields.io/badge/dva-1.2-ff6600" alt="dva 1.2" />
  <img src="https://img.shields.io/badge/antd-3-0170fe?logo=antdesign&logoColor=white" alt="antd 3" />
  <img src="https://img.shields.io/badge/roadhog-0.6-999999" alt="roadhog 0.6" />
  <a href="https://github.com/ludejun/Deep-Viz-Website/actions/workflows/pages.yml"><img src="https://github.com/ludejun/Deep-Viz-Website/actions/workflows/pages.yml/badge.svg" alt="Pages" /></a>
  <a href="https://github.com/ludejun/Deep-Viz-Website/blob/master/LICENSE"><img src="https://img.shields.io/github/license/ludejun/Deep-Viz-Website?color=blue" alt="开源协议" /></a>
</p>

<p align="center">
  <b><a href="https://ludejun.github.io/deepviz/">在线展示</a></b>
  ·
  <a href="https://github.com/ludejun/Deep-Viz">Deep-Viz 组件库</a>
  ·
  <a href="./CHANGELOG.md">更新日志</a>
  ·
  <a href="./README_EN.md">English</a>
</p>

---

[Deep-Viz](https://github.com/ludejun/Deep-Viz) 是一个专注于数据可视化的 React 组件库，提供统一、简洁、漂亮、多样的图表，糅合数据可视化经验与商业数据展示惯例。本仓库是它的**展示网站源码**，组件的开发也主要在这里进行。

技术栈：React + Dva + Deep-Viz + Ant Design。

> [!NOTE]
> **技术栈停留在 React 15 + roadhog，且不打算升级。**
>
> [roadhog](https://github.com/sorrycc/roadhog) 停更于 2019 年（已被 umi 取代），迁移意味着把这个 194 个文件的站点整体换掉构建体系，属于重写而非维护。
>
> 网站本身**构建和运行都正常**（2026 年在 Node 20/22 上验证过），并且现在由 GitHub Actions 自动部署。

## 环境要求

Node 20（roadhog 0.6 在更高版本上未验证），使用 **npm**。

> roadhog 0.6 早于 peer dependency 强校验，并且依赖扁平的 `node_modules` 来解析自己的 loader，
> 所以这个仓库用 `npm install --legacy-peer-deps`，不能用 pnpm。

## 开发

```bash
# 安装依赖
npm install --legacy-peer-deps

# 本地开发，默认 http://localhost:8000
npm start

# 生产构建，产物在 dist/
npm run build

# 代码检查
npm run lint
```

## 部署

推送到 `master` 会触发 [`pages.yml`](.github/workflows/pages.yml)，构建并发布到 GitHub Pages。

`.roadhogrc` 的 `publicPath` 是相对路径 `./`，因此同一份产物在 `/deepviz/`、`/Deep-Viz-Website/` 或根路径下都能直接用。

> 历史说明：线上的 <https://ludejun.github.io/deepviz/> 一直是把本仓库的构建产物手工拷贝到独立的 [`deepviz`](https://github.com/ludejun/deepviz) 仓库得到的，而本仓库自己的 Pages 指向 `master` 根目录（那里没有 `index.html`），所以一直是 404。现在本仓库会自动部署，那份手工拷贝可以考虑退役。

## 参与贡献

欢迎提 issue 和 PR。

## 开源协议

[MIT](./LICENSE)
