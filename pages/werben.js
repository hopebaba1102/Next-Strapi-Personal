
import Layout from '@/components/layout/layout'
import Head from 'next/head'
import config from "../data/SiteConfig";
import styled from 'styled-components';
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Link from 'next/link'
import SEO from '@/components/seo/seo'
import { useRouter } from 'next/router'
import media from 'styled-media-query';

const JobsAdvertiseWrapper = styled.div`
  text-align:center;
  background-color: var(--primary-color);
`

const JobsAdvertiseTitle = styled.p`
  margin: 0 auto var(--space) auto;
  max-width: 1200px;
  color: #fff;
  padding: var(--space);
  font-size: 4rem;
  font-family: var(--secondary-font);
  font-weight: 200;
  letter-spacing: -1px;
`

const JobAdvertiseButton = styled.button`
  margin: var(--space-lg) auto calc(var(--space-lg)*2) auto;  
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

const BenefitsWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  ${media.greaterThan('small')`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
`

const Benefit = styled.div`
  margin: var(--space-lg) auto var(--space-lg) auto;
  text-align: center;
`

const BenefitIcon = styled.span`
  display: block;
`

const BenefitDescription = styled.span`
  display: block;
`

const PossibilityWrapper = styled.div`
  max-width: 1200px;
  margin: var(--space) auto var(--space) auto;
  text-align: center;
  ${media.greaterThan('small')`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
`

const Possibility = styled.div`
  margin: auto;
  height: 400px;
  border: 1px solid var(--gray-light);
`

const PossibilityTitle = styled.h3`
  font-size: 3rem;
  font-weight: 200;
  margin: var(--space);

`

const PossibilityDescription = styled.ul`
  max-width: 67%;
  margin: auto;

`

const PossibilityChecklistItem = styled.li`
  text-align: left;

`

export default function Recruiting({ }) {
  const router = useRouter()

  const handleSubmit = () => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title: "testjasdasdob",
        jobDescription: "JobDescription",
        workingTime: "Vollzeit",
        contractType: "unbefristet",
        slug: slugify(`testjob`),
        vacationDays: 30,
        workingHours: 38,
        salary: "4000",
        location: "München",
        applicationLink: "max.dietrich@gis-netzwerk.com",
        status: "draft",
        premium: false,
        company: {
          name: "TestCompany",
          logo: 236,
          size: "120",
          websiteUrl: "https://api.gis-netzwerk.com"
        },
        date: "2020-09-13",

      })
    };
    fetch('https://api.gis-netzwerk.com/jobs', requestOptions)
      .then(function(response) {
        if (!response.ok) {
          console.log(response.statusText);
        } else {
          console.log("success")
        }
        }).catch(function(error) {
            console.log(error);
        });
  }

  return (
    <>
      <Layout>
        <Header link="/"/>
        {router.isFallback ? (
            <PageTitle>{config.loading}</PageTitle>
          ) : (
            
          <>
            <SEO   
              title="Stellenanzeige aufgeben"
              slug="https://gis-netzwerk.com/jobs/stellenanzeige-aufgeben"
            />

            {/* Get Attention */}
            <JobsAdvertiseWrapper>
              <JobsAdvertiseTitle>
                Nutzen Sie die Reichweite von GIS-Netzwerk
              </JobsAdvertiseTitle>
              
            </JobsAdvertiseWrapper>

            {/* Benefits */}
            <BenefitsWrapper>
              <Benefit>
                <BenefitIcon>🌍</BenefitIcon>
                <BenefitDescription>
                  Eine der meistbesuchten GIS/Geoinformatik Websiten in D/A/CH
                </BenefitDescription>
              </Benefit>
              <Benefit>
                <BenefitIcon>💳</BenefitIcon>
                <BenefitDescription>
                  Kostenfreie Möglichkeiten
                </BenefitDescription>
              </Benefit>
              <Benefit>
                <BenefitIcon>🌍</BenefitIcon>
                <BenefitDescription>
                  Eine der meistbesuchten GIS/Geoinformatik Websiten in D/A/CH
                </BenefitDescription>
              </Benefit>
            </BenefitsWrapper>

            {/* Possiblities */}
            <PossibilityWrapper>

              <Possibility>
                <PossibilityTitle>Native Advertising</PossibilityTitle>
                <PossibilityDescription>
                  <PossibilityChecklistItem>Von GIS-Netzwerk erstellter Content über Ihr Produkt in Form eines Blogposts</PossibilityChecklistItem>

                </PossibilityDescription>
              </Possibility>

              <Possibility>
                <PossibilityTitle>Stellenanzeige</PossibilityTitle>
                <PossibilityDescription>
                  <PossibilityChecklistItem>Kostenfrei</PossibilityChecklistItem>
                  <PossibilityChecklistItem>30 Tage Laufzeit</PossibilityChecklistItem>
                  <PossibilityChecklistItem>Inkl. Qualitätsprüfung</PossibilityChecklistItem>
                  <PossibilityChecklistItem>Einfache Bezahlung per Rechnung</PossibilityChecklistItem>
                  <PossibilityChecklistItem>Wählen Sie Ihre passende Lösung: Starter oder Premium</PossibilityChecklistItem>
                </PossibilityDescription>
                <JobAdvertiseButton
                  type="button"
                  aria-label="Abonnieren"
                  onClick={() => handleSubmit()}
                >
                Stellenanzeige aufgeben
                </JobAdvertiseButton>
              </Possibility>

              <Possibility>
                <PossibilityTitle>Advertorials</PossibilityTitle>
              </Possibility>

            </PossibilityWrapper>
          </>
        )}
        <Footer />
      </Layout>
    </>
  )
}

