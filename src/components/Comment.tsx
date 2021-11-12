import React, { useLayoutEffect } from 'react'

type CommentsProps = {
  repo?: string
}

export const Comments = ({ repo }: CommentsProps) => {
  const anchor = React.useRef<HTMLInputElement | null>(null)

  useLayoutEffect(() => {
    const theme = 'github-light'
    const script = document.createElement('script')

    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', true.toString())
    script.setAttribute('repo', repo || '')
    script.setAttribute('issue-term', 'url')
    script.setAttribute('theme', theme) // you could choose other themes too
    anchor?.current?.appendChild(script)
  }, [repo])
  return (
    <>
      <div style={{ width: '100%' }}>
        <div ref={anchor} />
      </div>
    </>
  )
}
