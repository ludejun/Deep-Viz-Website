<p align="center">
  <img src="logo.png" width="96" alt="Deep-Viz" />
</p>

<h1 align="center">Deep-Viz Website</h1>

<p align="center">
  Source for the <a href="https://github.com/ludejun/Deep-Viz">Deep-Viz</a> component gallery.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-15-61dafb?logo=react&logoColor=white" alt="react 15" />
  <img src="https://img.shields.io/badge/dva-1.2-ff6600" alt="dva 1.2" />
  <img src="https://img.shields.io/badge/antd-3-0170fe?logo=antdesign&logoColor=white" alt="antd 3" />
  <img src="https://img.shields.io/badge/roadhog-0.6-999999" alt="roadhog 0.6" />
  <a href="https://github.com/ludejun/Deep-Viz-Website/actions/workflows/pages.yml"><img src="https://github.com/ludejun/Deep-Viz-Website/actions/workflows/pages.yml/badge.svg" alt="Pages" /></a>
  <a href="https://github.com/ludejun/Deep-Viz-Website/blob/master/LICENSE"><img src="https://img.shields.io/github/license/ludejun/Deep-Viz-Website?color=blue" alt="license" /></a>
</p>

<p align="center">
  <b><a href="https://ludejun.github.io/deepviz/">Live gallery</a></b>
  ·
  <a href="https://github.com/ludejun/Deep-Viz">Deep-Viz library</a>
  ·
  <a href="./CHANGELOG.md">Changelog</a>
  ·
  <a href="./README_CN.md">中文文档</a>
</p>

---

[Deep-Viz](https://github.com/ludejun/Deep-Viz) is a React chart library: concise, consistent,
good-looking charts distilled from years of commercial data-visualisation practice. This repo holds
the **gallery site** that showcases it — and is where most of the component development happens.

Stack: React + Dva + Deep-Viz + Ant Design.

## Requirements

Node 20, and **npm**.

> roadhog 0.6 predates peer-dependency enforcement and resolves its own loaders through a flat
> `node_modules`, so this repo uses `npm install --legacy-peer-deps` and cannot use pnpm.

## Development

```bash
# install
npm install --legacy-peer-deps

# dev server, http://localhost:8000
npm start

# production build, output in dist/
npm run build

# lint
npm run lint
```

## Deployment

Pushing to `master` triggers [`pages.yml`](.github/workflows/pages.yml), which builds the site and
publishes it to GitHub Pages.

`publicPath` in `.roadhogrc` is the relative `./`, so one build works unchanged at `/deepviz/`,
`/Deep-Viz-Website/` or the domain root.

> Background: <https://ludejun.github.io/deepviz/> has always been this repo's build output, copied
> by hand into a separate [`deepviz`](https://github.com/ludejun/deepviz) repo — while this repo's
> own Pages pointed at the `master` root, which has no `index.html`, and so returned 404. Now that
> this repo deploys itself, that manual copy can be retired.

## Contributing

Issues and pull requests are welcome.

## License

[MIT](./LICENSE)
