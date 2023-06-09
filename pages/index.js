import Head from 'next/head'
import dynamic from 'next/dynamic'

import Layout from '@/components/Layout.jsx'

const Team = dynamic(() => import('@/components/Team/Team.jsx'))
const Hero = dynamic(() => import('@/components/Hero.jsx'))
const Player = dynamic(() => import('@/components/Player/Player.jsx'))
const About = dynamic(() => import('@/components/About.jsx'))
const Features = dynamic(() => import('@/components/Features.jsx'))
const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials.jsx'))
const FaqSection = dynamic(() => import('@/components/FaqSection.jsx'))
const Highlights = dynamic(() => import('@/components/Highlights/Highlights.jsx'))
const Featurette = dynamic(() => import('@/components/Featurette.jsx'))

import { fetchTestimonials } from '@/util/fetchTestimonials'
import { fetchMainPage } from '@/util/fetchMainPage'
import { fetchQuestions } from '@/util/fetchQuestions'
import { fetchSiteSettings } from '@/util/fetchSiteSettings'
import { fetchTutors } from '@/util/fetchTutors'

export default function Home({ tutorsData, testimonialsData, mainPageData, questionsData, siteSettings }) {

  return (
    <>
      <Head>
        <title>James Taplin Music</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Hero mainPageData={mainPageData} />
          <Player mainPageData={mainPageData} />
          <About mainPageData={mainPageData} />
          <Features />
          <Featurette />
          <Highlights />
          <Team tutors={tutorsData} />
          <Testimonials testimonials={testimonialsData} />
          <FaqSection questionsData={questionsData} />
        </main>
      </Layout>


    </>
  )
}

export const getStaticProps = async () => {
  try {
    const mainPageRes = await fetchMainPage();
    const siteSettingsRes = await fetchSiteSettings();
    const testimonialsRes = await fetchTestimonials();
    const questionsRes = await fetchQuestions();
    const tutorsRes = await fetchTutors();
    return {
      props: {
        mainPageData: mainPageRes.mainPageInfo,
        testimonialsData: testimonialsRes.testimonials,
        questionsData: questionsRes.questions,
        siteSettings: siteSettingsRes.siteSettings,
        tutorsData: tutorsRes.tutors
      },
      revalidate: 10
    }
  } catch (err) {
    return { props: {} }
  }
}
