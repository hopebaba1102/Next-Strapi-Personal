import MoreJobs from '@/components/job/job-preview/more-jobs'
import Layout from '@/components/layout/layout'
import PageTitle from '@/components/title/page-title'
import { getAllJobsForJobboard } from '@/lib/api'
import Head from 'next/head'
import config from "../data/SiteConfig";
import styled from 'styled-components';
import Header from '@/components/header/headerNav'
import Footer from '@/components/footer/footer'
import SEO from '@/components/seo/seo'
import { useRouter } from 'next/router'

const JobsPageContainer = styled.div`
  margin: auto;
  max-width: 1200px;
`
const JobsAdvertiseWrapper = styled.div`
  width: 100%;
  height: 350px;
  text-align:center;
`

const JobsAdvertiseTitle = styled.p`
  border-top: 3px solid var(--primary-color);
  margin: var(--space-lg) auto var(--space) auto;
  max-width: 1200px;
  color: var(--primary-color);
  padding-top: var(--space);
  font-size: 5rem;
  font-family: var(--secondary-font);
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -1px;
`

const JobAdvertiseButton = styled.button`
  margin: var(--space) auto var(--space-lg) auto;  
  padding: var(--space);  
  border-radius: var(--space-sm);
  border: none;
  background-color: var(--primary-color);
  border: 1px solid var(--gray-light);
  color: #fff;
  font-size: 2rem;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: var(--primary-color);
  }


`


export default function Index({ allJobs }) {
  const router = useRouter()
  
  return (
    <>
      <Layout>
        <Header section="Jobbörse" link="/jobs"/>
        {router.isFallback ? (
          <PageTitle>{config.loading}</PageTitle>
        ) : (
          
          <>
            <SEO   
              title="Jobbörse"
              description="Jobbörse für Geoinformatik und GIS-Jobs"
              slug="https://gis-netzwerk.com/jobs"
            />
            <JobsPageContainer >
                <PageTitle>Jobbörse</PageTitle>
                <MoreJobs jobs={allJobs} />
            </JobsPageContainer>
            {/*<JobsAdvertiseWrapper>
              <JobsAdvertiseTitle>
                Besetzen Sie freie Stellen mit GIS-Experten
              </JobsAdvertiseTitle>
              <JobAdvertiseButton>
                Stellenanzeige aufgeben
              </JobAdvertiseButton>
            </JobsAdvertiseWrapper>*/}
          </>
        )}
        <Footer />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allJobs = (await getAllJobsForJobboard()) || []
  return {
    props: { allJobs },
  }
}
