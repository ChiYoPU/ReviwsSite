const config = {
  author: 'Chiyo', // Site owner
  siteTitle: 'Chiyo-ComicBookReviews', // Site title.
  siteTitleShort: 'Chiyo-Reviews', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Chiyo-ComicBookReviews', // Alternative site title for SEO.
  siteLanguage: 'en', // Site language.
  siteDescription: 'A blog ComicBookReviews and AnimeReviews.', // Website description used for RSS feeds/meta description tag.
  siteLogo: 'static/favicons/favicon.ico', // Logo used for manifest.
  siteUrl: 'https://chiyo-comicbookreviews.netlify.app', // Domain of your website without pathPrefix.
  pathPrefix: '/ReviwsSite', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteRss: 'https://chiyo-comicbookreviews.netlify.app/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  siteGATrackingID: '265502661', // Tracking code ID for google analytics.
  disqusShortname: 'chiyo-comicbookreviews', // Disqus shortname.
  twitterUserName: 'Chiyo20191', // twitter creator for SEO
  datePublished: '2021-03-17', // for SEO
  copyrightYear: '2021', // for SEO
  postsPerPage: 4, // posts per page used in gatsby-node.js
  // Links to social profiles you want to display in the footer.
  rrssb: [
    {
      label: 'github',
      url: 'https://github.com/ChiYoPU',
      iconClassName: 'fab fa-github',
    },
    {
      label: 'mail',
      url: '',
      iconClassName: 'fa fa-envelope',
    },
    {
      label: 'facebbok',
      url: '',
      iconClassName: 'fab fa-facebook',
    },
    {
      label: 'instagram',
      url: '',
      iconClassName: 'fab fa-instagram',
    },
  ],
  // Links to pages you want to display in the navigation bar.
  navbarLinks: [
    {
      label: 'Archives',
      url: '/archives',
      iconClassName: 'fa fa-book-open',
    },
    {
      label: 'Categories',
      url: '/categories',
      iconClassName: 'fa fa-list-alt',
    },
    {
      label: 'About',
      url: '/about',
      iconClassName: 'fa fa-address-card',
    },
  ],
};
config.copyright = `Copyright © ${config.copyrightYear}. ${config.author}`;

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;