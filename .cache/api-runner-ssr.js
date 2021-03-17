var plugins = [{
      plugin: require('/Users/tomoyo/ReviwsSite/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/tomoyo/ReviwsSite/node_modules/gatsby-remark-images/gatsby-ssr'),
      options: {"plugins":[],"maxWidth":680},
    },{
      plugin: require('/Users/tomoyo/ReviwsSite/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[],"className":"auto-link"},
    },{
      plugin: require('/Users/tomoyo/ReviwsSite/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Chiyo-ComicBookReviews","short_name":"Chiyo-Reviews","description":"A blog ComicBookReviews and AnimeReviews.","start_url":"/ComicReviwsSite","background_color":"#282c35","theme_color":"#282c35","display":"standalone","icon":"static/favicons/favicon.ico","icons":[{"src":"favicons/logo-192x192.png","sizes":"192x192","type":"image/png"},{"src":"favicons/logo-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('/Users/tomoyo/ReviwsSite/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/tomoyo/ReviwsSite/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl\n              }\n            }\n  \n            allSitePage {\n              edges {\n                node {\n                  path\n                }\n              }\n            }\n        }"},
    },{
      plugin: require('/Users/tomoyo/ReviwsSite/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"265502661"},
    },{
      plugin: require('/Users/tomoyo/ReviwsSite/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n        {\n          site {\n            siteMetadata {\n              siteUrl\n              title\n              description\n              site_url: siteUrl\n              copyright\n              siteLanguage\n              language: siteLanguage\n              datePublished\n              pubDate: datePublished\n            }\n          }\n        }\n      ","feeds":[{"query":"\n            {\n              allMarkdownRemark(\n                limit: 1000,\n                sort: { order: DESC, fields: [frontmatter___date] },\n              ) {\n                edges {\n                  node {\n                    excerpt\n                    html\n                    fields { slug }\n                    frontmatter {\n                      title\n                      date\n                      cover {\n                        relativePath\n                      }\n                      category\n                      tags\n                    }\n                  }\n                }\n              }\n            }\n          ","output":"/https://chiyo-comicbookreviews.netlify.app/rss.xml","title":"Chiyo-ComicBookReviews"}]},
    },{
      plugin: require('/Users/tomoyo/ReviwsSite/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
