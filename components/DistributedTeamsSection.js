import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const StyledDistributedSection = styled.section`
  background-color: ${(props) => props.theme.colors.secondary4};
  background-image: url('/bg-pattern-home-3.svg');
  background-repeat: no-repeat;
  background-position: left calc(100% + 100px) top 0px;
  padding-bottom: 4.1875rem;
  padding-top: 6.25rem;

  @media (min-width: 48rem) {
    padding-bottom: 6.25rem;
  }

  @media (min-width: 67.5rem) {
    background-position: left calc(100% + 100px) top 100%;
    padding: 12.375rem 0rem 8.75rem 0rem;
  }
`;

const StyledDistributedWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1110px;

  @media (min-width: 48rem) {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 67.5rem) {
    display: flex;
    gap: 125px;
  }
`;

const StyledDistributedHeading = styled.div`
  width: 65%;
  margin-bottom: 3.5rem;
  h2 {
    color: ${(props) => props.theme.colors.primary3};
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: -32px;
      width: 50px;
      height: 4px;
      background-color: #f67e7e;

      @media (min-width: 67.5rem) {
        top: -54px;
      }
    }
  }

  @media (min-width: 48rem) {
    width: 70%;
    margin-bottom: 4rem;
  }
`;

const StyledDistributedListContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 48px;

  @media (min-width: 48rem) {
    text-align: left;
  }
`;

const StyledDistributedListItem = styled.div`
  opacity: 0;
  @media (min-width: 48rem) {
    display: grid;
    grid-template-columns: 72px 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'icon title'
      'icon description';
    align-items: center;
    grid-row-gap: 16px;
    grid-column-gap: 23px;
  }

  img {
    margin-bottom: 1rem;
    grid-area: icon;

    @media (min-width: 48rem) {
      margin-bottom: unset;
    }
  }

  h3 {
    color: ${(props) => props.theme.colors.primary2};
    margin-bottom: 1rem;
    grid-area: title;

    @media (min-width: 48rem) {
      margin-bottom: unset;
    }
  }

  p {
    color: ${(props) => props.theme.colors.primary3};
    opacity: 0.8;
    line-height: 25px;
    grid-area: description;
  }
`;

export default function DistributedTeamsSection() {
  const distributedTeamsRef = useRef();
  const q = gsap.utils.selector(distributedTeamsRef);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.wrapper',
          start: '40% bottom ',
        },
      })
      .to(q('.item'), {
        opacity: 1,
        stagger: 0.3,
      });
  }, []);

  return (
    <StyledDistributedSection ref={distributedTeamsRef}>
      <StyledDistributedWrapper className="wrapper">
        <StyledDistributedHeading>
          <h2>Build & manage distributed teams like no one else.</h2>
        </StyledDistributedHeading>
        <StyledDistributedListContainer>
          <StyledDistributedListItem className="item">
            <img src="/icon-person.svg" alt="" />
            <h3>Experienced Individuals</h3>
            <p>
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </p>
          </StyledDistributedListItem>
          <StyledDistributedListItem className="item">
            <img src="/icon-cog.svg" alt="" />
            <h3>Easy to Implement</h3>
            <p>
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </p>
          </StyledDistributedListItem>
          <StyledDistributedListItem className="item">
            <img src="/icon-chart.svg" alt="" />
            <h3>Enhanced Productivity</h3>
            <p>
              Our customized platform with in-built analytics helps you manage
              your distributed teams.
            </p>
          </StyledDistributedListItem>
        </StyledDistributedListContainer>
      </StyledDistributedWrapper>
    </StyledDistributedSection>
  );
}
