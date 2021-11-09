/* All customizable site config goes here*/

module.exports = {
  title: `FrontEnd Developer`,
  description: `Hi I'm sue, passionate to front-end develpment, sharing knowledge about web `,
  keywords: `FrontEnd Developer, React.js, JavaScript, technical-writing, web  `,
  image: `src/images/profilePic.png`,
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
    facebook: { accountName: '', showIcon: false },
    instagram: { accountName: '', showIcon: false },
    twitter: { accountName: '', showIcon: false },
    linkedIn: { accountName: '', showIcon: false },
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
