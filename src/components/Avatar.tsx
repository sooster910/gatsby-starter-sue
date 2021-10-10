import React, { ReactElement } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
interface ParamProps {
  image: IGatsbyImageData
}
const AvatarWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
export const Avatar = ({ image }: ParamProps): ReactElement => {
  const avatarImage = getImage(image)
  console.log('avatarImage', avatarImage)

  return <AvatarWrapper image={avatarImage!} alt="Profile Image" />
}
