import Head from 'next/head';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const StyledContactSection = styled.section`
  background-color: ${(props) => props.theme.colors.primary1};
  background-image: url('/bg-pattern-contact-2.svg');
  background-repeat: no-repeat;
  background-position: calc(100% + 100px) calc(100% + 100px);
  padding-bottom: 88px;
  padding-top: 20px;

  @media (min-width: 768px) {
    background-image: url('/bg-pattern-about-2-contact-1.svg'),
      url('/bg-pattern-contact-2.svg');
    background-repeat: no-repeat;
    background-position: calc(0% - 100px) calc(0% + 35px),
      calc(100% + 100px) 100%;
    padding-top: 40px;
  }

  @media (min-width: 1080px) {
    padding-bottom: 120px;
    padding-top: 120px;
  }
`;

const StyledContactContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  text-align: center;

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1080px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 80%;
    max-width: 1110px;
  }
`;

const StyledContactTopContentContainer = styled.div`
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const StyledContactPageHeading = styled.div`
  h1 {
    font-size: 2.5rem;
    color: white;

    @media (min-width: 768px) {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }
  }
  h2 {
    font-size: 32px;
    color: ${(props) => props.theme.colors.primary2};
    margin-bottom: 40px;

    @media (min-width: 768px) {
      margin-bottom: 64px;
    }
    @media (min-width: 1080px) {
      margin-bottom: 32px;
    }
  }

  @media (min-width: 1080px) {
    text-align: left;
  }
`;

const StyledAskAboutContainer = styled.div`
  margin-bottom: 56px;

  @media (min-width: 768px) {
    margin-bottom: unset;
  }
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
          <StyledContactTopContentContainer>
            <StyledContactPageHeading>
              <h1>Contact</h1>
              <h2>Ask us about</h2>
            </StyledContactPageHeading>
            <StyledAskAboutContainer>
              <StyledAskAboutItem>
                <img src="/icon-person.svg" alt="" />
                <p>The Quality of our talent network</p>
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
          </StyledContactTopContentContainer>
          <ContactForm />
        </StyledContactContentWrapper>
      </StyledContactSection>
      <Footer />
    </>
  );
}
