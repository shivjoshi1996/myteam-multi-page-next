import Head from 'next/head';
import ContactDisclaimer from '../components/ContactDisclaimer';
import DistributedTeamsSection from '../components/DistributedTeamsSection';
import Footer from '../components/Footer';
import HomepageHero from '../components/HomepageHero';
import Navigation from '../components/Navigation';
import SuccessStoriesSection from '../components/SuccessStoriesSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>myteam multi page website</title>
        <meta name="description" content="A website built using NextJS" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navigation />
      <HomepageHero />
      <DistributedTeamsSection />
      <SuccessStoriesSection />
      <ContactDisclaimer />
      <Footer />
    </>
  );
}
