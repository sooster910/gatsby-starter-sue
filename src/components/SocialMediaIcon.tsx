import styled from '@emotion/styled'

const StyledSocialMediaIcon = styled('a')`
  display: inline-flex;
  padding: 8px;
  align-self: flex-start;
  margin-right: 7px;
`
type SocialMediaIconProps = {
  children: React.ReactNode
  preHref?: string
  accountName?: string
}
export const SocialMediaIcon = ({
  children,
  preHref,
  accountName,
  ...props
}: SocialMediaIconProps) => {
  return (
    <StyledSocialMediaIcon
      className="icon-fa-link"
      href={`${preHref}${accountName}`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </StyledSocialMediaIcon>
  )
}
