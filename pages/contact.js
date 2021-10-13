import Head from 'next/head';
import styled from 'styled-components';
import ContactDisclaimer from '../components/ContactDisclaimer';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const StyledContactSection = styled.section`
  background-color: ${(props) => props.theme.colors.primary1};
`;

const StyledContactContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  text-align: center;
  padding-bottom: 88px;
  padding-top: 20px;

  h1,
  h2 {
    font-weight: bold;
  }

  h1 {
    font-size: 2.5rem;
    color: white;
  }

  h2 {
    font-size: 32px;
    color: ${(props) => props.theme.colors.primary2};
  }
`;

export default function Contact() {
  return (
    <>
      <Head>
        <title>myteam multi page contact page</title>
        <meta name="description" content="A website built using NextJS" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navigation />
      <StyledContactSection>
        <StyledContactContentWrapper>
          <h1>Contact</h1>
          <h2>Ask us about</h2>
          <ContactForm />
        </StyledContactContentWrapper>
      </StyledContactSection>
      <ContactDisclaimer />
      <Footer />
    </>
  );
}
