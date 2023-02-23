import Footer from '@/Components/Footer/Footer'
import Intro from '@/Components/Sections/Intro/Intro'
import SocialMedia from '@/Components/Sections/Social/SocialMedia'
import About from '@/Components/Sections/about/About'
import Contact from '@/Components/Sections/contact/Contact'
import Portfolio from '@/Components/Sections/portfolio/Portfolio'
import Pricing from '@/Components/Sections/pricing/Pricing'
import Reasons from '@/Components/Sections/reason/Reasons'
import Services from '@/Components/Sections/services/Services'
import Topbar from '@/Components/Topbar/Topbar'
import Whatsapp from '@/Components/Whatsapp/Whatsapp'
import Head from 'next/head'


export default function Home() {

  return (
    <>
      <Head>
        <title>Web Design & Development Agency Beirut, Lebanon | onBeirut</title>
        <meta name="description" content={`OnBeirut is the lowest pricing Lebanon-based web development agency, experienced in building
        sites for small-medium businesses, We get you to success.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/obiconv3.JPG" />
        <meta httpEquiv="content-language" content="en"/>
  <meta charSet="UTF-8"/>
  <meta name="keywords" content="web development, agency,onbeirut, lebanon, beirut,websites,small business,Sales, web desgin, SEO"/>
  <meta name="page-topic" content="Web Development"/>
  <meta name="page-type" content="Web Development"/>
  <meta name="audience" content="Everyone"/>
  <meta name="robots" content="index, follow"/>
  <meta property="og:site_name" content="OnBeirut"/>
      </Head>
      <Topbar/>
      <main className='relative'>
    <Whatsapp/>
      <Intro/>
      <SocialMedia/>
      <About/>
      <Services/>
      <Reasons/>
      <Portfolio/>
      <Pricing/>
      <Contact/>
      <Footer/>
    
      </main>
    </>
  )
}
