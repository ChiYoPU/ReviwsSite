module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":680},
    },{
      plugin: require('../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[],"className":"auto-link"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Chiyo-ComicBookReviews","short_name":"Chiyo-Reviews","description":"A blog ComicBookReviews and AnimeReviews.","start_url":"/ComicReviwsSite","background_color":"#282c35","theme_color":"#282c35","display":"standalone","icon":"static/favicons/favicon.ico","icons":[{"src":"favicons/logo-192x192.png","sizes":"192x192","type":"image/png"},{"src":"favicons/logo-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"265502661"},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[],"modulePath":"/Users/tomoyo/ReviwsSite/src/cms/cms.js"},
    }]
