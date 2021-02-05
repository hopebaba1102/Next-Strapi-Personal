import React from "react"
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '@/components/post/post-body/post-body'
import PostHeader from '@/components/post/post-header/post-header'
import Layout from '@/components/layout/layout'
import Newsletter from '@/components/newsletter/subscribe'
import SEO from '@/components/seo/seo'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/data/api/cms'
import PageTitle from '@/components/title/page-title'
import markdownToHtml from '@/lib/markdownToHtml'
import styled from 'styled-components';
import ReadingProgress from "@/components/post/post-reading-progress/reading-progress.js"
import media from 'styled-media-query';
//import CoverImage from '@/components/post/post-image/cover-image'
import config from "../../lib/data/SiteConfig";
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Link from 'next/link'
import RelatedPosts from '@/components/post/post-preview/related-posts'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
// components for posts

const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Dots: dynamic(() => import('@/components/maps/leaflet/react-leaflet-demo'), {
    ssr: false
  }),
}

const PostWrapper = styled.div`
  max-width: 720px;
  padding: 0 calc(var(--space-lg)*1.5) calc(var(--space-lg)*1.5) calc(var(--space-lg)*1.5);
  margin: var(--space-sm) auto;
  background-color: var(--primary-color);
  ${media.lessThan('large')`
    padding-left: var(--space);
    padding-right: var(--space);
  `}
`

const MorePostsWrapper = styled.div`
  max-width: 720px;
  background-color: var(--primary-color);
  ${media.lessThan('large')`
    padding-left: var(--space);
    padding-right: var(--space);
  `}
`

const PostDate = styled.div`
  font-size: 1.3rem;
  margin-bottom: calc(var(--space-sm) *0.5);
`;

const MoreContainer = styled.div`
  max-width: 630px;
  margin: var(--space) auto 0 auto;
  text-align: left;    
  cursor: pointer;
  font-weight: 600;
  font-size: 1.3rem;
  text-decoration: none;
  ${media.lessThan('medium')`
    margin-left: var(--space);
  `}
`
const MoreArticles = styled.a`
  cursor: pointer;
  transition: 0.2s;
  :hover {
    text-decoration: underline;
  }
  :before {
    content: "\f060";
    font-family: "Line Awesome Free";
    font-weight: 900;
  }
`


export default function Post({ post, morePosts }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const target = React.createRef()
  
  return (
    <Layout>
      <Header/>
        {router.isFallback ? (
          <PageTitle>{config.loading}</PageTitle>
        ) : (
          <>
            <SEO   
              title={post.title}
              description={post.excerpt}
              image={post.coverImage.coverImage.formats.small.url}
              slug={`articles/${post.slug}`}
              date={post.date}
              ogType="article"
            />
            <article ref={target} >
              <ReadingProgress target={target} />
              {/*{post.coverImage.coverImage ? (
              <CoverImage title={post.title} alt={post.title} url={post.coverImage.coverImage.url} caption={post.coverImage.caption}/>
              ) : null }*/}

              <MoreContainer>
                <Link href={`/articles`} passHref>
                  <MoreArticles title="Back to all articles">{' '}Back to Articles</MoreArticles>
                </Link>
              </MoreContainer>

              <PostWrapper>
                <PostHeader postData={post} />          

                {/* <PostBody content={post.excerpt} /> */}


                <PostBody content={post.content.renderedOutput} />

                <RelatedPosts relatedPosts={morePosts} />

              </PostWrapper>

            </article>
            
            <Newsletter />
            
          </>
        )}     
      <Footer />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug)
  const mdxSource = await renderToString(data?.posts[0]?.content || '', { components })
  const excerpt = await markdownToHtml(data?.posts[0]?.excerpt || '')

  return {
    revalidate:  86400,
    props: {
      post: {
        ...data?.posts[0],
        content: mdxSource,
        excerpt,
      },
      morePosts: data?.morePosts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((post) => `/articles/${post.slug}`) || [],
    fallback: true,
  }
}
