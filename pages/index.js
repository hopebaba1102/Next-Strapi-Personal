import PostPreview from '@/components/post/post-preview/post-preview'
import Layout from '@/components/layout/layout'
import { getAllPosts, getAllTags, getAllNotes, } from '@/lib/data/api/cms'
import config from "../lib/data/SiteConfig";
import styled from 'styled-components';
import Link from 'next/link'
import SEO from '@/components/seo/seo'
import media from 'styled-media-query';
import { useRouter } from 'next/router'

const IndexPageContainer = styled.div`
  margin: auto;
  max-width: 1200px; 
  margin: 0 auto var(--space-lg) auto;
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
  background: -webkit-linear-gradient(45deg, var(--thirdy-color), var(--body-bg) 350%);
      background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 var(--space);
  font-size: calc(.9rem + 2vw);
  font-weight: 300;
  line-height: 1.15;
  font-family: var(--thirdy-font);
  ${media.lessThan('medium')`
    font-size: 1.5em;
  `}
  ${media.lessThan('medium')`
    margin: 0 var(--space-sm);
  `}
`

const HeroLinks = styled.a`
  font-weight: 600;
  background-image: -webkit-linear-gradient(45deg, var(--thirdy-color), var(--body-bg) 350%);
  background-size: 100% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  font-family: var(--primary-font);
`

const HeroFont = styled.span`
  font-family: var(--primary-font);
  font-weight: 600;
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space);
  ${media.lessThan('medium')`
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);
  `}
`



export default function Index({ allPosts, allTags, allNotes }) {
  const router = useRouter()

  const posts = allPosts.slice(0,2)
  const notes = allNotes.slice(0,6)

  return (
    <>
      <Layout color={`var(--gray-extra-light)`}>
        {router.isFallback ? (
            <PageTitle>{config.loading}</PageTitle>
          ) : (
            
          <>
            <SEO   
              description={config.siteDescription}
            />
             <HeroWrapper>
              <Hero>
                <HeroDescription>
                <HeroFont>Hi, I’m </HeroFont><HeroLinks href={config.socials.mail}title={config.siteTitle}>Max Dietrich</HeroLinks>, GeoData Manager and Web-Developer from Rosenheim, Germany. <br/>
                  I am also a proud member of the <HeroLinks href="https://indieweb.org/" title="IndieWeb">IndieWeb</HeroLinks> community.
                </HeroDescription>
              </Hero>
            </HeroWrapper>
            <IndexPageContainer>
              <SubTitle>Selected Articles</SubTitle>
              <Grid>
                {posts.map((post,i) => (
                  <PostPreview
                    key={i}
                    postData={post}
                  />
                ))}
              </Grid>


              {/*<SubTitle>Recent Notes</SubTitle>
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
  const allPosts = (await getAllPosts()) || []
  const allTags = (await getAllTags()) || []
  const allNotes = (await getAllNotes()) || []
  
  return {
    revalidate:  86400,
    props: { allPosts, allTags, allNotes },
  }
}

