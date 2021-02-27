import React, { useState, useEffect } from "react"
import config from "@/lib/data/SiteConfig";
import styled from 'styled-components';
import Link from 'next/link'
import media from 'styled-media-query';
import ReactMarkdown from "react-markdown"
import { format } from 'date-fns'
// styled components

const FooterContainer = styled.footer`
  padding: var(--space-sm) var(--space);
  border-top: 1px solid var(--gray-light);
  margin: 0 auto;
  max-width: 1200px;
  ${media.lessThan('medium')`  
    flex-wrap: wrap;
    padding: var(--space-sm);
  `}
`;

const FooterInnerContainer = styled.nav`    
  grid-template-columns: repeat(4,minmax(0px,1fr));
  display: grid;
  ${media.lessThan('medium')`
    padding: 0;
    display: block;
  `}
`

const FooterMainNav = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  font-size: 1rem;
  text-align: right;
  grid-column: span 1 / span 1;
  display: flex;
  justify-content: space-around;
  ${media.lessThan('medium')` 
    display: flex;
    justify-content: space-between;
    margin-top: var(--space-sm);
  `}
`

const FooterMainNavItem = styled.li`
  display: inline-block;
  transition: 0.2s;
  :hover {
    color: var(--thirdy-color);
    cursor: pointer;
  }
  ${media.lessThan('medium')` 
    margin: 0;
  `}
`

const FooterMainNavLink = styled.a`
  padding: var(--space-sm) 0;
`

const FooterColumnWrapper = styled.ul`
  grid-column: span 4/span 4;
  list-style: none;
  padding-inline-start: 0;
  max-width: 1200px;
  margin-top: var(--space);
  font-size: .875rem;
  display: flex;
  justify-content: space-between;
  ${media.lessThan('medium')`  
    display: block;
  `}
`
const FooterColumn = styled.li`
  max-width: 25%;
  line-height: 1.25rem;
  ${media.lessThan('medium')`  
    margin-bottom: var(--space);
    max-width: 100%;
  `}
`

const FooterColumnPosts = styled.li`
  max-width: 30%;
  line-height: 1.25rem;
  ${media.lessThan('medium')`  
    margin-bottom: var(--space);
    max-width: 100%;
  `}
`

const FooterColumnTitle = styled.p`
  font-weight: 600;
  margin-bottom: .5rem;
`

const FooterColumnDescription = styled.p`
  margin-bottom: var(--space);
  line-height: 24px;
`

const FooterSocials = styled.ol`
  list-style: none;
  padding-inline-start: 0;

`

const FooterItemSocials = styled.li`
  margin-bottom: .5rem;
  :hover {
    color: var(--thirdy-color);
    cursor: pointer;
  }
`

const FooterItem = styled.p`
  margin-bottom: .5rem;
  transition: 0.2s;
  :hover {
    color: var(--thirdy-color);
    cursor: pointer;
  }
  ${media.lessThan('medium')` 
  `}
`
const FooterItemLink = styled(Link)`
  :hover { 
    color: var(--gray-extra-light);
  }
`

const FooterIcons = styled.i`  
  font-size: 1rem;
`

const FooterNotice = styled.p`
  font-size:.75rem;
  grid-column: span 4/span 4;
  margin-top: var(--space-sm);
`

const FooterLink = styled.a`
  color: var(--text-color);
  border-bottom: 1px solid var(--link-color);
  cursor: pointer;
`

const FooterBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  gap: var(--space-sm);
  grid-column: span 4/span 4;
  ${media.lessThan('medium')`  
    display: block;
  `}
`

const SearchWrapper = styled.div`
  font-family: var(--primary-font);
  grid-column: span 2 / span 2;
`

const SearchInput = styled.input`
  padding-left: 0.25rem;
  margin-right: 0.125rem;
  border: 2px solid var(--gray-light);
  background-color: var(--body-bg);
  :invalid {
      border: 1px solid red;
  }
`

const SearchButton = styled.button`
  color: var(--body-bg);
  border: 2px solid var(--primary-color);
  position: relative;
  outline: none;
  overflow: hidden;
  font-size: 12px;
  padding: .125rem .5rem;
  transition: all .2s ease-in-out;
  text-align: center;
  background: var(--primary-color);
  :hover {
      cursor: pointer;
      box-shadow: var(--box-shadow);
  }
`

