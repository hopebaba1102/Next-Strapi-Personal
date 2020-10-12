import MoreStories from '@/components/post/post-preview/more-stories'
import MoreJobs from '@/components/job/job-preview/more-jobs'
import Layout from '@/components/layout/layout'
import { getAllPosts, getAllJobs, getAllTags } from '@/lib/api/cms'
import Head from 'next/head'
import config from "../data/SiteConfig";
import styled from 'styled-components';
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Link from 'next/link'
import SEO from '@/components/seo/seo'
import Dots from '@/components/funky-stuff/dots'
import { useRouter } from 'next/router'
import PostHero from '@/components/post/post-hero/post-hero'

const IndexPageContainer = styled.div`
  margin: auto;
  max-width: 1200px;
`
const TitleWrapper = styled.div`
  margin: var(--space) auto var(--space) auto;
`

const Title = styled.h2`
  max-width: auto;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: var(--space-sm);
  color: var(--gray);
`
const Separator = styled.div`
  border-bottom: 2px solid  ${props =>
    props.color ? props.color : '#798ad0'};
  width: 10%;
  margin: auto;
`

const TagWrapper = styled.div`
  margin: var(--space-lg);
  padding: var(--space-lg);
  text-align: center;
  background-color: #fff;
  border: 1px solid var(--gray-light);
  border-radius: calc(var(--space-sm)*0.5);
`

const TagItem = styled.button`
  background-color: ${props =>
    props.color ? props.color : '#798ad0'};
  padding: calc(var(--space-sm)*0.5);
  border-radius: calc(var(--space-sm)*0.5);
  font-size: 13px;
  text-transform: uppercase;
  margin: calc(var(--space-sm)*0.5) var(--space-sm) calc(var(--space-sm)*0.5) 0;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
  border: none;
  outline: none;
  :hover {
    background-color: white;
    color: ${props =>
      props.color ? props.color : '#798ad0'};
  }
`

const MoreContainer = styled.div`
  text-align: right;    
  cursor: pointer;
  margin-right: var(--space);
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--gray);
  text-decoration: none;
`
const MoreArticles = styled.a`
  text-align: right;    
  cursor: pointer;
  transition: 0.2s;
  :hover {
    text-decoration: underline;
  }
`


export default function Index({ allPosts, allJobs, allTags }) {
  const router = useRouter()

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1, 7)
  //const evenMorePosts = allPosts.slice(4, 7)
  //const previewJobs = allJobs.slice(0, 3)


  return (
    <>
      <Layout>
        <Header/>
        {router.isFallback ? (
            <PageTitle>{config.loading}</PageTitle>
          ) : (
            
          <>
            <SEO   
              title="Startseite"
              slug="https://gis-netzwerk.com"
            />

            <PostHero heroData={heroPost} hero/>

            <IndexPageContainer >

              <MoreStories posts={morePosts} />
              <MoreContainer>
                <Link href={`/blog`} passHref>
                  <MoreArticles title="Zum Blog">Alle Artikel {' '}</MoreArticles> 🡒
                </Link>
              </MoreContainer>
            </IndexPageContainer>

            <IndexPageContainer >

              {/*<MoreStories posts={evenMorePosts} />*/}

              <TitleWrapper>
                  <Title>Nach Thema durchsuchen</Title>
                  <Separator/>
              </TitleWrapper>

              <TagWrapper>
                {allTags.map((tag, i) => (
                  
                    <Link key={i} href={`/blog/themen/${tag.slug}`} passHref>
                      <TagItem color={tag.color} title={tag.name}>{tag.name}</TagItem>
                    </Link>
                ))}
              </TagWrapper>

            </IndexPageContainer>
          </>
        )}
        <Footer />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = (await getAllPosts()) || []
  const allJobs = (await getAllJobs()) || []
  const allTags = (await getAllTags()) || []
  
  return {
    revalidate: 600,
    props: { allPosts, allJobs, allTags },
  }
}

