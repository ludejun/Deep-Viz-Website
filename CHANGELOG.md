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
- A Chinese `README_CN.md` alongside the English `README.md`, both with badges.
- This changelog.
