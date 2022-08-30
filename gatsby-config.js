require("dotenv").config({
  path: `.env`
})
module.exports = {
  siteMetadata: {
    title: "Tanvir Hossain",
    description: "Portfolio site of Tanvir Hossain",
    author: "Tanvir Hossain",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
        disableLiveReload: false,
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    `gatsby-plugin-react-helmet`,
  ],
};
