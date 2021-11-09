type SocialMediaIconProps = {
  children: React.ReactNode
  preHref?: string
  accountName?: string
  socialTitle?: string
}

export const DefaultSocialButton = ({
  children,
  preHref,
  accountName,
  socialTitle,
  ...props
}: SocialMediaIconProps) => {
  return (
    <a
      className="icon-fa-link"
      href={`${preHref}${accountName}`}
      target="_blank"
      aria-label="social-profile"
      css={{
        padding: '0.3rem 0.8rem',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 600,
        borderRadius: '5px',
        fontSize: '13px',
        fontFamily: 'Jost,sans-serif',
        textDecoration: 'none',
        margin: '6px 6px 6px 0',
      }}
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      <span css={{ marginLeft: '6px' }}>{socialTitle}</span>
    </a>
  )
}

export const GitHubButton = ({ preHref, accountName }: props) => (
  <DefaultSocialButton
    socialTitle={'Github on View'}
    css={{
      background: 'rgba(237,242,247,0.8)',
      color: 'rgba(74,85,104,1)',
      '&:hover': {
        background: 'rgba(237,242,247,1)',
      },
    }}
    preHref={preHref}
    accountName={accountName}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-github"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  </DefaultSocialButton>
)

export const FacebookButton = ({ preHref, accountName }: props) => (
  <DefaultSocialButton
    socialTitle={`@${accountName}`}
    css={{
      background: '#385499',
      color: '#fff',
    }}
    preHref={preHref}
    accountName={accountName}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-facebook"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  </DefaultSocialButton>
)

export const LinkedInButton = ({ preHref, accountName }: props) => (
  <DefaultSocialButton
    socialTitle={'LinkedIn'}
    css={{
      background: 'rgb(10, 102, 194,0.9)',
      color: '#fff',
      '&:hover': {
        background: 'rgb(10, 102, 194,1)',
      },
    }}
    preHref={preHref}
    accountName={accountName}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-linkedin"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </DefaultSocialButton>
)

export const EmailButton = ({ preHref }: props) => (
  <DefaultSocialButton
    socialTitle={'Reach Me Out'}
    css={{
      background: 'rgba(245,101,101,0.9)',
      color: '#fff',
      '&:hover': {
        background: 'rgba(245,101,101,1)',
      },
    }}
    preHref={preHref}
    accountName={''}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-mail"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  </DefaultSocialButton>
)
