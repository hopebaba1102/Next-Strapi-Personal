import { FaTwitter, FaInstagram, FaReddit } from 'react-icons/fa';
import styled from 'styled-components';
import config from "@/lib/data/SiteConfig";


const SyndList = styled.ol`
  font-family: var(--secondary-font);
  list-style: none;
  padding-inline-start: 0;
  text-align: right;
  display: inline-block;
`

const SyndItem = styled.a`
    cursor: pointer;
    margin-right: 0.25rem;
`


export default function SyndicationLinks({syndicationLinks}) {

    const getEndpoint = (name) => {
        if (name == "twitter") {
            return <FaTwitter/> 
        } else if (name == "instagram") {
            return <FaInstagram/> 
        } else if (name == "reddit") {
          return <FaReddit/> 
      }
    }

    return (
        <SyndList className="syndications">
            {syndicationLinks? 
              syndicationLinks.map((link) => {
                return (
                <li>
                  <SyndItem 
                    aria-label={link.name} 
                    title={`See this post on ${link.name}`} 
                    className="u-syndication syndication" 
                    href={link.slug} 
                    rel="syndication no-follow" 
                  >
                    {getEndpoint(link.name)}
                  </SyndItem>
                </li>
                )         
            })  : null }
        </SyndList> 
    )
}
