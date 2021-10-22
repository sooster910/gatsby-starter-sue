import { Link } from 'gatsby'
import { ReactNode } from 'react'

type DefaultLinkProps = {
  children: ReactNode
  to: string
  direction?: string
  activeClassName?: string
}

export const DefaultLink = ({ children, ...props }: DefaultLinkProps) => {
  console.log('children', children)
  console.log('prop', { ...props })
  return <Link {...props}>{children}</Link>
}