export default function Footer() {
  const [recentPosts, setRecentPosts] = useState([])
  const [about, setAbout] = useState([])
  const [search, setSearch] = useState(`site:${config.domain}`)

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  fetch('https://api.mxd.codes/about', requestOptions)
      .then(response => response.json())
      .then(data => setAbout(data));



  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch('https://api.mxd.codes/posts?_sort=date:DESC', requestOptions)
      .then(response => response.json())
      .then(data => setRecentPosts(data.slice(0,4)));
    fetch('https://api.mxd.codes/about', requestOptions)
      .then(response => response.json())
      .then(data => setAbout(data));
  }, []);

  const footerItems = [
    { 
      name: "Mailing",
      link: "/mailinglist" 
    },
    { 
      name: "Blogroll",
      link: "/blogroll" 
    },
    { 
      name: "Data",
      link: "/site-stats" 
    },
    { 
      name: "Webmention Endpoint",
      link: "/webmention" 
    },
  ]

  const headerItems = [
    { 
      name: "Home",
      link: "/" 

    },
    { 
      name: "Articles",
      link: "/articles" 
    },
    { 
      name: "Notes",
      link: "/notes" 
    },
    { 
      name: "Links",
      link: "/links" 
    },
    { 
      name: "About",
      link: "/about" 
    },
  ]
  return (
    <FooterContainer>

      <FooterInnerContainer>
        <FooterBar>

          <SearchWrapper >
            <SearchInput 
              type="search" 
              value={search}  
              name="search"
              id="search"
              label="search-input"
              onChange={(e) => setSearch(e.target.value)}
            /> 
            <SearchButton 
              type="submit search"
              aria-label="Search"
              onClick={() => window.open(`https://duckduckgo.com/?q=${search}`)}
            >
            Search</SearchButton>
          </SearchWrapper>
          <FooterMainNav>
            {headerItems.map((item, i) => (
              <FooterMainNavItem>
                <FooterMainNavLink href={item.link} passHref><a title={item.name}>{item.name}</a></FooterMainNavLink >
              </FooterMainNavItem>
            ))}
          </FooterMainNav>


        </FooterBar>

        <FooterColumnWrapper> 

          <FooterColumn>      
            <FooterColumnTitle>{about.intro}</FooterColumnTitle>
            <FooterColumnDescription>
            <ReactMarkdown
              children={about.bioShort}
            />
          </FooterColumnDescription>
          </FooterColumn>

          <FooterColumn>
            <FooterColumnTitle>Elswhere</FooterColumnTitle>
            <FooterSocials>
              <FooterItemSocials>
                <a href={config.socials.twitter} title="@mxdietrich on Twitter"><FooterIcons className="lab la-twitter"/> Twitter</a>
              </FooterItemSocials>
              <FooterItemSocials>
                <a href={config.socials.instagram} title="_maxdietrich on Instagram"><FooterIcons className="lab la-instagram"/> Instagram</a>
              </FooterItemSocials>
              <FooterItemSocials>
                <a href={config.socials.github} title="DaTurboD on GitHub"><FooterIcons className="lab la-github"/> Github</a>
              </FooterItemSocials>
              <FooterItemSocials>
                <a href={config.socials.linkedin} title="Max Dietrich on Linkedin"><FooterIcons className="lab la-linkedin"/> Linkedin</a>
              </FooterItemSocials>
              <FooterItemSocials>
                <a href={config.socials.mail} title="Write me a Email"><FooterIcons className="las la-envelope"/> Mail</a>
              </FooterItemSocials>
            </FooterSocials>
          </FooterColumn>
        
          <FooterColumnPosts>
            <FooterColumnTitle>Recent Articles</FooterColumnTitle>
            {recentPosts.map((post, i) => (
              <FooterItem key={i}>
                <FooterItemLink href={`articles/${post.slug}`} passHref><a title={post.title}>{post.title}</a></FooterItemLink>
              </FooterItem>
              ))}
          </FooterColumnPosts>

          <FooterColumn>
            <FooterColumnTitle>RSS Feeds</FooterColumnTitle>
              <FooterItem>
                <a href="/feed.xml" title="All content Feed"><FooterIcons className="las la-rss"/> All content</a>
              </FooterItem>
              <FooterItem>
                <a href="/articles/feed.xml" title="Articles Feed"><FooterIcons className="las la-rss"/> Articles</a>
              </FooterItem>
              <FooterItem>
                <a href="/notes/feed.xml" title="Notes Feed"><FooterIcons className="las la-rss"/> Notes</a>
              </FooterItem>
              <FooterItem>
                <a href="/links/feed.xml" title="Links Feed"><FooterIcons className="las la-rss"/> Links</a>
              </FooterItem>
          </FooterColumn>

          <FooterColumn>
            <FooterColumnTitle>Good Stuff</FooterColumnTitle>
            {footerItems.map((item, i) => (
              <FooterItem key={i}>
                <FooterItemLink href={item.link} passHref><a title={item.name}>{item.name}</a></FooterItemLink>
              </FooterItem>
              ))}
          </FooterColumn>






        </FooterColumnWrapper> 

        <FooterNotice>
          2018–{format(new Date(), "yyyy")} <Link href="/">
            <a title={config.siteTitle}>{config.siteTitle}</a>
          </Link>
          <span> • </span>
          <Link href="/privacy-policy"> 
            <FooterLink title="Privacy Policy">Privacy Policy</FooterLink>
          </Link>
          <span> • </span>
          <Link href="/site-notice">
            <FooterLink title="Site Notice">Site Notice</FooterLink>
          </Link>
          <span> • </span>
          Made with <a href="https://nextjs.org/" title="Next.js">Next.js</a> and <a href="https://strapi.io/" title="Strapi">Strapi</a>.</FooterNotice>
      </FooterInnerContainer>
    </FooterContainer>
  )
}

