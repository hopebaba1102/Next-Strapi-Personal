
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Layout from '@/components/layout/layout'
import SEO from '@/components/seo/seo'
import Title from '@/components/title/page-title'
import Link from 'next/link'

export default function AboutMe() {
  return (
  <>
    <SEO   
      title="About Max Dietrich"
      slug="about"
    />
    <Layout>
      <Header/>
      <Title>About</Title>
      
      <h2>About me</h2>
      <h2>About this site</h2>

      <Footer />
    </Layout>
  </>
  )
}