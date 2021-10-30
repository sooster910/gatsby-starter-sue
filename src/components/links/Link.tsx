import { Link } from 'gatsby'
import { ReactNode } from 'react'

type DefaultLinkProps = {
  children: ReactNode
  to: string
  direction?: string
  activeClassName?: string
}

export const DefaultLink = ({ children, ...props }: DefaultLinkProps) => {
  return <Link {...props}>{children}</Link>
}
