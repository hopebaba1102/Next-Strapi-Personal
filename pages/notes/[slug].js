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
import NoteMeta from "@/components/post/post-meta/post-meta"
import Image from "next/image"
import Link from"next/link"

const NoteWrapper = styled.div`
max-width: 1200px;
padding: 0 var(--space);
margin: calc(var(--space-lg)*2.5) auto var(--space-lg) auto;
${media.lessThan('medium')`
  padding-left: var(--space-sm);
  padding-right: var(--space-sm);
`}
`

const NotesItem = styled.div`
  margin-bottom: var(--space);
  border-radius: var(--space-sm);
`

const NoteImage = styled(Image)`
  cursor: pointer;
  border-radius: var(--border-radius);
  object-fit: contain;
`

const NotesContent = styled.div`
  margin: var(--space) 0;
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
              title={note.title}
              description={note.description}
              slug={`/notes/${note.date}`}
              date={note.date}
              postSEO
            />
            <NoteWrapper>
             
              <NotesItem className="h-entry">          
                {note.publishOnTwitter ? <a href="https://brid.gy/publish/twitter" /> : null}
                {note.publishOnInstagram ? <a href="https://brid.gy/publish/instagram" /> : null}
                {note.inReplyTo ?  <a className="u-in-reply-to" href={ofUrl} /> : null}
                {note.likeOf ? <a class="u-like-of" href={ofUrl} /> : null}
                {note.repostOf ? <a class="u-repost-of" href={ofUrl} />  : null}
                {note.quoteOf ? <a class="h-cite u-quotation-of" href={ofUrl} /> : null}
                {note.photo ? 
                <Link
                  href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${note.photo.url}`}
                  passHref
                >
                  <NoteImage
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${note.photo.url}`}
                    alt={`${note.title}/${note.date}`}
                    title={`${note.title}/${note.date}`}
                    width="800"
                    height="800"
                    className="u-photo" 
                  />   
                </Link> 
                : null}
                <NoteTitle>{note.title}</NoteTitle>
                <NoteMeta postMetaData={note} />
                <NoteTags tags={note.tags} />
                <NotesContent>
                  <NoteBody className="p-summary" content={note.content} />
                </NotesContent>

              </NotesItem>
      

              <SocialShare slug={`/notes/${note.slug}`} /> 
              <Webmentions slug={note.slug} />
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
