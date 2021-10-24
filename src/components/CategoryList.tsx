import { useCategories } from '../hooks/useCategories'
import styled from '@emotion/styled'
import { TagLink } from './links/Link.style'
import { Twemoji } from './Twemoji'
import _ from 'lodash'

const StyleTagListWrapper = styled.div`
  padding: 1rem;
  position: sticky;
  top: 2em;
  align-self: flex-start;
  right: 0;
  background: #fff;
  /* border-radius: 12px; */
  border-left: 1px solid ${({ theme }) => theme.colors.sharpOutlineColor};

  h4 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.sharpOutlineColor};
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
    <>
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
    </>
  )
}
