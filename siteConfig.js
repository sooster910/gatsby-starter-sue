/* All customizable site config goes here*/

module.exports = {
  title: `Gatsby starter Sue`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: {
    name: `Sue.J`,
    greeting: `Hi, I'm Hyunsu`,
    summary: `Front End Developer focucsed on deliver a better user experienced. like to discover, learn, and share everything related to Web Developement. 
    everyday coffee/   
    `,
  },
  siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  social: {
    email: { emailAddress: 'hs9880@gmail.com', showIcon: true },
    github: { accountName: 'sooster910', showIcon: true },
    facebook: { accountName: '', showIcon: true },
    instagram: { accountName: '', showIcon: true },
    twitter: { accountName: '', showIcon: true },
    linkedIn: { accountName: '', showIcon: true },
  },
  titleTemplate: '%s · The Real Hero',
  shareButtons: {
    facebook: true,
    twitter: true,
    reddit: true,
    linkedIn: true,
    line: true,
  },
  /*
   * src/components/comments
   * repo should be "<YOUR GITHUB USERNAME>/<YOUR BLOG REPOSITORY NAME>"
   * ex) repo:"sooster910/gatsby-starter-sue"
   * */
  comments: {
    utterances: { enabled: true, repo: 'sooster910/gatsby-starter-sue' },
  },
}
