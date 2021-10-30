import { useCategories } from '../hooks/useCategories'
import styled from '@emotion/styled'
import { TagLink } from './links/Link.style'
import { Twemoji } from './Twemoji'
import _ from 'lodash'

const StyleTagListWrapper = styled.div`
  padding: 1rem;
  align-self: flex-start;
  right: 0;
  background: #fff;
  /* border-radius: 12px; */

  h4 {
    padding-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.sharpOutlineColor};
    text-transform: uppercase;
  }
`
const StyledTagList = styled.ul`
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`
const StyledTagItem = styled.li`
  margin-bottom: 0.4rem;
`

export const CategoryList = () => {
  const categories = useCategories()

  return (
    <StyleTagListWrapper>
      <h4>Notes By Topics</h4>
      <StyledTagList>
        {categories.map((category): any => (
          <StyledTagItem key={category.fieldValue}>
            <TagLink to={`/categories/${_.kebabCase(category.fieldValue)}/`}>
              <Twemoji emoji="🗂" />
              {category.fieldValue} ({category.totalCount})
            </TagLink>
          </StyledTagItem>
        ))}
      </StyledTagList>
    </StyleTagListWrapper>
  )
}
