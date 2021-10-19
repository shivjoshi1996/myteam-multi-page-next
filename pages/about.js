import Head from 'next/head';
import AboutHero from '../components/AboutHero';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ContactDisclaimer from '../components/ContactDisclaimer';
import DirectorsSection from '../components/DirectorsSection';

export default function About() {
  return (
    <>
      <Head>
        <title>myteam multi page about page</title>
        <meta name="description" content="A website built using NextJS" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navigation />
      <AboutHero />
      <DirectorsSection />
      <ClientsSection />
      <ContactDisclaimer />
      <Footer />
    </>
  );
}
