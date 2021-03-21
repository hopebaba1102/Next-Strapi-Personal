import PostPreview from '@/components/article/article-preview/article-preview'
import NotePreview from "@/components/note/note-preview/note-preview"
import LinkPreview from "@/components/link/link-preview/link-preview"
import ActivityPreview from '@/components/activity/activity-preview/activity-preview'
import Layout from '@/components/layout/layout'
import config from "@/lib/data/SiteConfig";
import styled from 'styled-components';
import SEO from '@/components/seo/seo'
import media from 'styled-media-query';
import { useRouter } from 'next/router'
import { server } from "@/lib/utils/server"
import Link from "next/link"

const IndexPageContainer = styled.div`
  margin: auto;
  max-width: 1200px; 
  margin: var(--space) auto;
`

const HeroWrapper = styled.div`
  width: 100%;
  margin: auto;
  background-color: var(--primary-color);
`
const Hero = styled.div`   
  display: flex;
  color: var(--thirdy-color);
  max-width: 1200px;
  padding: calc(3rem + 120px) 0 calc(3rem + 120px) 0;
  margin: 0 auto;
  ${media.lessThan('medium')`
  padding: calc(1rem + 120px) 0 calc(1rem + 60px) 0;
    width: 100%;
  `}
`

const HeroDescription = styled.h3`
  color: var(--gray-light);
  margin: 0 var(--space);
  font-size: calc(.9rem + 2vw);
  font-weight: 300;
  line-height: 1.15;
  width: 80%;
  font-family: var(--thirdy-font);
  ${media.lessThan('small')`
    font-size: 1.5em;
  `}
  ${media.lessThan('medium')`
    margin: 0 var(--space-sm);
  `}
`

const HeroLinks = styled.a`
  font-weight: 600;
  border-bottom: 2px solid var(--thirdy-color);
  color: var(--thirdy-color);
  font-family: var(--primary-font);
`

const HeroFont = styled.span`
  font-family: var(--primary-font);
  font-weight: 600;
  color: var(--thirdy-color);
`
const SubTitle = styled.p`
  margin: var(--space) var(--space) var(--space-sm) var(--space);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  ${media.lessThan('medium')`
    margin: var(--space-sm);
  `}
`

const Grid = styled.ol`
  max-width: 1200px;
  padding-left: var(--space);
  padding-right: var(--space);
  margin-bottom: var(--space);
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: var(--space);
  ${media.lessThan('medium')`
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);
    grid-template-columns: repeat(1,minmax(0,1fr));
  `}
`

const PostTypes = styled.section`
  padding-left: var(--space);
  padding-right: var(--space);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  ${media.lessThan('medium')`
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);
  `}
`

const PostType = styled.dl`
  border-bottom: 1px solid var(--link-color);
  cursor: pointer;
`

const PostDT = styled.dt`
  display: inline-block;
  color: var(--gray-light);
`
const PostDD = styled.dd`
  display: inline-block;
`

export default function Index({ posts, count }) {
  const router = useRouter()

  return (
    <>
      <Layout color={`var(--gray-extra-light)`}>
        {router.isFallback ? (
            <PageTitle>{config.loading}</PageTitle>
          ) : (
            
          <>
            <SEO   
              title="Home"
              description={config.siteDescription}
            />
             <HeroWrapper>
              <Hero>
                <HeroDescription>
                <HeroFont>Hi, I’m </HeroFont><HeroLinks href={config.siteUrl} title={config.siteTitle}>Max Dietrich</HeroLinks>, GeoData Manager and Web-Developer from Rosenheim, Germany. <br/>
                  I am also a proud member of the <HeroLinks href="https://indieweb.org/" title="IndieWeb">IndieWeb</HeroLinks> community.
                </HeroDescription>
                <PostTypes>
                  <PostType><Link href="/articles"><a title="See all articles"><PostDD>{count.posts}</PostDD> <PostDT>Articles</PostDT></a></Link></PostType>
                  <PostType><Link href="/notes"><a title="See all notes"><PostDD>{count.notes}</PostDD> <PostDT>Notes</PostDT></a></Link></PostType>
                  <PostType><Link href="/activities"><a title="See all activities"><PostDD>{count.activities}</PostDD> <PostDT>Activities</PostDT></a></Link></PostType>
                  <PostType><Link href="/links"><a title="See all links"><PostDD>{count.links}</PostDD> <PostDT>Links</PostDT></a></Link></PostType>
                </PostTypes>
              </Hero>
             </HeroWrapper>
            <IndexPageContainer>

              <Grid>
                {posts.map((post,i) => (
                  post.type === "article" ? (
                    <PostPreview
                      key={i}
                      postData={post.post}
                    />
                  ) : post.type === "note" ? (
                    <NotePreview 
                      key={i}
                      note={post.note} 
                    />
                  ) : post.type === "link" ? (
                    <LinkPreview
                      key={i}
                      link={post.link} 
                    />
                  ) : post.type === "activity" ? (
                    <ActivityPreview
                      key={i}
                      activity={post.activity} 
                    />
                  ) : null
                ))}
              </Grid>


              {/*{<SubTitle>Recent Notes</SubTitle>
              <NotesContainer >
                {notes.map((note) => (
                 <NotePreview note={note} />
                ))}
                
              </NotesContainer>
              <MoreContainer>
                <Link href={`/notes`} passHref>
                  <MoreArticles title="All Notes">All Notes{' '}</MoreArticles>
                </Link>
                </MoreContainer>*/}
            </IndexPageContainer>

          </>
        )}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const resPosts = await fetch(`${server}/api/posts`)
  const posts = await resPosts.json()
  const resStats = await fetch(`${server}/api/stats`)
  const stats = await resStats.json()

  return {
    revalidate:  86400,
    props: { 
      posts,
      count: stats.posts.count
    },
  }
}