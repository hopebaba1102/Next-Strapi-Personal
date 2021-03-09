import Link from 'next/link'
import styled from 'styled-components';
import media from "styled-media-query"
import PostTags from "@/components/tags/tags"
import Date from '@/components/date/date'
import PreviewImage from "@/components/post/post-image/post-image"
import HCard from "@/components/microformats/h-card"

const Card = styled.li`
  transition: 0.2s;
  box-shadow: 0 2px 2px rgba(0,0,0,.09);
  background-color: var(--content-bg);
  border-radius: var(--border-radius);
  margin-bottom: var(--space);
  ${media.lessThan('medium')`
    margin-bottom: var(--space-sm);
  `}
`

const CardItemWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardItemInfo = styled.div`
  position: relative;
  padding: 0 var(--space-sm) var(--space-sm) var(--space-sm);
  ${media.lessThan('medium')`
   margin: 0;
  `}
`;

const CardItemTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
`;

const CardItemDescription = styled.div`
  line-height: 1.5;
  margin: 0.75rem 0;
  font-family: var(--secondary-font);
`;


const TagsWrapper = styled.div`
  width: 70%;
  display: inline-block;
  ${media.lessThan('medium')`
   width: 60%;
  `}
`

const DateWrapper = styled.a`
  font-size: .75rem;
  display: inline-block;
  width: 30%;
  text-align: right;
  ${media.lessThan('medium')`
   width: 40%;
  `}
`

const CardMeta = styled.div`
  padding-bottom: var(--space-sm);
  padding-left: var(--space-sm);
  padding-right: var(--space-sm);
`


export default function PostPreview({ postData, preview }) {
  
  const { title, excerpt, slug, tags, date, dateUpdated } = postData


  return (
    <Card className="h-entry">
      <CardItemWrapper>
        { preview ? <PreviewImage postData={postData}/> : null}
        <CardItemInfo>
          <CardItemTitle>
            <Link as={`/articles/${slug}`} href="/articles/[slug]" passHref>
              <a className="p-name u-url" rel="bookmark" title={title}>{title}</a>
            </Link>
            <HCard /> 
          </CardItemTitle>
          <CardItemDescription className="p-summary">{excerpt}</CardItemDescription>
        </CardItemInfo>
        <CardMeta>
          <TagsWrapper><PostTags tags={tags}/></TagsWrapper>
          <DateWrapper><Date className="dt-published" updated={dateUpdated} dateString={dateUpdated ? dateUpdated : date} /></DateWrapper>
        </CardMeta>
      </CardItemWrapper>
    </Card>
  )
}
