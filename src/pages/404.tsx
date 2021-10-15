import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const StyledNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const NotFoundText = styled.h1`
  font-size: 150px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 100px;
  }
`

const GoToMainButton = styled(Link)`
  margin-top: 30px;
  font-size: 20px;
  text-decoration: underline;
`

const NotFoundPage: FunctionComponent = function () {
  return (
    <Layout>
      <StyledNotFoundPage>
        <StaticImage
          style={{ width: 400 }}
          src={'../images/page-not-found-4.png'}
          alt={'page-not-found'}
          aspectRatio={1.7}
        />
        <NotFoundText>404</NotFoundText>
        <h3>Oops, you've lost in the space .</h3>

        <GoToMainButton to="/">Back to Home</GoToMainButton>
      </StyledNotFoundPage>
    </Layout>
  )
}

export default NotFoundPage
