/* All customizable site config goes here*/

module.exports = {
  title: `Hyunsu Blog`,
  description: `Hyunsu blog where stories are written on Software Engineering, FrontEnd Development, JavaScript, TypeScript, React, ux/ui and more. `,
  keywords: `FrontEnd Development, FrontEnd architecture, Design System, React.js, JavaScript, TypeScript`,
  image: `./src/images/profilePic.png`,
  author: {
    name: `Hyunsu.J`,
    greeting: `Hi, I'm Hyunsu`,
    summary: `안녕하세요. 3년차 프론트엔드 개발자 주현수입니다.\n
    개발을 통해 사용자들에게 풍부하고 가치 있는 경험을 제공하는 일에 뿌듯함을 느낍니다.\n
    옵시디언(Obsidian)에서 현재 블로그로 하나씩 글을 옮기는 과정에 있어요. ☕️ 👩‍💻 ⛷`,
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
