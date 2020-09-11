import Link from 'next/link'
import Img from 'react-optimized-image';
import styled from 'styled-components';
import media from 'styled-media-query';

const Caption = styled.p`
  text-transform: uppercase;
  color: var(--gray);
  font-size: 10px;
  background-color: white;
`

const PostCoverImageWrapper = styled.div`
  display: block;
  border-bottom: 1px solid var(--gray-light);
  margin-bottom: var(--space-sm);
  padding-bottom: var(--space-sm);
`

const PreviewCoverImageWrapper = styled.div`
  display: block;
`
const PreviewCoverImage = styled.img`
  border-top-left-radius: ${props =>
    props.hero ? "none" : "0.75rem" };
  border-top-right-radius: ${props =>
    props.hero ? "none" : "0.75rem" };
  width: 100%;
  height: ${props =>
    props.hero ? "420px" : '200px'};
  object-fit: cover;
  ${media.lessThan('large')`
    height: ${props =>
      props.hero ? "300px" : '200px'};
    object-fit: cover;
  `}
`

const PostCoverImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-top: var(--space);
  ${media.lessThan('large')`
    height: 200px;
  `}
`

export default function CoverImage({ title, url, slug, caption, hero }) {
  
  const imageUrl = `${url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''}${url}`


  return (
    <div className="">
      {slug ? (
        <PreviewCoverImageWrapper>
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a aria-label={title}>
                <PreviewCoverImage src={imageUrl} alt={title} title={title} hero={hero} />
              </a>
          </Link>
        </PreviewCoverImageWrapper>

      ) : (

        <PostCoverImageWrapper>
            <PostCoverImage src={imageUrl} alt={title} title={title} />
            <Caption>Bildquelle: {caption}</Caption>
        </PostCoverImageWrapper>
        
      )}
    </div>
  )
}
