import styled from '@emotion/styled'

export const Aside = ({ children }): React.ReactElement => {
  const StyledAsideWrapper = styled.div`
    margin-left: 3rem;
  `
  const Aside = styled.aside`
    position: sticky;
    top: 2rem;
    max-width: 300px;
    display: flex;
    flex-direction: column;
  `
  return (
    <StyledAsideWrapper>
      <Aside>{children}</Aside>
    </StyledAsideWrapper>
  )
}
