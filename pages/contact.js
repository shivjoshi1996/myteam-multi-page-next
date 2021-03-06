import Head from 'next/head';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const StyledContactSection = styled.section`
  background-color: ${(props) => props.theme.colors.primary1};
  background-image: url('/bg-pattern-contact-2.svg');
  background-repeat: no-repeat;
  background-position: calc(100% + 100px) calc(100% + 100px);
  padding-bottom: 5.5rem;
  padding-top: 1.25rem;

  @media (min-width: 48rem) {
    background-image: url('/bg-pattern-about-2-contact-1.svg'),
      url('/bg-pattern-contact-2.svg');
    background-repeat: no-repeat;
    background-position: calc(0% - 100px) calc(0% + 35px),
      calc(100% + 100px) 100%;
    padding-top: 2.5rem;
  }

  @media (min-width: 67.5rem) {
    padding-bottom: 7.5rem;
    padding-top: 7.5rem;
  }
`;

const StyledContactContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 48rem) {
    width: 70%;
  }
  @media (min-width: 67.5rem) {
    display: flex;
    justify-content: center;
    gap: 1.875rem;
    width: 80%;
    max-width: 1110px;
  }
`;

const StyledContactTopContentContainer = styled.div`
  overflow: hidden;
  margin-bottom: 4rem;
  @media (min-width: 48rem) {
    width: 100%;
    margin-bottom: unset;
  }
`;

const StyledContactPageHeading = styled.div`
  h1 {
    color: white;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(-200px);

    @media (min-width: 48rem) {
      margin-bottom: 1.5rem;
    }
  }
  h2 {
    color: ${(props) => props.theme.colors.primary2};
    margin-bottom: 2.5rem;
    opacity: 0;

    @media (min-width: 48rem) {
      margin-bottom: 4rem;
    }
    @media (min-width: 1080px) {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1080px) {
    text-align: left;
  }
`;

const StyledAskAboutContainer = styled.div`
  margin-bottom: 3.5rem;

  @media (min-width: 48rem) {
    margin-bottom: unset;
  }
`;

const StyledAskAboutItem = styled.div`
  display: flex;
  gap: 1.4375rem;
  align-items: center;
  text-align: left;
  margin-bottom: 1.5rem;
  opacity: 0;

  p {
    color: white;
    font-weight: bold;
    line-height: 28px;
    font-size: 1.125rem;
  }
`;

export default function Contact() {
  const contactRef = useRef();
  const q = gsap.utils.selector(contactRef);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(q('.heading'), {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        y: 0,
      })
      .to(q('.subheading'), {
        opacity: 1,
        duration: 0.3,
      })
      .to(q('.ask-about-item'), {
        opacity: 1,
        stagger: 0.3,
      })
      .to(q('.contact-form'), {
        opacity: 1,
      });
  }, []);

  return (
    <>
      <Head>
        <title>myteam multi page contact page</title>
        <meta name="description" content="A website built using NextJS" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navigation />
      <StyledContactSection>
        <StyledContactContentWrapper ref={contactRef}>
          <StyledContactTopContentContainer>
            <StyledContactPageHeading>
              <h1 className="heading">Contact</h1>
              <h2 className="subheading">Ask us about</h2>
            </StyledContactPageHeading>
            <StyledAskAboutContainer>
              <StyledAskAboutItem className="ask-about-item">
                <img src="/icon-person.svg" alt="" />
                <p>The Quality of our talent network</p>
              </StyledAskAboutItem>
              <StyledAskAboutItem className="ask-about-item">
                <img src="/icon-cog.svg" alt="" />
                <p>Usage & implementation of our software</p>
              </StyledAskAboutItem>
              <StyledAskAboutItem className="ask-about-item">
                <img src="/icon-chart.svg" alt="" />
                <p>How we help drive innovation</p>
              </StyledAskAboutItem>
            </StyledAskAboutContainer>
          </StyledContactTopContentContainer>
          <ContactForm clasSName="contact-form" />
        </StyledContactContentWrapper>
      </StyledContactSection>
      <Footer />
    </>
  );
}
