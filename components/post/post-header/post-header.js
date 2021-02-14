import Author from '@/components/post/post-author/post-author'
import PostTitle from '@/components/title/post-title'
import media from 'styled-media-query';
import styled from 'styled-components';
import Link from 'next/link'
import Date from '@/components/date/date' 
import PostReactions from "@/components/post/post-reactions/post-reactions" 
const _ = require("lodash");

const TagsWrapper = styled.div`
  display: block;
  margin-top: var(--space-sm);
  margin-bottom: var(--space-sm);
`

const PostHeaderWrapper = styled.div`
`

const PostTitleWrapper = styled.div`
  max-width: 800px;
  border-bottom: 1px solid var(--thirdy-color);
  margin-bottom: var(--space-sm);
`
const PostMeta = styled.div`
  font-size: .6em;
  margin-bottom: calc(var(--space-sm) *0.5);
  display: flex;
`;

const ReadingTime = styled.span`
  margin-left: var(--space-sm);
`

const ReadingTimeSymbol = styled.i`
`

const TagItem = styled.a`
  display: inline-block;
  text-transform: uppercase;
  transition: 0.2s;
  cursor: pointer;
  font-size: .6em;
  background-color: ${props =>
    props.color ? props.color : '#798ad0'};
  color: white;
  padding: calc(var(--space-sm)*0.5) var(--space-sm);
  margin: calc(var(--space-sm)*0.5);
  border-radius: var(--space-sm);
  :hover {
    color: ${props =>
      props.color ? props.color : '#798ad0'};
      background-color: white;
  }
`
export default function PostHeader({ postData }) {

  const { id, title, user, tags, date, dateUpdated, readingTime, slug } = postData

  return (
    <>
      <PostHeaderWrapper>

        <TagsWrapper>
          {tags.map((tag, i) => (              
            <Link key={i} href={`/articles/topics/${tag.slug}`} passHref>
              <TagItem className="p-category" color={tag.color} title={tag.name}>{tag.name}</TagItem>
            </Link>
          ))}
        </TagsWrapper>

        <PostTitleWrapper>  
          <PostTitle className="p-name">{title}</PostTitle>   
        </PostTitleWrapper> 

        <PostMeta>
          <Date className="dt-published" dateString={dateUpdated? dateUpdated : date} />
          <PostReactions postId={id} postSlug={slug} preview/>
          <ReadingTime><ReadingTimeSymbol className="las la-book-open" /> {readingTime} min read</ReadingTime>
        </PostMeta>

        {/*<Author author={user} />*/}
          
      </PostHeaderWrapper>
    </>
  )
}
