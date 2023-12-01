// import React, { useEffect } from 'react'

// const Comment = ({ issueTerm }: { issueTerm: string }) => {

//   const commentsUUID = `comments_${issueTerm}`
//   useEffect(() => {

//     const theme = 'github-light' // you could choose other themes too
//     const script = document.createElement('script')
//     const anchor = document.getElementById(commentsUUID)
//     script.setAttribute('src', 'https://utteranc.es/client.js')
//     script.setAttribute('crossorigin', 'anonymous')
//     script.setAttribute('async', 'true')
//     script.setAttribute('repo', 'sooster910/gatsby-starter-sue')
//     script.setAttribute('issue-term', issueTerm)
//     script.setAttribute('theme', theme)
//     console.log("issueTerm", issueTerm)
//     if (anchor) {
//       anchor.appendChild(script)
//     }
//     return () => {
//       if (anchor) {
//         anchor.innerHTML = ''
//       }
//     }
//   }, [commentsUUID, issueTerm])

//   return (
//     <>
//       <div id={commentsUUID} className="post-comments relative">
//         <div className="utterances-frame"></div>
//       </div>
//     </>
//   )
// }

// export default Comment
import React, { createRef, FunctionComponent, useEffect } from 'react'

const src = 'https://utteranc.es/client.js'
const repo = 'sooster910/gatsby-starter-sue' // 자신 계정의 레포지토리로 설정

type UtterancesAttributesType = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const Comment: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current === null) return

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [])

  return <div ref={element} />
}

export default Comment
