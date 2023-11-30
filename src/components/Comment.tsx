import React, { useEffect } from 'react'

type CommentsProps = {
  repo?: string
}

export const Comments = ({ repo }: CommentsProps) => {
  const anchor = React.useRef<HTMLInputElement | null>(null)
  // useLayoutEffect(() => {
  //   const theme = 'github-light'
  //   const script = document.createElement('script')

  //   script.setAttribute('src', 'https://utteranc.es/client.js')
  //   script.setAttribute('crossorigin', 'anonymous')
  //   script.setAttribute('async', true.toString())
  //   script.setAttribute('repo', repo || '')
  //   script.setAttribute('issue-term', 'url')
  // script.setAttribute('theme', theme) // you could choose other themes too
  //   anchor?.current?.appendChild(script)
  // }, [repo])
  const commentNodeId = 'comments'
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.async = true
    script.setAttribute('repo', repo || '')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('label', 'comment :speech_balloon:')
    script.setAttribute('crossorigin', 'anonymous')
    const scriptParentNode = document.getElementById(commentNodeId)
    scriptParentNode?.appendChild(script)

    return () => {
      // cleanup - remove the older script with previous theme
      scriptParentNode?.removeChild(scriptParentNode.firstChild as Node)
    }
  })

  return (
    <>
      <div style={{ width: '100%' }}>
        <div ref={anchor} id={commentNodeId} />
      </div>
    </>
  )
}
