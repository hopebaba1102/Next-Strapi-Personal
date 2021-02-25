import Link from 'next/link'
import styled from 'styled-components';
import media from "styled-media-query"
import PostTags from "@/components/tags/tags"
import PostMeta from "@/components/post/post-meta/post-meta"
import PreviewImage from "@/components/post/post-image/post-image"

const Card = styled.li`
  transition: 0.2s;
  box-shadow: 0 2px 2px rgba(0,0,0,.09);
  background-color: var(--content-bg);
  border-radius: var(--border-radius);
  ${media.lessThan('medium')`
    margin: 0 var(--space-sm) var(--space) var(--space-sm);
  `}
`

const CardItemWrapper = styled.div`
  height: 100%;
`;

const CardItemInfo = styled.div`
  position: relative;
  padding: 0 var(--space-sm) var(--space-sm) var(--space-sm);
  ${media.lessThan('medium')`
   margin: 0;
  `}
`;

const CardItemTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
`;

const CardItemDescription = styled.div`
  line-height: 1.75rem;
  margin: 0.75rem 0;
  font-family: var(--secondary-font);
`;




export default function PostPreview({ postData, previewLarge }) {
  
  const { title, excerpt, slug, tags } = postData


  return (
    <Card className="h-entry">
      <CardItemWrapper>
        <PreviewImage preview previewLarge postData={postData}/>
        <CardItemInfo>
          <CardItemTitle>
            <Link as={`/articles/${slug}`} href="/articles/[slug]" passHref>
              <a className="p-name u-url" title={title}>{title}</a>
            </Link>
          </CardItemTitle>
          <CardItemDescription className="p-summary">{excerpt}</CardItemDescription>
          <PostMeta postMetaData={postData} slug={`/articles/${slug}`} />
          <PostTags tags={tags}/>
        </CardItemInfo>
      </CardItemWrapper>
    </Card>
  )
}
