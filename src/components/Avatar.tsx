import * as React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
interface ParamProps {
  image: IGatsbyImageData
}
const StyledAvatar = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
export const Avatar = ({ image }: ParamProps): React.ReactElement => {
  const avatarImage = getImage(image)

  return <StyledAvatar image={avatarImage} alt="Profile Image" />
}
