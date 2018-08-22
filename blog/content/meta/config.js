const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Personal Blog", // <title>
  shortSiteTitle: "« scio me nihil scire »", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en|fr",
  // author
  authorName: "sami ghazouane",
  authorTwitterAccount: "sami_ghazouane",
  // info
  infoTitle: "sami ghazouane",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Personal Blog - Dev Blog",
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
    { name: "facebook", url: "http://facebook.com/greglobinski" }
  ]
};
