/* All customizable site config goes here*/

module.exports = {
  title: `Hyunsu Blog`,
  description: `Hyunsu blog where stories are written on Software Engineering, FrontEnd Development, JavaScript, TypeScript, React, ux/ui and more. `,
  keywords: `FrontEnd Development, FrontEnd architecture, Design System, React.js, JavaScript, TypeScript`,
  image: `./src/images/profilePic.png`,
  author: {
    name: `Hyunsu.J`,
    greeting: `Hi, I'm Hyunsu`,
    summary: `Front End Developer focucsed on deliver a better user experienced. like to discover, learn, and share everything related to Web Developement. 
     ☕️ 👩‍💻 ⛷ `,
  },
  siteUrl: `https://www.hyunsujoo.com`,
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
  naver: `094444c07ec9f596d893f8a95ae6aed3c5608638`,
  /*
   * src/components/comments
   * repo should be "<YOUR GITHUB USERNAME>/<YOUR BLOG REPOSITORY NAME>"
   * ex) repo:"sooster910/gatsby-starter-sue"
   * */
  comments: {
    utterances: { enabled: true, repo: 'sooster910/gatsby-starter-sue' },
  },
}
