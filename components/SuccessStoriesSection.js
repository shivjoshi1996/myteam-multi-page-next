import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const StyledSuccessStoriesSection = styled.section`
  background-color: ${(props) => props.theme.colors.secondary3};
  background-image: url('/bg-pattern-home-4-about-3.svg'),
    url('/bg-pattern-home-5.svg');
  background-position: top left, bottom right;
  background-repeat: no-repeat no-repeat;
  padding-top: 8.75rem;
  padding-bottom: 10.25rem;

  @media (min-width: 48rem) {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
  }

  @media (min-width: 67.5rem) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  h2 {
    color: ${(props) => props.theme.colors.primary3};
    text-align: center;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3rem;

    @media (min-width: 48rem) {
      width: 60%;
      margin-bottom: 3rem;
    }

    @media (min-width: 67.5rem) {
      max-width: 58.25rem;
    }

    span {
      color: ${(props) => props.theme.colors.secondary1};
    }
  }
`;

const StyledSuccessStoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 48rem) {
    width: 70%;
  }

  @media (min-width: 67.5rem) {
    flex-direction: row;
    gap: 30px;
    max-width: 1110px;
  }
`;

const StyledSuccessStory = styled.div`
  color: ${(props) => props.theme.colors.primary3};
  background-image: url('/icon-quotes.svg');
  background-repeat: no-repeat;
  background-position: top center;
  opacity: 0;

  h3 {
    color: ${(props) => props.theme.colors.secondary1};
    margin-bottom: 0.3125rem;
  }

  img {
    height: 62px;
    width: 62px;
    border: 2px solid #c4fffe;
    border-radius: 100px;
  }
`;

const StyledSuccessStoryDescription = styled.p`
  margin-bottom: 1rem;
  padding-top: 2.25rem;
  font-size: 0.9375rem;
  line-height: 25px;
`;

const StyledSuccessStoryJobTitle = styled.p`
  font-style: italic;
  font-size: 0.8125rem;
  margin-bottom: 1rem;
`;

export default function SuccessStoriesSection() {
  const storyRef = useRef();
  const q = gsap.utils.selector(storyRef);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.section',
          start: '50% bottom',
        },
      })
      .to(q('.story'), {
        opacity: 1,
        stagger: 0.3,
      });
  }, []);

  return (
    <StyledSuccessStoriesSection ref={storyRef} className="section">
      <h2>
        Delivering real results for top companies. Some of our
        <span> success stories.</span>
      </h2>
      <StyledSuccessStoriesContainer>
        <StyledSuccessStory className="story">
          <StyledSuccessStoryDescription>
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </StyledSuccessStoryDescription>
          <h3>Kady Baker</h3>
          <StyledSuccessStoryJobTitle>
            Product Manager at Bookmark
          </StyledSuccessStoryJobTitle>
          <img src="/avatar-kady.jpg" alt="" />
        </StyledSuccessStory>
        <StyledSuccessStory className="story">
          <StyledSuccessStoryDescription>
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </StyledSuccessStoryDescription>
          <h3>Aiysha Reese</h3>
          <StyledSuccessStoryJobTitle>
            Founder of Manage
          </StyledSuccessStoryJobTitle>
          <img src="/avatar-aiysha.jpg" alt="" />
        </StyledSuccessStory>
        <StyledSuccessStory className="story">
          <StyledSuccessStoryDescription>
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </StyledSuccessStoryDescription>
          <h3>Arthur Clarke</h3>
          <StyledSuccessStoryJobTitle>
            Co-founder of MyPhysio
          </StyledSuccessStoryJobTitle>
          <img src="/avatar-arthur.jpg" alt="" />
        </StyledSuccessStory>
      </StyledSuccessStoriesContainer>
    </StyledSuccessStoriesSection>
  );
}
