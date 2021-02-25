import { useRouter } from 'next/router'
import Layout from '@/components/layout/layout'
import { getAllNotes, getNote } from '@/lib/data/api/cms'
import styled from 'styled-components';
import SEO from '@/components/seo/seo'
import media from 'styled-media-query';
import config from "@/lib/data/SiteConfig";
import NoteBody from "@/components/note/note-body/note-body"
import NoteTitle from "@/components/title/post-title"
import NoteTags from "@/components/tags/tags"
import Webmentions from "@/components/social/webmentions/webmentions"
import SocialShare from "@/components/social/social-share/social-share"
import Image from "next/image"
import Link from"next/link"
import markdownToHtml from '@/lib/utils/markdownToHtml'
import Date from '@/components/date/date'

const NoteWrapper = styled.div`
  max-width: 1200px;
  padding: var(--space-sm) var(--space);
  margin: calc(var(--space-lg)*2.5) auto var(--space-sm) auto;
  ${media.lessThan('medium')`
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);
  `}
`

const NoteImageWrapper = styled.div`
  position: relative;
`


const NoteImage = styled(Image)`
  position: absolute;
  cursor: pointer;
  border-radius: var(--border-radius);
  object-fit: contain;
  margin: 0;
`

const NotesItem = styled.div`
  background-color: var(--content-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const NoteMeta = styled.ol`
  font-family: var(--secondary-font);
  font-size: 14px;
  display: flex;
  margin-top: var(--space-sm);
  justify-content: space-between;
  list-style: none;
  padding-inline-start 0;
`

const MetaItem = styled.li`

`


const NotesContent = styled.div`
  padding: 0 var(--space-sm) var(--space-sm) var(--space-sm);
`

const SyndList = styled.ol`
  font-family: var(--secondary-font);
  list-style: none;
  padding-inline-start: 0;
  font-size: .875rem;
  text-align: right;
`

const SyndItem = styled.a`
  :hover {
    color: var(--text-color);
    border-bottom: 1px solid var(--link-color);
    cursor: pointer;
  }
`

const SyndPlattform = styled.span`
  text-transform: capitalize;
`

const Hidden = styled.a`
  display: none;
`


const MoreContainer = styled.div`
  margin-top: var(--space);
  text-align: right;
  cursor: pointer;
`
const MoreArticles = styled.p`
  transition: 0.2s;
  :hover {
    text-decoration: underline;
  }
`

export default function Note({ note }) {
  const router = useRouter()

  return (
    <Layout>
        {router.isFallback ? (
          <NoteTitle>{config.loading}</NoteTitle>
        ) : (
          <>
            <SEO   
              title={`${note.date}`}
              description={note.description}
              slug={`/notes/${note.date}`}
              date={note.date}
              postSEO
            />
            <NoteWrapper>
             
              <NotesItem className="h-entry"> 

                <Hidden>
                  <div className="webmentions meta">
                    {note.publishOnTwitter ? <a href="https://brid.gy/publish/twitter" /> : null}
                    {note.publishOnInstagram ? <a href="https://brid.gy/publish/instagram" /> : null}
                    {note.publishOnReddit ? <a href="https://brid.gy/publish/reddit" /> : null}

                      <span className="h-card">
                        <img className="u-photo" src={config.siteLogo} alt={`Image of ${config.siteLogo}`}  /> 
                        <strong className="p-name">Max Dietrich</strong>
                      </span>
                  </div>
                </Hidden>            
                 
                
                  {note.coverMedium ? note.coverMedium.map((note, i) => {
                    console.log(note)
                    return (
                    <NoteImageWrapper> 
                      <Link href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${note.url}`} passHref >
                        <NoteImage
                          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${note.url}`}
                          alt={`${i} cover image`}
                          title={`${note.name}`}
                          className="u-photo" 
                          width={note.width}
                          height={note.height}
                        />   
                      </Link> 
                    </NoteImageWrapper> 
                    )
                  }): null }

                <NotesContent>
                  {note.content ? 
                    <NoteBody 
                      className="p-summary" 
                      content={note.content} 
                    />
                  : null }

                  <SyndList className="relsyn">
                    {note.syndicationLinks? 
                      note.syndicationLinks.map((link) => {
                        return (
                          <li>
                            <SyndItem aria-label={link.name} title={link.slug} className="u-syndication syn-link" href={link.slug} rel="syndication" >
                              <span>View on </span>
                              <i className={`lab la-${link.name}`}/> 
                              <SyndPlattform> {link.name}</SyndPlattform>
                            </SyndItem>
                          </li>
                        )         
                      })  : null }
                    </SyndList> 
                  <NoteMeta >
                    <MetaItem><NoteTags tags={note.tags} /></MetaItem>
                    <MetaItem><a className="u-url" href={`${config.siteUrl}/notes/${note.date}`} title={note.date} ><Date className="dt-published" dateString={note.date} /></a></MetaItem>
                  </NoteMeta>
                </NotesContent>
              </NotesItem>
      

              {/*<SocialShare slug={`/notes/${note.date}`} /> */}
              <Webmentions slug={`/notes/${note.date}`} />
              <MoreContainer>
                <Link href={`/notes`} passHref>
                  <MoreArticles title="To all Notes">« View all Notes</MoreArticles>
                </Link>
              </MoreContainer>
            </NoteWrapper>
          </>
        )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = await getNote(params.slug)
  const content = data?.notes[0]?.content || ''
  const description = await markdownToHtml(data?.notes[0]?.content || '')

  return {
    props: {
      note: {
        ...data?.notes[0],
        content: content,
        description,
      },
    },
  }
}

export async function getStaticPaths() {
  const notes = await getAllNotes()
  
  return {
    paths: notes?.map((note) => `/notes/${note.date}`) || [],
    fallback: true,
  }
}
