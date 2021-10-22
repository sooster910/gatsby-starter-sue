/* All customizable site config goes here*/

module.exports = {
  title: `Gatsby blog with TypeScript`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: {
    name: `@Hyunsu Joo`,
    summary: `Hi, I'm Sue I'm a curious person Kick off your next, great Gatsby project with this default starter.This barebones starter ships wit`,
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
    email: false,
    facebook: true,
    twitter: true,
    reddit: false,
    linkedIn: false,
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
