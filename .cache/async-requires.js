// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-jsx": () => import("../src/templates/post.jsx" /* webpackChunkName: "component---src-templates-post-jsx" */),
  "component---src-templates-post-list-jsx": () => import("../src/templates/postList.jsx" /* webpackChunkName: "component---src-templates-post-list-jsx" */),
  "component---src-templates-tag-jsx": () => import("../src/templates/tag.jsx" /* webpackChunkName: "component---src-templates-tag-jsx" */),
  "component---src-templates-category-jsx": () => import("../src/templates/category.jsx" /* webpackChunkName: "component---src-templates-category-jsx" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-jsx": () => import("../src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-about-jsx": () => import("../src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-archives-jsx": () => import("../src/pages/archives.jsx" /* webpackChunkName: "component---src-pages-archives-jsx" */),
  "component---src-pages-categories-jsx": () => import("../src/pages/categories.jsx" /* webpackChunkName: "component---src-pages-categories-jsx" */)
}

