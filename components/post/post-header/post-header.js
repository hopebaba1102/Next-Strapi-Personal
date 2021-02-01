import Author from '@/components/post/post-author/post-author'
import PostTitle from '@/components/title/content-title'
import media from 'styled-media-query';
import styled from 'styled-components';
import Link from 'next/link'
const _ = require("lodash");

const TagsWrapper = styled.div`
  display: block;
  padding-top: var(--space);
  margin-top: var(--space);
  margin-bottom: var(--space-sm);
`

const PostHeaderWrapper = styled.div`
  max-width: 640px;
  margin: auto;
  margin-bottom: var(--space-sm);
  border-bottom: 1px solid var(--thirdy-color);
`

const DateWrapper = styled.div`
  max-width: 640px;
  margin: auto;
  ${media.lessThan('large')`
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`
const TagItem = styled.a`
  display: inline-block;
  text-transform: uppercase;
  transition: 0.2s;
  cursor: pointer;
  font-size: 1.3rem;
  padding: calc(var(--space-sm)*0.2) var(--space-sm);
  margin: calc(var(--space-sm)*0.5);
  background-color: var(--primary-color);
  border-radius: var(--space-sm);
  :hover {
    background-color: ${props =>
      props.color ? props.color : '#798ad0'};
    color: white;
  }
`
export default function PostHeader({ postData }) {

  
  const { title, user, tags } = postData
  
  return (
    <>
      <PostHeaderWrapper>

        <TagsWrapper>
          {tags.map((tag, i) => (
              <Link key={i} href={`/articles/topics/${tag.slug}`}>
                <TagItem color={tag.color} title={tag.name}>{tag.name}</TagItem>
              </Link>
          ))}
        </TagsWrapper>

        <PostTitle>{title}</PostTitle>

        <Author author={user} />
          
      </PostHeaderWrapper>
    </>
  )
}
