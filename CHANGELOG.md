# Changelog

## Unreleased

### Fixed

- **The site would not build.** `echarts-gl` was on `^2.0.0-rc.3`, whose ES6
  output UglifyJS (webpack 1 era, ES5 only) cannot parse, so the production
  build failed in minification. Pinned back to `^1.1.2`, which is also the line
  that matches the `echarts@4` this site uses — echarts-gl 2 targets echarts 5.
- **This repo's GitHub Pages returned 404.** Pages was configured to serve the
  `master` root, which contains no `index.html`. The site is now built and
  published by a workflow.
- `publicPath` was hard-coded to `/deepviz/`, tying every build to one URL. It
  is now the relative `./`, so the same output works at `/deepviz/`,
  `/Deep-Viz-Website/` or the domain root.

### Added

- `pages.yml`: builds and deploys to GitHub Pages on every push to `master`,
  through the official Pages actions and the built-in `GITHUB_TOKEN`.
- `ci.yml`: builds the site on every pull request, so it cannot rot unnoticed.
- English `README_EN.md` alongside the Chinese `README.md`, both with badges and
  a plain statement of where the stack stands.
- This changelog.

### Not changed, deliberately

The React 15 + [roadhog](https://github.com/sorrycc/roadhog) 0.6 toolchain stays
as it is. roadhog stopped in 2019 and was replaced by umi; moving off it means
swapping the build system under a 194-file site, which is a rewrite rather than
maintenance. Everything above was fixed within that constraint, and the site
builds and runs on Node 20/22.

Note that roadhog 0.6 also cannot run under pnpm — it resolves its own loaders
through a flat `node_modules` — so this repo stays on npm while the others moved
across.
