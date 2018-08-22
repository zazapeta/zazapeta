const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Personal Blog", // <title>
  shortSiteTitle: "« scio me nihil scire »", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://sami.ghazouane.io",
  pathPrefix: "/blog",
  siteImage: "preview.jpg",
  siteLanguage: "en|fr",
  // author
  authorName: "Sami Ghazouane",
  authorTwitterAccount: "sami_ghazouane",
  // info
  infoTitle: "Sami Ghazouane",
  infoTitleNote: "Personal Blog",
  // manifest.json
  manifestName: "Personal blog - Web dev & more",
  manifestShortName: "Personal Blog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "sami.ghazouane@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/zazapeta" },
    { name: "twitter", url: "https://twitter.com/sami_ghazouane" },
    { name: "linkedin", url: "https://www.linkedin.com/in/ghazouane" }
  ]
};
