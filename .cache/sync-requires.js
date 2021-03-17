const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-jsx": hot(preferDefault(require("/Users/tomoyo/ReviwsSite/src/templates/post.jsx"))),
  "component---src-templates-post-list-jsx": hot(preferDefault(require("/Users/tomoyo/ReviwsSite/src/templates/postList.jsx"))),
  "component---src-templates-tag-jsx": hot(preferDefault(require("/Users/tomoyo/ReviwsSite/src/templates/tag.jsx"))),
  "component---src-templates-category-jsx": hot(preferDefault(require("/Users/tomoyo/ReviwsSite/src/templates/category.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tomoyo/ReviwsSite/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/tomoyo/ReviwsSite/src/pages/404.jsx"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/tomoyo/ReviwsSite/src/pages/about.jsx"))),
  "component---src-pages-archives-jsx": hot(preferDefault(require("/Users/tomoyo/ReviwsSite/src/pages/archives.jsx"))),
  "component---src-pages-categories-jsx": hot(preferDefault(require("/Users/tomoyo/ReviwsSite/src/pages/categories.jsx")))
}

