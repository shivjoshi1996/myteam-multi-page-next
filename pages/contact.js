import Head from 'next/head';
import styled from 'styled-components';
import ContactDisclaimer from '../components/ContactDisclaimer';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const StyledContactSection = styled.section`
  background-color: ${(props) => props.theme.colors.primary1};
  background-image: url('/bg-pattern-contact-2.svg');
  background-repeat: no-repeat;
  background-position: calc(100% + 100px) calc(100% + 100px);
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

const StyledContactPageHeading = styled.div`
  h1 {
    margin-bottom: 16px;
  }
  h2 {
    margin-bottom: 40px;
  }
`;

const StyledAskAboutContainer = styled.div`
  margin-bottom: 56px;
`;

const StyledAskAboutItem = styled.div`
  display: flex;
  gap: 23px;
  align-items: center;
  text-align: left;
  margin-bottom: 24px;

  p {
    color: white;
    font-weight: bold;
    line-height: 28px;
    font-size: 18px;
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
          <StyledContactPageHeading>
            <h1>Contact</h1>
            <h2>Ask us about</h2>
          </StyledContactPageHeading>
          <StyledAskAboutContainer>
            <StyledAskAboutItem>
              <img src="/icon-person.svg" alt="" />
              <p>The Quality of our talent</p>
            </StyledAskAboutItem>
            <StyledAskAboutItem>
              <img src="/icon-cog.svg" alt="" />
              <p>Usage & implementation of our software</p>
            </StyledAskAboutItem>
            <StyledAskAboutItem>
              <img src="/icon-chart.svg" alt="" />
              <p>How we help drive innovation</p>
            </StyledAskAboutItem>
          </StyledAskAboutContainer>
          <ContactForm />
        </StyledContactContentWrapper>
      </StyledContactSection>
      <Footer />
    </>
  );
}
