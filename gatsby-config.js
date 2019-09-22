module.exports = {
  siteMetadata: {
    title: 'Head On Media',
    description: 'Media Agency',
    keywords: 'Media, Photos, Edms, Design, Content, Social, Development'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    "gatsby-remark-responsive-iframe",
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'dcqo339vaiym',
        accessToken: 'S_YItHM0Ak13aNVnoz7pX9SwmssoY_kQ9jBstGXisbo'
      }
    },
    {
      resolve: "gatsby-remark-embed-video",
      options: {
        width: 800,
        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
        height: 400, // Optional: Overrides optional.ratio
        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true //Optional: Disable insertion of <style> border: 0
      }
    }
  ],
}
